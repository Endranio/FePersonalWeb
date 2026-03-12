"use client";

import { WorkExDTO } from "@/types/type";
import { motion } from "motion/react";

type Props = WorkExDTO & { index?: number };

export default function WorkCard({ index = 0, ...work }: Props) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Timeline dot */}
      <motion.div
        className="timeline-dot"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.4,
          delay: index * 0.15 + 0.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      />

      {/* Card */}
      <div className="glass-card rounded-2xl p-8 ml-6">
        <div className="sm:flex sm:justify-between sm:items-start gap-6">
          <div className="flex items-start gap-5">
            {/* Company Logo */}
            <div className="shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-white dark:bg-white/10 p-2 flex items-center justify-center shadow-sm">
              <img
                src={work.image}
                width={48}
                height={48}
                alt={work.company}
                className="object-contain w-full h-full"
              />
            </div>

            <div>
              <h3 className="font-bold text-xl lg:text-2xl">{work.position}</h3>
              <p className="text-teal-600 dark:text-teal-400 font-medium text-sm mt-0.5">
                {work.company}
              </p>
            </div>
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-foreground/5 text-foreground/50 mt-3 sm:mt-0 shrink-0">
            {work.startDate} — {work.endDate}
          </span>
        </div>

        {/* Job descriptions */}
        <ul className="mt-5 space-y-2 text-foreground/70 text-[15px]">
          {work.jobdesk.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {work.tech.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 border border-teal-200/50 dark:border-teal-700/30"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
