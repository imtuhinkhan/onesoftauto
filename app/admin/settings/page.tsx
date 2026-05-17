import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { getSiteSettings } from "@/lib/site-settings";
import { SettingsForm } from "@/components/admin/settings-form";
import { updateSiteSettings } from "@/actions/admin/settings";

export default async function AdminSettingsPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  let settings;
  try {
    settings = await getSiteSettings();
  } catch {
    redirect("/admin/login");
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold">Site settings</h1>
        <p className="text-sm text-muted-foreground mt-1">
          SEO, branding, Open Graph, Twitter, and LinkedIn preview tags.
        </p>
      </div>
      <Suspense fallback={null}>
        <SettingsForm action={updateSiteSettings} settings={settings} />
      </Suspense>
    </div>
  );
}
