import Image from "next/image"
import Link from "next/link"
import { allAuthors, allPosts } from "contentlayer/generated"
import { compareDesc, format } from "date-fns"
import "@/styles/mdx.css"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

import { formatDate } from "@/lib/utils"

export const metadata = {
  title: "Blog",
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post?.slugAsParams.split("/"),
  }))
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  const blog = posts[0]
  const authors = blog.authors.map((author) => {
    console.log(blog.authors)
    const abc = allAuthors.find((author) => author.title === 'raunak')
    console.log(abc)
    return allAuthors.find(({ title }) => title === `${author}`)
  })



  return (
    <div className="container mx-auto px-4  overflow-hidden py-12 lg:py-20">
      <div className=" grid grid-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative w-full aspect-[2/1] lg:aspect-[3/2] overflow-auto rounded-lg border-[0.1px] dark:border-white/10">
          <Image
            src={(blog.image ? blog.image : blog.image)}
            layout="fill"
            objectFit="cover"
            alt="blog thumbnail"
            className="hover: "
          />
        </div>
        <div className="flex flex-col space-y-2 text-white/80">
          <div className="text-scale-900 flex space-x-2 text-sm">
            <p>{format(new Date(blog.date), " dd MMMM yyyy ")}</p>
            <p>•</p>
            <p>{" 12 min"}</p>
          </div>
          <div>
            <h2 className="font-semibold text-3xl">
              {blog.title}
            </h2>
            <p className="text-lg">
              {blog.description}
            </p>
          </div>

          <div className="grid w-max grid-flow-col grid-rows-4 gap-4 bg-blue-200">
            {authors.map((author: any) => {
              console.log(author)
              return (
                null
                // <div className="flex items-center space-x-3" key={author._id}>
                //   {author && (
                //     <div className="relative h-10 w-10 overflow-auto">
                //       <Image
                //         src={author.avatar}
                //         alt={`${author.avatar} avatar`}
                //         className="rounded-full"
                //         layout="fill"
                //         objectFit="cover"
                //       />
                //     </div>
                //   )}
                //   <div className="flex flex-col">
                //     <span className="text-scale-1200 m-0 text-sm">{author.title}</span>
                //     <span className="text-scale-900 m-0 text-xs">{author.twitter}</span>
                //   </div>
                // </div>
              )
            })}
          </div>

        </div>
      </div>


      <div className="my-2 mt-20" />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-3">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={804}
                  height={452}
                  className="rounded-md border bg-muted transition-colors"
                  priority={index <= 1}
                />
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}
