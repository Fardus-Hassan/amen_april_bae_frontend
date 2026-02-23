"use client";

import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Dna,
  FileText,
  Users,
  ShieldCheck,
  RefreshCcw,
  Image as ImageIcon,
  AlertTriangle,
  FileX2,
  Ban,
  HardDrive,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import Image from "next/image";

// ── Data ─────────────────────────────────────────────────────────────────────

const DNA_PROVIDERS = [
  {
    id: "ancestry",
    name: "AncestryDNA",
    sub: "Supports .txt and .zip formats",
    logo: (
      <Image src={"/images/ancestry.svg"} width={115} height={115} alt="logo" />
    ),
    features: ["Ethnicity Estimates", "DNA Matches", "ThruLines"],
    checkColor: "text-[#4A7C4E]",
  },
  {
    id: "23andme",
    name: "23andMe",
    sub: "Supports .txt and .zip formats",
    logo: (
      <Image src={"/images/23andMe.svg"} width={115} height={115} alt="logo" />
    ),
    features: ["Ancestry Composition", "Relative Finder", "Haplogroups"],
    checkColor: "text-[#4A7C4E]",
  },
  {
    id: "myheritage",
    name: "MyHeritage",
    sub: "Supports .txt and .zip formats",
    logo: (
      <Image
        src={"/images/my-heritage.svg"}
        width={115}
        height={115}
        alt="logo"
      />
    ),
    features: ["Ethnicity Breakdown", "DNA Matching", "Family Trees"],
    checkColor: "text-[#B8912A]",
  },
];

const UPLOAD_SECTIONS = [
  {
    id: "dna",
    icon: <Dna className="w-5 h-5 text-[#B8912A]" strokeWidth={1.5} />,
    iconBg: false,
    title: "DNA Data",
    desc: "Upload your raw DNA data from AncestryDNA, 23andMe, or other providers.",
    buttonLabel: "Upload DNA File",
    note: "AncestryDNA (.txt, .zip), 23andMe (.txt, .zip)",
    noteLabel: "Accepted formats:",
    uploaded: false,
    highlight: false,
  },
  {
    id: "familytree",
    icon: <Check className="w-5 h-5 text-white" strokeWidth={2.5} />,
    iconBg: true,
    title: "Family Tree",
    desc: "Import your existing family tree to enrich your ancestral narrative.",
    buttonLabel: "Upload Family Tree",
    note: "GEDCOM (.ged) files",
    noteLabel: "Accepted formats:",
    uploaded: true,
    highlight: true,
  },
  {
    id: "historical",
    icon: <FileText className="w-5 h-5 text-[#B8912A]" strokeWidth={1.5} />,
    iconBg: false,
    title: "Historical Documents",
    desc: "Upload certificates, letters, or other documents from your family history.",
    buttonLabel: "Upload Documents",
    note: "Optional but helpful for context",
    noteLabel: null,
    uploaded: false,
    highlight: false,
  },
  {
    id: "photos",
    icon: <Users className="w-5 h-5 text-[#B8912A]" strokeWidth={1.5} />,
    iconBg: false,
    title: "Family Photos",
    desc: "Add photos of your ancestors to personalize your heritage story.",
    buttonLabel: "Upload Photos",
    note: "Optional but adds personal touches",
    noteLabel: null,
    uploaded: false,
    highlight: false,
  },
];

const QUALITY_CHECKS = [
  {
    id: "integrity",
    icon: <RefreshCcw className="w-5 h-5 text-[#27AE60]" strokeWidth={2} />,
    iconBg: "bg-[#E8F8EF]",
    title: "File Integrity",
    features: [
      "Automatic format validation",
      "Corruption detection",
      "Completeness verification",
      "Duplicate file detection",
    ],
    checkColor: "text-[#27AE60]",
    checkBg: "bg-[#E8F8EF]",
  },
  {
    id: "dna",
    icon: <Dna className="w-5 h-5 text-[#3B82F6]" strokeWidth={1.8} />,
    iconBg: "bg-[#EBF2FF]",
    title: "DNA Quality",
    features: [
      "SNP marker count verification",
      "Data coverage assessment",
      "Provider compatibility check",
      "Version compatibility",
    ],
    checkColor: "text-[#3B82F6]",
    checkBg: "bg-[#EBF2FF]",
  },
  {
    id: "photo",
    icon: <ImageIcon className="w-5 h-5 text-[#8B5CF6]" strokeWidth={1.8} />,
    iconBg: "bg-[#F3EEFF]",
    title: "Photo Quality",
    features: [
      "Resolution optimization",
      "Metadata extraction",
      "Face detection for matching",
      "OCR for text in images",
    ],
    checkColor: "text-[#8B5CF6]",
    checkBg: "bg-[#F3EEFF]",
  },
];

const UPLOAD_ISSUES = [
  {
    id: "corrupted",
    icon: <FileX2 className="w-5 h-5 text-[#B8912A]" strokeWidth={1.8} />,
    title: "Corrupted File",
    desc: "Re-download your DNA file from the original provider and try uploading again. Avoid opening or editing the file.",
  },
  {
    id: "unsupported",
    icon: <Ban className="w-5 h-5 text-[#B8912A]" strokeWidth={1.8} />,
    title: "Unsupported Format",
    desc: "Ensure you're uploading the raw data file (.txt or .zip) from AncestryDNA, 23andMe, or MyHeritage, not a report or summary.",
  },
  {
    id: "toolarge",
    icon: <HardDrive className="w-5 h-5 text-[#B8912A]" strokeWidth={1.8} />,
    title: "File Too Large",
    desc: "DNA files should typically be under 50MB. If yours is larger, it may be a different file type. Check with your testing provider.",
  },
  {
    id: "timeout",
    icon: <Wifi className="w-5 h-5 text-[#B8912A]" strokeWidth={1.8} />,
    title: "Connection Timeout",
    desc: "Large files may time out on slow connections. Try a wired connection or wait for better network conditions.",
  },
];

const FAQ_ITEMS = [
  {
    id: "q1",
    question: "How long does file processing take?",
    answer:
      "Most files are processed within 24–48 hours. Complex datasets or high upload volumes may occasionally take a bit longer. You'll receive an email notification once your data is ready.",
  },
  {
    id: "q2",
    question: "Can I upload files from multiple DNA tests?",
    answer:
      "Yes! You can upload data from AncestryDNA, 23andMe, and MyHeritage simultaneously. Our system will cross-reference the results to give you a more complete picture of your heritage.",
  },
  {
    id: "q3",
    question: "What happens to my files after processing?",
    answer:
      "Your raw files are encrypted and stored securely. After processing, we only retain the derived insights — you can delete your raw files at any time from your account settings.",
  },
  {
    id: "q4",
    question: "Can I edit or add files after submission?",
    answer:
      "Absolutely. You can return to the upload page and add or replace files at any time. Updated files will be re-processed and your heritage report will be refreshed accordingly.",
  },
  {
    id: "q5",
    question: "What if my DNA file is rejected?",
    answer:
      "If your file fails validation, you'll see a specific error message explaining why. Common reasons include unsupported formats, corrupted files, or incomplete exports. Re-download from your provider and try again.",
  },
  {
    id: "q6",
    question: "Is there a limit to how many photos I can upload?",
    answer:
      "You can upload up to 500 photos per account. Each photo should be under 20MB. We support JPEG, PNG, and HEIC formats. Higher-resolution photos yield better face-matching and metadata extraction results.",
  },
];

// ── Main Component ────────────────────────────────────────────────────────────

export default function Step3Content() {
  const [progress] = useState(45);

  return (
    <div className="flex flex-col items-start justify-center min-h-screen bg-[#FAF8F5] px-4 py-10">
      <div className="w-full max-w-[900px] mx-auto flex flex-col gap-0 mb-12">
        {/* ════════════════════════════════════════
            MAIN WHITE CARD
        ════════════════════════════════════════ */}
        <div className="w-full bg-white rounded-[20px] px-6 sm:px-10 md:px-12 pt-10 pb-10 flex flex-col shadow-sm mb-5">
          {/* ── Header ── */}
          <h1
            className="text-[30px] sm:text-[36px] md:text-[40px] font-bold text-[#1B2B4B] leading-tight tracking-[-0.02em] mb-2"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            Upload Your Documents
          </h1>
          <p className="text-[13.5px] sm:text-[14px] text-[#6B6B6B] leading-relaxed mb-7">
            Let&apos;s begin by gathering your genetic data and family
            information.
            <br className="hidden sm:block" />
            The more you provide, the richer your heritage story will be.
          </p>

          {/* ── Progress Banner ── */}
          <div className="w-full bg-[#1B2B4B] rounded-[14px] px-6 py-6 mb-8">
            <h2
              className="text-[22px] sm:text-[26px] font-bold text-white mb-1 leading-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
              Your Progress
            </h2>
            <p className="text-[13px] text-[#B0BCCE] mb-5 font-medium">
              Ready to start? Upload your DNA data to begin.
            </p>
            <div className="w-full h-[8px] bg-[#2E4266] rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-[#B8912A] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[13px] text-white font-semibold">
              {progress}% Complete
            </p>
          </div>

          {/* ── DNA Data Upload heading ── */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-10 h-10 rounded-[10px] bg-[#F5F2EC] flex items-center justify-center flex-shrink-0 mt-0.5">
              <Dna className="w-5 h-5 text-[#B8912A]" strokeWidth={1.5} />
            </div>
            <div>
              <h3
                className="text-[17px] sm:text-[18px] font-bold text-[#1B2B4B] leading-tight"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                DNA Data Upload
              </h3>
              <p className="text-[13px] sm:text-[13.5px] text-[#6B6B6B]">
                Upload your raw DNA data from AncestryDNA, 23andMe, or
                MyHeritage
              </p>
            </div>
          </div>

          {/* ── Provider Cards ── */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {DNA_PROVIDERS.map((p) => (
              <div
                key={p.id}
                className="bg-[#F5F2EC] rounded-[12px] px-4 py-4 flex flex-col gap-3">
                {p.logo}
                <div>
                  <p
                    className="text-[14px] font-bold text-[#1B2B4B]"
                    style={{
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}>
                    {p.name}
                  </p>
                  <p className="text-[12px] text-[#888]">{p.sub}</p>
                </div>
                <ul className="flex flex-col gap-1.5">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check
                        className={cn(
                          "w-3.5 h-3.5 flex-shrink-0",
                          p.checkColor,
                        )}
                        strokeWidth={2.5}
                      />
                      <span className="text-[12.5px] text-[#4A4A4A]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ── Upload Sections Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {UPLOAD_SECTIONS.map((s) => (
              <div
                key={s.id}
                className={cn(
                  "rounded-[14px] px-5 py-5 flex flex-col gap-3",
                  s.highlight
                    ? "border-2 border-[#1B2B4B] bg-white"
                    : "border border-[#E0DBD3] bg-white",
                )}>
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0",
                      s.iconBg ? "bg-[#1B2B4B]" : "bg-[#F5F2EC]",
                    )}>
                    {s.icon}
                  </div>
                  <h3
                    className="text-[17px] sm:text-[19px] font-bold text-[#1B2B4B] leading-tight"
                    style={{
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}>
                    {s.title}
                  </h3>
                </div>

                <p className="text-[13px] sm:text-[13.5px] text-[#6B6B6B] leading-relaxed">
                  {s.desc}
                </p>

                {s.uploaded ? (
                  <div className="flex items-center gap-2">
                    <Check
                      className="w-4 h-4 text-[#1B2B4B]"
                      strokeWidth={2.5}
                    />
                    <span className="text-[13.5px] font-bold text-[#1B2B4B]">
                      File uploaded
                    </span>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="self-start px-4 py-2 rounded-[8px] border border-[#D0CBC2] bg-white text-[13px] sm:text-[13.5px] font-medium text-[#1B2B4B] hover:bg-[#F5F2EC] transition-colors duration-150">
                    {s.buttonLabel}
                  </button>
                )}

                <div>
                  {s.noteLabel && (
                    <p className="text-[12.5px] font-bold text-[#1B2B4B]">
                      {s.noteLabel}
                    </p>
                  )}
                  <p
                    className={cn(
                      "text-[12.5px]",
                      s.noteLabel
                        ? "text-[#6B6B6B]"
                        : "font-semibold text-[#1B2B4B]",
                    )}>
                    {s.note}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* ════════════════════════════════════════
            NAVIGATION
        ════════════════════════════════════════ */}
          <div className="w-full flex items-center justify-end gap-3 pt-2">
            <Button
              variant="outline"
              className={cn(
                "h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-[10px]",
                "border border-[#D0CBC2] bg-white text-[#1A1A1A]",
                "text-[14px] sm:text-[14.5px] font-medium gap-2",
                "hover:bg-[#F9F7F4] transition-colors duration-150 shadow-none",
              )}>
              <ArrowLeft className="w-[14px] h-[14px]" strokeWidth={2} />
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
              <ArrowRight className="w-[14px] h-[14px]" strokeWidth={2} />
            </Button>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ════════════════════════════════════════
            FILE VALIDATION & QUALITY CHECK
        ════════════════════════════════════════ */}
        <div className="w-full  mb-5">
          {/* Section heading */}
          <div className="flex items-start gap-4 mb-7">
            <div className="w-12 h-12 rounded-[12px] bg-[#EAE4D9] flex items-center justify-center flex-shrink-0">
              <ShieldCheck
                className="w-6 h-6 text-[#B8912A]"
                strokeWidth={1.8}
              />
            </div>
            <div>
              <h2
                className="text-[20px] sm:text-[24px] font-bold text-[#1B2B4B] leading-tight"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                File Validation & Quality Check
              </h2>
              <p className="text-[13px] sm:text-[13.5px] text-[#6B6B6B]">
                Ensuring your data is complete and ready for processing
              </p>
            </div>
          </div>

          {/* Quality check cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
            {QUALITY_CHECKS.map((qc) => (
              <div
                key={qc.id}
                className="bg-white rounded-[14px] px-5 py-5 flex flex-col gap-4 border border-[#E8E3DA]">
                {/* Icon + title */}
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0",
                      qc.iconBg,
                    )}></div>
                  <span
                    className="text-[15px] font-bold text-[#1B2B4B]"
                    style={{
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}>
                    {qc.title}
                  </span>
                </div>
                {/* Features */}
                <ul className="flex flex-col gap-2">
                  {qc.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-[1px]",
                          qc.checkBg,
                        )}>
                        <Check
                          className={cn("w-3 h-3", qc.checkColor)}
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-[12.5px] text-[#4A4A4A] leading-snug">
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Common Upload Issues & Solutions */}
          <div className="w-full bg-[#FEF9EC] border border-[#E8D89A] rounded-[16px] px-6 py-6">
            {/* Heading */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[10px] bg-[#F5C842] flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h3
                className="text-[17px] sm:text-[20px] font-bold text-[#1B2B4B] leading-tight"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                Common Upload Issues & Solutions
              </h3>
            </div>

            {/* Issues grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {UPLOAD_ISSUES.map((issue) => (
                <div
                  key={issue.id}
                  className="bg-white rounded-[12px] px-4 py-4 flex flex-col gap-2 border border-[#EDE5C5]">
                  <div className="flex items-center gap-2">
                    {issue.icon}
                    <span className="text-[13.5px] font-bold text-[#B8912A]">
                      {issue.title}
                    </span>
                  </div>
                  <p className="text-[12.5px] text-[#6B6B6B] leading-relaxed">
                    {issue.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            PROCESSING QUESTIONS FAQ
        ════════════════════════════════════════ */}
        <div className="w-full rounded-[20px] px-6 sm:px-10 md:px-12 pt-10 pb-10 flex flex-col mb-5">
          {/* Heading */}
          <h2
            className="text-[26px] sm:text-[32px] font-bold text-[#B8912A] text-center leading-tight tracking-[-0.01em] mb-2"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
            Processing Questions
          </h2>
          <p className="text-[13.5px] text-[#888] text-center mb-8">
            Common questions about the 48-hour timeline
          </p>

          {/* Accordion */}
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQ_ITEMS.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="bg-white rounded-[14px] border-0 px-5 overflow-hidden">
                <AccordionTrigger
                  className={cn(
                    "text-[14px] sm:text-[15px] font-medium text-[#1B2B4B] py-5",
                    "hover:no-underline [&[data-state=open]]:text-[#B8912A]",
                    "[&>svg]:text-[#888] [&[data-state=open]>svg]:text-[#B8912A]",
                    "text-left",
                  )}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[13px] sm:text-[13.5px] text-[#6B6B6B] leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
