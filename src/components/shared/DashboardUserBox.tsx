"use client";

import Image from "next/image";

export default function DashboardUserBox() {
  return (
    <div className="bg-white rounded">
      <div className="h-12 sm:h-14 flex items-center justify-center px-2 sm:px-3 md:px-4">
        <div className="flex items-center justify-start gap-1 sm:gap-1.5 md:gap-2 w-full">
          <Image
            className="rounded-full flex-shrink-0"
            src="/images/user.jpg"
            alt="User profile picture"
            width={28}
            height={28}
            priority
            sizes="(max-width: 640px) 28px, (max-width: 1024px) 32px, 36px"
          />
          <div className="flex flex-col items-start min-w-0 flex-1">
            <h1 className="text-xs sm:text-sm md:text-base text-primary2 truncate">
              Nahian Khan
            </h1>
            <p className="text-[10px] sm:text-xs md:text-sm font-bold text-subtle">
              Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
