import NextImage from "next/image"
import { compareDesc, format, parseISO } from "date-fns"
import { Post, allPosts } from "@/.contentlayer/generated"
import Link from "next/link"
import UnderlineLink from "./links/UnderlineLink"
import { ExternalLink } from "lucide-react"




export default function Blog() {


  const _posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    }).slice(0, 4)

  return (
    <section id="blog" className=" flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl px-4">
      <h3 className="text-2xl font-bold">Blog</h3>
      <div className="flex flex-col space-y-4">
        {
          _posts.map((post: Post) => (
            <div className="" key={post._id}>
              <BlogCard
                post={post}
              />
            </div>
          ))
        }
      </div>
      <p><UnderlineLink href="/blog" className="inline-text">View all blog post.</UnderlineLink></p>
    </section>
  )
}


function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slugAsParams}`} className="relative group hover:border-[1px] hover:border-white/20 w-full py-4  px-2  flex flex-col md:flex-row hover:scale-[1.02] transition-all  rounded-md items-start" key={post._id}>

      <div className="w-full md:w-2/12 h-56 md:h-28 px-0 md:pr-1">
        <NextImage
          src={post.image}
          alt={post.slug}
          width={144}
          height={256}
          className="bg-transparent w-full h-full rounded-md object-contain" />
      </div>

      <div className="w-6 h-6 p-1 bg-white rounded-md flex items-center justify-center -right-1 -top-3 absolute opacity-0 group-hover:opacity-100 transition-all">
        <ExternalLink  className="text-black"/>
      </div>

      <div className="w-full md:w-10/12 flex flex-col  justify-start px-0 py-2 md:px-2 md:py-0">
        <div className="flex flex-row space-x-2 text-xs mb-2">
          <p>{format(new Date(post.date), " dd MMMM yyyy ")}</p>
          <p>•</p>
          <p className="">{Math.floor(post.readingTime)} min</p>
        </div>

        <h4 className="text-lg font-semibold">{post.title}</h4>

        <p className="text-sm font-extralight">{post.description}</p>
      </div>
    </Link>
  )
}