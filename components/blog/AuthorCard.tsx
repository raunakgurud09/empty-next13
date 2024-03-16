import { Author } from '@/.contentlayer/generated'
import React from 'react'
import Image from "next/image"
import Link from 'next/link'

// import raunakImage from '/public/images/avatars/raunak.png'
import raunakImage from '../../public/images/avatars/raunak.png'

interface AuthorCardProps {
  author?: Author
}

function AuthorCard({ author }: AuthorCardProps) {
  return (
    <Link href={author ? `https://x.com/${author?.twitter}` : `https://x.com/raunakgurud` } target='_blank'>
      <div className="flex items-center space-x-2 hover:bg-white/5 cursor-pointer pr-3 my-2 rounded-md" key={author?._id}>
        {author && (
          <div className="relative h-10 w-10 overflow-auto">
            <Image
              src={raunakImage}
              alt={`raunakgurud avatar`}
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
            <Image
              src={author == undefined ? raunakImage : author?.avatar  }
              alt={`${author?.avatar} avatar`}
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="flex flex-col">
          <span className="text-scale-1200 m-0 font-medium text-sm">{author ? author?.title : "Raunak Gurud"}</span>
          <span className="text-scale-900 m-0 font-normal text-xs text-white/40">@{author ? author?.twitter : "raunakgurud"}</span>
        </div>
      </div>
    </Link>
  )
}

export default AuthorCard