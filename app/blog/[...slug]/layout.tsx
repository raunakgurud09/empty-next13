import { ChevronLeft } from "lucide-react"
import Link from "next/link"


interface LayoutProps {
  children: React.ReactNode
}

export default async function Layout({
  children,
}: LayoutProps) {
  return (
    <div className="flex w-full min-w-[1360px] mx-auto relative">
      <Link href={'/blog'} className="w-full h-10 min-w-[290px]  flex justify-center items-center sticky top-16">
        <div className="flex item-center">
          <ChevronLeft className="mt-[2px]" />
          <span className="text-lg ">Back</span>
        </div>
      </Link>
      <article className="min-w-[780px]  pb-40">
        {children}
      </article>
      <aside className="min-w-[290px]">
        
      </aside>
    </div>
  )
}
