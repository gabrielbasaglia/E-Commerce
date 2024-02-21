import HeroSection from "./components/hero-section";
import { Sidebar } from "./components/sidebar";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <HeroSection />
    </main>
  );
}
