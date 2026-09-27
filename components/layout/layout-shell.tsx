"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SiteEffects } from "@/components/v2/site-effects";

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const isQr = pathname === "/welcome-to-osa" || pathname === "/qr";

  if (isAdmin) {
    return <div className="admin-app dark">{children}</div>;
  }

  if (isQr) {
    return (
      <>
        <SiteEffects />
        {children}
      </>
    );
  }

  return (
    <>
      <SiteEffects />
      <Navbar />
      <main className="wrap" id="top">
        {children}
      </main>
      <Footer />
    </>
  );
}
