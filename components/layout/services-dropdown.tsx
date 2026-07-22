"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { SERVICE_NAV_ITEMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type ServicesDropdownProps = {
  onNavigate?: () => void;
  onOpenChange?: (open: boolean) => void;
};

export function ServicesDropdown({ onNavigate, onOpenChange }: ServicesDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

  const setMenuOpen = useCallback(
    (value: boolean) => {
      setOpen(value);
      onOpenChange?.(value);
    },
    [onOpenChange]
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setMenuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname, setMenuOpen]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
    >
      <button
        type="button"
        onClick={() => setMenuOpen(!open)}
        aria-expanded={open}
        aria-haspopup="true"
        className={cn(
          "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors relative",
          isServicesActive
            ? "text-primary"
            : "text-muted-foreground hover:text-foreground"
        )}
      >
        Services
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
        />
        {isServicesActive && (
          <motion.div
            layoutId="nav-indicator"
            className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
          />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-full z-50 w-[min(100vw-2rem,42rem)] -translate-x-1/2 pt-2"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-popover text-popover-foreground shadow-xl shadow-black/10 dark:shadow-black/40">
              <div className="grid gap-0 p-2 sm:grid-cols-2">
                {SERVICE_NAV_ITEMS.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    onClick={onNavigate}
                    className="group flex flex-col gap-0.5 rounded-xl px-4 py-3 transition-colors hover:bg-accent"
                  >
                    <span className="text-sm font-medium transition-colors group-hover:text-primary">
                      {item.title}
                    </span>
                    <span className="line-clamp-1 text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
              <div className="border-t border-border bg-muted/40 px-4 py-3">
                <Link
                  href="/services"
                  onClick={onNavigate}
                  className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  View all services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServicesMobileSection({ onNavigate }: { onNavigate?: () => void }) {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const isServicesActive = pathname.startsWith("/services");

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className={cn(
          "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium",
          isServicesActive
            ? "bg-primary/10 text-primary"
            : "text-muted-foreground"
        )}
      >
        Services
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", expanded && "rotate-180")}
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pl-2 pr-2 pb-2 flex flex-col gap-0.5">
              {SERVICE_NAV_ITEMS.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  onClick={onNavigate}
                  className="px-4 py-2.5 rounded-lg text-sm text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href="/services"
                onClick={onNavigate}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-primary"
              >
                View all services →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
