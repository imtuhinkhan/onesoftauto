"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { Settings } from "@/models/Settings";
import { connectDB } from "@/lib/mongodb";
import { requireAdmin } from "@/lib/admin/auth";
import { checkboxValue, commaToArray, parseJsonField } from "@/lib/admin/parse";
import type { ActionState } from "@/lib/admin/action-state";

const settingsSchema = z.object({
  siteName: z.string().min(1, "Site name is required"),
  tagline: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().optional(),
  address: z.string().optional(),
  calendlyUrl: z.string().optional(),
  logoDark: z.string().min(1, "Logo (light mode) is required"),
  logoWhite: z.string().min(1, "Logo (dark mode) is required"),
  favicon: z.string().min(1, "Favicon URL is required"),
  appleTouchIcon: z.string().optional(),
  metaTitle: z.string().min(1, "Meta title is required"),
  metaDescription: z.string().min(1, "Meta description is required"),
  metaKeywords: z.string().optional(),
  ogTitle: z.string().optional(),
  ogDescription: z.string().optional(),
  ogImage: z.string().optional(),
  ogType: z.string().optional(),
  ogLocale: z.string().optional(),
  twitterCard: z.enum(["summary", "summary_large_image"]),
  twitterSite: z.string().optional(),
  twitterCreator: z.string().optional(),
  linkedinUrl: z.string().optional(),
  robotsIndex: z.boolean(),
  heroEyebrow: z.string().optional(),
  heroHeadline: z.string().optional(),
  heroHeadlineAccent: z.string().optional(),
  heroSubcopy: z.string().optional(),
  aboutLead: z.string().optional(),
  aboutLeadEm: z.string().optional(),
  aboutPointsJson: z.string().optional(),
  processSubcopy: z.string().optional(),
  contactHeadline: z.string().optional(),
  contactSubcopy: z.string().optional(),
  whatsappUrl: z.string().optional(),
});

function parseSettingsForm(formData: FormData) {
  return settingsSchema.safeParse({
    siteName: formData.get("siteName"),
    tagline: String(formData.get("tagline") ?? ""),
    email: String(formData.get("email") ?? ""),
    phone: String(formData.get("phone") ?? ""),
    address: String(formData.get("address") ?? ""),
    calendlyUrl: String(formData.get("calendlyUrl") ?? ""),
    logoDark: formData.get("logoDark"),
    logoWhite: formData.get("logoWhite"),
    favicon: formData.get("favicon"),
    appleTouchIcon: String(formData.get("appleTouchIcon") ?? ""),
    metaTitle: formData.get("metaTitle"),
    metaDescription: formData.get("metaDescription"),
    metaKeywords: formData.get("metaKeywords"),
    ogTitle: String(formData.get("ogTitle") ?? ""),
    ogDescription: String(formData.get("ogDescription") ?? ""),
    ogImage: String(formData.get("ogImage") ?? ""),
    ogType: String(formData.get("ogType") ?? "website"),
    ogLocale: String(formData.get("ogLocale") ?? "en_US"),
    twitterCard: formData.get("twitterCard") ?? "summary_large_image",
    twitterSite: String(formData.get("twitterSite") ?? ""),
    twitterCreator: String(formData.get("twitterCreator") ?? ""),
    linkedinUrl: String(formData.get("linkedinUrl") ?? ""),
    robotsIndex: checkboxValue(formData.get("robotsIndex")),
    heroEyebrow: String(formData.get("heroEyebrow") ?? ""),
    heroHeadline: String(formData.get("heroHeadline") ?? ""),
    heroHeadlineAccent: String(formData.get("heroHeadlineAccent") ?? ""),
    heroSubcopy: String(formData.get("heroSubcopy") ?? ""),
    aboutLead: String(formData.get("aboutLead") ?? ""),
    aboutLeadEm: String(formData.get("aboutLeadEm") ?? ""),
    aboutPointsJson: String(formData.get("aboutPointsJson") ?? ""),
    processSubcopy: String(formData.get("processSubcopy") ?? ""),
    contactHeadline: String(formData.get("contactHeadline") ?? ""),
    contactSubcopy: String(formData.get("contactSubcopy") ?? ""),
    whatsappUrl: String(formData.get("whatsappUrl") ?? ""),
  });
}

export async function updateSiteSettings(
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> {
  try {
    await requireAdmin();
    const parsed = parseSettingsForm(formData);
    if (!parsed.success) {
      return {
        fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      };
    }

    const data = parsed.data;
    await connectDB();

    const payload = {
      siteName: data.siteName,
      tagline: data.tagline,
      email: data.email,
      phone: data.phone,
      address: data.address,
      calendlyUrl: data.calendlyUrl,
      logoDark: data.logoDark,
      logoWhite: data.logoWhite,
      favicon: data.favicon,
      appleTouchIcon: data.appleTouchIcon || data.favicon,
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      metaKeywords: commaToArray(data.metaKeywords),
      ogTitle: data.ogTitle,
      ogDescription: data.ogDescription,
      ogImage: data.ogImage,
      ogType: data.ogType,
      ogLocale: data.ogLocale,
      twitterCard: data.twitterCard,
      twitterSite: data.twitterSite,
      twitterCreator: data.twitterCreator,
      linkedinUrl: data.linkedinUrl,
      robotsIndex: data.robotsIndex,
      heroEyebrow: data.heroEyebrow,
      heroHeadline: data.heroHeadline,
      heroHeadlineAccent: data.heroHeadlineAccent,
      heroSubcopy: data.heroSubcopy,
      aboutLead: data.aboutLead,
      aboutLeadEm: data.aboutLeadEm,
      aboutPoints: parseJsonField(
        data.aboutPointsJson,
        [] as { title: string; body: string }[]
      ),
      processSubcopy: data.processSubcopy,
      contactHeadline: data.contactHeadline,
      contactSubcopy: data.contactSubcopy,
      whatsappUrl: data.whatsappUrl,
    };

    await Settings.findOneAndUpdate({}, payload, { upsert: true, new: true });

    revalidatePath("/", "layout");
    revalidatePath("/admin/settings");
    redirect("/admin/settings?saved=1");
  } catch (e) {
    if (e instanceof Error && e.message === "NEXT_REDIRECT") throw e;
    return { error: e instanceof Error ? e.message : "Failed to save settings" };
  }
}
