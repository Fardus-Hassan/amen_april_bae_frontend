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
import { Plus, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: "Lebron James",
  email: "leborn james03@gmail.com",
  role: "Admin",
  status: "Active",
}));

export default function AdminManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div>
      <div className="flex justify-end pb-2">
        <Button className="rounded-lg bg-[#D4A574] hover:bg-[#cf9d68] text-white px-7 h-11 shadow-none">
          <Plus />
          Add Admin
        </Button>
      </div>
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[700px]">
            <TableHeader>
              <TableRow
                className="border-b border-gray-200"
                style={{ backgroundColor: "#fdf3e3" }}>
                <TableHead
                  className="py-4 px-6 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Name
                </TableHead>
                <TableHead
                  className="py-4 px-6 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Email
                </TableHead>
                <TableHead
                  className="py-4 px-6 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Role
                </TableHead>
                <TableHead
                  className="py-4 px-6 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Status
                </TableHead>
                <TableHead
                  className="py-4 px-6 text-sm font-medium whitespace-nowrap"
                  style={{ color: "#4b4b4b" }}>
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockData.map((row) => (
                <TableRow
                  key={row.id}
                  className="border-b border-gray-100 hover:bg-gray-50">
                  <TableCell className="py-4 px-6 text-sm text-gray-700">
                    {row.name}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-700">
                    {row.email}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm text-gray-700">
                    {row.role}
                  </TableCell>
                  <TableCell
                    className="py-4 px-6 text-sm font-medium"
                    style={{ color: "#c49a3c" }}>
                    {row.status}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm">
                    <button
                      className="px-4 py-1 rounded text-sm font-medium border hover:opacity-80 transition-opacity"
                      style={{
                        borderColor: "#e05c5c",
                        color: "#e05c5c",
                        backgroundColor: "transparent",
                      }}>
                      Remove
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
