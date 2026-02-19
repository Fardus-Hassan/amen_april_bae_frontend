import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Camera } from "lucide-react";
import { useState, useRef } from "react";

const DEFAULT_AVATAR =
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&q=80";
function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl px-4 py-6 sm:px-8 sm:py-8">
      {children}
    </div>
  );
}
// ---------- Profile Picture ----------
function ProfilePictureSection() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setPreview(URL.createObjectURL(file));
  };

  return (
    <SectionCard>
      {/* Stack vertically on mobile, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row md:items-start gap-8">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start shrink-0">
          <div className="relative w-[110px] h-[110px] sm:w-[130px] sm:h-[130px]">
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
              <Image
                src={preview ?? DEFAULT_AVATAR}
                alt="avatar"
                width={130}
                height={130}
                className="w-full h-full object-cover"
                unoptimized={!!preview} // blob URLs can't be optimised by Next.js
              />
            </div>
            <button
              onClick={() => fileRef.current?.click()}
              className="absolute bottom-1 right-1 w-9 h-9 rounded-lg bg-[#E8C97E] flex items-center justify-center shadow-md hover:bg-[#d4b56a] transition-colors">
              <Camera size={17} className="text-white" />
            </button>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFile}
            />
          </div>
        </div>

        {/* Fields */}
        <div className="flex-1 min-w-0">
          {/* First name + Last name */}
          <div className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-100">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 font-medium mb-1.5">
                First Name
              </label>
              <Input
                placeholder="John"
                defaultValue=""
                className="rounded-lg border-gray-200 text-gray-500 placeholder:text-gray-400 h-11"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 font-medium mb-1.5">
                Last Name
              </label>
              <Input
                placeholder="Doe"
                defaultValue=""
                className="rounded-lg border-gray-200 text-gray-500 placeholder:text-gray-400 h-11"
              />
            </div>
          </div>

          {/* Location + Email */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 pb-6">
            <div className="flex-1">
              <label className="block text-sm text-gray-700 font-medium mb-1.5">
                Location
              </label>
              <Input
                placeholder="Roma, Italy"
                defaultValue=""
                className="rounded-lg border-gray-200 text-gray-500 placeholder:text-gray-400 h-11"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 font-medium mb-1.5">
                Email
              </label>
              <Input
                placeholder="support@example.com"
                defaultValue=""
                className="rounded-lg border-gray-200 text-gray-500 placeholder:text-gray-400 h-11"
              />
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-5">
            <Button
              variant="outline"
              className="rounded-lg border-gray-300 text-gray-600 px-7 h-11 hover:bg-gray-50">
              Cancel
            </Button>
            <Button className="rounded-lg bg-[#D4A574] hover:bg-[#cf9d68] text-white px-7 h-11 shadow-none">
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

// ---------- Change Password ----------
function ChangePasswordSection() {
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);

  return (
    <SectionCard>
      {/* Stack vertically on mobile, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <span className="text-gray-800 font-medium text-[15px] md:w-40 md:shrink-0 md:pt-8">
          Change Password
        </span>
        <div className="flex flex-col sm:flex-row flex-1 gap-4">
          <div className="flex-1">
            <label className="block text-sm text-gray-500 mb-1.5">
              Old Password
            </label>
            <div className="relative">
              <Input
                type={showOld ? "text" : "password"}
                placeholder="••••••••"
                defaultValue="jonsnow007"
                className="rounded-lg border-gray-200 text-gray-500 placeholder:text-gray-400 h-11 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowOld(!showOld)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showOld ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-500 mb-1.5">
              New Password
            </label>
            <div className="relative">
              <Input
                type={showNew ? "text" : "password"}
                placeholder="••••••••"
                defaultValue=""
                className="rounded-lg border-gray-200 text-gray-500 placeholder:text-gray-400 h-11 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowNew(!showNew)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 pt-6">
        <Button
          variant="outline"
          className="rounded-lg border-gray-300 text-gray-600 px-7 h-11 hover:bg-gray-50">
          Cancel
        </Button>
        <Button className="rounded-lg bg-[#D4A574] hover:bg-[#cf9d68] text-white px-7 h-11 shadow-none">
          Save Changes
        </Button>
      </div>
    </SectionCard>
  );
}

export default function AdminInfoContent() {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <ProfilePictureSection />
      <ChangePasswordSection />
    </div>
  );
}
