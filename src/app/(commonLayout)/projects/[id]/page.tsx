import ProjectDetail from "@/components/ProjectDetails";
import { Project } from "@/types/project.type";
import { getProjectById } from "@/utils/actions/sendMessageUser";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const projectData = await getProjectById(params.id);

  return (
    <main>
      <ProjectDetail project={projectData.data} />
    </main>
  );
}
