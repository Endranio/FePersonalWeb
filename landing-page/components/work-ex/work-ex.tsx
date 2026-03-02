"use client";

import { WorkExDTO } from "@/types/type";
import WorkCard from "./work-ex-card";
import { api } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import WorkCardSkeleton from "@/components/skeleton/experience-skeleton";

export default function WorkExperience() {
  const { data, isLoading } = useQuery({
    queryKey: ["work-ex"],
    queryFn: async () => {
      const res = await api.get("/experience");
      return res.data;
    },
  });

  return (
    <section id="work-ex" className="scroll-mt-24">
      <h2 className="section-heading text-2xl md:text-3xl font-bold mb-4">
        <span className="gradient-text-subtle">Work Experience</span>
      </h2>
      <p className="text-foreground/50 mb-10 text-base">
        My professional journey so far
      </p>

      <div className="relative pl-10">
        {/* Timeline vertical line */}
        <div className="timeline-line" />

        <div className="space-y-8">
          {isLoading
            ? Array.from({ length: 2 }).map((_, i) => (
              <WorkCardSkeleton key={i} />
            ))
            : data.map((work: WorkExDTO, i: number) => (
              <WorkCard key={i} {...work} />
            ))}
        </div>
      </div>
    </section>
  );
}
