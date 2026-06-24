import type { Metadata } from "next";
import { getSiteSettings } from "@/lib/site-settings";
import {
  buildPageMetadata,
  buildArticleMetadata,
  type PageSeoInput,
  type ArticleSeoInput,
} from "@/lib/seo/metadata";

export async function getPageMetadata(input: PageSeoInput): Promise<Metadata> {
  const settings = await getSiteSettings();
  return buildPageMetadata(settings, input);
}

export async function getArticleMetadata(input: ArticleSeoInput): Promise<Metadata> {
  const settings = await getSiteSettings();
  return buildArticleMetadata(settings, input);
}
