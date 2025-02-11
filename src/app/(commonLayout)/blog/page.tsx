"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, Tag, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPage = () => {
  const categories = [
    "All",
    "React",
    "Next.js",
    "TypeScript",
    "Web Development",
    "UI/UX",
  ];

  const posts = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt:
        "Learn how to structure large-scale React applications using TypeScript and modern best practices...",
      date: "2024-02-10",
      readTime: "8 min read",
      category: "React",
      image: "/api/placeholder/800/400",
      slug: "building-scalable-react-applications",
    },
    {
      title: "The Future of Web Development with Next.js 14",
      excerpt:
        "Explore the latest features and improvements in Next.js 14 and how they revolutionize web development...",
      date: "2024-02-08",
      readTime: "6 min read",
      category: "Next.js",
      image: "/api/placeholder/800/400",
      slug: "future-of-web-development-nextjs",
    },
    // Add more blog posts...
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Thoughts, tutorials and insights about web development, design, and
            technology.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.article
              key={post.slug}
              variants={item}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <a href={`/blog/${post.slug}`} className="block">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-purple-600 text-white text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold mb-3 hover:text-purple-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-purple-600 dark:text-purple-400">
                    Read More <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-12 gap-2"
        >
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button>1</Button>
          <Button variant="outline">2</Button>
          <Button variant="outline">3</Button>
          <Button variant="outline">Next</Button>
        </motion.div>
      </div>
    </main>
  );
};

export default BlogPage;
