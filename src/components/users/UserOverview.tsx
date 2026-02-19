"use client";

import { Eye, Trash2, BookA, Dna, Map, UserPen, Search } from "lucide-react";
import PageTitle from "../shared/PageTitle";
import StatCard from "../shared/StateCard";
import CustomPagination from "../shared/CustomPagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";

// Stats data
const stats = [
  { value: "12,302", label: "Total DNA Insights", icon: Dna },
  { value: "23%", label: "Generations Mapped ", icon: Map },
  { value: "22,000", label: "Heritage Stories Generated", icon: BookA },
  { value: "10,000", label: "Travel Locations Suggested", icon: UserPen },
];

// Mock activity data
const mockActivities = [
  {
    id: 1,
    dateTime: "2026-02-15 10:30 AM",
    dnaDocTitle: "Ancestry Report #001",
    name: "Nahian Khan",
    heritageStoryTitle: "Origins of the Khan Family",
    heritageStory: "",
  },
  {
    id: 2,
    dateTime: "2026-02-16 02:15 PM",
    dnaDocTitle: "Genetic Insights #045",
    name: "Opi Rahman",
    heritageStoryTitle: "Rahman Heritage Journey",
    heritageStory: "",
  },
  {
    id: 3,
    dateTime: "2026-02-17 09:45 AM",
    dnaDocTitle: "DNA Analysis #078",
    name: "Ayesha Siddique",
    heritageStoryTitle: "Siddique Lineage Chronicles",
    heritageStory: "",
  },
];

export default function UserOverview() {
  const [activities] = useState(mockActivities);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = activities.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <PageTitle text="Dashboard Overview" />

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Recent Activity Section */}
      <div className="space-y-3 sm:space-y-4 mt-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900">
            Recent activity
          </h2>

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

        {/* Table */}
        <div className="bg-white rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full min-w-[800px]">
              <TableHeader className="bg-[#FFEFDF]">
                <TableRow className="hover:bg-[#fae7d5] border-b-0">
                  <TableHead className="min-w-[180px] text-gray-900 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Date & Time
                  </TableHead>
                  <TableHead className="min-w-[140px] text-gray-900 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    DNA Doc Title
                  </TableHead>
                  <TableHead className="min-w-[160px] text-gray-900 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Name
                  </TableHead>
                  <TableHead className="min-w-[180px] text-gray-900 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Heritage Story Title
                  </TableHead>
                  <TableHead className="min-w-[100px] text-gray-900 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Heritage Story
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {activities.map((activity) => (
                  <TableRow
                    key={activity.id}
                    className="hover:bg-gray-50 border-gray-100">
                    <TableCell className="font-medium text-gray-700 py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                      {activity.dateTime}
                    </TableCell>
                    <TableCell className="text-gray-700 py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                      {activity.dnaDocTitle}
                    </TableCell>
                    <TableCell className="text-gray-700 py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                      {activity.name}
                    </TableCell>
                    <TableCell className="text-gray-700 py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                      {activity.heritageStoryTitle}
                    </TableCell>
                    <TableCell className="text-gray-700 py-2 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-fit rounded-full border-[0.5px] border-[#C5A065] text-[#C5A065] hover:bg-[#C5A065] hover:text-white focus:ring-0 focus:ring-offset-0">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Pagination */}
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>
    </div>
  );
}
