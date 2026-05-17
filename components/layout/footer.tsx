import Link from "next/link";
import { Share2, Globe, Mail, MapPin, Link2 } from "lucide-react";
import { SITE_NAME, SITE_EMAIL, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { SiteLogo } from "@/components/layout/site-logo";

const iconMap = {
  twitter: Share2,
  linkedin: Link2,
  github: Globe,
  dribbble: Share2,
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container-custom section-padding pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <SiteLogo href="/" size="md" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Premium software agency crafting digital experiences that drive growth and innovation.
            </p>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = iconMap[social.icon as keyof typeof iconMap] ?? Globe;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/web-design-development" className="hover:text-primary">Web Development</Link></li>
              <li><Link href="/services/saas-product-development" className="hover:text-primary">SaaS Products</Link></li>
              <li><Link href="/services/mobile-app-development" className="hover:text-primary">Mobile Apps</Link></li>
              <li><Link href="/services/ai-integrations" className="hover:text-primary">AI Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                {SITE_EMAIL}
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary">Privacy</Link>
            <Link href="#" className="hover:text-primary">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
