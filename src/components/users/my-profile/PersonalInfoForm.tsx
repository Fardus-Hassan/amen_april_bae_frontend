"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, UploadIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function PersonalInfoForm() {
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [calendarOpen, setCalendarOpen] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setUploadedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="w-full bg-white rounded-2xl p-8">
      {/* Title */}
      <h1 className="text-2xl font-semibold text-gray-900 mb-7">
        Personal Information
      </h1>

      <div className="space-y-5">
        {/* First Name & Last Name */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-800">
              First Name
            </Label>
            <Input
              placeholder="Dylan"
              className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:border-gray-300 shadow-none"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-800">
              Last Name
            </Label>
            <Input
              placeholder="Herlehy"
              className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:border-gray-300 shadow-none"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label className="text-sm font-medium text-gray-800">Email:</Label>
          <Input
            type="email"
            placeholder="support@example.com"
            className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:border-gray-300 shadow-none"
          />
        </div>

        {/* Phone Number & Date of Birth */}
        <div className="grid grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-800">
              Phone Number
            </Label>
            <Input
              type="tel"
              placeholder="+1 (555) 123-4567"
              className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:border-gray-300 shadow-none"
            />
          </div>
          <div className="space-y-1.5">
            <Label className="text-sm font-medium text-gray-800">
              Date Of Birth
            </Label>
            <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
              <PopoverTrigger asChild>
                <button
                  type="button"
                  className={cn(
                    "flex h-11 w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 text-sm shadow-none transition-colors hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-gray-300",
                    !date && "text-gray-400",
                  )}>
                  {date ? format(date, "MM/dd/yyyy") : "06/15/1985"}
                  <CalendarIcon className="h-4 w-4 text-gray-400 shrink-0" />
                </button>
              </PopoverTrigger>
              <PopoverContent
                className="p-0 rounded-lg shadow-lg border border-gray-200"
                align="start"
                style={{ width: "var(--radix-popover-trigger-width)" }}>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    setCalendarOpen(false);
                  }}
                  captionLayout="dropdown"
                  fromYear={1920}
                  toYear={new Date().getFullYear()}
                  initialFocus
                  className="w-full"
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Address */}
        <div className="space-y-1.5">
          <Label className="text-sm font-medium text-gray-800">Address</Label>
          <Input
            placeholder="Roma, Italy"
            className="h-11 rounded-lg border border-gray-200 bg-white px-4 text-sm placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300 focus-visible:border-gray-300 shadow-none"
          />
        </div>

        {/* Upload Company Logo */}
        <div className="space-y-1.5">
          <Label className="text-sm font-medium text-gray-800">
            Upload company logo
          </Label>
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setDragOver(true);
            }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            className={`relative flex flex-col items-center justify-center gap-2 h-[110px] rounded-lg border-2 border-dashed transition-colors cursor-pointer
                ${
                  dragOver
                    ? "border-amber-400 bg-amber-50"
                    : "border-gray-200 bg-gray-50 hover:bg-gray-100"
                }`}>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Uploaded logo"
                className="h-16 w-auto object-contain rounded"
              />
            ) : (
              <>
                <div className="h-9 w-9 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                  <UploadIcon
                    className="h-4 w-4 text-gray-600"
                    strokeWidth={2}
                  />
                </div>
                <span className="text-sm text-gray-500">Upload A picture</span>
              </>
            )}
          </div>
          {uploadedFile && (
            <p className="text-xs text-gray-400 mt-1">{uploadedFile.name}</p>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 mt-8">
        <Button
          variant="outline"
          className="rounded-full px-7 h-11 text-sm font-medium border-gray-300 text-gray-700 hover:bg-gray-50 shadow-none">
          Cancel
        </Button>
        <Button className="rounded-full px-7 h-11 text-sm font-medium bg-[#C5A065] hover:bg-[#c29753] text-white shadow-none border-0">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
