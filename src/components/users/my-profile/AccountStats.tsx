"use client";

import { TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface StatRow {
  label: string;
  value: string | number;
}

interface AccountStatsProps {
  title?: string;
  subtitle?: string;
  stats?: StatRow[];
  className?: string;
}

const defaultStats: StatRow[] = [
  { label: "Member Since", value: "Jan 2024" },
  { label: "Reports Generated", value: 3 },
  { label: "DNA Matches", value: 127 },
  { label: "Storage Used", value: "142 MB" },
];

export default function AccountStats({
  title = "Account Stats",
  subtitle = "Your activity summary",
  stats = defaultStats,
  className,
}: AccountStatsProps) {
  return (
    <Card
      className={cn(
        "w-full rounded-[16px] border border-[#2563EB] bg-white",
        className,
      )}>
      <CardContent className="px-5 pt-5 pb-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          {/* Icon box */}
          <div className="w-[44px] h-[44px] rounded-[10px] bg-[#2563EB] flex items-center justify-center flex-shrink-0">
            <TrendingUp
              className="w-[22px] h-[22px] text-white"
              strokeWidth={2.5}
            />
          </div>

          {/* Title + subtitle */}
          <div className="flex flex-col">
            <span className="text-[15px] font-bold text-[#111827] leading-tight tracking-[-0.01em]">
              {title}
            </span>
            <span className="text-[12.5px] text-[#6B7280] font-normal leading-tight mt-[2px]">
              {subtitle}
            </span>
          </div>
        </div>

        {/* Stat rows */}
        <div className="flex flex-col">
          {stats.map((stat, index) => (
            <div key={stat.label}>
              {/* Row */}
              <div className="flex items-center justify-between py-[11px]">
                <span className="text-[13.5px] text-[#374151] font-normal">
                  {stat.label}
                </span>
                <span className="text-[13.5px] text-[#111827] font-bold">
                  {stat.value}
                </span>
              </div>

              {/* Divider — no divider after last row */}
              {index < stats.length - 1 && (
                <Separator className="bg-[#F1F5F9]" />
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
