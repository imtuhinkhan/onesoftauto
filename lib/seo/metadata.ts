import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site-settings";
import { SITE_URL } from "@/lib/constants";
import type { SiteSettings } from "@/types";

export function buildRootMetadata(settings: SiteSettings): Metadata {
  const description = settings.metaDescription;
  const ogImage = settings.ogImage
    ? absoluteUrl(settings.ogImage)
    : undefined;
  const ogTitle = settings.ogTitle || settings.metaTitle || settings.siteName;
  const ogDescription = settings.ogDescription || description;

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: settings.metaTitle,
      template: `%s | ${settings.siteName}`,
    },
    description,
    keywords: settings.metaKeywords,
    authors: [{ name: settings.siteName, url: SITE_URL }],
    creator: settings.siteName,
    publisher: settings.siteName,
    formatDetection: { email: false, address: false, telephone: false },
    openGraph: {
      type: settings.ogType as "website",
      locale: settings.ogLocale,
      url: SITE_URL,
      siteName: settings.siteName,
      title: ogTitle,
      description: ogDescription,
      ...(ogImage
        ? {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: `${settings.siteName} — ${settings.tagline}`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: settings.twitterCard as "summary" | "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      ...(settings.twitterSite ? { site: settings.twitterSite } : {}),
      ...(settings.twitterCreator ? { creator: settings.twitterCreator } : {}),
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    robots: settings.robotsIndex
      ? { index: true, follow: true, googleBot: { index: true, follow: true } }
      : { index: false, follow: false },
    alternates: { canonical: SITE_URL },
    icons: {
      icon: [
        { url: settings.favicon, type: "image/png" },
        { url: "/favicon.ico", type: "image/x-icon" },
      ],
      shortcut: settings.favicon,
      apple: settings.appleTouchIcon || settings.favicon,
    },
    other: {
      ...(settings.linkedinUrl
        ? { "linkedin:page": settings.linkedinUrl }
        : {}),
    },
  };
}

export type PageSeoInput = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
};

export type ArticleSeoInput = PageSeoInput & {
  author?: string;
  publishedAt?: Date | string;
  tags?: string[];
  category?: string;
};

export function buildPageMetadata(
  settings: SiteSettings,
  page: PageSeoInput
): Metadata {
  const description = page.description ?? settings.metaDescription;
  const canonical = page.path ? absoluteUrl(page.path) : SITE_URL;
  const image = page.image
    ? absoluteUrl(page.image)
    : settings.ogImage
      ? absoluteUrl(settings.ogImage)
      : undefined;
  const pageTitle = `${page.title} | ${settings.siteName}`;

  return {
    title: page.title,
    description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: settings.ogLocale,
      url: canonical,
      siteName: settings.siteName,
      title: pageTitle,
      description,
      ...(image ? { images: [{ url: image, width: 1200, height: 630, alt: page.title }] } : {}),
    },
    twitter: {
      card: settings.twitterCard as "summary" | "summary_large_image",
      title: pageTitle,
      description,
      ...(settings.twitterSite ? { site: settings.twitterSite } : {}),
      ...(settings.twitterCreator ? { creator: settings.twitterCreator } : {}),
      ...(image ? { images: [image] } : {}),
    },
    robots: page.noIndex
      ? { index: false, follow: false }
      : settings.robotsIndex
        ? { index: true, follow: true }
        : { index: false, follow: false },
    other: settings.linkedinUrl
      ? { "linkedin:page": settings.linkedinUrl }
      : undefined,
  };
}

export function buildArticleMetadata(
  settings: SiteSettings,
  article: ArticleSeoInput
): Metadata {
  const base = buildPageMetadata(settings, article);
  const publishedTime = article.publishedAt
    ? new Date(article.publishedAt).toISOString()
    : undefined;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      ...(publishedTime ? { publishedTime } : {}),
      ...(article.author ? { authors: [article.author] } : {}),
      ...(article.tags?.length ? { tags: article.tags } : {}),
      ...(article.category ? { section: article.category } : {}),
    },
  };
}
