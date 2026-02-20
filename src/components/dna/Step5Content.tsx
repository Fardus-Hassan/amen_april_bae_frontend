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
} from "lucide-react";

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
    <div className="w-full bg-white">
      {/* ── Hero section ── */}
      <div className="flex w-full items-center justify-center bg-[#0f1f38] px-4 pt-14 pb-24 sm:pt-20 sm:pb-32">
        <div className="flex flex-col items-center gap-6 text-center max-w-2xl w-full">
          <div className="flex items-center gap-2 rounded-full bg-[#1a2e4a] px-5 py-2.5 text-sm font-semibold text-[#4ade80]">
            <span className="h-2 w-2 rounded-full bg-[#4ade80] animate-pulse" />
            Processing In Progress
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
            Your Heritage Story is Being Crafted
          </h1>
          <p className="text-sm sm:text-base text-[#c9a84c] leading-relaxed max-w-lg">
            Our team of professional genealogists and AI systems are analyzing
            your DNA data and documents. This typically takes 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full mt-2">
            <div className="flex items-center gap-2.5 rounded-full bg-[#1a2e4a] px-5 py-3 text-sm font-medium text-white w-full sm:w-auto justify-center">
              <Clock size={18} className="text-[#c9a84c] shrink-0" />
              Started 6 hours ago
            </div>
            <div className="flex items-center gap-2.5 rounded-full bg-[#1a2e4a] px-5 py-3 text-sm font-medium text-white w-full sm:w-auto justify-center">
              <Hourglass size={18} className="text-[#c9a84c] shrink-0" />
              42 hours remaining
            </div>
            <div className="flex items-center gap-2.5 rounded-full bg-[#1a2e4a] px-5 py-3 text-sm font-medium text-white w-full sm:w-auto justify-center">
              <ShieldCheck size={18} className="text-[#c9a84c] shrink-0" />
              Secure Processing
            </div>
          </div>
        </div>
      </div>

      {/* ── Progress card ── */}
      <div className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 -mt-14 sm:-mt-16">
        <div className="w-full max-w-6xl mx-auto rounded-2xl bg-[#f7f4ec] p-6 sm:p-8 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0f1f38] leading-tight">
                Overall Processing Progress
              </h2>
              <p className="mt-1.5 text-sm text-gray-500">
                Your heritage analysis is 35% complete
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-2xl sm:text-3xl font-bold text-[#c9a84c]">
                {progress}%
              </p>
              <p className="text-xs text-gray-400 mt-0.5">Complete</p>
            </div>
          </div>
          <div className="mt-6 h-3 w-full rounded-full bg-[#0f1f38] overflow-hidden">
            <div
              className="h-full rounded-full bg-[#c9a84c] transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {miniSteps.map((step) => (
              <div
                key={step.label}
                className="flex flex-col items-center gap-3 text-center">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${step.iconBg}`}>
                  {step.icon}
                </div>
                <div>
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
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f1f38]">
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
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#c9a84c]/35" />

            <div className="flex flex-col gap-8">
              {timelineSteps.map((step) => (
                <div key={step.id} className="relative flex items-start gap-4">
                  {/* Node */}
                  <div className="shrink-0 z-10">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-4 shadow-md ${step.nodeBg} ${step.nodeBorder}`}>
                      {step.nodeIcon}
                    </div>
                  </div>
                  {/* Card */}
                  <div className="flex-1 pt-1">{step.card}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
