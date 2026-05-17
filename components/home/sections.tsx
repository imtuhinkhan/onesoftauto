"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { getServiceIcon } from "@/lib/service-icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MotionDiv } from "@/components/motion/motion-wrapper";
import { processSteps, faqs } from "@/lib/data/seed";
import React from "react";
import type { Service, CaseStudy, Testimonial } from "@/types";

export function ServicesPreview({ services }: { services: Service[] }) {
  return (
    <section className="home-section">
      <motion.div className="container-custom">
        <MotionDiv className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <Badge variant="gradient" className="mb-4">
            Our Services
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Solutions Built for Growth
          </h2>
          <p className="mt-4 text-muted-foreground">
            End-to-end digital services from strategy to launch and beyond.
          </p>
        </MotionDiv>
        <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
          {services.slice(0, 8).map((service, i) => {
            const Icon = getServiceIcon(service.icon);
            return (
              <MotionDiv key={service.slug} delay={i * 0.05}>
                <Link href={`/services/${service.slug}`}>
                  <Card className="group h-full glass hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border-border/50">
                    <CardContent className="p-6">
                      <motion.div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </MotionDiv>
            );
          })}
        </motion.div>
        <motion.div className="text-center mt-10 lg:mt-12">
          <Button variant="gradient" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export function PortfolioPreview({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const featured = caseStudies.filter((c) => c.featured).slice(0, 3);
  return (
    <section className="home-section">
      <motion.div className="container-custom">
        <MotionDiv className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-10 lg:mb-12">
          <motion.div>
            <Badge variant="gradient" className="mb-4">
              Portfolio
            </Badge>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Featured Work</h2>
          </motion.div>
          <Button variant="outline" asChild>
            <Link href="/case-studies">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </MotionDiv>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((study, i) => (
            <MotionDiv key={study.slug} delay={i * 0.1}>
              <Link href={`/case-studies/${study.slug}`} className="group block">
                <Card className="overflow-hidden border-border/50 glass hover:shadow-2xl transition-all duration-500">
                  <motion.div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={study.coverImage}
                      alt={study.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4">{study.category}</Badge>
                  </motion.div>
                  <CardContent className="p-6">
                    <p className="text-sm text-primary font-medium">{study.client}</p>
                    <h3 className="font-semibold text-xl mt-1 group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {study.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </MotionDiv>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = React.useState(0);
  const t = testimonials[index];
  if (!t) return null;
  return (
    <section className="home-section home-section-alt">
      <motion.div className="container-custom max-w-4xl text-center">
        <Badge variant="gradient" className="mb-6">
          Testimonials
        </Badge>
        <MotionDiv>
          <blockquote className="text-xl sm:text-2xl font-medium leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <motion.div className="mt-8 flex items-center justify-center gap-4">
            {t.avatar && (
              <Image src={t.avatar} alt={t.author} width={48} height={48} className="rounded-full" />
            )}
            <motion.div className="text-left">
              <p className="font-semibold">{t.author}</p>
              <p className="text-sm text-muted-foreground">
                {t.role}, {t.company}
              </p>
            </motion.div>
          </motion.div>
          <motion.div className="flex justify-center gap-2 mt-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
            >
              <ChevronLeft />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
            >
              <ChevronRight />
            </Button>
          </motion.div>
        </MotionDiv>
      </motion.div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="home-section">
      <motion.div className="container-custom">
        <MotionDiv className="text-center max-w-2xl mx-auto mb-12 lg:mb-14">
          <Badge variant="gradient" className="mb-4">
            Our Process
          </Badge>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">How We Deliver Excellence</h2>
        </MotionDiv>
        <motion.div className="grid md:grid-cols-5 gap-5 lg:gap-6">
          {processSteps.map((step, i) => (
            <MotionDiv key={step.title} delay={i * 0.1}>
              <motion.div className="relative text-center p-6 rounded-2xl glass border border-border/50 h-full">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm mb-4">
                  {i + 1}
                </span>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </motion.div>
            </MotionDiv>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="home-section home-section-alt">
      <motion.div className="container-custom max-w-3xl">
        <MotionDiv className="text-center mb-10 lg:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </MotionDiv>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="home-section pb-6 lg:pb-8">
      <motion.div className="container-custom">
        <motion.div className="relative rounded-3xl overflow-hidden p-10 lg:p-14 text-center">
          <motion.div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
          <motion.div className="absolute inset-0 bg-black/20" />
          <MotionDiv className="relative z-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ready to Build Something Extraordinary?
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Let&apos;s discuss your project and create a roadmap to success.
            </p>
            <motion.div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-white/90" asChild>
                <Link href="/contact">Book a Free Consultation</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/case-studies">View Our Work</Link>
              </Button>
            </motion.div>
          </MotionDiv>
        </motion.div>
      </motion.div>
    </section>
  );
}
