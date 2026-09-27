import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlBlock } from "@/components/v2/html-block";
import { ContactCTA } from "@/components/home/contact-cta";
import { postHtml as aiShopping } from "@/components/v2/html/post_ai_shopping_assistants_that_actually_convert";
import { postHtml as pte } from "@/components/v2/html/post_building_an_ai_powered_pte_practice_platform";
import { postHtml as toddlers } from "@/components/v2/html/post_designing_playful_learning_apps_for_toddlers";
import { postHtml as ecommerce } from "@/components/v2/html/post_ecommerce_for_local_markets_priyos_shop";
import { postHtml as tracking } from "@/components/v2/html/post_employee_time_tracking_that_remote_teams_trust";

const POSTS: Record<string, { title: string; html: string }> = {
  "ai-shopping-assistants-that-actually-convert": {
    title: "AI Shopping Assistants That Actually Convert",
    html: aiShopping,
  },
  "building-an-ai-powered-pte-practice-platform": {
    title: "Building an AI-Powered PTE Practice Platform",
    html: pte,
  },
  "designing-playful-learning-apps-for-toddlers": {
    title: "Designing Playful Learning Apps for Toddlers",
    html: toddlers,
  },
  "ecommerce-for-local-markets-priyos-shop": {
    title: "E-commerce for Local Markets: Priyos Shop",
    html: ecommerce,
  },
  "employee-time-tracking-that-remote-teams-trust": {
    title: "Employee Time Tracking That Remote Teams Trust",
    html: tracking,
  },
};

export function generateStaticParams() {
  return Object.keys(POSTS).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = POSTS[slug];
  if (!p) return {};
  return { title: p.title };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = POSTS[slug];
  if (!p) notFound();
  return (
    <>
      <HtmlBlock html={p.html} />
      <ContactCTA />
    </>
  );
}
