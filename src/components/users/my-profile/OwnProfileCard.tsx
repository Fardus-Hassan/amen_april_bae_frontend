"use client";

import { useRef } from "react";
import { Camera } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OwnProfileCardProps {
  name?: string;
  membershipTier?: string;
  verificationLabel?: string;
  avatarUrl?: string;
  onChangePhoto?: (file: File) => void;
  className?: string;
}

export default function OwnProfileCard({
  name = "Ahmed Hasan",
  membershipTier = "Premium Member",
  verificationLabel = "Tier 2 - Verified",
  avatarUrl = "/placeholder-avatar.jpg",
  onChangePhoto,
  className,
}: OwnProfileCardProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChangePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onChangePhoto) {
      onChangePhoto(file);
    }
    // Reset input so the same file can be re-selected
    e.target.value = "";
  };

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card
      className={cn(
        "w-full rounded-[20px] border border-[#C5A065] bg-white",
        className,
      )}>
      <CardContent className="flex flex-col items-center px-6 pt-7 pb-5 gap-0">
        {/* Avatar */}
        <Avatar className="w-[72px] h-[72px] ring-2 ring-white shadow-md mb-3">
          <AvatarImage src={avatarUrl} alt={name} className="object-cover" />
          <AvatarFallback className="bg-[#C9A96E] text-white text-lg font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>

        {/* Name */}
        <h2 className="text-[17px] font-bold text-[#1A1A1A] leading-tight tracking-[-0.01em] mb-[3px]">
          {name}
        </h2>

        {/* Membership tier */}
        <p className="text-[13px] text-[#8A8A8A] font-normal mb-3 leading-tight">
          {membershipTier}
        </p>

        {/* Verification badge */}
        <Badge
          className={cn(
            "bg-[#FEF0E4] text-[#C97B3A] border-0 rounded-full",
            "text-[12px] font-medium px-4 py-[5px] mb-5",
            "hover:bg-[#FEF0E4] shadow-none",
          )}>
          {verificationLabel}
        </Badge>

        {/* Divider */}
        <div className="w-full h-px bg-[#F0EDE8] mb-4" />

        {/* Change Photo button */}
        <Button
          variant="outline"
          onClick={handleChangePhotoClick}
          className={cn(
            "w-full rounded-full border border-[#E0DBD3] bg-white",
            "text-[13.5px] font-medium text-[#2C2C2C]",
            "h-[44px] gap-2",
            "hover:bg-[#FAFAF8] hover:border-[#C8C2BA] transition-colors duration-150",
            "shadow-none focus-visible:ring-1 focus-visible:ring-[#C9A96E]",
          )}>
          <Camera
            className="w-[16px] h-[16px] text-[#4A4A4A]"
            strokeWidth={2}
          />
          Change Photo
        </Button>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          aria-label="Upload profile photo"
        />
      </CardContent>
    </Card>
  );
}
