"use client";

import { useState } from "react";
import { Shield, ArrowLeft, ArrowRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SecurityFeature {
  title: string;
  description: string;
}

interface Step1ContentProps {
  title?: string;
  subtitle?: string;
  features?: SecurityFeature[];
  consentLabel?: string;
  consentSubtext?: string;
  onBack?: () => void;
  onNext?: (consented: boolean) => void;
  className?: string;
}

const defaultFeatures: SecurityFeature[] = [
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

export default function Step1Content({
  title = "Access Your Permission",
  subtitle = "Your genetic data is one of your most personal assets. We take its security seriously.",
  features = defaultFeatures,
  consentLabel = "I consent to the secure storage of my genetic data",
  consentSubtext = "I understand my data will be encrypted and that I maintain complete ownership and control.",
  onBack,
  onNext,
  className,
}: Step1ContentProps) {
  const [consented, setConsented] = useState(true);

  const leftFeatures = features.filter((_, i) => i % 2 === 0);
  const rightFeatures = features.filter((_, i) => i % 2 !== 0);

  return (
    <div
      className={cn(
        "w-full max-w-[900px] bg-white rounded-[20px] px-12 pt-10 pb-8 flex flex-col items-center",
        className,
      )}>
      {/* Shield icon */}
      <Shield
        className="w-[46px] h-[46px] text-[#B8912A] mb-4"
        strokeWidth={1.4}
      />

      {/* Title */}
      <h1
        className="text-[38px] font-bold text-[#1B2B4B] text-center leading-tight tracking-[-0.02em] mb-3"
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
        {title}
      </h1>

      {/* Subtitle */}
      <p className="text-[15px] text-[#6B6B6B] text-center leading-relaxed max-w-[540px] mb-8">
        {subtitle}
      </p>

      {/* Feature grid — 2 columns */}
      <div className="w-full grid grid-cols-2 gap-4 mb-6">
        {[...leftFeatures, ...rightFeatures]
          .reduce<SecurityFeature[][]>((rows, _, idx, arr) => {
            if (idx % 2 === 0)
              rows.push([arr[idx], arr[idx + 1]].filter(Boolean));
            return rows;
          }, [])
          .map((row, rowIdx) =>
            row.map((feature, colIdx) => (
              <div
                key={`${rowIdx}-${colIdx}`}
                className="bg-[#F5F2EC] rounded-[14px] px-6 py-5 flex flex-col gap-3">
                <h3
                  className="text-[17px] font-bold text-[#1B2B4B] leading-tight"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                  {feature.title}
                </h3>
                <p className="text-[13.5px] text-[#4A4A4A] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )),
          )}
      </div>

      {/* Consent checkbox row */}
      <div className="w-full flex items-start gap-4 mb-8 px-1">
        <Checkbox
          id="consent"
          checked={consented}
          onCheckedChange={(val) => setConsented(!!val)}
          className={cn(
            "w-[28px] h-[28px] rounded-[6px] mt-[2px] flex-shrink-0 border-2",
            "border-[#1B2B4B]",
            "data-[state=checked]:bg-white data-[state=checked]:border-[#1B2B4B]",
            "[&>span>svg]:text-[#1B2B4B] [&>span>svg]:w-4 [&>span>svg]:h-4",
          )}
        />
        <div className="flex flex-col gap-[5px]">
          <label
            htmlFor="consent"
            className="text-[17px] text-[#1A1A1A] font-medium leading-snug cursor-pointer">
            {consentLabel}
          </label>
          <p className="text-[13px] text-[#6B6B6B] leading-snug">
            {consentSubtext}
          </p>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="w-full flex items-center justify-end gap-3">
        <Button
          variant="outline"
          onClick={onBack}
          className={cn(
            "h-[48px] px-6 rounded-[10px]",
            "border border-[#D0CBC2] bg-white text-[#1A1A1A]",
            "text-[14.5px] font-medium gap-2",
            "hover:bg-[#F9F7F4] transition-colors duration-150 shadow-none",
          )}>
          <ArrowLeft className="w-[15px] h-[15px]" strokeWidth={2} />
          Back
        </Button>

        <Button
          onClick={() => onNext?.(consented)}
          className={cn(
            "h-[48px] px-8 rounded-[10px]",
            "bg-[#B8912A] hover:bg-[#A37F24] text-white",
            "text-[14.5px] font-semibold gap-2",
            "shadow-none transition-colors duration-150",
          )}>
          Next
          <ArrowRight className="w-[15px] h-[15px]" strokeWidth={2} />
        </Button>
      </div>
    </div>
  );
}
