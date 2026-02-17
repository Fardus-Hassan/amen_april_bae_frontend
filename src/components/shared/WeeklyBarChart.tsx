"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const weeklyData = [
  { day: "Fri", documents: 25000 },
  { day: "Sat", documents: 45000 },
  { day: "Sun", documents: 95000 },
  { day: "Mon", documents: 75000 },
  { day: "Tue", documents: 50000 },
  { day: "Wed", documents: 35000 },
  { day: "Thu", documents: 65000 },
];

const monthlyData = [
  { day: "Jan", documents: 85000 },
  { day: "Feb", documents: 65000 },
  { day: "Mar", documents: 95000 },
  { day: "Apr", documents: 75000 },
  { day: "May", documents: 55000 },
  { day: "Jun", documents: 80000 },
];

const dailyData = [
  { day: "9 AM", documents: 12000 },
  { day: "12 PM", documents: 18000 },
  { day: "3 PM", documents: 22000 },
  { day: "6 PM", documents: 15000 },
  { day: "9 PM", documents: 10000 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

const chartDataMap = {
  daily: dailyData,
  weekly: weeklyData,
  monthly: monthlyData,
};
const chartData = [
  { month: "January", users: 186, experts: 80 },
  { month: "February", users: 305, experts: 200 },
  { month: "March", users: 237, experts: 120 },
  { month: "April", users: 73, experts: 190 },
  { month: "May", users: 209, experts: 130 },
  { month: "June", users: 214, experts: 140 },
];
const timePeriods = ["daily", "weekly", "monthly"] as const;

const WeeklyBarChart = () => {
  const [timePeriod, setTimePeriod] =
    useState<(typeof timePeriods)[number]>("weekly");
  const [selectOpen, setSelectOpen] = useState(false);

  const currentPeriodIndex = timePeriods.indexOf(timePeriod);

  const handlePrevious = () => {
    const newIndex =
      currentPeriodIndex > 0 ? currentPeriodIndex - 1 : timePeriods.length - 1;
    setTimePeriod(timePeriods[newIndex]);
  };

  const handleNext = () => {
    const newIndex =
      currentPeriodIndex < timePeriods.length - 1 ? currentPeriodIndex + 1 : 0;
    setTimePeriod(timePeriods[newIndex]);
  };

  return (
    <Card className="p-3 sm:p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-2 mb-4 sm:mb-6">
        <div className="flex flex-col xs:flex-row items-start xs:items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 whitespace-nowrap">
            Generated AI Documents
          </h3>
          <div className="flex items-center gap-1">
            {/* Time Period Selector */}
            <div className="flex items-center bg-[#C5A065] gap-2 sm:gap-4 p-1.5 sm:p-2.5">
              {/* Prev */}
              <button
                onClick={handlePrevious}
                className="cursor-pointer hover:opacity-70 transition-opacity"
                aria-label="Previous period">
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-[#ffff]" />
              </button>

              {/* Current period display - Clickable to open select */}
              <button
                onClick={() => setSelectOpen(true)}
                className="text-xs sm:text-sm font-medium text-gray-100 capitalize cursor-pointer hover:text-gray-50 transition-colors min-w-[50px] sm:min-w-[60px]">
                {timePeriod}
              </button>

              {/* Next */}
              <button
                onClick={handleNext}
                className="cursor-pointer hover:opacity-70 transition-opacity"
                aria-label="Next period">
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#ffff]" />
              </button>
            </div>

            {/* Dropdown icon button */}
            <button
              onClick={() => setSelectOpen(true)}
              className="hover:bg-[#ffe7ce] transition-all p-1.5 sm:p-2.5 bg-[#FFEFDF]"
              aria-label="Open period selector">
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-[#4A5565]" />
            </button>

            {/* Hidden Select - Controlled by buttons above */}
            <Select
              open={selectOpen}
              onOpenChange={setSelectOpen}
              value={timePeriod}
              onValueChange={(value) =>
                setTimePeriod(value as typeof timePeriod)
              }>
              <SelectTrigger className="sr-only">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#C5A065]"></div>
            <span className="text-xs sm:text-sm text-gray-600">Users</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#EAEAEA]"></div>
            <span className="text-xs sm:text-sm text-gray-600">Experts</span>
          </div>
        </div>
      </div>

      <ChartContainer
        config={chartConfig}
        className="h-[250px] sm:h-[300px] w-full">
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent indicator="line" className="capitalize" />
            }
          />
          <Bar dataKey="users" fill="#C5A065" radius={4} />
          <Bar dataKey="experts" fill="#EAEAEA" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default WeeklyBarChart;
