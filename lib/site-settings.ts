import { cache } from "react";
import { unstable_cache } from "next/cache";
import { connectDB } from "@/lib/mongodb";
import { Settings as SettingsModel } from "@/models/Settings";
import { SITE_URL } from "@/lib/constants";
import { DEFAULT_SITE_SETTINGS } from "@/lib/site-settings-defaults";
import type { SiteSettings } from "@/types";

export { DEFAULT_SITE_SETTINGS } from "@/lib/site-settings-defaults";

function mergeSettings(doc: Partial<SiteSettings> | null): SiteSettings {
  if (!doc) return { ...DEFAULT_SITE_SETTINGS };
  return {
    ...DEFAULT_SITE_SETTINGS,
    ...doc,
    metaKeywords: doc.metaKeywords?.length
      ? doc.metaKeywords
      : DEFAULT_SITE_SETTINGS.metaKeywords,
    socialLinks: doc.socialLinks ?? DEFAULT_SITE_SETTINGS.socialLinks,
    stats: doc.stats ?? DEFAULT_SITE_SETTINGS.stats,
  };
}

async function fetchSiteSettings(): Promise<SiteSettings> {
  try {
    if (!process.env.MONGODB_URI) return { ...DEFAULT_SITE_SETTINGS };
    await connectDB();
    const doc = await SettingsModel.findOne().lean();
    return mergeSettings(doc as Partial<SiteSettings> | null);
  } catch {
    return { ...DEFAULT_SITE_SETTINGS };
  }
}

const getCachedSiteSettings = unstable_cache(
  fetchSiteSettings,
  ["site-settings"],
  { revalidate: 300 }
);

export const getSiteSettings = cache(getCachedSiteSettings);

export function absoluteUrl(path: string, base = SITE_URL): string {
  if (!path) return base;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const normalizedBase = base.replace(/\/$/, "");
  return `${normalizedBase}${path.startsWith("/") ? path : `/${path}`}`;
}
