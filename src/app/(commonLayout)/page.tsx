import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import { getFeatureProjects } from "@/utils/actions/sendMessageUser";

const HomePage = async () => {
  const projects = await getFeatureProjects();
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
