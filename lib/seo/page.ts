import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/site-settings";
import { buildPageMetadata, type PageSeoInput } from "@/lib/seo/metadata";

export async function getPageMetadata(input: PageSeoInput): Promise<Metadata> {
  const settings = await getSiteSettings();
  return buildPageMetadata(settings, input);
}
