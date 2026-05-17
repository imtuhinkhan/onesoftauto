"use client";

import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CheckboxField, FieldError, FormSection } from "@/components/admin/form-fields";
import type { ActionState } from "@/lib/admin/action-state";
import { initialActionState } from "@/lib/admin/action-state";
import type { SiteSettings } from "@/types";

type SettingsFormProps = {
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
  settings: SiteSettings;
};

export function SettingsForm({ action, settings }: SettingsFormProps) {
  const [state, formAction, pending] = useActionState(action, initialActionState);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("saved") === "1") {
      toast.success("Site settings saved");
    }
  }, [searchParams]);

  useEffect(() => {
    if (state.error) toast.error(state.error);
  }, [state.error]);

  return (
    <Card className="glass border-border/50 max-w-3xl">
      <CardContent className="p-6">
        <form action={formAction} className="space-y-8">
          <FormSection title="General">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="siteName">Site name *</Label>
                <Input id="siteName" name="siteName" defaultValue={settings.siteName} required />
                <FieldError errors={state.fieldErrors?.siteName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input id="tagline" name="tagline" defaultValue={settings.tagline} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Contact email</Label>
                <Input id="email" name="email" type="email" defaultValue={settings.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" defaultValue={settings.phone} />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" name="address" defaultValue={settings.address} />
              </div>
            </div>
          </FormSection>

          <FormSection title="Branding">
            <p className="text-xs text-muted-foreground -mt-2 mb-2">
              Use paths like /logo/logo-dark.png or full https:// URLs.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="logoDark">Logo (light mode) *</Label>
                <Input id="logoDark" name="logoDark" defaultValue={settings.logoDark} required />
                <FieldError errors={state.fieldErrors?.logoDark} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="logoWhite">Logo (dark mode) *</Label>
                <Input id="logoWhite" name="logoWhite" defaultValue={settings.logoWhite} required />
                <FieldError errors={state.fieldErrors?.logoWhite} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="favicon">Favicon *</Label>
                <Input id="favicon" name="favicon" defaultValue={settings.favicon} required />
                <FieldError errors={state.fieldErrors?.favicon} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="appleTouchIcon">Apple touch icon</Label>
                <Input id="appleTouchIcon" name="appleTouchIcon" defaultValue={settings.appleTouchIcon} />
              </div>
            </div>
          </FormSection>

          <FormSection title="SEO & meta tags">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="metaTitle">Default meta title *</Label>
                <Input id="metaTitle" name="metaTitle" defaultValue={settings.metaTitle} required />
                <FieldError errors={state.fieldErrors?.metaTitle} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metaDescription">Meta description *</Label>
                <Textarea id="metaDescription" name="metaDescription" rows={3} defaultValue={settings.metaDescription} required />
                <FieldError errors={state.fieldErrors?.metaDescription} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="metaKeywords">Meta keywords (comma-separated)</Label>
                <Input id="metaKeywords" name="metaKeywords" defaultValue={settings.metaKeywords?.join(", ")} />
              </div>
              <CheckboxField id="robotsIndex" name="robotsIndex" label="Allow search engines to index the site" defaultChecked={settings.robotsIndex} />
            </div>
          </FormSection>

          <FormSection title="Open Graph (Facebook, LinkedIn, etc.)">
            <p className="text-xs text-muted-foreground -mt-2 mb-2">
              LinkedIn uses these Open Graph tags for link previews. Recommended image: 1200×630px.
            </p>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="ogTitle">OG title</Label>
                <Input id="ogTitle" name="ogTitle" defaultValue={settings.ogTitle} placeholder={settings.siteName} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ogDescription">OG description</Label>
                <Textarea id="ogDescription" name="ogDescription" rows={2} defaultValue={settings.ogDescription} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="ogImage">OG image URL</Label>
                <Input id="ogImage" name="ogImage" type="url" defaultValue={settings.ogImage} placeholder="https://..." />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="ogType">OG type</Label>
                  <Input id="ogType" name="ogType" defaultValue={settings.ogType} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ogLocale">OG locale</Label>
                  <Input id="ogLocale" name="ogLocale" defaultValue={settings.ogLocale} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedinUrl">LinkedIn company / page URL</Label>
                <Input id="linkedinUrl" name="linkedinUrl" type="url" defaultValue={settings.linkedinUrl} placeholder="https://linkedin.com/company/..." />
              </div>
            </div>
          </FormSection>

          <FormSection title="Twitter / X">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="twitterCard">Twitter card type</Label>
                <select
                  id="twitterCard"
                  name="twitterCard"
                  defaultValue={settings.twitterCard}
                  className="flex h-10 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="summary_large_image">Summary large image</option>
                  <option value="summary">Summary</option>
                </select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="twitterSite">Twitter site (@handle)</Label>
                <Input id="twitterSite" name="twitterSite" defaultValue={settings.twitterSite} placeholder="@onesoftauto" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="twitterCreator">Twitter creator (@handle)</Label>
                <Input id="twitterCreator" name="twitterCreator" defaultValue={settings.twitterCreator} />
              </div>
            </div>
          </FormSection>

          <Button type="submit" variant="gradient" disabled={pending}>
            {pending ? "Saving..." : "Save settings"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
