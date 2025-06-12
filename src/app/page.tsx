import HeroSection from './components/sections/hero/HeroSection';
import AboutSection from './components/sections/about/AboutSection';
import SkillsSection from './components/sections/skills/SkillsSection';
import ProjectsSection from './components/sections/projects/ProjectsSection';
import ExperienceSection from './components/sections/experience/ExperienceSection';
import BlogSection from './components/sections/blog/BlogSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <BlogSection />
    </main>
  );
}
