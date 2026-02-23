import Image from "next/image";

/**
 * Reusable auth layout: left = image, right = centered content.
 * Use this so every auth page only needs to provide the right-side section.
 */
export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-[#f0f0f0]">
      {/* Left: image (on mobile = top strip, on desktop = half width) */}
      <div className="relative flex lg:w-1/2 min-h-[200px] lg:min-h-screen bg-landing-badge-bg overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
          aria-hidden
        />
        <div className="relative w-full flex items-center justify-center p-6 lg:p-8 lg:h-full">
          <Image
            src="/images/auth.png"
            alt=""
            width={600}
            height={500}
            className="h-auto max-h-[180px] w-auto object-contain object-center lg:max-h-[85vh] lg:w-full"
            priority
          />
        </div>
      </div>

      {/* Right: centered section - only this part changes per page */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8 min-h-screen lg:min-h-0">
        <div className="w-full max-w-md">{children}</div>
      </div>
    </div>
  );
}
