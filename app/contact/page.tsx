import { Mail, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBlob } from "@/components/shared/gradient-blob";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE_EMAIL } from "@/lib/constants";
import { getPageMetadata } from "@/lib/seo/page";

export async function generateMetadata() {
  return getPageMetadata({
    title: "Contact",
    description: "Get in touch with us. Book a call or send us a message.",
    path: "/contact",
  });
}

const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

const contactItems = [
  { icon: Mail, label: "Email", value: SITE_EMAIL },
  { icon: MapPin, label: "Office", value: "Dhaka, Bangladesh" },
  { icon: Clock, label: "Hours", value: "Mon–Fri, 9am–6pm BST" },
] as const;

function OrDivider({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 h-full min-h-[120px] py-4" aria-hidden>
        <span className="flex-1 w-px bg-border/80" />
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-3 py-1.5 rounded-full border border-border/60 bg-card/50 shrink-0">
          Or
        </span>
        <span className="flex-1 w-px bg-border/80" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-4 py-2" aria-hidden>
      <span className="flex-1 h-px bg-border/80" />
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground px-3 py-1.5 rounded-full border border-border/60 bg-card/50 shrink-0">
        Or
      </span>
      <span className="flex-1 h-px bg-border/80" />
    </div>
  );
}

function ContactInfoBlock() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="font-display text-xl sm:text-2xl font-bold text-center mb-6">
        Contact Information
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {contactItems.map((item) => (
          <Card key={item.label} className="glass border-border/50">
            <CardContent className="p-5 flex flex-col items-center text-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                <p className="font-medium text-sm mt-1">{item.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function CallCard() {
  if (!calendlyUrl) return null;
  return (
    <Card className="glass border-border/50 overflow-hidden h-full">
      <CardContent className="p-0 flex flex-col h-full">
        <div className="p-5 sm:p-6 border-b border-border/50">
          <h2 className="font-display text-xl sm:text-2xl font-bold">Make a Call</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Schedule a free 30-minute consultation
          </p>
        </div>
        <iframe
          src={calendlyUrl}
          className="w-full flex-1 min-h-[420px] lg:min-h-[500px] border-0"
          title="Schedule a meeting"
        />
      </CardContent>
    </Card>
  );
}

function MessageCard() {
  return (
    <Card className="glass border-border/50 h-full">
      <CardContent className="p-5 sm:p-6 h-full flex flex-col">
        <h2 className="font-display text-xl sm:text-2xl font-bold mb-5">Send a Message</h2>
        <ContactForm />
      </CardContent>
    </Card>
  );
}

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
        <div className="container-custom max-w-7xl space-y-10 lg:space-y-12">
          {calendlyUrl ? (
            <>
              {/* Contact info — middle of the section (desktop) */}
              <div className="hidden lg:block py-8 border-y border-border/40">
                <ContactInfoBlock />
              </div>

              {/* Desktop: Make a Call (50%) | OR | Send a Message (50%) */}
              <div className="hidden lg:flex lg:gap-6 lg:items-stretch">
                <div className="flex-1 min-w-0">
                  <CallCard />
                </div>
                <div className="shrink-0 w-10">
                  <OrDivider vertical />
                </div>
                <div className="flex-1 min-w-0">
                  <MessageCard />
                </div>
              </div>

              {/* Mobile: Call → OR → Contact → OR → Message */}
              <div className="flex flex-col gap-8 lg:hidden">
                <CallCard />
                <OrDivider />
                <ContactInfoBlock />
                <OrDivider />
                <MessageCard />
              </div>
            </>
          ) : (
            <div className="max-w-xl mx-auto space-y-10">
              <div className="py-8 border-y border-border/40">
                <ContactInfoBlock />
              </div>
              <MessageCard />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
