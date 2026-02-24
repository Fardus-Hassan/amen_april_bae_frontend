"use client";

import Image from "next/image";

function VideoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M8 5v14l11-7L8 5z" />
    </svg>
  );
}

function PhotoIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );
}

function HeartIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );
}

function CommentIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function EyeIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function DocumentIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
      <path d="M10 9H8" />
    </svg>
  );
}

export default function CommunityPageContent() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] pb-12 pt-8 sm:pt-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <header className="flex items-start gap-4 sm:gap-5 mb-8 sm:mb-12">
          <div className="shrink-0 mt-1">
            <Image
              src="/images/tree2.png"
              alt="Heritage tree"
              width={64}
              height={64}
              className="h-12 w-12 sm:h-14 sm:w-14 object-contain"
              priority
            />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-merriweather text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2c2419] leading-tight">
              Share Your Story with the Community
            </h1>
            <p className="mt-3 text-sm sm:text-base text-[#4a5565] leading-relaxed max-w-2xl">
              Your story matters. By sharing it, you help preserve memories,
              <br className="hidden sm:block" />
              inspire others, and contribute to a growing community.
            </p>
          </div>
        </header>

        {/* Share input card */}
        <section className="mb-8 sm:mb-10 rounded-2xl bg-white p-4 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className="shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-500">
              J
            </div>

            <div className="flex-1 min-w-0">
              <input
                type="text"
                placeholder="Share your Story"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-[#2d3748] placeholder:text-gray-400 focus:border-[#c5a065] focus:ring-1 focus:ring-[#c5a065] focus:outline-none text-base"
              />

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm sm:text-base text-gray-600 hover:text-[#2c2419] transition-colors"
                >
                  <VideoIcon className="h-5 w-5" />
                  Video
                </button>

                <div className="w-px h-5 bg-gray-300 hidden sm:block" aria-hidden />

                <button
                  type="button"
                  className="flex items-center gap-1.5 text-sm sm:text-base text-gray-600 hover:text-[#2c2419] transition-colors"
                >
                  <PhotoIcon className="h-5 w-5" />
                  Photo
                </button>

                <div className="flex-1 min-w-[120px]" aria-hidden />

                <button
                  type="button"
                  className="rounded-xl bg-[#c5a065] px-6 py-2.5 sm:py-3 font-medium text-white text-sm sm:text-base hover:brightness-105 active:brightness-95 transition-all"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Example story card */}
        <article className="rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
          <div className="flex items-start gap-3 sm:gap-4 mb-4">
            <div className="shrink-0 h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold text-gray-500">
              J
            </div>
            <div>
              <p className="font-semibold text-[#2c2419] text-base sm:text-lg">Jon Snow</p>
              <p className="text-sm text-gray-500 mt-0.5">Dhaka, Bangladesh</p>
            </div>
          </div>

          <p className="text-[#4a5565] text-sm sm:text-base leading-relaxed mb-5">
            Your ancestral journey is a tapestry woven across four remarkable regions of Europe, spanning over 150 years of migration, perseverance, and cultural heritage. From the rolling hills of Tuscany to the rugged coasts of Ireland, from the scholarly streets of Edinburgh to the Alpine villages of Bavaria, your ancestors carved out lives of meaning and left a legacy that lives on in you.
          </p>

          {/* Nested heritage card */}
          <div className="rounded-xl bg-[#e8ecf1] p-4 flex flex-col sm:flex-row gap-4 mb-6">
            <div className="shrink-0 w-full sm:w-28 h-36 sm:h-28 rounded-lg overflow-hidden bg-[#dde1e8]">
              <Image
                src="/images/tree2.png"
                alt="Ancestral tree illustration"
                width={112}
                height={112}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0 flex flex-col justify-center">
              <h3 className="font-bold text-[#2c2419] text-lg sm:text-xl mb-1.5">Ancestral Journey</h3>
              <p className="text-sm text-[#4a5565]">Heritage Story ID: 0000001</p>
              <p className="text-sm text-[#4a5565] mt-0.5">Name: MD Abdul Aziz Reza</p>
            </div>
          </div>

          {/* Stats + button */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-5 sm:gap-6 text-sm text-gray-600">
              <span className="flex items-center gap-1.5">
                <HeartIcon className="h-5 w-5" />
                51.8K
              </span>
              <span className="flex items-center gap-1.5">
                <CommentIcon className="h-5 w-5" />
                4.5K
              </span>
              <span className="flex items-center gap-1.5">
                <EyeIcon className="h-5 w-5" />
                1.9K
              </span>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 rounded-xl bg-[#c5a065] px-5 sm:px-6 py-2.5 sm:py-3 font-medium text-white text-sm sm:text-base hover:brightness-105 active:brightness-95 transition-all"
            >
              <DocumentIcon className="h-5 w-5" />
              Full Preview
            </button>
          </div>
        </article>

      </div>
    </div>
  );
}