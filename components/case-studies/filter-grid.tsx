"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CASE_STUDY_CATEGORIES } from "@/lib/constants";
import type { CaseStudy } from "@/types";
import { cn } from "@/lib/utils";

export function CaseStudyFilterGrid({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? caseStudies
      : caseStudies.filter((c) => c.category === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CASE_STUDY_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all",
              filter === cat
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "glass text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((study, i) => (
            <motion.div
              key={study.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/case-studies/${study.slug}`} className="group block">
                <Card className="overflow-hidden glass border-border/50 h-full hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={study.coverImage}
                      alt={study.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={i < 3}
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4">{study.category}</Badge>
                  </div>
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
