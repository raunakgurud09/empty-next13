import Blog from "@/components/blog";
import Experience from "@/components/experience";
import Header from "@/components/header";
import Main from "@/components/main";
import Project from "@/components/project";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="flex flex-col w-full md:w-[768px] mx-auto space-y-20">
        <Main />
        <Experience />
        <Project />
        <Blog />
      </div>
      <section className="h-screen "></section>
    </main>
  )
}
