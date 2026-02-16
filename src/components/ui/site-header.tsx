"use client";

import { SidebarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header
      className="sticky top-0 z-50 flex w-full items-center"
      style={{
        background:
          "linear-gradient(270.09deg, #E5BEEE -48.78%, #EEF6FF 132.36%)",
      }}>
      <div className="flex h-18 w-full items-center justify-between md:justify-end gap-2 px-4">
        <Button
          className="h-8 w-8 md:hidden"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>

        {/* Logo */}
        <span className="text-lg font-bold">Amen</span>
      </div>
    </header>
  );
}
