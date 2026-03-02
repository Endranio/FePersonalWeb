"use client";

import { Button } from "@/components/ui/button";
import { IoLocationOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { api } from "@/lib/api";
import { ProfileDTO } from "@/types/type";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import HeroSkeleton from "@/components/skeleton/hero-skeleton";

export default function HomePage() {
  const { data, isPending } = useQuery<ProfileDTO>({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await api.get("/profile");
      return res.data;
    },
  });

  if (isPending) {
    return <HeroSkeleton />;
  }

  return (
    <section className="relative min-h-[85vh] flex items-center">
      {/* Animated Background Blobs */}
      <div className="hero-blob -top-20 -left-40 opacity-60" />
      <div
        className="hero-blob -bottom-20 -right-40 opacity-40"
        style={{ animationDelay: "4s" }}
      />

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 text-left items-center w-full relative z-10">
        {/* Profile Image */}
        <div className="shrink-0">
          <div className="profile-ring rounded-2xl">
            <div className="w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl shadow-teal-500/10">
              <img
                src={data?.image}
                width={350}
                height={350}
                alt="Profile"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 flex-1 lg:text-left text-center animate-fade-in-up">
          {/* Available Badge */}
          {data?.available && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/40 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Available for new projects
            </div>
          )}

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="gradient-text">{data?.headers}</span>
          </h1>

          {/* Position */}
          <h2 className="text-xl lg:text-2xl font-semibold text-teal-600 dark:text-teal-400">
            {data?.position}
          </h2>

          {/* Description */}
          <p className="text-foreground/60 leading-relaxed max-w-xl text-base lg:text-lg whitespace-pre-line">
            {data?.description}
          </p>

          {/* Location */}
          <p className="flex items-center gap-2 text-foreground/50 text-sm justify-center lg:justify-start">
            <IoLocationOutline className="text-teal-500" />
            {data?.location}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center lg:justify-start pt-2">
            <Button
              className="bg-green-600 text-white hover:bg-green-500 rounded-full px-6 py-5 text-base cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-green-500/20 hover:-translate-y-0.5"
              asChild
            >
              <a href={`https://wa.me/${data?.whatsapp}`} target="_blank">
                <FaWhatsapp className="mr-2 text-lg" />
                Let&apos;s Talk
              </a>
            </Button>
            <Button
              className="btn-gradient rounded-full px-6 py-5 text-base cursor-pointer hover:-translate-y-0.5"
              asChild
            >
              <Link href={data?.cv || ""} target="_blank" download>
                <IoMdDownload className="mr-2 text-lg" />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
