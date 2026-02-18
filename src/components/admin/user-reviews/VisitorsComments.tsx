"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export interface VisitorsCommentsProps {
  name: string;
  email?: string;
  avatarUrl?: string;
  comment: string;
  rating?: number;
  maxRating?: number;
  onAddToHomePage?: () => void;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function VisitorsComments({
  name,
  email,
  avatarUrl,
  comment,
  rating = 5,
  maxRating = 5,
  onAddToHomePage,
}: VisitorsCommentsProps) {
  return (
    <div className="bg-white rounded-2xl px-6 py-5 w-full font-sans">
      {/* Top row */}
      {/* ↓ Stack on mobile, side-by-side from sm up */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-4">
        {/* Left: Avatar + name + email */}
        <div className="flex items-center gap-3 min-w-0">
          <Avatar className="w-12 h-12 shrink-0">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-amber-100 text-amber-700 font-semibold">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="text-gray-900 font-semibold text-[15px] leading-tight truncate">
              {name}
            </p>
            {/* ↓ Allow email to wrap on very narrow screens instead of overflowing */}
            {email && (
              <p className="text-gray-400 text-sm break-all sm:break-normal">
                {email}
              </p>
            )}
          </div>
        </div>

        {/* Right: Rating — left-aligned on mobile, right on sm+ */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto">
          <span className="text-gray-700 font-semibold text-sm">
            {rating}/{maxRating}
          </span>
          <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100 mb-4" />

      {/* Comment */}
      <p className="text-gray-700 text-[15px] leading-relaxed mb-5">
        {comment}
      </p>

      {/* Add to Home Page button */}
      {onAddToHomePage && (
        <div className="flex justify-end">
          <Button
            onClick={onAddToHomePage}
            className="bg-[#C5A065] hover:bg-[#c29753] text-white rounded-xl text-sm font-medium px-5 py-2 h-auto">
            Add to Home Page
          </Button>
        </div>
      )}
    </div>
  );
}
