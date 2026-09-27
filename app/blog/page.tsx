import type { Metadata } from "next";
import { HtmlBlock } from "@/components/v2/html-block";
import { blog_mainHtml } from "@/components/v2/html/blog_main";
import { ContactCTA } from "@/components/home/contact-cta";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on product, AI, commerce and shipping software from Onesoftauto.",
};

export default function BlogPage() {
  return (
    <>
      <HtmlBlock html={blog_mainHtml} />
      <ContactCTA />
    </>
  );
}
