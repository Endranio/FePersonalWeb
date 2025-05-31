"use client";

import { AppSidebarDashboard } from "@/components/ui/app-sidebar-dashboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import Cookies from "js-cookie";
import { ThemeProvider } from "@/components/ui/theme-provider";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import { api } from "@/lib/api";

import { useEffect } from "react";
import Spinner from "@/components/ui/spiner";



const queryClient = new QueryClient();
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const { isFetched, isError } = useQuery({
    queryKey: ["check"],
    queryFn: async () => {
      Cookies.get("token");
      const res = await api.post("/login/check");
      return res.data;
    },
  });

  useEffect(() => {
    if (isError) {
      Cookies.remove("token");
      window.location.replace("/login");
    }
  }, [isError]);

  if (!isFetched || isError) {
    return <Spinner />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <AppSidebarDashboard />
        <div className="absolute flex mt-4 items-center z-50">
          <SidebarTrigger />
          <h1 className="font-bold">Dashboard</h1>
        </div>

        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Toaster position="bottom-right" richColors />
          <main className="w-full">{children}</main>
        </ThemeProvider>
      </SidebarProvider>
    </QueryClientProvider>
  );
}
