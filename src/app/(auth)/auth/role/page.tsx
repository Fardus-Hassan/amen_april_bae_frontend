"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Role = "regular" | "genealogist";

const roles: { id: Role; title: string; description: string }[] = [
  {
    id: "regular",
    title: "Regular User",
    description:
      "Explore your DNA, generate ancestral stories, purchase plans, and share your heritage journey with the community.",
  },
  {
    id: "genealogist",
    title: "Genealogist",
    description:
      "Join as a verified expert to review, comment on, and enrich community stories with professional genealogical insights.",
  },
];

function PersonIcon({ className = "" }: { className?: string }) {
  return (
<svg width="70" height="50" viewBox="0 0 126 123" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8961_34419)">
<path d="M50.1653 59.2803H75.6163C96.5717 59.2803 113.547 75.7708 113.547 96.1274V106.628C113.547 115.219 106.374 122.188 97.5298 122.188H28.2518C19.4078 122.188 12.2344 115.219 12.2344 106.628V96.1274C12.2344 75.7708 29.2099 59.2803 50.1653 59.2803Z" fill="#162A45"/>
<path d="M62.8913 52.4547C77.8023 52.4547 89.8901 40.7123 89.8901 26.2274C89.8901 11.7424 77.8023 0 62.8913 0C47.9803 0 35.8926 11.7424 35.8926 26.2274C35.8926 40.7123 47.9803 52.4547 62.8913 52.4547Z" fill="#162A45"/>
</g>
<defs>
<clipPath id="clip0_8961_34419">
<rect width="125.781" height="122.188" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}

function GenealogistIcon({ className = "" }: { className?: string }) {
  return (
<svg width="70" height="50" viewBox="0 0 126 126" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8961_34425)">
<path d="M92.5293 37.1407C91.8325 36.0652 90.9877 35.3321 90.2011 34.8361C90.1971 33.5011 90.109 31.6131 89.7914 29.4356C90.006 26.8375 90.7558 12.5314 82.0028 6.08127C76.604 2.10266 70.5923 0 64.6181 0C59.7625 0 55.1383 1.37991 51.5964 3.88538C48.4068 6.14227 46.6499 8.5971 45.72 10.3252C42.9694 10.4224 37.2708 11.5439 34.7504 18.81C32.3657 25.6831 34.2912 29.9293 35.7073 31.8973C35.6147 33.0355 35.5813 34.0362 35.579 34.8355C34.7924 35.3316 33.9476 36.0647 33.2508 37.1402C31.6741 39.5737 31.4059 42.8371 32.4532 46.8416C34.4114 54.3292 38.981 55.9773 41.4192 56.3081C42.9211 59.3108 46.2218 65.4473 49.5248 68.5305C50.8443 69.762 52.5597 70.8012 54.6233 71.6207C57.2571 72.6657 60.0387 73.1956 62.8901 73.1956C65.7414 73.1956 68.5231 72.6657 71.1568 71.6207C73.2204 70.8012 74.9358 69.762 76.2553 68.5305C79.5583 65.4473 82.859 59.3108 84.3609 56.3081C86.7985 55.9773 91.3681 54.3286 93.3269 46.841C94.3742 42.8376 94.1061 39.5737 92.5293 37.1407ZM87.7595 45.3857C86.566 49.9501 84.4329 50.6314 83.267 50.6314C83.1842 50.6314 83.122 50.6268 83.0852 50.6239C81.7536 50.2873 80.5222 50.987 79.9398 52.2398C78.8004 54.6889 75.2108 61.6344 72.329 64.3246C71.5366 65.0641 70.4278 65.7201 69.034 66.2731C65.1233 67.825 60.6562 67.825 56.7461 66.2731C55.3523 65.7201 54.2435 65.0641 53.4511 64.3246C50.5693 61.6344 46.9797 54.6889 45.8403 52.2398C45.3558 51.1982 44.4241 50.5405 43.3578 50.5405C43.1415 50.5405 42.9193 50.5675 42.6943 50.6245C42.6575 50.628 42.5954 50.632 42.5131 50.632C41.3478 50.632 39.2146 49.9501 38.0206 45.3868C37.4331 43.1409 37.4383 41.3495 38.0344 40.3437C38.3814 39.759 38.874 39.5622 39.0351 39.5116C40.579 39.3441 41.5089 37.9924 41.38 36.4347C41.3772 36.3967 41.2765 35.0594 41.4042 33.024C43.3843 32.173 46.5481 30.4944 49.2152 27.6137C50.5727 26.1469 51.5659 24.3498 52.2731 22.7012C54.2015 24.2756 56.9313 26.1256 60.5434 27.7242C66.73 30.4622 79.0939 31.7644 84.3132 32.2092C84.529 34.6934 84.403 36.3886 84.3995 36.4289C84.2637 37.9913 85.1953 39.3441 86.7444 39.5116C86.9055 39.5622 87.3981 39.7596 87.7451 40.3437C88.3418 41.349 88.347 43.1403 87.7595 45.3857ZM106.21 83.8131L81.055 73.7515C80.3311 73.4626 79.5215 73.4793 78.8091 73.7976C78.0978 74.1169 77.546 74.7114 77.2813 75.4445L70.9577 92.9275L69.7056 89.3276L71.6978 84.4576C72.0603 83.5703 71.9579 82.5604 71.4233 81.764C70.8887 80.9681 69.9933 80.4905 69.0346 80.4905H56.7461C55.7874 80.4905 54.8914 80.9681 54.3574 81.764C53.8228 82.5604 53.7204 83.5703 54.0829 84.4576L56.0751 89.3276L54.8229 92.9275L48.4994 75.4445C48.2347 74.7114 47.6828 74.1163 46.9716 73.7976C46.2592 73.4788 45.449 73.4621 44.7256 73.7515L19.5696 83.8131C11.8449 86.9027 6.85352 94.2758 6.85352 102.596V122.904C6.85352 124.493 8.14193 125.781 9.73072 125.781H116.049C117.638 125.781 118.927 124.493 118.927 122.904V102.596C118.927 94.2758 113.935 86.9032 106.21 83.8131ZM105.336 110.898C105.336 112.487 104.048 113.775 102.459 113.775H83.1416C81.5528 113.775 80.2644 112.487 80.2644 110.898V101.927C80.2644 100.338 81.5528 99.0497 83.1416 99.0497H102.459C104.048 99.0497 105.336 100.338 105.336 101.927V110.898Z" fill="#162A45"/>
</g>
<defs>
<clipPath id="clip0_8961_34425">
<rect width="125.781" height="125.781" fill="white"/>
</clipPath>
</defs>
</svg>

  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className} aria-hidden>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function RoleSelectionPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<Role>("genealogist");

  const handleNext = () => {
    router.push("/");
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-4 sm:py-6">
      <h1 className="text-center text-xl font-bold text-[#1A2B4C] sm:text-2xl mb-8 sm:mb-10">
        What role do you have?
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {roles.map((role) => {
          const isSelected = selected === role.id;
          return (
            <button
              key={role.id}
              type="button"
              onClick={() => setSelected(role.id)}
              className={`relative flex flex-col items-center rounded-2xl bg-white p-5 sm:p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all ${
                isSelected
                  ? "border-2 border-[#1A2B4C]"
                  : "border-2 border-white hover:border-gray-300"
              }`}
            >
              {isSelected && (
                <span
                  className="absolute top-3 right-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#1A2B4C] text-white"
                  aria-hidden
                >
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
              )}
              <span className="text-[#1A2B4C] mb-4 shrink-0">
                {role.id === "regular" ? (
                  <PersonIcon className="h-full w-full" />
                ) : (
                  <GenealogistIcon className="h-full w-full" />
                )}
              </span>
              <h2 className="text-base font-bold text-[#1A2B4C] sm:text-lg mb-2 text-center">
                {role.title}
              </h2>
              <p className="text-sm text-[#6B7280] leading-snug text-center">
                {role.description}
              </p>
            </button>
          );
        })}
      </div>

      <div className="mt-8 sm:mt-10 flex justify-center">
        <button
          type="button"
          onClick={handleNext}
          className="w-full sm:w-auto min-w-[200px] rounded-xl bg-[#1A2B4C] px-8 py-3.5 font-medium text-white shadow-[0_2px_8px_rgba(26,43,76,0.3)] hover:opacity-90 transition-opacity"
        >
          NEXT →
        </button>
      </div>
    </div>
  );
}
