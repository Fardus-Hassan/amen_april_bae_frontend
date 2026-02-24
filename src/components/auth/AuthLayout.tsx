import Image from "next/image";

/**
 * Auth layout per Figma: one rounded card on light gray page.
 * Left = illustration (beige + speckles + image), Right = white form area.
 */
export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full flex flex-col lg:flex-row rounded-2xl ">
        {/* Left: illustration - beige with speckle texture */}
        <div className="relative lg:flex hidden lg:w-[48%] min-h-[200px] lg:min-h-full">
          <div
            className="absolute inset-0 opacity-[0.06]"
            aria-hidden
          />
          <div className="relative w-full flex items-center justify-center p-6 lg:p-8">
            <Image
              src="/images/auth.png"
              alt=""
              width={600}
              height={500}
              className="h-auto max-h-[180px] w-auto object-contain object-center lg:max-h-[85%] lg:w-full"
              priority
            />
          </div>
        </div>

        {/* Right: white form - only this part changes per page */}
        <div className="flex-1 flex items-center justify-center bg-white p-6 sm:p-8 lg:p-10">
          <div className="w-full ">{children}</div>
        </div>
      </div>
    </div>
  );
}
