"use client";

import { WorkExDTO } from "@/types/type";
import WorkCard from "./work-ex-card";
import { motion } from "motion/react";

type Props = {
  experiences: WorkExDTO[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <section id="work-ex" className="scroll-mt-24">
      <motion.h2
        className="section-heading text-2xl md:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="gradient-text-subtle">Work Experience</span>
      </motion.h2>
      <motion.p
        className="text-foreground/50 mb-10 text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        My professional journey so far
      </motion.p>

      <div className="relative pl-10">
        {/* Timeline vertical line */}
        <motion.div
          className="timeline-line"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "top" }}
        />

        <div className="space-y-8">
          {experiences.map((work, i) => (
            <WorkCard key={i} index={i} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
}
