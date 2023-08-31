import { Link } from "lucide-react"

export default function Blog() {
  return (
    <section id="blog" className=" flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl">
      <h3 className="text-2xl font-bold px-4">Blog</h3>
      <div className="flex flex-col space-y-2">
        {
          [...Array(2)].map((_, i) => (
            <div className="px-4" key={i}>
              <BlogCard />
            </div>
          ))
        }
      </div>
    </section>
  )
}

function BlogCard() {
  return (
    <div className="py-4  px-0  flex flex-col md:flex-row hover:scale-[1.02] transition-all rounded-md">
      <div className="w-full md:w-2/12 h-56 md:h-28 px-0 md:pr-1">
        {/* image */}
        <div className="bg-white/10 w-full h-full rounded-md"></div>
      </div>

      <div className="w-full md:w-10/12 flex flex-col items-start justify-center  px-0 py-2 md:px-2 md:py-0">

        <h4 className="text-lg font-semibold">Title of the blog</h4>
        <div className="flex flex-row space-x-4">
          <p className="text-sm font-light">23/08/2023</p>
          <p className="text-sm font-light">6 min read</p>
        </div>
        <p className="text-sm font-light mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, sed officia iste aliquid architecto harum minus accusantium rem dicta voluptates?</p>
      </div>
    </div>
  )
}