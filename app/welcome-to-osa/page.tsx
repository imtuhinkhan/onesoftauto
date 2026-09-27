import type { Metadata } from "next";
import { HtmlBlock } from "@/components/v2/html-block";
import { qrMainHtml } from "@/components/v2/html/qr_main";
import { QrEffects } from "@/components/v2/qr-effects";

export const metadata: Metadata = {
  title: "Welcome to Onesoftauto",
  description: "WhatsApp, email and recent work from Onesoftauto.",
};

export default function WelcomeToOsaPage() {
  return (
    <div className="qr-page">
      <QrEffects />
      <HtmlBlock html={qrMainHtml} />
    </div>
  );
}
