import Blog from "@/components/blog";
import Experience from "@/components/experience";
import Main from "@/components/main";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col w-full md:w-[768px] mx-auto space-y-16">
        <Main />
        <Experience />
        <Blog />
        <Project />
      </div>
      <section className="h-screen "></section>
    </main>
  )
}
