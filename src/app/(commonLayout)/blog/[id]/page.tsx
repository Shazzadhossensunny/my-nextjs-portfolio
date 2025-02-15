import BlogDetails from "@/components/BlogDetails";
import { getBlogById } from "@/utils/actions/sendMessageUser";

interface BlogPageProps {
  params: {
    id: string;
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blogData = await getBlogById(params.id);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {<BlogDetails blog={blogData.data} />}
    </main>
  );
}
