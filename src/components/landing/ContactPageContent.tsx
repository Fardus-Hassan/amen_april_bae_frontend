"use client";

import { Building2, Mail, MapPin, Phone } from "lucide-react";

const CONTACT = {
  email: "www.emai1234@gmail.com",
  address: ["4074 Ebert Summit Suite 375", "Lake New Castle."],
  phone: "+441 238 785 6780",
};

export function ContactPageContent() {
  return (
    <section
      className="min-h-[80vh] py-14 sm:py-16 lg:py-20 flex items-center justify-center"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-white shadow-md">
          <div className="grid lg:grid-cols-2">
            {/* Left: Contact info */}
            <div className="border-b border-[#E5E7EB] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:border-[#E5E7EB]">
              <div className="flex flex-col">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.33333 5H40V23.3333H36.6667V8.33333H3.33333V31.6667H23.3333V35H0V5H3.33333ZM16.6667 11.6667H10V18.3333H16.6667V11.6667ZM6.66667 21.6667H20V28.3333H6.66667V21.6667ZM33.3333 11.6667H23.3333V15H33.3333V11.6667ZM23.3333 18.3333H33.3333V21.6667H23.3333V18.3333ZM28.3333 25H23.3333V28.3333H28.3333V25ZM35 35V40H31.6667V35H26.6667V31.6667H31.6667V26.6667H35V31.6667H40V35H35Z" fill="black"/>
</svg>

                <h1 className="mt-5 font-merriweather text-2xl font-bold tracking-tight text-[#1A2B4C] sm:text-3xl">
                  Contact Us
                </h1>
                <p className="mt-3 text-[15px] leading-[1.6] text-[#4A5565] sm:text-base">
                  Simple plans designed to match how deeply you want to explore
                  your heritage.
                </p>
                <ul className="mt-8 flex flex-col gap-6">
                  <li className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#1A2B4C]">
                      <Mail className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </span>
                    <a
                      href={`mailto:${CONTACT.email}`}
                      className="text-[15px] text-[#1A2B4C] hover:underline sm:text-base"
                    >
                      {CONTACT.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#1A2B4C]">
                      <MapPin className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </span>
                    <address className="not-italic text-[15px] leading-snug text-[#1A2B4C] sm:text-base">
                      {CONTACT.address[0]}
                      <br />
                      {CONTACT.address[1]}
                    </address>
                  </li>
                  <li className="flex items-center gap-4">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#1A2B4C]">
                      <Phone className="h-5 w-5 text-primary" strokeWidth={1.5} />
                    </span>
                    <a
                      href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                      className="text-[15px] text-[#1A2B4C] hover:underline sm:text-base"
                    >
                      {CONTACT.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div className="p-8 sm:p-10">
              <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-[#1A2B4C]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Write here"
                    className="w-full rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] px-4 py-3 text-[15px] text-[#1A2B4C] placeholder:text-[#9CA3AF] focus:border-[#C5A065] focus:outline-none focus:ring-1 focus:ring-[#C5A065]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-[#1A2B4C]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Write here"
                    className="w-full rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] px-4 py-3 text-[15px] text-[#1A2B4C] placeholder:text-[#9CA3AF] focus:border-[#C5A065] focus:outline-none focus:ring-1 focus:ring-[#C5A065]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-[#1A2B4C]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Write here"
                    className="w-full resize-y rounded-lg border border-[#E5E7EB] bg-[#F3F4F6] px-4 py-3 text-[15px] text-[#1A2B4C] placeholder:text-[#9CA3AF] focus:border-[#C5A065] focus:outline-none focus:ring-1 focus:ring-[#C5A065]"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-1 w-full rounded-lg bg-[#C5A065] px-4 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#B8935A] focus:outline-none focus:ring-2 focus:ring-[#C5A065] focus:ring-offset-2 sm:text-base"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
