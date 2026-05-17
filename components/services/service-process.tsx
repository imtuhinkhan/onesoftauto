"use client";

import { motion } from "framer-motion";
import { Route } from "lucide-react";

type ProcessStep = { title: string; description: string };

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ServiceProcess({ process }: { process: ProcessStep[] }) {
  return (
    <section className="section-padding section-padding-tight-top bg-card/30 border-y border-border/40">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
            <Route className="h-3.5 w-3.5 text-primary" />
            Methodology
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold">
            Our <span className="gradient-text">Process</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            A proven path from kickoff to launch — transparent, collaborative, and built for momentum.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-[19px] sm:left-6 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-purple-500/50 to-pink-500/30 hidden sm:block"
            aria-hidden
          />

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-0"
          >
            {process.map((step, index) => (
              <motion.li key={step.title} variants={item} className="relative">
                <motion.div
                  className="flex gap-5 sm:gap-8 pb-10 last:pb-0"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div className="relative z-10 flex flex-col items-center shrink-0">
                    <span className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-pink-500 text-sm sm:text-base font-bold text-white shadow-lg shadow-indigo-500/30 ring-4 ring-background">
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex-1 pt-0.5 sm:pt-1.5 pb-2">
                    <div className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur-sm p-5 sm:p-6 shadow-sm transition-shadow hover:shadow-md hover:border-primary/30">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-display text-lg sm:text-xl font-semibold">
                          {step.title}
                        </h3>
                        <span className="text-[10px] font-medium uppercase tracking-widest text-primary/80 bg-primary/10 px-2 py-0.5 rounded-full">
                          Step {index + 1}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
