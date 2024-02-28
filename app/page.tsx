import { CursorContainer } from "@/components/animation/cursor-container";
import Blog from "@/components/blog";
import Experience from "@/components/experience";
import Main from "@/components/main";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="flex flex-col w-full md:w-[768px] mx-auto space-y-20 mb-20 text-white/80">
        <Main />
      <CursorContainer>
        <Experience />
        <Project />
        <Blog />
      </CursorContainer>
    </main>
  )
}
