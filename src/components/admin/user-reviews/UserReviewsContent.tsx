"use client";

import { useState, useMemo } from "react";
import PageTitle from "@/components/shared/PageTitle";
import ReviewCard from "./ReviewCard";
import VisitorsComments from "./VisitorsComments";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomPagination from "@/components/shared/CustomPagination";

const revData = [
  {
    name: "Danish Slavska",
    role: "CEO | ATIK Co.",
    location: "Atlanice, New York, USA",
    avatarUrl: "https://i.pravatar.cc/56?img=12",
    review:
      "I had my DNA results for years but never truly understood them. This platform turned everything into a clear story.",
    rating: 4,
    maxRating: 5,
    onRemove: () => console.log("Removed Danish"),
  },
  {
    name: "Sarah Mendez",
    role: "Research Scientist | GeneLab",
    location: "Austin, Texas, USA",
    avatarUrl: "https://i.pravatar.cc/56?img=47",
    review:
      "The insights were incredibly accurate and easy to digest. I finally feel like I understand my ancestry and health markers.",
    rating: 5,
    maxRating: 5,
    onRemove: () => console.log("Removed Sarah"),
  },
  {
    name: "James Okafor",
    role: "Product Manager | BioSync",
    location: "Lagos, Nigeria",
    avatarUrl: "https://i.pravatar.cc/56?img=33",
    review:
      "Exceptional experience from start to finish. The visualizations made complex genetic data approachable for non-experts.",
    rating: 4,
    maxRating: 5,
    onRemove: () => console.log("Removed James"),
  },
  {
    name: "Yuki Tanaka",
    role: "UX Designer | Helixio",
    location: "Tokyo, Japan",
    avatarUrl: "https://i.pravatar.cc/56?img=25",
    review:
      "I was skeptical at first, but the platform exceeded my expectations. The UI is clean and the reports are remarkably detailed.",
    rating: 5,
    maxRating: 5,
    onRemove: () => console.log("Removed Yuki"),
  },
];

const commentsData = [
  {
    name: "Sophia Clark",
    email: "sophiaclark003@gmail.com",
    avatarUrl: "https://i.pravatar.cc/56?img=47",
    comment:
      '"Excellent service and a great selection of cars. The staff was knowledgeable and helpful throughout the entire process."',
    rating: 4,
    maxRating: 5,
    onAddToHomePage: () => console.log("Sophia added to home page"),
  },
  {
    name: "Marcus Hale",
    email: "marcus.hale@outlook.com",
    avatarUrl: "https://i.pravatar.cc/56?img=11",
    comment:
      '"Truly a seamless experience from browsing to purchase. I appreciated how transparent the pricing was — no hidden fees at all."',
    rating: 5,
    maxRating: 5,
    onAddToHomePage: () => console.log("Marcus added to home page"),
  },
  {
    name: "Priya Nair",
    email: "priya.nair@gmail.com",
    avatarUrl: "https://i.pravatar.cc/56?img=38",
    comment:
      '"The test drive process was smooth and the team took the time to answer every question I had. Would highly recommend to anyone."',
    rating: 4,
    maxRating: 5,
    onAddToHomePage: () => console.log("Priya added to home page"),
  },
  {
    name: "David Osei",
    email: "d.osei@yahoo.com",
    avatarUrl: "https://i.pravatar.cc/56?img=53",
    comment:
      '"Fantastic range of vehicles and a really welcoming atmosphere. Found exactly what I was looking for within my budget."',
    rating: 5,
    maxRating: 5,
    onAddToHomePage: () => console.log("David added to home page"),
  },
];

const filterOptions = [
  { value: "all", label: "All Ratings" },
  { value: "high_to_low", label: "Stars: High to Low" },
  { value: "low_to_high", label: "Stars: Low to High" },
  { value: "5_stars", label: "5 Stars Only" },
  { value: "4_stars", label: "4 Stars Only" },
];

export default function UserReviewsContent() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const filteredComments = useMemo(() => {
    let result = [...commentsData];

    if (search.trim()) {
      const query = search.toLowerCase();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(query) ||
          c.comment.toLowerCase().includes(query) ||
          c.email.toLowerCase().includes(query),
      );
    }

    switch (selected) {
      case "high_to_low":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "low_to_high":
        result.sort((a, b) => a.rating - b.rating);
        break;
      case "5_stars":
        result = result.filter((c) => c.rating === 5);
        break;
      case "4_stars":
        result = result.filter((c) => c.rating === 4);
        break;
      default:
        break;
    }

    return result;
  }, [search, selected]);

  const totalItems = filteredComments.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const safePage = Math.min(currentPage, totalPages);

  const paginatedComments = useMemo(() => {
    const start = (safePage - 1) * itemsPerPage;
    return filteredComments.slice(start, start + itemsPerPage);
  }, [filteredComments, safePage, itemsPerPage]);

  const handleSearch = (value: string) => {
    setSearch(value);
    setCurrentPage(1);
  };

  const handleFilter = (value: string) => {
    setSelected(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <PageTitle text="User Reviews" />

      {/* ↓ 1-col on mobile → 2-col on sm → 4-col on lg */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {revData.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      <div className="mt-12">
        {/* ↓ Stack vertically on mobile, side-by-side from md up */}
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between mb-3">
          <h2 className="text-xl font-semibold text-gray-900">
            Visitor Comments{" "}
            <span className="text-xs text-gray-600">
              (Total Comments: {totalItems})
            </span>
          </h2>

          {/* ↓ Stack search + filter vertically on mobile, row on sm */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
            <div className="relative w-full sm:w-64">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
              />
              <Input
                placeholder="Search"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-9 rounded-full border-gray-200 bg-white text-sm"
              />
            </div>

            <div className="w-full sm:w-auto">
              <Select value={selected} onValueChange={handleFilter}>
                <SelectTrigger className="w-full sm:w-48 rounded-xl border-gray-600 text-[#0f2a4a] font-medium focus:ring-[#c9a97a] focus:ring-offset-0">
                  <SelectValue placeholder="Select filter" />
                </SelectTrigger>
                <SelectContent>
                  {filterOptions.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      className="text-[#0f2a4a] cursor-pointer">
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        {paginatedComments.length > 0 ? (
          paginatedComments.map((item) => (
            <VisitorsComments key={item.email} {...item} />
          ))
        ) : (
          <p className="text-gray-400 text-sm text-center py-10">
            No comments match your search.
          </p>
        )}
      </div>

      <CustomPagination
        currentPage={safePage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={(val) => {
          setItemsPerPage(val);
          setCurrentPage(1);
        }}
      />
    </div>
  );
}
