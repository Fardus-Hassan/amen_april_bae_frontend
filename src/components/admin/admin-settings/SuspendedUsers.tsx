import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import CustomPagination from "@/components/shared/CustomPagination";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const mockData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  dateTime: "03:14PM-Jun 25,\n2025",
  userName: "Lebron James",
  userEmail: "leborn james03@gmail.com",
  suspensionReason: "Fraud Report",
}));

export default function SuspendedUsers() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <div className="flex justify-end pb-2">
        <div className="relative w-64">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <Input
            placeholder="Search"
            className="pl-9 rounded-full border-gray-200 bg-white text-sm"
          />
        </div>
      </div>
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[800px]">
            <TableHeader>
              <TableRow
                className="border-b border-gray-200"
                style={{ backgroundColor: "#fdf3e3" }}>
                <TableHead
                  className="py-4 px-5 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Date &amp; Time
                </TableHead>
                <TableHead
                  className="py-4 px-5 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  User Name
                </TableHead>
                <TableHead
                  className="py-4 px-5 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  User Email
                </TableHead>
                <TableHead
                  className="py-4 px-5 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Suspension Reason
                </TableHead>
                <TableHead
                  className="py-4 px-5 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Action
                </TableHead>
                <TableHead
                  className="py-4 px-5 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Suspension
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((row) => (
                <TableRow
                  key={row.id}
                  className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="py-4 px-5 text-sm text-gray-700 align-top">
                    <span style={{ whiteSpace: "pre-line" }}>
                      {row.dateTime}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 px-5 text-sm text-gray-700">
                    {row.userName}
                  </TableCell>
                  <TableCell className="py-4 px-5 text-sm text-gray-700">
                    {row.userEmail}
                  </TableCell>
                  <TableCell className="py-4 px-5 text-sm text-gray-700">
                    {row.suspensionReason}
                  </TableCell>
                  <TableCell className="py-4 px-5 text-sm">
                    <button
                      className="font-medium hover:underline"
                      style={{ color: "#c49a3c" }}>
                      View Profile
                    </button>
                  </TableCell>
                  <TableCell className="py-4 px-5 text-sm">
                    <button
                      className="px-3 py-1 rounded text-sm font-medium border hover:opacity-80 transition-opacity"
                      style={{
                        borderColor: "#3a9b8e",
                        color: "#3a9b8e",
                        backgroundColor: "transparent",
                      }}>
                      End Suspension
                    </button>
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
  );
}
