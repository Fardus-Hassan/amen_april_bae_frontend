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
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import Image from "next/image";

const mockData = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: "Lebron James",
  email: "lebron james03@gmail.com",
  role: "Admin",
  status: "Active",
}));

export default function AdminManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [isAddAdminOpen, setIsAddAdminOpen] = useState(false);
  const [adminName, setAdminName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [customMessage, setCustomMessage] = useState("");
  const totalItems = 100;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleSendInvitation = () => {
    setIsAddAdminOpen(false);
    setAdminName("");
    setEmailAddress("");
    setCustomMessage("");
  };

  const handleCancel = () => {
    setIsAddAdminOpen(false);
    setAdminName("");
    setEmailAddress("");
    setCustomMessage("");
  };

  return (
    <div>
      {/* Add Admin Button */}
      <div className="flex justify-end pb-2">
        <Button
          className="rounded-lg bg-[#D4A574] hover:bg-[#cf9d68] text-white px-7 h-11 shadow-none"
          onClick={() => setIsAddAdminOpen(true)}>
          <Plus className="mr-1 h-4 w-4" />
          Add Admin
        </Button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[700px]">
            <TableHeader>
              <TableRow className="border-b border-gray-200 bg-[#fdf3e3]">
                {["Name", "Email", "Role", "Status", "Action"].map((col) => (
                  <TableHead
                    key={col}
                    className="py-4 px-6 text-sm font-medium whitespace-nowrap text-[#4b4b4b]">
                    {col}
                  </TableHead>
                ))}
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
                  <TableCell className="py-4 px-6 text-sm font-medium text-[#c49a3c]">
                    {row.status}
                  </TableCell>
                  <TableCell className="py-4 px-6 text-sm">
                    <button className="px-4 py-1 rounded text-sm font-medium border border-[#e05c5c] text-[#e05c5c] bg-transparent hover:opacity-80 transition-opacity">
                      Remove
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Add Admin Dialog */}
      <Dialog open={isAddAdminOpen} onOpenChange={setIsAddAdminOpen}>
        <DialogContent className="p-0 overflow-hidden max-w-[520px] w-full rounded-2xl border border-gray-200 shadow-2xl">
          <div className="px-4 py-6">
            {/* Logo */}
            <div className="flex flex-col items-start justify-start gap-3 mb-4">
              <Image
                src={"/images/icon.svg"}
                alt="DNA Time Machine Logo"
                width={50}
                height={50}
                priority
                className="w-[50px] h-[50px]"
              />

              <p className="font-[900]">
                <span className="text-[#C5A065]">DNA</span> Time
                <br />
                Machine
              </p>
            </div>

            {/* Title */}
            <DialogHeader className="p-0 space-y-0">
              <DialogTitle className="text-[26px] font-semibold text-gray-900 leading-tight tracking-tight">
                Add new admin
              </DialogTitle>
            </DialogHeader>

            {/* Description */}
            <p className="text-[13.5px] text-gray-500 leading-relaxed mt-2.5 mb-6">
              Invite up to 5 team members to join your plan. Once they accept
              your invitation, they&apos;ll get access to modify
              Solicitation&apos;s under your subscription.
            </p>

            {/* Form Fields */}
            <div className="space-y-5">
              {/* Admin Name */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="adminName"
                  className="text-sm font-normal text-gray-900">
                  Admin Name:
                </Label>
                <Input
                  id="adminName"
                  value={adminName}
                  onChange={(e) => setAdminName(e.target.value)}
                  className="h-12 rounded-lg border-gray-200 bg-white text-sm shadow-none focus-visible:ring-1 focus-visible:ring-[#D4A574] focus-visible:ring-offset-0"
                />
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="emailAddress"
                  className="text-sm font-normal text-gray-900">
                  Email Address:
                </Label>
                <Input
                  id="emailAddress"
                  type="email"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="h-12 rounded-lg border-gray-200 bg-white text-sm shadow-none focus-visible:ring-1 focus-visible:ring-[#D4A574] focus-visible:ring-offset-0"
                />
              </div>

              {/* Custom Message */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="customMessage"
                  className="text-sm font-semibold text-gray-900">
                  Custom message:
                </Label>
                <Input
                  id="customMessage"
                  value={customMessage}
                  onChange={(e) => setCustomMessage(e.target.value)}
                  className="h-12 rounded-lg border-gray-200 bg-white text-sm shadow-none focus-visible:ring-1 focus-visible:ring-[#D4A574] focus-visible:ring-offset-0"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-3 mt-8">
              <Button
                variant="outline"
                onClick={handleCancel}
                className="h-11 px-8 rounded-lg border-gray-300 text-gray-700 bg-white hover:bg-gray-50 shadow-none font-normal text-sm">
                Cancel
              </Button>
              <Button
                onClick={handleSendInvitation}
                className="h-11 px-6 rounded-lg bg-[#B8944A] hover:bg-[#a07e3e] text-white shadow-none font-normal text-sm">
                Send Invitation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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
