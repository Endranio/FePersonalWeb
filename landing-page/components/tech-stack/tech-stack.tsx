"use client";

import TechCard from "./tech-card";
import type { TechStack } from "@/types/type";
import { motion } from "motion/react";

type Props = {
  techList: TechStack[];
};

export default function TechStack({ techList }: Props) {
  return (
    <section id="tech-stack" className="scroll-mt-24">
      <motion.h2
        className="section-heading text-2xl md:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="gradient-text-subtle">Tech Stack</span>
      </motion.h2>
      <motion.p
        className="text-foreground/50 mb-10 text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Tools & technologies I work with every day
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <TechCard techList={techList} />
      </motion.div>
    </section>
  );
}
