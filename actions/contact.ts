"use server";

import { z } from "zod";
import { connectDB } from "@/lib/mongodb";
import { Lead } from "@/models/Lead";
import { Resend } from "resend";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") || undefined,
    phone: formData.get("phone") || undefined,
    service: formData.get("service") || undefined,
    budget: formData.get("budget") || undefined,
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data = parsed.data;

  try {
    if (process.env.MONGODB_URI) {
      await connectDB();
      await Lead.create(data);
    }

    if (process.env.RESEND_API_KEY && process.env.CONTACT_EMAIL) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM ?? "Onesoftauto <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL,
        subject: `New inquiry from ${data.name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
          ${data.service ? `<p><strong>Service:</strong> ${data.service}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      });
    }

    return { success: true };
  } catch {
    return { error: "Failed to submit. Please try again later." };
  }
}
