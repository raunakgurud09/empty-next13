import { allAuthors, allPosts } from "contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { notFound } from "next/navigation"
import { Mdx } from "@/components/mdx-components";
import Link from "next/link";
import Image from "next/image"
import AuthorCard from "@/components/blog/AuthorCard";

interface PostPageProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: any) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post?.slugAsParams.split("/"),
  }))
}

const PostLayout = async ({ params }: { params: { slug: string } }) => {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) => {
    return allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  })


  return (
    <div className="flex flex-col space-y-6 mt-10">
      <div className="flex flex-col">
        {authors?.length > 0 ? (
          <div className="mt-4 flex space-x-4">
            {authors.map((author) =>
              author ? (
                <AuthorCard author={author} />
              ) : null
            )}
          </div>
        ) : null}
        <p className="text-sm">{format(parseISO(post.date), "LLLL d, yyyy")}</p>
      </div>
      <Image
        src={post.image}
        alt="blog cover"
        width={1920}
        height={1080}
        className="w-full object-cover rounded-md"
      />
      <h1 className="text-5xl font-semibold ">{post.title}</h1>
      <article>
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
};

export default PostLayout;