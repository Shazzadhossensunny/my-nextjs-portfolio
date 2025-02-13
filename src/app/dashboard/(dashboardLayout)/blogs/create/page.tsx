"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCreateBlogMutation } from "@/redux/features/blogs/blogApi";
import { TResponse } from "@/types/global.type";
import toast from "react-hot-toast";

export default function BlogForm() {
  const [createBlog, { isLoading }] = useCreateBlogMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const blogData = {
      ...data,
      readTime: Number(data.readTime),
    };
    try {
      const res = (await createBlog(blogData)) as TResponse<FieldValues>;
      if (res.error) {
        toast.error(res?.data?.error.message);
      } else {
        toast.success("Blog create successfully");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Title
          </label>
          <input
            {...register("title", { required: "Title is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.title.message as string}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Date
          </label>
          <input
            type="date"
            {...register("date", { required: "Date is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          {errors.date && (
            <p className="mt-1 text-sm text-red-500">
              {errors.date.message as string}
            </p>
          )}
        </div>

        {/* Category and Read Time */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Category
          </label>
          <input
            {...register("category", { required: "Category is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          {errors.category && (
            <p className="mt-1 text-sm text-red-500">
              {errors.category.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Read Time (minutes)
          </label>
          <input
            type="number"
            {...register("readTime", { required: "Read time is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          {errors.readTime && (
            <p className="mt-1 text-sm text-red-500">
              {errors.readTime.message as string}
            </p>
          )}
        </div>

        {/* Image URL and Slug */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Image URL
          </label>
          <input
            {...register("image", { required: "Image URL is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          {errors.image && (
            <p className="mt-1 text-sm text-red-500">
              {errors.image.message as string}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Slug
          </label>
          <input
            {...register("slug", { required: "Slug is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
          />
          {errors.slug && (
            <p className="mt-1 text-sm text-red-500">
              {errors.slug.message as string}
            </p>
          )}
        </div>
        {/* Excerpt */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Excerpt
          </label>
          <textarea
            {...register("excerpt", { required: "Excerpt is required" })}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            rows={3}
          />
          {errors.excerpt && (
            <p className="mt-1 text-sm text-red-500">
              {errors.excerpt.message as string}
            </p>
          )}
        </div>

        {/* Content */}
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Content
          </label>
          <textarea
            {...register("content")}
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            rows={8}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </form>
  );
}
