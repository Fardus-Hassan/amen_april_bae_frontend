"use client";

export default function PageTitle({ text }: { text: string }) {
  return (
    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 capitalize">
      {text}
    </h1>
  );
}
