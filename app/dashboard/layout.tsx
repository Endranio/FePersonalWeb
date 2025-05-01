import { AppSidebarDashboard } from "@/components/ui/app-sidebar-dashboard";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { ThemeProvider } from "@/components/ui/theme-provider";
import { Geist, Geist_Mono } from "next/font/google";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebarDashboard />
          <div className="absolute flex mt-4 items-center z-50">
            <SidebarTrigger />
            <h1 className="font-bold">Dashboard</h1>
          </div>

          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <main className="w-full">{children}</main>
          </ThemeProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
