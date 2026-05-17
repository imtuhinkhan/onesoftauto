import { Mail, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE_EMAIL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Onesoftauto. Book a call or send us a message.",
};

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

export default function ContactPage() {
  return (
    <>
      <section className="relative section-padding page-hero-offset overflow-hidden">
        <GradientBlob />
        <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
          <Badge variant="gradient" className="mb-4">Contact</Badge>
          <h1 className="font-display text-4xl sm:text-5xl font-bold">
            Let&apos;s Start Your <span className="gradient-text">Next Project</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Book a free consultation or send us a message — we respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container-custom grid lg:grid-cols-2 gap-12">
          <Card className="glass border-border/50">
            <CardContent className="p-8">
              <h2 className="font-display text-2xl font-bold mb-6">Send a Message</h2>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: SITE_EMAIL },
              { icon: MapPin, label: "Office", value: "Dhaka, Bangladesh" },
              { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm BST" },
            ].map((item) => (
              <Card key={item.label} className="glass border-border/50">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {calendlyUrl && (
              <Card className="glass border-border/50 overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-b border-border/50">
                    <h3 className="font-semibold">Book a Meeting</h3>
                    <p className="text-sm text-muted-foreground mt-1">Schedule a free 30-min consultation</p>
                  </div>
                  <iframe
                    src={calendlyUrl}
                    className="w-full h-[500px] border-0"
                    title="Schedule a meeting"
                  />
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

    </>
  );
}
