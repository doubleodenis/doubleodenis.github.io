import { Sidebar } from "@/components/Sidebar";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-16">
        <Sidebar />
        <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
          {/* <About /> */}
          <Experience />
          <Projects />
          {/* <Footer /> */}
        </main>
      </div>
    </div>
  );
}
