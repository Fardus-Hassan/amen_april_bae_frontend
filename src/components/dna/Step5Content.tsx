"use client";

import {
  Clock,
  Hourglass,
  ShieldCheck,
  CheckCircle2,
  BookOpen,
  Loader2,
  Upload,
  Dna,
  Shield,
  PenLine,
  UserCheck,
  LayoutDashboard,
  Map,
  FileText,
  Download,
  Database,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

/* ─── Progress card mini-steps ─── */
const miniSteps = [
  {
    icon: <CheckCircle2 size={22} className="text-white" />,
    iconBg: "bg-emerald-400",
    label: "Upload Complete",
    sub: "3 files received",
  },
  {
    icon: <Loader2 size={22} className="text-[#c9a84c] animate-spin" />,
    iconBg: "bg-[#f5f0e8]",
    label: "Currently Processing",
    sub: "DNA analysis phase",
  },
  {
    icon: <BookOpen size={22} className="text-gray-400" />,
    iconBg: "bg-gray-200",
    label: "Narrative Pending",
    sub: "Awaiting analysis",
  },
];

/* ─── Card components ─── */
function UploadCard() {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5 w-full">
      <div className="flex items-start justify-between gap-2 mb-1">
        <div>
          <p className="font-bold text-[#0f1f38] text-base">Upload Received</p>
          <p className="text-[10px] font-bold tracking-widest text-emerald-500 uppercase mt-0.5">
            Completed
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 shrink-0">
          <Upload size={16} className="text-emerald-500" />
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        Your DNA file and 2 supporting documents have been securely uploaded and
        encrypted.
      </p>
      <div className="mt-3 space-y-1.5">
        {[
          "AncestryDNA raw data (2.4 MB)",
          "Family photo album (8.2 MB)",
          "Birth certificate scan (1.1 MB)",
        ].map((f) => (
          <div
            key={f}
            className="flex items-center justify-between text-xs text-gray-600">
            <span>{f}</span>
            <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-3 text-right">
        Completed: Today at 9:42 AM
      </p>
    </div>
  );
}

function ParsingCard() {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5 w-full">
      <div className="flex items-start gap-3 mb-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 shrink-0">
          <Dna size={16} className="text-[#c9a84c]" />
        </div>
        <div>
          <p className="font-bold text-[#0f1f38] text-base">Parsing DNA File</p>
          <p className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase mt-0.5">
            In Progress
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        Our systems are extracting and validating genetic markers from your raw
        DNA data.
      </p>
      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>SNP Markers Extracted</span>
          <span className="font-semibold text-[#0f1f38]">
            487,234 / 700,000
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-[#c9a84c]"
            style={{ width: "70%" }}
          />
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2 rounded-lg bg-amber-50 px-3 py-2">
        <span className="mt-0.5 h-2 w-2 rounded-full bg-[#c9a84c] shrink-0" />
        <p className="text-xs text-gray-600">
          Processing approximately 12,000 markers per minute
        </p>
      </div>
      <p className="text-[10px] text-gray-400 mt-3">
        Started: Today at 10:15 AM &bull; Est. completion: 12:30 PM
      </p>
    </div>
  );
}

function VerificationCard() {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5 w-full opacity-80">
      <div className="flex items-start justify-between gap-2 mb-1">
        <div>
          <p className="font-bold text-[#0f1f38] text-base">
            Source Verification
          </p>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-0.5">
            Pending
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 shrink-0">
          <Shield size={16} className="text-gray-400" />
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        Cross-referencing your DNA data with historical records, census data,
        and migration patterns.
      </p>
      <div className="mt-3 space-y-1.5">
        {[
          "AncestryDNA raw data (2.4 MB)",
          "Family photo album (8.2 MB)",
          "Birth certificate scan (1.1 MB)",
        ].map((f) => (
          <div
            key={f}
            className="flex items-center justify-between text-xs text-gray-500">
            <span>{f}</span>
            <div className="h-3.5 w-3.5 rounded-full border border-gray-300 shrink-0" />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-3 text-right">
        Scheduled to begin: Today at 1:00 PM
      </p>
    </div>
  );
}

function NarrativeCard() {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5 w-full opacity-80">
      <div className="flex items-start gap-3 mb-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 shrink-0">
          <BookOpen size={16} className="text-gray-400" />
        </div>
        <div>
          <p className="font-bold text-[#0f1f38] text-base">Narrative Draft</p>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-0.5">
            Pending
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        AI-powered narrative generation combining your DNA insights with
        historical context and family documents.
      </p>
      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>SNP Markers Extracted</span>
          <span className="font-semibold text-[#0f1f38]">
            487,234 / 700,000
          </span>
        </div>
        <div className="h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <div
            className="h-full rounded-full bg-gray-300"
            style={{ width: "70%" }}
          />
        </div>
      </div>
      <div className="mt-3 flex items-start gap-2 rounded-lg bg-gray-50 px-3 py-2">
        <span className="mt-0.5 h-2 w-2 rounded-full bg-gray-300 shrink-0" />
        <p className="text-xs text-gray-500">
          Your story will be crafted in a compelling narrative format, weaving
          together genetic ancestry, migration patterns, and family history.
        </p>
      </div>
      <p className="text-[10px] text-gray-400 mt-3">
        Scheduled to begin: Today at 6:00 PM
      </p>
    </div>
  );
}

function ReviewCard() {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5 w-full opacity-80">
      <div className="flex items-start justify-between gap-2 mb-1">
        <div>
          <p className="font-bold text-[#0f1f38] text-base">
            Genealogist Review
          </p>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-0.5">
            Pending
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 shrink-0">
          <UserCheck size={16} className="text-gray-400" />
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        A certified professional genealogist will review, fact-check, and
        enhance your heritage narrative.
      </p>
      <div className="mt-3 flex items-center gap-3 rounded-lg bg-gray-50 px-3 py-2">
        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
          <UserCheck size={16} className="text-gray-400" />
        </div>
        <div>
          <p className="text-xs font-semibold text-[#0f1f38]">
            Sarah Mitchell, PhD
          </p>
          <p className="text-[10px] text-gray-500">Senior Genealogist</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-1.5 text-[10px] text-gray-500">
        <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
        15+ years experience &bull; European ancestry specialist
      </div>
      <p className="text-[10px] text-gray-400 mt-3 text-right">
        Scheduled to begin: Tomorrow at 10:00 AM
      </p>
    </div>
  );
}

function ReadyCard() {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5 w-full opacity-80">
      <div className="flex items-start gap-3 mb-1">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 shrink-0">
          <LayoutDashboard size={16} className="text-gray-400" />
        </div>
        <div>
          <p className="font-bold text-[#0f1f38] text-base">Ready for You</p>
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mt-0.5">
            Pending
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-2 leading-relaxed">
        Your complete heritage narrative will be delivered to your Digital
        Archivis Dashboard, ready to explore and share.
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {[
          { icon: <FileText size={12} />, label: "Full narrative" },
          { icon: <Map size={12} />, label: "Ancestry map" },
          { icon: <Dna size={12} />, label: "DNA matches" },
          { icon: <Download size={12} />, label: "Export options" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-2 text-[11px] text-gray-500">
            {item.icon}
            {item.label}
          </div>
        ))}
      </div>
      <p className="text-[10px] text-gray-400 mt-3">
        Expected completion: Tomorrow at 3:00 PM
      </p>
    </div>
  );
}

/* ─── Timeline config ─── */
const timelineSteps = [
  {
    id: 1,
    side: "left" as const,
    status: "completed" as const,
    nodeBg: "bg-emerald-400",
    nodeBorder: "border-emerald-300",
    nodeIcon: <CheckCircle2 size={24} className="text-white" />,
    card: <UploadCard />,
  },
  {
    id: 2,
    side: "right" as const,
    status: "active" as const,
    nodeBg: "bg-white",
    nodeBorder: "border-[#c9a84c]",
    nodeIcon: <Loader2 size={22} className="text-[#c9a84c] animate-spin" />,
    card: <ParsingCard />,
  },
  {
    id: 3,
    side: "left" as const,
    status: "pending" as const,
    nodeBg: "bg-gray-100",
    nodeBorder: "border-gray-300",
    nodeIcon: <Shield size={20} className="text-gray-400" />,
    card: <VerificationCard />,
  },
  {
    id: 4,
    side: "right" as const,
    status: "pending" as const,
    nodeBg: "bg-gray-100",
    nodeBorder: "border-gray-300",
    nodeIcon: <PenLine size={20} className="text-gray-400" />,
    card: <NarrativeCard />,
  },
  {
    id: 5,
    side: "left" as const,
    status: "pending" as const,
    nodeBg: "bg-gray-100",
    nodeBorder: "border-gray-300",
    nodeIcon: <UserCheck size={20} className="text-gray-400" />,
    card: <ReviewCard />,
  },
  {
    id: 6,
    side: "right" as const,
    status: "pending" as const,
    nodeBg: "bg-gray-100",
    nodeBorder: "border-gray-300",
    nodeIcon: <LayoutDashboard size={20} className="text-gray-400" />,
    card: <ReadyCard />,
  },
];

export default function Step5Content() {
  const progress = 45;

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* ── Hero section ── */}
      <div className="flex w-full items-center justify-center bg-[#0f1f38] px-4 pt-14 pb-24 sm:pt-20 sm:pb-32">
        <div className="flex flex-col items-center gap-4 sm:gap-6 text-center max-w-2xl w-full">
          <div className="flex items-center gap-2 rounded-full bg-[#1a2e4a] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-[#4ade80]">
            <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse shrink-0" />
            Processing In Progress
          </div>
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug px-2">
            Your Heritage Story is Being Crafted
          </h1>
          <p className="text-sm sm:text-base text-[#c9a84c] leading-relaxed max-w-lg px-2">
            Our team of professional genealogists and AI systems are analyzing
            your DNA data and documents. This typically takes 48 hours.
          </p>
          {/* Stats pills — stack on xs, row on sm+ */}
          <div className="flex flex-col lg:flex-row  items-center justify-center gap-2 sm:gap-3 w-full mt-2 px-2">
            <div className="flex items-center gap-2.5 rounded-full bg-[#1a2e4a] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white w-full xs:w-auto justify-center">
              <Clock size={16} className="text-[#c9a84c] shrink-0" />
              Started 6 hours ago
            </div>
            <div className="flex items-center gap-2.5 rounded-full bg-[#1a2e4a] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white w-full xs:w-auto justify-center">
              <Hourglass size={16} className="text-[#c9a84c] shrink-0" />
              42 hours remaining
            </div>
            <div className="flex items-center gap-2.5 rounded-full bg-[#1a2e4a] px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-medium text-white w-full xs:w-auto justify-center">
              <ShieldCheck size={16} className="text-[#c9a84c] shrink-0" />
              Secure Processing
            </div>
          </div>
        </div>
      </div>

      {/* ── Progress card ── */}
      <div className="px-4 sm:px-6 lg:px-8 pb-10 sm:pb-12 sm:pb-16 -mt-14 sm:-mt-16">
        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-[#f7f4ec] p-5 sm:p-6 sm:p-8 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0f1f38] leading-tight">
                Overall Processing Progress
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-gray-500">
                Your heritage analysis is 35% complete
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xl xs:text-2xl sm:text-3xl font-bold text-[#c9a84c]">
                {progress}%
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Complete</p>
            </div>
          </div>
          <div className="mt-5 sm:mt-6 h-3 w-full rounded-full bg-[#0f1f38] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#c9a84c] transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          {/* Mini steps — 1 col on xs, 3 col on sm+ */}
          <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row items-start lg:items-center lg:justify-between gap-4 sm:gap-6 max-w-2xl mx-auto">
            {miniSteps.map((step) => (
              <div
                key={step.label}
                className="flex flex-row lg:flex-col items-center gap-3 text-center">
                <div
                  className={`flex h-10 w-10 xs:h-12 xs:w-12 items-center justify-center rounded-xl shrink-0 ${step.iconBg}`}>
                  {step.icon}
                </div>
                <div className="text-left lg:text-center">
                  <p className="text-sm font-semibold text-[#0f1f38]">
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 48-Hour Timeline ── */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 sm:mb-12 sm:mb-16">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-[#0f1f38]">
              48-Hour Processing Timeline
            </h2>
            <p className="mt-2 text-sm text-[#c9a84c]">
              Your heritage analysis is 35% complete
            </p>
          </div>

          {/* ── Desktop alternating timeline ── */}
          <div className="hidden md:block relative">
            {/* Center vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#c9a84c]/35 -translate-x-1/2" />

            <div className="flex flex-col gap-16">
              {timelineSteps.map((step) => (
                <div key={step.id} className="relative flex items-center">
                  {/* Left slot */}
                  <div className="w-[calc(50%-32px)] pr-6 flex justify-end">
                    {step.side === "left" && step.card}
                  </div>

                  {/* Center node */}
                  <div className="shrink-0 z-10 flex items-center justify-center">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full border-4 shadow-md ${step.nodeBg} ${step.nodeBorder}`}>
                      {step.nodeIcon}
                    </div>
                  </div>

                  {/* Right slot */}
                  <div className="w-[calc(50%-32px)] pl-6 flex justify-start">
                    {step.side === "right" && step.card}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Mobile single-column timeline ── */}
          <div className="md:hidden relative">
            {/* Left vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#c9a84c]/35" />

            <div className="flex flex-col gap-6 sm:gap-8">
              {timelineSteps.map((step) => (
                <div
                  key={step.id}
                  className="relative flex items-start gap-3 sm:gap-4">
                  {/* Node */}
                  <div className="shrink-0 z-10">
                    <div
                      className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-4 shadow-md ${step.nodeBg} ${step.nodeBorder}`}>
                      {step.nodeIcon}
                    </div>
                  </div>
                  {/* Card */}
                  <div className="flex-1 pt-1 min-w-0">{step.card}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── While You Wait: Understanding the Process ── */}
      <div className="w-full pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 max-w-6xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-tight text-[#1e3a5f]">
            While You Wait: Understanding the Process
          </h2>
          <p className="mt-3 text-[14px] text-gray-400">
            Learn what happens behind the scenes during your heritage analysis
          </p>
        </div>

        {/* 3 Cards — 1 col on mobile, 3 col on md+ */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Card 1 — DNA Analysis */}
          <div className="bg-[#F9F7F2] rounded-2xl p-5 sm:p-7 flex flex-col">
            <div className="h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] rounded-xl bg-[#dbeafe] flex items-center justify-center mb-4 sm:mb-5">
              <Users size={28} className="text-blue-600" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-extrabold text-[#0f1f38] leading-snug mb-2 sm:mb-3">
              DNA Analysis Explained
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-4 sm:mb-5">
              Your DNA file contains hundreds of thousands of genetic markers
              (SNPs). We analyze these to determine your ethnic composition,
              migration patterns, and potential relative matches.
            </p>
            <ul className="flex flex-col gap-2.5 sm:gap-3 mt-auto">
              {[
                "Autosomal DNA for ethnicity estimates",
                "Y-DNA for paternal lineage (if available)",
                "mtDNA for maternal lineage",
                "Haplogroup identification",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] text-gray-700">
                  <CheckCircle2
                    size={15}
                    className="text-blue-500 shrink-0 mt-[2px]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Historical Record Matching */}
          <div className="bg-[#F9F7F2] rounded-2xl p-5 sm:p-7 flex flex-col">
            <div className="h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] rounded-xl bg-[#ede9fe] flex items-center justify-center mb-4 sm:mb-5">
              <Database size={26} className="text-violet-600" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-extrabold text-violet-700 leading-snug mb-2 sm:mb-3">
              Historical Record
              <br />
              Matching
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-4 sm:mb-5">
              We cross-reference your genetic data with millions of historical
              records to build a verified family tree and uncover your
              ancestors&apos; stories.
            </p>
            <ul className="flex flex-col gap-2.5 sm:gap-3 mt-auto">
              {[
                "Census records (1790-1950)",
                "Immigration & naturalization documents",
                "Birth, marriage, death certificates",
                "Military service records",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] text-gray-700">
                  <CheckCircle2
                    size={15}
                    className="text-violet-500 shrink-0 mt-[2px]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 — Narrative Crafting */}
          <div className="bg-[#F9F7F2] rounded-2xl p-5 sm:p-7 flex flex-col sm:col-span-2 md:col-span-1">
            <div className="h-[56px] w-[56px] sm:h-[64px] sm:w-[64px] rounded-xl bg-[#fef3c7] flex items-center justify-center mb-4 sm:mb-5">
              <BookOpen size={26} className="text-amber-600" />
            </div>
            <h3 className="text-[17px] sm:text-[19px] font-extrabold text-[#0f1f38] leading-snug mb-2 sm:mb-3">
              Narrative Crafting
            </h3>
            <p className="text-[13px] text-gray-500 leading-relaxed mb-4 sm:mb-5">
              Our AI and genealogists collaborate to transform raw data into a
              compelling, readable story that brings your heritage to life with
              historical context.
            </p>
            <ul className="flex flex-col gap-2.5 sm:gap-3 mt-auto">
              {[
                "Chronological family narrative",
                "Historical context integration",
                "Migration journey mapping",
                "Cultural heritage insights",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[13px] text-gray-700">
                  <CheckCircle2
                    size={15}
                    className="text-amber-500 shrink-0 mt-[2px]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Processing Questions */}
      <div className="w-full pt-10 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 max-w-6xl mx-auto">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[40px] font-extrabold leading-tight text-[#1e3a5f]">
            Processing Questions
          </h2>
          <p className="mt-3 text-[14px] text-gray-400">
            Learn what happens behind the scenes during your heritage analysis
          </p>

          {/* Accordion */}
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-3 mt-6 text-left">
            {[
              {
                question: "Why does processing take 48 hours?",
                answer: "Details about why processing takes 48 hours.",
              },
              {
                question: "Can I speed up the process?",
                answer: "Details on whether the process can be sped up.",
              },
              {
                question: "What if processing takes longer than 48 hours?",
                answer:
                  "Information about what happens if processing exceeds 48 hours.",
              },
              {
                question: "Can I see partial results before it's complete?",
                answer:
                  "Explanation of whether partial results are visible during the process.",
              },
              {
                question: "What happens after the 48 hours?",
                answer:
                  "Details about the steps or actions taken after 48 hours.",
              },
              {
                question: "Is my data safe during processing?",
                answer:
                  "Assurances regarding data safety during the processing period.",
              },
            ].map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-[#F9F7F2] rounded-[14px] border-0 px-4 sm:px-5 overflow-hidden">
                <AccordionTrigger
                  className={cn(
                    "text-[13px] xs:text-[14px] sm:text-[15px] font-medium text-[#1B2B4B] py-4 sm:py-5",
                    "hover:no-underline [&[data-state=open]]:text-[#B8912A]",
                    "[&>svg]:text-[#888] [&[data-state=open]>svg]:text-[#B8912A]",
                    "text-left",
                  )}>
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[12px] xs:text-[13px] sm:text-[13.5px] text-[#6B6B6B] leading-relaxed pb-4 sm:pb-5">
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
