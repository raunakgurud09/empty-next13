import Blog from "@/components/blog";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <main className="grid">

      <section className='mx-auto h-screen'>
        <div className="absolute top-0 left-0 right-0">
          <div className="absolute left-52 top-1 -z-10 overflow-visible opacity-20">
            {/* <div className="circle-1 -z-10 h-[400px] w-[200px] rounded-full bg-cyan-400 mix-blend-multiply blur-[128px]" /> */}
          </div>

          <div className="absolute right-36 top-60 -z-10 overflow-visible opacity-20">
            {/* <div className="circle-1 -z-10 h-[400px] w-[200px] rounded-full bg-cyan-400 mix-blend-multiply blur-[128px]" /> */}
          </div>
        </div>
      </section>

      <div className="flex flex-col w-full md:w-[760px] mx-auto space-y-16">
        <Experience />
        <Blog />
      </div>
      <section className="h-screen "></section>
    </main>
  )
}
