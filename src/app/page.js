import HeroSection from "./components/hero-section";
import { Sidebar } from "./components/sidebar";
import { Techno } from "./components/techno";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <HeroSection />
    </main>
  );
}
