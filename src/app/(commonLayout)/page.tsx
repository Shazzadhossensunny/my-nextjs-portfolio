import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { getAllProjects } from "@/utils/actions/sendMessageUser";

const HomePage = async () => {
  const projects = await getAllProjects();
  return (
    <div>
      <HeroSection />
      <FeaturedProjects projects={projects} isLoading={false} />
      <SkillsSection />
      <FeaturedBlogs />
    </div>
  );
};

export default HomePage;
