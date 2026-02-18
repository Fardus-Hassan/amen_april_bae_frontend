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
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const weeklyData = [
  { day: "Fri", users: 15000, experts: 10000, revenue: 500 },
  { day: "Sat", users: 30000, experts: 15000, revenue: 500 },
  { day: "Sun", users: 65000, experts: 30000, revenue: 500 },
  { day: "Mon", users: 50000, experts: 25000, revenue: 500 },
  { day: "Tue", users: 35000, experts: 15000, revenue: 500 },
  { day: "Wed", users: 22000, experts: 13000, revenue: 500 },
  { day: "Thu", users: 45000, experts: 20000, revenue: 500 },
];

const monthlyData = [
  { day: "Jan", users: 55000, experts: 30000, revenue: 500 },
  { day: "Feb", users: 42000, experts: 23000, revenue: 500 },
  { day: "Mar", users: 65000, experts: 30000, revenue: 500 },
  { day: "Apr", users: 50000, experts: 25000, revenue: 500 },
  { day: "May", users: 38000, experts: 17000, revenue: 500 },
  { day: "Jun", users: 55000, experts: 25000, revenue: 500 },
];

const dailyData = [
  { day: "9 AM", users: 8000, experts: 4000, revenue: 500 },
  { day: "12 PM", users: 12000, experts: 6000, revenue: 500 },
  { day: "3 PM", users: 15000, experts: 7000, revenue: 500 },
  { day: "6 PM", users: 10000, experts: 5000, revenue: 500 },
  { day: "9 PM", users: 7000, experts: 3000, revenue: 500 },
];

const chartConfig = {
  users: {
    label: "Users",
    color: "#C5A065",
  },
  experts: {
    label: "Experts",
    color: "#EAEAEA",
  },
  revenue: {
    label: "Revenue",
    color: "#60A5FA",
  },
} satisfies ChartConfig;

const chartDataMap = {
  daily: dailyData,
  weekly: weeklyData,
  monthly: monthlyData,
};

const timePeriods = ["daily", "weekly", "monthly"] as const;

const WeeklyBarChart = () => {
  const [timePeriod, setTimePeriod] =
    useState<(typeof timePeriods)[number]>("weekly");
  const [selectOpen, setSelectOpen] = useState(false);

  const currentPeriodIndex = timePeriods.indexOf(timePeriod);
  const currentData = chartDataMap[timePeriod];

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
            Revenue Stats
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
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#60A5FA]"></div>
            <span className="text-xs sm:text-sm text-gray-600">Revenue</span>
          </div>
        </div>
      </div>

      <ChartContainer
        config={chartConfig}
        className="h-[250px] sm:h-[300px] w-full">
        <BarChart accessibilityLayer data={currentData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="day"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <YAxis
            scale="log"
            domain={[100, 100000]}
            tickLine={false}
            axisLine={false}
            tickFormatter={(value) => {
              if (value >= 1000) return `${value / 1000}k`;
              return value;
            }}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent indicator="line" className="capitalize" />
            }
          />
          <Bar dataKey="users" fill="#C5A065" radius={4} />
          <Bar dataKey="experts" fill="#EAEAEA" radius={4} />
          <Bar dataKey="revenue" fill="#60A5FA" radius={4} />
        </BarChart>
      </ChartContainer>
    </Card>
  );
};

export default WeeklyBarChart;
