"use client";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export interface ReviewCardProps {
  name: string;
  role?: string;
  location?: string;
  avatarUrl?: string;
  review: string;
  rating?: number;
  maxRating?: number;
  onRemove?: () => void;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

export default function ReviewCard({
  name,
  role,
  location,
  avatarUrl,
  review,
  rating = 5,
  maxRating = 5,
  onRemove,
}: ReviewCardProps) {
  return (
    // ↓ max-w-md keeps card from stretching too wide when it's alone in a column
    <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-auto font-sans">
      {/* Top row: Avatar + Rating */}
      <div className="flex items-start justify-between mb-5">
        <Avatar className="w-14 h-14 border-2 border-sky-200">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="bg-sky-100 text-sky-700 font-semibold text-lg">
            {getInitials(name)}
          </AvatarFallback>
        </Avatar>

        <div className="flex items-center gap-1.5 border border-gray-200 rounded-full px-4 py-2 shadow-sm">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-gray-800 font-semibold text-sm">
            {rating}/{maxRating}
          </span>
        </div>
      </div>

      {/* Review text */}
      <p className="text-gray-700 text-[15px] leading-relaxed mb-5">{review}</p>

      {/* Reviewer info + Remove button */}
      {/* ↓ Wrap to column on very narrow screens, row otherwise */}
      <div className="flex flex-col gap-3 lg:flex-row xs:items-end lg:justify-between">
        <div className="space-y-0.5">
          <p className="text-gray-900 font-semibold text-[15px]">{name}</p>
          {role && <p className="text-gray-500 text-sm">{role}</p>}
          {location && <p className="text-gray-500 text-sm">{location}</p>}
        </div>

        {onRemove && (
          <Button
            variant="outline"
            onClick={onRemove}
            className="border border-red-500 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-xl text-sm font-medium px-5 py-2 h-auto shrink-0 self-start lg:self-end">
            Remove
          </Button>
        )}
      </div>
    </div>
  );
}
