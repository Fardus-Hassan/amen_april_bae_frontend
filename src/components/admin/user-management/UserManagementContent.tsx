"use client";

import { useState } from "react";
import PageTitle from "@/components/shared/PageTitle";
import StatCard from "@/components/shared/StateCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, UserCheck, Users, UserCog, Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomPagination from "@/components/shared/CustomPagination";

// ── Mock data ──────────────────────────────────────────────────────────────────
const STAT_CARDS = [
  { icon: Users, label: "Total Users", value: "12,302" },
  { icon: UserCheck, label: "Total Subscribers", value: "23%" },
  { icon: Users, label: "New Users This Month", value: "22,000" },
  { icon: UserCog, label: "Total Experts", value: "04" },
];

type Status = "Completed" | "Generating" | "Downloaded";

interface UserRow {
  id: number;
  dateTime: string;
  email: string;
  heritageId: string;
  status: Status;
  profileLabel: string;
}

const MOCK_USERS: UserRow[] = [
  {
    id: 1,
    dateTime: "03:35PM, Jun 25,2025",
    email: "robstark03@gmail.com",
    heritageId: "robstark03",
    status: "Completed",
    profileLabel: "View Profile",
  },
  {
    id: 2,
    dateTime: "03:35PM, Jun 25,2025",
    email: "robstark03@gmail.com",
    heritageId: "robstark03",
    status: "Completed",
    profileLabel: "View Audit",
  },
  {
    id: 3,
    dateTime: "03:35PM, Jun 25,2025",
    email: "robstark03@gmail.com",
    heritageId: "robstark03",
    status: "Generating",
    profileLabel: "View Audit",
  },
  {
    id: 4,
    dateTime: "03:35PM, Jun 25,2025",
    email: "robstark03@gmail.com",
    heritageId: "robstark03",
    status: "Downloaded",
    profileLabel: "View Audit",
  },
  {
    id: 5,
    dateTime: "03:35PM, Jun 25,2025",
    email: "robstark03@gmail.com",
    heritageId: "robstark03",
    status: "Generating",
    profileLabel: "View Audit",
  },
  {
    id: 6,
    dateTime: "03:35PM, Jun 25,2025",
    email: "robstark03@gmail.com",
    heritageId: "robstark03",
    status: "Downloaded",
    profileLabel: "View Audit",
  },
  {
    id: 7,
    dateTime: "03:35PM, Jun 25,2025",
    email: "robstark03@gmail.com",
    heritageId: "robstark03",
    status: "Generating",
    profileLabel: "View Audit",
  },
];

// ── Status badge styles ────────────────────────────────────────────────────────
const STATUS_STYLES: Record<Status, string> = {
  Completed: "bg-green-50  text-green-500  border border-green-200",
  Generating: "bg-pink-50   text-pink-500   border border-pink-200",
  Downloaded: "bg-indigo-50 text-indigo-400 border border-indigo-200",
};

// ── Sub-components ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}>
      {status}
    </span>
  );
}

function UsersTable({ rows }: { rows: UserRow[] }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <Table className="w-full min-w-[800px]">
          <TableHeader className="bg-[#eff1f4]">
            <TableRow className="hover:bg-[#eff1f4] border-b-0">
              <TableHead className="min-w-[180px] text-gray-600 font-semibold py-3 px-4 whitespace-nowrap text-xs uppercase tracking-wide">
                Date &amp; Time
              </TableHead>
              <TableHead className="min-w-[200px] text-gray-600 font-semibold py-3 px-4 whitespace-nowrap text-xs uppercase tracking-wide">
                Email
              </TableHead>
              <TableHead className="min-w-[160px] text-gray-600 font-semibold py-3 px-4 whitespace-nowrap text-xs uppercase tracking-wide">
                Heritage Story ID
              </TableHead>
              <TableHead className="min-w-[120px] text-gray-600 font-semibold py-3 px-4 whitespace-nowrap text-xs uppercase tracking-wide">
                Status
              </TableHead>
              <TableHead className="min-w-[120px] text-gray-600 font-semibold py-3 px-4 whitespace-nowrap text-xs uppercase tracking-wide">
                Profile
              </TableHead>
              <TableHead className="min-w-[80px] text-right text-gray-600 font-semibold py-3 px-4 whitespace-nowrap text-xs uppercase tracking-wide">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                className="hover:bg-gray-50 border-gray-100">
                <TableCell className="font-medium text-gray-700 py-4 px-4 whitespace-nowrap text-sm">
                  {row.dateTime}
                </TableCell>
                <TableCell className="text-gray-700 py-4 px-4 whitespace-nowrap text-sm">
                  {row.email}
                </TableCell>
                <TableCell className="text-gray-700 py-4 px-4 whitespace-nowrap text-sm">
                  {row.heritageId}
                </TableCell>
                <TableCell className="py-4 px-4 whitespace-nowrap">
                  <StatusBadge status={row.status} />
                </TableCell>
                <TableCell className="py-4 px-4 whitespace-nowrap text-sm">
                  <button className="underline text-gray-700 hover:text-gray-900 text-sm">
                    {row.profileLabel}
                  </button>
                </TableCell>
                <TableCell className="text-right py-4 px-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full border-[#c49050] text-[#c49050] hover:bg-[#fef6ed] hover:text-[#c49050] text-xs px-4">
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ── Main page ──────────────────────────────────────────────────────────────────
export default function UserManagementContent() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(11);

  const totalItems = MOCK_USERS.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const filtered = MOCK_USERS.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.heritageId.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="w-full space-y-5">
      <PageTitle text="User Management" />

      {/* ── Tabs ── */}
      <Tabs defaultValue="user" className="w-full">
        <TabsList className="w-full h-[75px]! p-2! rounded-[6px]! bg-[#FAF2EA]">
          <TabsTrigger
            value="user"
            className="w-full rounded-[6px]! p-4! text-lg! font-normal! flex items-center justify-center gap-2">
            <User />
            Regular users
          </TabsTrigger>
          <TabsTrigger
            value="expert"
            className="w-full rounded-[6px]! p-4! text-lg! font-normal! flex items-center justify-center gap-2">
            <UserCheck />
            Experts
          </TabsTrigger>
        </TabsList>

        {/* ── Regular Users tab content ── */}
        <TabsContent value="user" className="mt-5 space-y-5">
          {/* Stat cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STAT_CARDS.map((card) => (
              <StatCard
                key={card.label}
                icon={card.icon}
                label={card.label}
                value={card.value}
              />
            ))}
          </div>

          {/* Search + CTA */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900">
              Recent activity
            </h2>
            <div className="flex items-center justify-end gap-3">
              <div className="relative w-64">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
                <Input
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9 rounded-full border-gray-200 bg-white text-sm"
                />
              </div>
              <Button className="bg-[#c49050] hover:bg-[#b07d3e] text-white rounded-lg px-5 text-sm font-medium">
                View All Users
              </Button>
            </div>
          </div>

          {/* Table */}
          <UsersTable rows={filtered} />

          {/* Pagination */}
          <CustomPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
          />
        </TabsContent>

        {/* ── Experts tab content ── */}
        <TabsContent value="expert" className="mt-5">
          <p className="text-gray-500 text-sm">No experts to display yet.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
