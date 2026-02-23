"use client";

import { useMemo, useState } from "react";
import CustomPagination from "@/components/shared/CustomPagination";
import PageTitle from "@/components/shared/PageTitle";
import { Input } from "@/components/ui/input";
import SavedContent from "@/components/users/saved/SavedContent";
import { Search } from "lucide-react";

const heritageExperiences = [
  {
    title: "Kyoto & Nara",
    imageUrl:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=400&q=80",
    imageAlt: "Kyoto & Nara",
    heritageLabel: "Japanese Heritage",
    heritagePercent: 22,
    country: "Japan",
    description:
      "Reconnect with your ancestral roots in ancient Japan. Visit centuries-old temples, explore traditional tea houses, and trace your family lineage through preserved municipal records.",
    daysRecommended: 6,
    bestTime: "March–May or October–November",
  },
  {
    title: "Galway & County Clare",
    imageUrl:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&q=80",
    imageAlt: "Galway & County Clare",
    heritageLabel: "Irish Heritage",
    heritagePercent: 18,
    country: "Ireland",
    description:
      "Discover the rugged landscapes of western Ireland where your ancestors once farmed and fished.",
    daysRecommended: 5,
    bestTime: "May–September",
  },
  {
    title: "Seville & Andalusia",
    imageUrl:
      "https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=400&q=80",
    imageAlt: "Seville & Andalusia",
    heritageLabel: "Spanish Heritage",
    heritagePercent: 26,
    country: "Spain",
    description:
      "Step into the vibrant culture of southern Spain and uncover archival documents that connect you to generations past.",
    daysRecommended: 6,
    bestTime: "April–June or September–October",
  },
];

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  const totalItems = heritageExperiences.length;

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return heritageExperiences.slice(startIndex, endIndex);
  }, [currentPage, itemsPerPage]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <PageTitle text="My Documents" />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          {/* Search */}
          <div className="relative w-full sm:w-[200px] md:w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              className="pl-9 bg-white rounded-full border-gray-200 h-9 sm:h-10"
            />
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {paginatedData.map((item, index) => (
          <SavedContent
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            heritageLabel={item.heritageLabel}
            heritagePercent={item.heritagePercent}
            country={item.country}
            description={item.description}
            daysRecommended={item.daysRecommended}
            bestTime={item.bestTime}
          />
        ))}
      </div>

      {/* Pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(value) => {
          setItemsPerPage(value);
          setCurrentPage(1); // reset to first page when limit changes
        }}
      />
    </div>
  );
}
