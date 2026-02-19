"use client";

import Image from "next/image";
import {
  Heart,
  MessageCircle,
  Eye,
  SquarePen,
  Trash2,
  MonitorPlay,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface HeritageCard {
  title: string;
  storyId: string;
  name: string;
  imageUrl: string;
}

interface PostCardProps {
  author: {
    name: string;
    location: string;
    avatarUrl: string;
  };
  content: string;
  heritageCard: HeritageCard;
  stats: {
    likes: string;
    comments: string;
    views: string;
  };
  onEdit: () => void;
  onDelete: () => void;
  onFullPreview: () => void;
}

export default function PostCard({
  author,
  content,
  heritageCard,
  stats,
  onEdit,
  onDelete,
  onFullPreview,
}: PostCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 w-full"
      style={{ boxShadow: "0px 1px 12px 0px #0000000D" }}>
      {/* ── Header ── */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <Avatar className="w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full ring-2 ring-gray-100 flex-shrink-0">
            <AvatarImage
              src={author.avatarUrl}
              alt={author.name}
              className="object-cover"
            />
            <AvatarFallback className="bg-gray-200 text-gray-600 text-sm font-semibold">
              {author.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-[13px] sm:text-[14px] md:text-[15px] font-semibold text-gray-900 leading-snug">
              {author.name}
            </p>
            <p className="text-[11px] sm:text-[12px] md:text-[13px] text-gray-500 leading-snug">
              {author.location}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-0.5 sm:gap-1">
          <button
            onClick={onEdit}
            className="p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors">
            <SquarePen
              size={16}
              strokeWidth={1.6}
              className="sm:!w-[18px] sm:!h-[18px] md:!w-[19px] md:!h-[19px]"
            />
          </button>
          <button
            onClick={onDelete}
            className="p-1.5 sm:p-2 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors">
            <Trash2
              size={16}
              strokeWidth={1.6}
              className="sm:!w-[18px] sm:!h-[18px] md:!w-[19px] md:!h-[19px]"
            />
          </button>
        </div>
      </div>

      {/* ── Body Text ── */}
      <p className="text-[11.5px] sm:text-[12.5px] md:text-[13.5px] text-gray-700 leading-relaxed mb-3 sm:mb-4">
        {content}
      </p>

      {/* ── Heritage Inner Card ── */}
      <div className="bg-[#f2f4f7] rounded-xl px-3 py-3 sm:px-4 sm:py-4 md:py-5 flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5">
        <div className="relative flex-shrink-0 w-[65px] h-[65px] sm:w-[88px] sm:h-[88px] md:w-[110px] md:h-[110px]">
          <Image
            src={heritageCard.imageUrl}
            alt="Heritage Tree"
            fill
            sizes="(max-width: 640px) 65px, (max-width: 768px) 88px, 110px"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2 min-w-0 flex-1">
          <h2 className="text-[17px] sm:text-[21px] md:text-[26px] font-bold text-[#1b2b5e] leading-tight tracking-tight">
            {heritageCard.title}
          </h2>
          <p className="text-[11px] sm:text-[12.5px] md:text-[13.5px] font-semibold text-gray-800">
            Heritage Story ID:{" "}
            <span className="font-semibold">{heritageCard.storyId}</span>
          </p>
          <p className="text-[11px] sm:text-[12.5px] md:text-[13.5px] text-gray-700">
            Name: <span className="font-medium">{heritageCard.name}</span>
          </p>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5">
          <button className="flex items-center gap-1 sm:gap-1.5 group cursor-pointer">
            <Heart
              size={15}
              className="sm:!w-[16px] sm:!h-[16px] md:!w-[17px] md:!h-[17px] fill-gray-900 text-gray-900 group-hover:fill-red-500 group-hover:text-red-500 transition-colors"
            />
            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-gray-800">
              {stats.likes}
            </span>
          </button>
          <button className="flex items-center gap-1 sm:gap-1.5 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
            <MessageCircle
              size={15}
              strokeWidth={1.8}
              className="sm:!w-[16px] sm:!h-[16px] md:!w-[17px] md:!h-[17px]"
            />
            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium">
              {stats.comments}
            </span>
          </button>
          <button className="flex items-center gap-1 sm:gap-1.5 text-gray-500 hover:text-gray-700 transition-colors cursor-pointer">
            <Eye
              size={15}
              strokeWidth={1.8}
              className="sm:!w-[16px] sm:!h-[16px] md:!w-[17px] md:!h-[17px]"
            />
            <span className="text-[11px] sm:text-[12px] md:text-[13px] font-medium">
              {stats.views}
            </span>
          </button>
        </div>

        <Button
          onClick={onFullPreview}
          className="bg-[#c8a45e] hover:bg-[#b5923f] text-white text-[11px] sm:text-[12.5px] md:text-[13.5px] font-semibold h-[34px] sm:h-[40px] md:h-[44px] px-3 sm:px-4 md:px-5 rounded-xl flex items-center gap-1.5 sm:gap-2 shadow-none transition-colors whitespace-nowrap">
          <MonitorPlay
            size={13}
            strokeWidth={2}
            className="sm:!w-[15px] sm:!h-[15px] md:!w-[16px] md:!h-[16px]"
          />
          Full Preview
        </Button>
      </div>
    </div>
  );
}
