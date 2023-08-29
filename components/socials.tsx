import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { SiHashnode } from "react-icons/si"

export default function Socials() {
  return (
    <div className="flex space-x-2">
      <AiFillGithub size={24} className="hover:cursor-pointer hover:text-cyan-400" />
      <AiFillLinkedin size={24} className="hover:cursor-pointer hover:text-cyan-400" />
      <AiFillMail size={24} className="hover:cursor-pointer hover:text-cyan-400" />
      {/* <AiOutlineInstagram size={24} className="hover:cursor-pointer hover:text-cyan-400" /> */}
      {/* <SiHashnode size={24} className="hover:cursor-pointer hover:text-cyan-400" /> */}
      <AiOutlineTwitter size={24} className="hover:cursor-pointer hover:text-cyan-400" />
    </div>
  )
}
