import NextImage from "next/image"
import { format, parseISO } from "date-fns"
import { posts } from "@/data/hashnode";

export default function Blog() {
  return (
    <section id="blog" className=" flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl">
      <h3 className="text-2xl font-bold px-4">Blog</h3>
      <div className="flex flex-col space-y-2">
        {
          posts.map((post: any, i) => (
            <div className="px-4" key={i}>
              <BlogCard
                _id={post._id}
                slug={post.slug}
                title={post.title}
                brief={post.brief}
                coverImage={post.coverImage}
                readingTime={post.readingTime.minutes}
                dateAdded={post.dateAdded}
              />
            </div>
          ))
        }
      </div>
    </section>
  )
}

type Props = {
  _id: string;
  slug: string;
  title: string;
  brief: string;
  coverImage: string;
  dateAdded: string;
  readingTime: number
}

function BlogCard({
  _id,
  slug,
  title,
  brief,
  coverImage,
  dateAdded,
  readingTime,
}: Props) {
  return (
    <div className="py-4  px-0  flex flex-col md:flex-row hover:scale-[1.02] transition-all rounded-md">
      <div className="w-full md:w-2/12 h-56 md:h-28 px-0 md:pr-1">
        {/* image */}
        <NextImage
          src={coverImage}
          alt={slug}
          width={144}
          height={256}
          className="bg-white/10 w-full h-full rounded-md object-cover" />
      </div>

      <div className="w-full md:w-10/12 flex flex-col items-start justify-center  px-0 py-2 md:px-2 md:py-0">

        <h4 className="text-lg font-semibold">{title}</h4>
        <div className="flex flex-row space-x-4">
          <p className="text-sm font-light">{format(parseISO(dateAdded), "PPP")}</p>
          <p className="text-sm font-light">{Math.floor(readingTime)} min read</p>
        </div>
        <p className="text-sm font-light mt-2 ">{brief}</p>
      </div>
    </div>
  )
}