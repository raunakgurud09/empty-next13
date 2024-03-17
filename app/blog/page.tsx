"use client"

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
import { useCallback, useEffect, useState } from "react"
import { Search } from "lucide-react"


export function generateStaticParams() {
  return allPosts.map((post) => {
    return {
      slug: post?.slugAsParams.split("/"),
    }
  }
  )
}


export default function BlogPage({ params }: PostPageProps) {


  const _posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  const [searchKey, setSearchKey] = useState<string>('')
  const [posts, setPosts] = useState(_posts)



  useEffect(() => {
    if (!!searchKey) {
      // @ts-ignore
      setPosts(handleSearchByText)
    } else {
      setPosts(_posts)
    }
  }, [searchKey])


  const handleSearchByText = useCallback(() => {
    if (!searchKey) return
    const matches = posts.filter((post: any) => {
      const found =
        post.tags?.split(',').join(' ').replaceAll('-', ' ').includes(searchKey.toLowerCase()) ||
        post.title?.toLowerCase().includes(searchKey.toLowerCase()) ||
        post.author?.includes(searchKey.toLowerCase())
      return found
    })
    return matches
  }, [searchKey])

  const handleSearchChange = (event: any) => {
    setSearchKey(event.target.value)
  }


  const blog = _posts[0]

  // const featuredPost = _posts[0]
  // console.log("featuredPost",featuredPost.authors)
  // const author = undefined

  return (
    <div className="w-full">

      {/* <h1 className='h0 text-muted-foreground mt-2 max-w-4xl font-medium leading-tight'>
        Leave whatever you like to say—message, appreciation, suggestions.
      </h1> */}

      <FeaturedBlog
        blog={blog}
      // authors={author}
      />

      <div className="my-20 border border-border w-full" />

      <div className="max-w-[1360px] mx-auto">
        {/* search box */}
        <div className="w-full my-2 h-8 flex justify-end">
          <div className="flex items-center relative">
            <Search size={16} className="absolute left-2" />
            <input
              autoComplete="off"
              type="search"
              placeholder="Search blog"
              value={searchKey}
              onChange={handleSearchChange}
              className="w-[300px] pl-8 px-1 py-1 rounded-md border border-white/30 outline outline-[0px] focus:ring-0 bg-transparent"
            />
          </div>
        </div>
        {posts?.length ? (
          <div className="grid grid-cols-12 ny-8 md:my-16 lg:gap-16">
            {posts.map((post, index) => {

              const authors = blog.authors.map((author) => {
                return allAuthors.find(({ slug }) => slug === `/authors/${author}`)
              }).slice(0, -1)

              return (
                <BlogCard
                  blog={post}
                  authors={authors}
                />
              )
            })
            }
          </div>
        ) : (
          <div className="h-96">No result.</div>
        )}
      </div>
    </div>
  )
}


interface FeatureBlogProps {
  blog: Post;
  authors?: (Author | undefined)[]
}

const FeaturedBlog = ({ blog, authors }: FeatureBlogProps) => {

  return (
    <div className="max-w-[1360px] mx-auto">
      <div className="grid grid-8 lg:grid-cols-2 lg:gap-16 p-8  my-1 md:my-6">
        <div className="relative w-full aspect-[2/1] lg:aspect-[3/2] overflow-auto rounded-lg border-[0.1px] border-white/10">
          <Image
            src={(blog.image ? blog.image : blog.image)}
            layout="fill"
            objectFit="cover"
            alt="blog thumbnail"
            className="hover: "
          />
        </div>
        <div className="flex h-full bg-blu-200/10 justify-center flex-col space-y-2 ">
          <div className="text-scale-900 flex space-x-2 text-sm text-white/80">
            <p>{format(new Date(blog.date), " dd MMMM yyyy ")}</p>
            <p>•</p>
            <p>{blog.readingTime} min</p>
          </div>
          <div className="space-y-1">
            <h2 className="font-semibold text-5xl">
              {blog.title}
            </h2>
            <p className="font-light text-lg text-white/80">
              {blog.description}
            </p>
            {/* <p className="font-light text-sm text-white/80">
            {blog.body.raw.slice(6, 1000)}
          </p> */}
          </div>

          <div className="grid  w-max grid-flow-col  gap-4 ">
            {/* <AuthorCard/> */}
          </div>
        </div>
      </div>
    </div>
  )
}

interface BlogCardProps {
  blog: Post;
  authors: (Author | undefined)[]
}


const BlogCard = ({ blog, authors }: BlogCardProps) => {
  return (
    <Link
      href={blog.slug}
      key={blog._id}
      className="col-span-12 mb-4 md:col-span-12 lg:col-span-6 xl:col-span-4 flex flex-col group justify-between space-y-8"
    >
      <div className="space-y-2">
        {blog.image && (
          <div className="border-border relative mb-4 w-full aspect-[2/1] lg:aspect-[3/2] overflow-hidden rounded-lg border-[1px] shadow-sm">
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
        {blog.date && (
          <div className="flex space-x-1 items-center font-normal text-white/60">
            <p className="text-sm">{(formatDate(blog.date))}</p>
            <strong>•</strong>
            <p className="text-sm">{`${blog.readingTime} minutes read`}</p>
          </div>
        )}
        <h2 className="text-xl font-medium ">{blog.title}</h2>
        {blog.description && (
          <p className="text-white/80 font-light">{blog.description}</p>
        )}
      </div>
      <div className="mt-1 space-y-1 h-16 text-scale-900 text-sm">
        {/* Author card */}
        {/* <div className="grid w-max grid-flow-col grid-rows-4 gap-4">
          {authors.map((author: any) => {
            return (
              <AuthorCard author={author} />
            )
          })}
        </div> */}
      </div>
    </Link>
  )
}