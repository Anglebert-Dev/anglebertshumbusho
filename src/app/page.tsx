import HeroSection from './components/sections/hero/HeroSection';
import AboutSection from './components/sections/about/AboutSection';
import SkillsSection from './components/sections/skills/SkillsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
    </main>
  );
}
