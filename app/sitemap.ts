import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { getBlogs, getCaseStudies } from "@/lib/data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [blogs, caseStudies] = await Promise.all([getBlogs(), getCaseStudies()]);

  const staticRoutes = [
    "",
    "/work",
    "/blog",
    "/faq",
    "/contact",
    "/welcome-to-osa",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const blogRoutes = blogs.map((b) => ({
    url: `${SITE_URL}/blog/${b.slug}`,
    lastModified: new Date(b.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseRoutes = caseStudies.map((c) => ({
    url: `${SITE_URL}/case-studies/${c.slug}`,
    lastModified: new Date(c.completedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...blogRoutes, ...caseRoutes];
}
