import Blog from "@/components/blog";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Main from "@/components/main";
import Project from "@/components/project";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col w-full md:w-[768px] mx-auto space-y-20 mb-20">
        <Main />
        <Experience />
        <Project />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
