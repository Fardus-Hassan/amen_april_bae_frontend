"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Camera } from "lucide-react";
import Image from "next/image";

export default function MyProfileContent() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FAF7F2" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <h1 className="font-merriweather text-2xl sm:text-3xl font-semibold text-[#2c2419] mb-6 sm:mb-8 italic">
          My Profile
        </h1>

        <div className="space-y-4 sm:space-y-6">
          {/* Profile Picture Section */}
          <section className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
            <Label className="text-sm font-medium text-[#2c2419] mb-4 block">
              Profile Picture:
            </Label>
            <div className="relative w-28 h-28 sm:w-32 sm:h-32">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-200">
                {profileImage ? (
                  <Image
                    src={profileImage}
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src="/images/profile-placeholder.jpg"
                    alt="Profile"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <label className="absolute bottom-0 right-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#C5A065] flex items-center justify-center cursor-pointer hover:bg-[#b8934f] transition-colors">
                <Camera className="w-4 h-4 text-white" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
          </section>

          {/* Name Section */}
          <section className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
              <Label className="text-sm font-medium text-[#2c2419] lg:w-32 lg:pt-2 shrink-0">
                Name
              </Label>
              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm text-gray-500">First Name</Label>
                    <Input
                      placeholder="Dylan"
                      defaultValue="Dylan"
                      className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 shadow-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-gray-500">Last Name</Label>
                    <Input
                      placeholder="Herlehy"
                      defaultValue="Herlehy"
                      className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 shadow-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Location & Email Section */}
          <section className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
              <Label className="text-sm font-medium text-[#2c2419] lg:w-32 lg:pt-2 shrink-0">
                Location:
              </Label>
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Input
                      placeholder="Roma, Italy"
                      defaultValue="Roma, Italy"
                      className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 shadow-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-gray-500">Email:</Label>
                    <Input
                      type="email"
                      placeholder="support@example.com"
                      defaultValue="support@example.com"
                      className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 shadow-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 h-10 text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 shadow-none">
                    Cancel
                  </Button>
                  <Button className="rounded-full px-6 h-10 text-sm font-medium bg-[#C5A065] hover:bg-[#b8934f] text-white shadow-none border-0">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Professional Information Section */}
          <section className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
              <Label className="text-sm font-medium text-[#2c2419] lg:w-32 lg:pt-2 shrink-0">
                Professional Information
              </Label>
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm text-gray-500">Company Name</Label>
                    <Input
                      placeholder="jonsnow007"
                      defaultValue="jonsnow007"
                      className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 shadow-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-gray-500">Position</Label>
                    <Input
                      placeholder="Product Designer"
                      defaultValue="Product Designer"
                      className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 shadow-none"
                    />
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 h-10 text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 shadow-none">
                    Cancel
                  </Button>
                  <Button className="rounded-full px-6 h-10 text-sm font-medium bg-[#C5A065] hover:bg-[#b8934f] text-white shadow-none border-0">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Change Password Section */}
          <section className="bg-white rounded-xl p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-8">
              <Label className="text-sm font-medium text-[#2c2419] lg:w-32 lg:pt-2 shrink-0">
                Change Password
              </Label>
              <div className="flex-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label className="text-sm text-gray-500">Old Password</Label>
                    <div className="relative">
                      <Input
                        type={showOldPassword ? "text" : "password"}
                        placeholder="jonsnow007"
                        defaultValue="jonsnow007"
                        className="h-11 rounded-lg border border-gray-200 bg-white px-4 pr-10 text-sm text-gray-400 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 shadow-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowOldPassword(!showOldPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C5A065] hover:text-[#b8934f]">
                        {showOldPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-sm text-gray-500">New Password</Label>
                    <div className="relative">
                      <Input
                        type={showNewPassword ? "text" : "password"}
                        placeholder="••••••••••"
                        defaultValue="password123"
                        className="h-11 rounded-lg border border-gray-200 bg-white px-4 pr-10 text-sm text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 shadow-none"
                      />
                      <button
                        type="button"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                        {showNewPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end gap-3 mt-6">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 h-10 text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 shadow-none">
                    Cancel
                  </Button>
                  <Button className="rounded-full px-6 h-10 text-sm font-medium bg-[#C5A065] hover:bg-[#b8934f] text-white shadow-none border-0">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
