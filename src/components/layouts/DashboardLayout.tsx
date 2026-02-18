"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "../ui/site-header";
import { AppSidebar } from "../ui/app-sidebar";
import { useEffect } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      if (document.body.hasAttribute("data-scroll-locked")) {
        document.body.removeAttribute("data-scroll-locked");
        document.body.style.overflow = "auto";
      }
    });
    observer.observe(document.body, { attributes: true });
    return () => observer.disconnect();
  }, []);
  return (
    <SidebarProvider>
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-2 p-3 sm:gap-4 sm:p-4 lg:gap-4 lg:p-6 bg-[#eeeeee] overflow-x-hidden w-full">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
