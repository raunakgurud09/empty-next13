import { Contact } from "@/components/Contact";
import { CursorContainer } from "@/components/animation/cursor-container";
import Blog from "@/components/blog";
import Experience from "@/components/experience";
import Main from "@/components/main";
import Project from "@/components/project";

export default function Home() {
  return (
    <CursorContainer>
      <main className="flex flex-col w-full md:w-[768px] mx-auto space-y-20 text-white/80 pb-96">
        <Main />
        <Experience />
        <Project />
        <Blog />
        <Contact />
      </main>
    </CursorContainer>
  )
}
