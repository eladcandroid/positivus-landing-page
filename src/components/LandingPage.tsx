import { NavigationBar } from "./NavigationBar";
import { HeroSection } from "./HeroSection";
import { LogoSection } from "./LogoSection";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex flex-col gap-[70px] items-start justify-start w-full">
        <NavigationBar />
        <HeroSection />
        <LogoSection />
      </div>
    </div>
  );
}
