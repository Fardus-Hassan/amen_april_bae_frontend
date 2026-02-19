"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import ApprovalAlertDialog from "@/components/shared/ApprovalModal";
import PageTitle from "@/components/shared/PageTitle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import PostCard from "@/app/dashboard/user/my-posts/PostCard";
import CustomPagination from "@/components/shared/CustomPagination";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

export const heritagePosts = [
  {
    id: "1",
    author: {
      name: "Jon Snow",
      location: "Dhaka, Bangladesh",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    content:
      "Your ancestral journey is a tapestry woven across four remarkable regions of Europe, spanning over 150 years of migration, perseverance, and cultural heritage.",
    heritageCard: {
      title: "Ancestral Journey",
      storyId: "0000001",
      name: "MD Abdul Aziz Reza",
      imageUrl:
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&q=80",
    },
    stats: { likes: "51.8K", comments: "4.5K", views: "1.9K" },
  },
  {
    id: "2",
    author: {
      name: "Arya Stark",
      location: "Chattogram, Bangladesh",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    },
    content:
      "From Bengal's river deltas to the ancient trade ports of Southeast Asia, your bloodline carries stories of resilience and adventure.",
    heritageCard: {
      title: "River Legacy",
      storyId: "0000002",
      name: "Fatema Khatun",
      imageUrl:
        "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=800&q=80",
    },
    stats: { likes: "12.4K", comments: "1.1K", views: "890" },
  },
  {
    id: "3",
    author: {
      name: "Tyrion Lannister",
      location: "Sylhet, Bangladesh",
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    },
    content:
      "A lineage of scholars and poets shaped your heritage, leaving behind manuscripts and memories that echo through generations.",
    heritageCard: {
      title: "Scholars of Time",
      storyId: "0000003",
      name: "Rahim Uddin",
      imageUrl:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80",
    },
    stats: { likes: "9.7K", comments: "980", views: "740" },
  },
];

type Post = (typeof heritagePosts)[0];

export default function MyPostsContent() {
  // ── Delete dialog state ───────────────────────────────────────
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<string | null>(null);

  // ── Edit dialog state ─────────────────────────────────────────
  const [editOpen, setEditOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState<Post | null>(null);
  const [editContent, setEditContent] = useState("");

  // ── Posts & search/pagination state ──────────────────────────
  const [posts, setPosts] = useState(heritagePosts);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // ── Filter ────────────────────────────────────────────────────
  const filteredPosts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return posts;
    return posts.filter(
      (post) =>
        post.author.name.toLowerCase().includes(query) ||
        post.author.location.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.heritageCard.title.toLowerCase().includes(query) ||
        post.heritageCard.name.toLowerCase().includes(query),
    );
  }, [posts, searchQuery]);

  // ── Pagination ────────────────────────────────────────────────
  const totalItems = filteredPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value);
    setCurrentPage(1);
  };

  // ── Delete handlers ───────────────────────────────────────────
  const handleDeleteConfirm = () => {
    if (postToDelete) {
      setPosts((prev) => prev.filter((p) => p.id !== postToDelete));
      setPostToDelete(null);
      const newTotal = posts.length - 1;
      const newTotalPages = Math.max(1, Math.ceil(newTotal / itemsPerPage));
      if (currentPage > newTotalPages) setCurrentPage(newTotalPages);
    }
    setDeleteOpen(false);
  };

  // ── Edit handlers ─────────────────────────────────────────────
  const handleEditOpen = (post: Post) => {
    setPostToEdit(post);
    setEditContent(post.content);
    setEditOpen(true);
  };

  const handleEditCancel = () => {
    setEditOpen(false);
    setPostToEdit(null);
    setEditContent("");
  };

  const handleEditSave = () => {
    if (!postToEdit) return;
    setPosts((prev) =>
      prev.map((p) =>
        p.id === postToEdit.id ? { ...p, content: editContent } : p,
      ),
    );
    setEditOpen(false);
    setPostToEdit(null);
    setEditContent("");
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <PageTitle text="My Documents" />

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
          {/* Search */}
          <div className="relative w-full sm:w-[200px] md:w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-9 bg-white rounded-full border-gray-200 h-9 sm:h-10"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {paginatedPosts.length > 0 ? (
          paginatedPosts.map((post) => (
            <PostCard
              key={post.id}
              author={{
                name: post.author.name,
                location: post.author.location,
                avatarUrl: post.author.avatarUrl,
              }}
              content={post.content}
              heritageCard={{
                title: post.heritageCard.title,
                storyId: post.heritageCard.storyId,
                name: post.heritageCard.name,
                imageUrl: post.heritageCard.imageUrl,
              }}
              stats={{
                likes: post.stats.likes,
                comments: post.stats.comments,
                views: post.stats.views,
              }}
              onEdit={() => handleEditOpen(post)}
              onDelete={() => {
                setPostToDelete(post.id);
                setDeleteOpen(true);
              }}
              onFullPreview={() => console.log("Full Preview", post.id)}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 py-8">No posts found.</p>
        )}

        {/* Pagination */}
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
      </div>

      {/* ── Delete Confirmation Dialog ──────────────────────────── */}
      <ApprovalAlertDialog
        open={deleteOpen}
        onOpenChange={(val) => {
          setDeleteOpen(val);
          if (!val) setPostToDelete(null);
        }}
        title="Are you sure you want to delete this post?"
        primaryAction={{
          label: "Delete",
          variant: "destructive",
          onClick: handleDeleteConfirm,
        }}
        secondaryAction={{
          label: "Cancel",
          variant: "cancel",
          onClick: () => {
            setPostToDelete(null);
            setDeleteOpen(false);
          },
        }}
      />

      {/* ── Edit Post Dialog ────────────────────────────────────── */}
      <Dialog
        open={editOpen}
        onOpenChange={(val) => {
          if (!val) handleEditCancel();
        }}>
        <DialogTitle />
        <DialogContent className="p-0 gap-0 overflow-hidden max-w-[680px] w-full rounded-2xl border border-gray-200 shadow-2xl bg-white [&>button]:hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-6 pt-6 pb-5">
            <h2 className="text-[22px] font-bold text-gray-900 tracking-tight leading-none">
              Edit Post
            </h2>
            <button
              onClick={handleEditCancel}
              className="flex items-center justify-center w-7 h-7 rounded-full text-gray-500 hover:text-gray-800 hover:bg-gray-100 transition-colors">
              <X className="w-[18px] h-[18px]" strokeWidth={2.2} />
            </button>
          </div>

          {/* Divider */}
          <div className="h-px w-full bg-gray-200" />

          {/* Body */}
          {postToEdit && (
            <div className="px-6 pt-5 pb-2">
              {/* Author Row */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-[58px] h-[58px] rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={postToEdit.author.avatarUrl}
                    alt={postToEdit.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[7px]">
                  <span className="text-[18px] font-bold text-gray-900 leading-none">
                    {postToEdit.author.name}
                  </span>
                  <span className="inline-flex items-center px-[14px] py-[3px] rounded-full border border-gray-300 text-[12.5px] text-gray-600 bg-white w-fit leading-none">
                    Community
                  </span>
                </div>
              </div>

              {/* Editable Content */}
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={5}
                className="w-full text-[14.5px] text-gray-700 leading-[1.65] resize-none border-none outline-none ring-0 focus:ring-0 bg-transparent p-0 mb-5"
              />

              {/* Heritage Card */}
              <div className="flex items-center gap-5 bg-[#EEF1F7] rounded-2xl px-5 py-4 mb-2">
                <div className="relative w-[110px] h-[115px] flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={postToEdit.heritageCard.imageUrl}
                    alt={postToEdit.heritageCard.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[6px]">
                  <h3 className="text-[26px] font-extrabold text-[#1B2B4B] leading-tight tracking-tight">
                    {postToEdit.heritageCard.title}
                  </h3>
                  <p className="text-[13.5px] font-bold text-[#1B2B4B] leading-snug">
                    Heritage Story ID: {postToEdit.heritageCard.storyId}
                  </p>
                  <p className="text-[13.5px] font-bold text-[#1B2B4B] leading-snug">
                    Name: {postToEdit.heritageCard.name}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-center gap-4 px-6 pt-4 pb-7">
            <Button
              variant="outline"
              onClick={handleEditCancel}
              className="h-12 w-[170px] rounded-xl border border-gray-300 text-gray-800 bg-white hover:bg-gray-50 shadow-none font-normal text-[15px]">
              Cancel
            </Button>
            <Button
              onClick={handleEditSave}
              className="h-12 w-[170px] rounded-xl bg-[#B8944A] hover:bg-[#a07e3e] text-white shadow-none font-normal text-[15px]">
              Save Changes
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
