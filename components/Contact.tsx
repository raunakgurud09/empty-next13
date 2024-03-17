import { Github, Linkedin, Twitter, LucideStickyNote } from "lucide-react"
import Link from "next/link"
import UnderlineLink from "./links/UnderlineLink"
import { links } from "@/data/link"

export const Contact = () => {
  return (
    <section id="contact" className=" flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl px-4">
      <h3 className="text-2xl font-bold">Contact</h3>

      <div className="flex justify-between items-center">
        <Link href={"mailto:raunakgurud2121@gmail.com"} className="w-1/2 p-3 flex flex-col items-start justify-end h-40 border-[1px] border-white/20 rounded-xl hover:bg-white/20 hover:text-white">
          <h2 className="text-4xl font-semibold">Need a developer?</h2>
          <p className="font-thin">Looking for help or hiring shoot a mail at raunakgurud2121@gmail.com</p>
        </Link>
        <div className="w-2/5 h-40 flex items-end p-3 space-x-4">
          <ul className="space-y-1">
            <li className="flex items-center space-x-1"><Github size={20} /> <UnderlineLink href={links.github}>Github</UnderlineLink></li>
            <li className="flex items-center space-x-1"><Twitter size={20} /> <UnderlineLink href={links.twitter}>Twitter</UnderlineLink></li>
          </ul>
          <ul className="space-y-1">
            <li className="flex items-center space-x-1"><Linkedin size={20} /> <UnderlineLink href={links.linkedIn}>LinkedIn</UnderlineLink></li>
            <li className="flex items-center space-x-1"><LucideStickyNote size={20} /> <UnderlineLink href={links.hashnode}>Hashnode</UnderlineLink></li>
          </ul>
        </div>
      </div>

    </section>
  )
}