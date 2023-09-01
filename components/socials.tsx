import { AiFillGithub, AiFillLinkedin, AiFillMail, AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai"
import { SiHashnode } from "react-icons/si"

export default function Socials() {
  return (
    <div className="flex space-x-4">
      <a href="https://github.com/raunakgurud09" target="_blank">
        <AiFillGithub size={24} className="hover:cursor-pointer hover:text-cyan-400" />
      </a>
      <a href="https://www.linkedin.com/in/raunak-gurud-3b8261205/" target="_blank">
        <AiFillLinkedin size={24} className="hover:cursor-pointer hover:text-cyan-400" />
      </a>
      <a href="mailto:raunakgurud2121@gmail.com" target="_blank">
        <AiFillMail size={24} className="hover:cursor-pointer hover:text-cyan-400" />
      </a>
      <a href="https://twitter.com/RaunakGurud" target="_blank">
        <AiOutlineTwitter size={24} className="hover:cursor-pointer hover:text-cyan-400" />
      </a>
    </div>
  )
}


{/* <AiOutlineInstagram size={24} className="hover:cursor-pointer hover:text-cyan-400" /> */ }
{/* <SiHashnode size={24} className="hover:cursor-pointer hover:text-cyan-400" /> */ }
