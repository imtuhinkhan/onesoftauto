"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientBlob } from "@/components/shared/gradient-blob";

const HeroIllustration = dynamic(
  () => import("@/components/home/hero-illustration").then((m) => m.HeroIllustration),
  {
    ssr: false,
    loading: () => <div className="relative hidden lg:block aspect-square w-full max-w-lg mx-auto" />,
  }
);

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-4 lg:pb-6">
      <GradientBlob />
      <div className="container-custom px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight">
              We Build <span className="gradient-text">Digital Products</span> That Transform Businesses
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              From stunning websites to AI-powered SaaS platforms — we craft premium software experiences that drive growth and measurable ROI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="gradient" size="lg" asChild>
                <Link href="/contact">Book a Call <ArrowRight className="h-5 w-5" /></Link>
              </Button>
              <Button variant="glass" size="lg" asChild>
                <Link href="/services"><Play className="h-4 w-4" /> View Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
