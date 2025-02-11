import FeaturedBlogs from "@/components/FeaturedBlogs";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedProjects />
      <SkillsSection />
      <FeaturedBlogs />
    </div>
  );
};

export default HomePage;
