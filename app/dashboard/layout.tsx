'use client'

import { AppSidebarDashboard } from "@/components/ui/app-sidebar-dashboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient()
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
