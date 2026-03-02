"use client";

import { api } from "@/lib/api";
import TechCard from "./tech-card";
import type { TechStack } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import TechSkeleton from "@/components/skeleton/tech-skeleton";

export default function TechStack() {
  const { data: techList, isPending } = useQuery<TechStack[]>({
    queryKey: ["techs"],
    queryFn: async () => {
      const res = await api.get("/techs");
      return res.data;
    },
  });

  return (
    <section id="tech-stack" className="scroll-mt-24">
      <h2 className="section-heading text-2xl md:text-3xl font-bold mb-4">
        <span className="gradient-text-subtle">Tech Stack</span>
      </h2>
      <p className="text-foreground/50 mb-10 text-base">
        Tools & technologies I work with every day
      </p>

      {isPending ? <TechSkeleton /> : <TechCard techList={techList} />}
    </section>
  );
}
