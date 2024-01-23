import Image from "next/image"
import Link from "next/link"
import { Author, Post, allAuthors, allPosts } from "contentlayer/generated"
import { compareDesc, format } from "date-fns"
import "@/styles/mdx.css"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

import { formatDate } from "@/lib/utils"
import AuthorCard from "@/components/blog/AuthorCard"

export const metadata = {
  title: "Blog",
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => {
    return {
      slug: post?.slugAsParams.split("/"),
    }
  }
  )
}


export default async function BlogPage({ params }: PostPageProps) {


  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  const blog = posts[0]

  const authors = blog.authors.map((author) => {
    return allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  }).slice(0, -1)

  return (
    <div className="container mx-auto px-4 overflow-hidden py-12 lg:py-20">

      <FeaturedBlog
        blog={blog}
        authors={authors}
      />

      <div className="my-28 border border-border" />

      {posts?.length ? (
        <div className="grid grid-cols-12 ny-8 md:my-16 lg:gap-16">
          {posts.map((post, index) => {

            const authors = blog.authors.map((author) => {
              return allAuthors.find(({ slug }) => slug === `/authors/${author}`)
            }).slice(0, -1)
            
            return (
              <TopBlog
                blog={post}
                authors={authors}
              />
            )
          })
          }
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </div>
  )
}


interface FeatureBlogProps {
  blog: Post;
  authors: (Author | undefined)[]
}

const FeaturedBlog = ({ blog, authors }: FeatureBlogProps) => {
  return (
    <div className="grid grid-8 lg:grid-cols-2 lg:gap-16  my-1 md:my-6">
      <div className="relative w-full aspect-[2/1] lg:aspect-[3/2] overflow-auto rounded-lg border-[0.1px] border-white/10">
        <Image
          src={(blog.image ? blog.image : blog.image)}
          layout="fill"
          objectFit="cover"
          alt="blog thumbnail"
          className="hover: "
        />
      </div>
      <div className="flex h-min flex-col space-y-2 text-white/80">

        <div className="text-scale-900 flex space-x-2 text-sm">
          <p>{format(new Date(blog.date), " dd MMMM yyyy ")}</p>
          <p>•</p>
          <p>{blog.readingTime} min</p>
        </div>
        <div>
          <h2 className="font-semibold text-3xl">
            {blog.title}
          </h2>
          <p className="text-lg">
            {blog.description}
          </p>
        </div>

        <div className="grid w-max grid-flow-col  gap-4 ">
          {authors.map((author: any) => {
            return (
              <AuthorCard author={author} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

interface TopBlogProps {
  blog: Post;
  authors: (Author | undefined)[]
}


const TopBlog = ({ blog, authors }: TopBlogProps) => {
  return (
    <Link
      href={blog.slug}
      key={blog._id}
      className="col-span-12 mb-16 md:col-span-12 lg:col-span-6 xl:col-span-4 flex flex-col justify-between space-y-8"
    >
      <div className="space-y-2">
        {blog.image && (
          <div className="border-border relative mb-4 w-full aspect-[2/1] lg:aspect-[3/2] overflow-hidden  rounded-lg border-[1px] shadow-sm">
            <Image
              src={blog.image}
              alt={blog.title}
              width={604}
              height={852}
              className="w-full h-full scale-100 o overflow-hidden transform transition-transform group-hover:scale-[1.02]"
              // priority={index <= 1}
            />
          </div>
        )}
        <h2 className="text-2xl font-semibold ">{blog.title}</h2>
        {blog.description && (
          <p className="text-muted-foreground ">{blog.description}</p>
        )}
        {/* <Link href={blog.slug} className="absolute inset-0">
          <span className="sr-only">View Article</span>
        </Link> */}
      </div>

      <div className="mt-1 space-y-1 h-16 text-scale-900 text-sm">
        {blog.date && (
          <div className="flex space-x-1">
            <p>{(formatDate(blog.date))}</p>
            <p>•</p>
            <p>{" 12 min"}</p>
          </div>
        )}
        <div className="grid w-max grid-flow-col grid-rows-4 gap-4">
          {authors.map((author: any) => {
            return (
              <div className="flex items-center space-x-3" key={author?._id}>
                {author && (
                  <div className="relative h-10 w-10 overflow-auto">
                    <Image
                      src={author.avatar}
                      alt={`${author.avatar} avatar`}
                      className="rounded-full"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <span className="text-scale-1200 m-0 text-sm">{author?.title}</span>
                  <span className="text-scale-900 m-0 text-xs">{author?.twitter}</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </Link>

  )
}