"use client";

import { useState } from "react";
import {
  BarChart3,
  Calendar,
  Eye,
  Home,
  Search,
  Trash2,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WeeklyBarChart from "../shared/WeeklyBarChart";
import StatCard from "../shared/StateCard";
import DonutChart from "../shared/CircularProgress";
import CustomPagination from "../shared/CustomPagination";

const Overview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(11);
  const totalItems = 1450;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Stats data
  const stats = [
    {
      value: "12,302",
      label: "Total Active Users",
      icon: Users,
      iconBgColor: "bg-blue-100",
    },
    {
      value: "23%",
      label: "Total Revenue Generated",
      icon: BarChart3,
      iconBgColor: "bg-purple-100",
    },
    {
      value: "22000",
      label: "Total Events Created",
      icon: Calendar,
      iconBgColor: "bg-blue-100",
    },
    {
      value: "10000",
      label: "Total Hosting Spaces",
      icon: Home,
      iconBgColor: "bg-purple-100",
    },
  ];

  // Recent activity data
  const activities = Array.from({ length: itemsPerPage }, (_, i) => ({
    id: i + 1,
    dateTime: "03:35PM, Jun 25,2026",
    imageTitle: "Floral Dress",
    productType: "Women > Dresses",
    model: "Yes",
    mannequin: "No",
  }));

  return (
    <div className="w-full space-y-4 sm:space-y-6 px-2 sm:px-0">
      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900">
        Overview
      </h1>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 sm:gap-6">
        <div className="col-span-1 lg:col-span-3">
          <WeeklyBarChart />
        </div>
        {/* <CircularProgress value={4} label="Average Time Saved" /> */}
        <div className="col-span-1 lg:col-span-2">
          <DonutChart maxValue={4300} value={2400} />
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="space-y-3 sm:space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900">
            Recent activity
          </h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
            {/* Sort By */}
            <Select defaultValue="date">
              <SelectTrigger className="w-full sm:w-[140px] md:w-[160px] bg-white rounded-full border-gray-200 h-9 sm:h-10">
                <SelectValue placeholder="Sort By Date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Sort By Date</SelectItem>
                <SelectItem value="title">Sort By Title</SelectItem>
                <SelectItem value="type">Sort By Type</SelectItem>
              </SelectContent>
            </Select>

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
        <div className="bg-white rounded-lg  overflow-hidden">
          <div className="overflow-x-auto">
            <Table className="w-full min-w-[800px]">
              <TableHeader className="bg-[#eff1f4]">
                <TableRow className="hover:bg-[#eff1f4] border-b-0">
                  <TableHead className="min-w-[180px] text-gray-600 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Date & Time
                  </TableHead>
                  <TableHead className="min-w-[140px] text-gray-600 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Image Title
                  </TableHead>
                  <TableHead className="min-w-[160px] text-gray-600 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Product Type
                  </TableHead>
                  <TableHead className="min-w-[100px] text-gray-600 font-medium text-center py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Model
                  </TableHead>
                  <TableHead className="min-w-[100px] text-gray-600 font-medium text-center py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Mannequin
                  </TableHead>
                  <TableHead className="min-w-[120px] text-right text-gray-600 font-medium py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                    Action
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
                      {activity.imageTitle}
                    </TableCell>
                    <TableCell className="text-gray-700 py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                      {activity.productType}
                    </TableCell>
                    <TableCell className="text-center text-gray-700 py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                      {activity.model}
                    </TableCell>
                    <TableCell className="text-center text-gray-700 py-2 sm:py-3 px-3 sm:px-4 whitespace-nowrap text-xs sm:text-sm">
                      {activity.mannequin}
                    </TableCell>
                    <TableCell className="text-right py-2 sm:py-3 px-3 sm:px-4">
                      <div className="flex items-center justify-end gap-1 sm:gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 sm:h-8 sm:w-8 text-gray-400 hover:text-blue-500 hover:bg-blue-50 shrink-0">
                          <Eye className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 sm:h-8 sm:w-8 text-red-300 hover:text-red-500 hover:bg-red-50 shrink-0">
                          <Trash2 className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Button>
                      </div>
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
};

export default Overview;
