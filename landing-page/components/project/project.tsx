"use client";

import { ProjectDTO } from "@/types/type";
import ProjectCard from "./project-card";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

type Props = {
  projects: ProjectDTO[];
};

export default function Project({ projects }: Props) {
  return (
    <section id="project" className="scroll-mt-24">
      <motion.h2
        className="section-heading text-2xl md:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="gradient-text-subtle">Projects</span>
      </motion.h2>
      <motion.p
        className="text-foreground/50 mb-12 text-base"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        Some things I&apos;ve built recently
      </motion.p>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        id="contact"
        className="mt-24 mb-12 relative scroll-mt-24"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="glass-card rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
          {/* Decorative gradient blob */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-cyan-500/10 to-sky-500/10 blur-3xl" />

          <div className="relative z-10">
            <motion.h3
              className="font-bold text-2xl lg:text-3xl mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              Let&apos;s build something{" "}
              <span className="gradient-text">together</span>
            </motion.h3>
            <motion.p
              className="text-foreground/50 max-w-lg mx-auto mb-8 text-base"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              Feel free to reach out if you&apos;re looking for a developer,
              have a question, or just want to connect.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button
                className="bg-green-600 text-white hover:bg-green-500 rounded-full px-8 py-5 text-base cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
                asChild
              >
                <a href="https://wa.me/62895326440809" target="_blank">
                  <FaWhatsapp className="mr-2 text-lg" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
