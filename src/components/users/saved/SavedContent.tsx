"use client";

import { Clock, Sun, ChevronRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface Highlight {
  text: string;
}

interface SavedContentProps {
  title?: string;
  imageUrl?: string;
  imageAlt?: string;
  heritageLabel?: string;
  heritagePercent?: number;
  country?: string;
  description?: string;
  experienceHighlights?: Highlight[];
  daysRecommended?: number;
  bestTime?: string;
  onViewItinerary?: () => void;
  className?: string;
}

const defaultHighlights: Highlight[] = [
  { text: "Florentine State Archives with baptismal records" },
  { text: "Traditional embroidery workshops" },
  { text: "Village of Fiesole - ancestral hometown" },
  { text: "Culinary tour of traditional Tuscan cuisine" },
];

export default function SavedContent({
  title = "Florence & Tuscany",
  imageUrl = "https://images.unsplash.com/photo-1543429776-2782fc8e3f4e?w=400&q=80",
  imageAlt = "Florence & Tuscany",
  heritageLabel = "Italian Heritage",
  heritagePercent = 34,
  country = "Italy",
  description = "Explore the birthplace of your Rossi ancestors. Walk the same cobblestone streets, visit the artisan quarters where your great-grandmother learned her craft, and discover family records in Florentine archives.",
  experienceHighlights = defaultHighlights,
  daysRecommended = 7,
  bestTime = "April–June or September–October",
  onViewItinerary,
  className,
}: SavedContentProps) {
  return (
    <Card
      className={cn(
        "w-full rounded-[18px] bg-white overflow-hidden",
        className,
      )}
      style={{
        boxShadow: "0px 1px 12px 0px #0000000D",
      }}>
      <CardContent className="p-4 sm:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 lg:gap-5">
        {/* ── Header: image + title + badge ── */}
        <div className="flex items-start gap-3 sm:gap-4">
          {/* Destination image */}
          <div className="w-[80px] h-[70px] sm:w-[100px] sm:h-[88px] lg:w-[120px] lg:h-[106px] rounded-[10px] overflow-hidden flex-shrink-0">
            <Image
              width={240}
              height={240}
              src={imageUrl}
              alt={imageAlt}
              priority
              className="w-full h-full object-cover"
            />
          </div>

          {/* Title + heritage badge */}
          <div className="flex flex-col gap-[8px] sm:gap-[10px] pt-[2px]">
            <h2
              className="text-[18px] sm:text-[22px] lg:text-[26px] font-bold text-[#1A1A1A] leading-tight tracking-[-0.02em]"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              {title}
            </h2>
            <Badge className="w-fit bg-[#F0EDE6] text-[#5C5040] border-0 rounded-full text-[11px] sm:text-[12.5px] lg:text-[13.5px] font-medium px-2.5 sm:px-3 py-[3px] sm:py-[4px] shadow-none hover:bg-[#F0EDE6]">
              {heritageLabel} · {heritagePercent}%
            </Badge>
          </div>
        </div>

        {/* ── Country row ── */}
        <div className="flex items-center gap-[6px] -mt-1">
          <MapPin
            className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] lg:w-[17px] lg:h-[17px] text-[#6B6B6B]"
            strokeWidth={1.8}
          />
          <span className="text-[13px] sm:text-[14.5px] lg:text-[16px] text-[#3D3D3D] font-medium">
            {country}
          </span>
        </div>

        {/* ── Description ── */}
        <p className="text-[12.5px] sm:text-[13.5px] lg:text-[15px] text-[#1A1A1A] font-semibold leading-[1.65] -mt-1">
          {description}
        </p>

        {/* ── Experience Highlights ── */}
        <div className="flex flex-col gap-[8px] sm:gap-[10px] -mt-1">
          <h3
            className="text-[13px] sm:text-[14.5px] lg:text-[16px] font-bold text-[#1A1A1A]"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            Experience Highlights:
          </h3>
          <ul className="flex flex-col gap-[6px] sm:gap-[8px]">
            {experienceHighlights.map((item, i) => (
              <li key={i} className="flex items-start gap-[6px] sm:gap-[8px]">
                <ChevronRight
                  className="w-[13px] h-[13px] sm:w-[14px] sm:h-[14px] lg:w-[16px] lg:h-[16px] text-[#B8892A] flex-shrink-0 mt-[2px]"
                  strokeWidth={2.5}
                />
                <span className="text-[12px] sm:text-[13px] lg:text-[14.5px] text-[#3D3D3D] leading-snug">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Meta row: days + best time ── */}
        <div className="flex items-start gap-4 sm:gap-6 -mt-1">
          {/* Days recommended */}
          <div className="flex items-start gap-[6px] sm:gap-[7px]">
            <Clock
              className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] lg:w-[17px] lg:h-[17px] text-[#B8892A] flex-shrink-0 mt-[2px]"
              strokeWidth={1.8}
            />
            <span className="text-[12px] sm:text-[13px] lg:text-[14.5px] text-[#3D3D3D] leading-snug font-medium">
              {daysRecommended} days
              <br />
              recommended
            </span>
          </div>

          {/* Best time */}
          <div className="flex items-start gap-[6px] sm:gap-[7px]">
            <Sun
              className="w-[13px] h-[13px] sm:w-[15px] sm:h-[15px] lg:w-[17px] lg:h-[17px] text-[#B8892A] flex-shrink-0 mt-[2px]"
              strokeWidth={1.8}
            />
            <span className="text-[12px] sm:text-[13px] lg:text-[14.5px] text-[#3D3D3D] leading-snug font-medium">
              Best: {bestTime}
            </span>
          </div>
        </div>

        {/* ── CTA Button ── */}
        <div className="flex justify-end -mt-1">
          <Button
            onClick={onViewItinerary}
            className={cn(
              "bg-[#C5A065] hover:bg-[#B8892A] text-white",
              "rounded-[10px] px-4 sm:px-5 h-[40px] sm:h-[44px] lg:h-[48px]",
              "text-[12.5px] sm:text-[13.5px] lg:text-[15px] font-semibold tracking-[0.01em]",
              "shadow-none transition-colors duration-150",
            )}>
            View Sample Itinerary
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
