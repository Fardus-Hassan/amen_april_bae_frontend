"use client";

import Image from "next/image";

export default function DashboardUserBox() {
  return (
    <div className="bg-white w-auto rounded">
      <div className="h-[58px] flex items-center justify-center px-2 sm:px-4">
        <div className="flex items-center justify-start gap-1.5 sm:gap-2">
          <Image
            className="rounded-full"
            src="/images/user.jpg"
            alt="User profile picture"
            width={36}
            height={36}
            priority
          />
          <div className="flex flex-col items-start min-w-0">
            <h1 className="text-sm sm:text-base text-primary2 truncate max-w-[120px] sm:max-w-none">
              Nahian Khan
            </h1>
            <p className="text-xs sm:text-sm font-bold text-subtle">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
