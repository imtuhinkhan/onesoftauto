import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlBlock } from "@/components/v2/html-block";
import { ContactCTA } from "@/components/home/contact-cta";
import { caseHtml as priyos } from "@/components/v2/html/case_priyos_shop";
import { caseHtml as englishence } from "@/components/v2/html/case_englishence";
import { caseHtml as moochatai } from "@/components/v2/html/case_moochatai";
import { caseHtml as clokwork } from "@/components/v2/html/case_clokwork";
import { caseHtml as colorNShape } from "@/components/v2/html/case_color_n_shape";

const CASES: Record<string, { title: string; html: string }> = {
  "priyos-shop": { title: "Priyos Shop", html: priyos },
  englishence: { title: "Englishence", html: englishence },
  moochatai: { title: "MooChatAI", html: moochatai },
  clokwork: { title: "Clokwork", html: clokwork },
  "color-n-shape": { title: "Color N Shape", html: colorNShape },
};

export function generateStaticParams() {
  return Object.keys(CASES).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) return {};
  return { title: c.title };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = CASES[slug];
  if (!c) notFound();
  return (
    <>
      <HtmlBlock html={c.html} />
      <ContactCTA />
    </>
  );
}
