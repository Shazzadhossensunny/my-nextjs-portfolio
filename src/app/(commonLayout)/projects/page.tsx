import ProjectsPage from "@/components/ProjectPage";
import { getAllProjects } from "@/utils/actions/sendMessageUser";

const AllProjectsPage = async () => {
  const projects = await getAllProjects();
  return <ProjectsPage projects={projects} isLoading={false} />;
};

export default AllProjectsPage;
