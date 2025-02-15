import ProjectDetail from "@/components/ProjectDetails";
import { getProjectById } from "@/utils/actions/sendMessageUser";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectData = await getProjectById(params.id);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <ProjectDetail project={projectData.data} />
    </main>
  );
}
