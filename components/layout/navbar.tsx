"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { ServicesDropdown, ServicesMobileSection } from "@/components/layout/services-dropdown";
import { SiteLogo } from "@/components/layout/site-logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = (href: string) =>
    cn(
      "px-4 py-2 rounded-lg text-sm font-medium transition-colors relative",
      pathname === href
        ? "text-primary"
        : "text-muted-foreground hover:text-foreground"
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        servicesMenuOpen
          ? "bg-transparent py-5"
          : scrolled
            ? "glass shadow-lg py-3"
            : "bg-transparent py-5"
      )}
    >
      <nav className="container-custom flex items-center justify-between">
        <SiteLogo href="/" size="sm" className="hover:opacity-90 transition-opacity" />

        <div className="hidden lg:flex items-center gap-1">
          <Link href="/" className={navLinkClass("/")}>
            Home
            {pathname === "/" && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
              />
            )}
          </Link>
          <ServicesDropdown onOpenChange={setServicesMenuOpen} />
          {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass(link.href)}>
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Button variant="gradient" size="default" asChild>
            <Link href="/contact">
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border/50 mt-2"
          >
            <div className="container-custom py-4 flex flex-col gap-2">
              <Link
                href="/"
                onClick={closeMobile}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium",
                  pathname === "/" ? "bg-primary/10 text-primary" : "text-muted-foreground"
                )}
              >
                Home
              </Link>
              <ServicesMobileSection onNavigate={closeMobile} />
              {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium",
                    pathname === link.href
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="gradient" className="mt-2" asChild>
                <Link href="/contact" onClick={closeMobile}>
                  Book a Call
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
