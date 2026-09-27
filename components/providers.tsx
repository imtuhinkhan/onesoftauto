"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import { SiteSettingsProvider } from "@/lib/site-settings-context";
import type { SiteSettings } from "@/types";

export function Providers({
  children,
  siteSettings,
}: {
  children: React.ReactNode;
  siteSettings: SiteSettings;
}) {
  return (
    <SessionProvider>
      <SiteSettingsProvider settings={siteSettings}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster
            position="top-right"
            richColors
            closeButton
          />
        </ThemeProvider>
      </SiteSettingsProvider>
    </SessionProvider>
  );
}
