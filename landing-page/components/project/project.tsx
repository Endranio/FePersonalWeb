"use client";

import { api } from "@/lib/api";
import { ProjectDTO } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "./project-card";
import ProjectSkeleton from "@/components/skeleton/project-skeleton";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Project() {
  const { data, isPending } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      const res = await api.get("/projects");
      return res.data;
    },
  });

  return (
    <section id="project" className="scroll-mt-24">
      <h2 className="section-heading text-2xl md:text-3xl font-bold mb-4">
        <span className="gradient-text-subtle">Projects</span>
      </h2>
      <p className="text-foreground/50 mb-12 text-base">
        Some things I&apos;ve built recently
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {isPending
          ? Array.from({ length: 4 }).map((_, i) => (
            <ProjectSkeleton key={i} />
          ))
          : data.map((project: ProjectDTO, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
      </div>

      {/* CTA Section */}
      <div id="contact" className="mt-24 mb-12 relative scroll-mt-24">
        <div className="glass-card rounded-3xl p-10 lg:p-14 text-center relative overflow-hidden">
          {/* Decorative gradient blob */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-gradient-to-br from-teal-500/10 to-cyan-500/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-gradient-to-br from-cyan-500/10 to-sky-500/10 blur-3xl" />

          <div className="relative z-10">
            <h3 className="font-bold text-2xl lg:text-3xl mb-4">
              Let&apos;s build something{" "}
              <span className="gradient-text">together</span>
            </h3>
            <p className="text-foreground/50 max-w-lg mx-auto mb-8 text-base">
              Feel free to reach out if you&apos;re looking for a developer,
              have a question, or just want to connect.
            </p>
            <Button
              className="bg-green-600 text-white hover:bg-green-500 rounded-full px-8 py-5 text-base cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
              asChild
            >
              <a href="https://wa.me/62895326440809" target="_blank">
                <FaWhatsapp className="mr-2 text-lg" />
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
