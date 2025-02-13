"use client";

import { useGetSingleBlogQuery } from "@/redux/features/blogs/blogApi";
import { format } from "date-fns";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Calendar, Clock } from "lucide-react";

export default function SingleBlogPage() {
  const params = useParams();
  const id = params.id;
  const { data: blogData, isLoading } = useGetSingleBlogQuery(id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p>Loading...</p>
      </div>
    );
  }

  if (!blogData?.data) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <p>Blog not found</p>
      </div>
    );
  }

  // Format date safely
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Unknown date";
    return format(new Date(dateString), "MMMM d, yyyy");
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      {/* Blog Title & Info */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{blogData?.data.title}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          {blogData?.data.excerpt}
        </p>

        <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{formatDate(blogData?.data.date)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{blogData?.data.readTime} min read</span>
          </div>
          <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
            {blogData?.data.category}
          </div>
        </div>
      </div>

      {/* Blog Image */}
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src={blogData?.data.image}
          alt={blogData?.data.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>

      {/* Blog Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {blogData?.data.content
          ?.split("\n")
          .map((paragraph: string, index: number) => (
            <p key={index}>{paragraph}</p>
          ))}
      </div>

      {/* Footer Metadata */}
      <div className="border-t pt-6 mt-8 text-sm text-gray-500 dark:text-gray-400 space-y-2">
        <p>Last updated: {formatDate(blogData?.data.updatedAt)}</p>
        <p>Published: {formatDate(blogData?.data.createdAt)}</p>
      </div>
    </div>
  );
}
