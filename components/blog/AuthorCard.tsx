import { Author } from '@/.contentlayer/generated'
import React from 'react'
import Image from "next/image"

interface AuthorCardProps {
  author: Author
}

function AuthorCard({ author }: AuthorCardProps) {
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
        <span className="text-scale-900 m-0 text-xs">@{author?.twitter}</span>
      </div>
    </div>
  )
}

export default AuthorCard