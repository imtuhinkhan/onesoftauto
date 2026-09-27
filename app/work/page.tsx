import type { Metadata } from "next";
import { HtmlBlock } from "@/components/v2/html-block";
import { work_mainHtml } from "@/components/v2/html/work_main";
import { ContactCTA } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Commerce, learning, AI and SaaS products designed and built end to end by Onesoftauto.",
};

export default function WorkPage() {
  return (
    <>
      <HtmlBlock html={work_mainHtml} />
      <ContactCTA />
    </>
  );
}
