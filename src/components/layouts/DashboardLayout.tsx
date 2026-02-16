"use client";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { SiteHeader } from "../ui/site-header";
import { AppSidebar } from "../ui/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar variant="sidebar" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col gap-4 p-4 sm:p-6 lg:p-8 bg-[#eeeeee]">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
