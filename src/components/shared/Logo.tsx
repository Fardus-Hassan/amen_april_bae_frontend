"use client";

import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const logoVariants = cva("flex items-center gap-2 md:gap-3", {
  variants: {
    size: {
      sm: "gap-1.5",
      md: "gap-2 md:gap-3",
      lg: "gap-3 md:gap-4",
    },
    layout: {
      horizontal: "flex-row",
      vertical: "flex-col items-center",
    },
    textColor: {
      dark: "text-black",
      light: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    layout: "horizontal",
    textColor: "dark",
  },
});

interface LogoProps extends VariantProps<typeof logoVariants> {
  className?: string;
  showIcon?: boolean;
  compact?: boolean;
}

export default function Logo({
  size = "md",
  layout = "horizontal",
  textColor = "dark",
  className,
  showIcon = true,
  compact = false,
}: LogoProps) {
  const iconSizeMap = {
    sm: { width: 24, height: 24 },
    md: { width: 32, height: 32 },
    lg: { width: 48, height: 48 },
  };

  const textSizeMap = {
    sm: "text-xs md:text-sm",
    md: "text-sm md:text-base",
    lg: "text-base md:text-lg",
  };

  const iconSize = iconSizeMap[size || "md"];
  const textSize = textSizeMap[size || "md"];

  return (
    <div className={cn(logoVariants({ size, layout, textColor }), className)}>
      {showIcon && (
        <div className="flex-shrink-0">
          <Image
            src={"/images/icon.svg"}
            alt="DNA Time Machine Logo"
            width={iconSize.width}
            height={iconSize.height}
            priority
            className="w-auto h-auto"
          />
        </div>
      )}
      {!compact && (
        <div
          className={`flex flex-col text-center ${layout === "vertical" ? "md:flex-col" : ""}`}>
          <p className={cn("font-[900] leading-tight", textSize)}>
            <span className="text-[#C5A065]">DNA</span> Time
            <br />
            Machine
          </p>
        </div>
      )}
    </div>
  );
}
