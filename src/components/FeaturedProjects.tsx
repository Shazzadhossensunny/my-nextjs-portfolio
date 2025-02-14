"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FeaturedProjects = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description:
        "A comprehensive dashboard for managing online stores with real-time analytics and inventory management.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Redux"],
      liveLink: "https://project1.com",
      githubLink: "https://github.com/project1",
    },
    {
      title: "Social Media Platform",
      description:
        "Modern social networking platform with real-time chat, post sharing, and user interactions.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveLink: "https://project2.com",
      githubLink: "https://github.com/project2",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered application for generating marketing content and social media posts.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "OpenAI", "Tailwind CSS", "Firebase"],
      liveLink: "https://project3.com",
      githubLink: "https://github.com/project3",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Showcase of my recent work and projects that demonstrate my skills
            and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
              // onClick={() => handleProjectClick(project._id)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-end gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="bg-white/90 hover:bg-white"
                      // onClick={(e) => handleButtonClick(e, project.links?.live)}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Link
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies?.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="bg-white dark:bg-gray-800"
            >
              View All Projects
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
