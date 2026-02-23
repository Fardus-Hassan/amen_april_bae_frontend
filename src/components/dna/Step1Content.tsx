"use client";

import { useState } from "react";
import { Shield, ArrowLeft, ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Access Control",
    description:
      "Only you have access to your raw genetic data. Our AI systems work with encrypted end to end data.",
  },
  {
    title: "Encryption",
    description:
      "All data is encrypted using AES-256 encryption, the same standard used by banks and governments.",
  },
  {
    title: "Compliance",
    description:
      "We comply with GDPR, CCPA, and all major privacy regulations worldwide.",
  },
  {
    title: "Data Ownership",
    description:
      "You own your data completely. Download or delete it at any time with one click.",
  },
];

export default function Step1Content() {
  const [consented, setConsented] = useState(true);

  return (
    <div className="flex items-center justify-center h-[calc(100vh-81px)]">
      <div className="w-full max-w-[900px] bg-white rounded-[20px] px-6 pt-10 pb-8 flex flex-col items-center shadow-sm">
        {/* Shield icon */}
        <Shield
          className="w-10 h-10 sm:w-[46px] sm:h-[46px] text-[#B8912A] mb-4"
          strokeWidth={1.4}
        />

        {/* Title */}
        <h1
          className="text-[28px] sm:text-[34px] md:text-[38px] font-bold text-[#1B2B4B] text-center leading-tight tracking-[-0.02em] mb-3"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
          Access Your Permission
        </h1>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[15px] text-[#6B6B6B] text-center leading-relaxed max-w-[540px] mb-8">
          Your genetic data is one of your most personal assets. We take its
          security seriously.
        </p>

        {/* Feature grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#F5F2EC] rounded-[14px] px-5 sm:px-6 py-5 flex flex-col gap-2">
              <h3
                className="text-[16px] sm:text-[17px] font-bold text-[#1B2B4B] leading-tight"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                {feature.title}
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#4A4A4A] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Consent checkbox */}
        <div className="w-full flex items-start gap-4 mb-8 px-1">
          <Checkbox
            id="consent"
            checked={consented}
            onCheckedChange={(val) => setConsented(!!val)}
            className={cn(
              "w-[26px] h-[26px] sm:w-[28px] sm:h-[28px] rounded-[6px] mt-[2px] flex-shrink-0 border-2",
              "border-[#1B2B4B]",
              "data-[state=checked]:bg-white data-[state=checked]:border-[#1B2B4B]",
              "[&>span>svg]:text-[#1B2B4B] [&>span>svg]:w-4 [&>span>svg]:h-4",
            )}
          />
          <div className="flex flex-col gap-[5px]">
            <label
              htmlFor="consent"
              className="text-[15px] sm:text-[17px] text-[#1A1A1A] font-medium leading-snug cursor-pointer">
              I consent to the secure storage of my genetic data
            </label>
            <p className="text-[12px] sm:text-[13px] text-[#6B6B6B] leading-snug">
              I understand my data will be encrypted and that I maintain
              complete ownership and control.
            </p>
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="w-full flex items-center justify-end gap-3">
          <Button
            variant="outline"
            className={cn(
              "h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-[10px]",
              "border border-[#D0CBC2] bg-white text-[#1A1A1A]",
              "text-[14px] sm:text-[14.5px] font-medium gap-2",
              "hover:bg-[#F9F7F4] transition-colors duration-150 shadow-none",
            )}>
            <ArrowLeft
              className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px]"
              strokeWidth={2}
            />
            Back
          </Button>

          <Button
            className={cn(
              "h-[44px] sm:h-[48px] px-6 sm:px-8 rounded-[10px]",
              "bg-[#B8912A] hover:bg-[#A37F24] text-white",
              "text-[14px] sm:text-[14.5px] font-semibold gap-2",
              "shadow-none transition-colors duration-150",
            )}>
            Next
            <ArrowRight
              className="w-[14px] h-[14px] sm:w-[15px] sm:h-[15px]"
              strokeWidth={2}
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
