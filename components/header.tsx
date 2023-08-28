import { Moon } from "lucide-react";
import Signature from "./signature";

export default function Header() {
  return (
    <div className="w-full  px-4 py-2 flex justify-between">
      <div className="flex items-center justify-center">
        <Signature />
        <div>Raunak Gurud</div>
      </div>
      <div className="flex space-x-3  items-center justify-center">
        <ul className="flex space-x-3">
          <li className="text-stone-300 hover:text-cyan-400 hover:cursor-pointer">Experience</li>
          <li className="text-stone-300 hover:text-cyan-400 hover:cursor-pointer">Projects</li>
          <li className="text-stone-300 hover:text-cyan-400 hover:cursor-pointer">Blog</li>
          <li className="text-stone-300 hover:text-cyan-400 hover:cursor-pointer">Contact</li>
        </ul>
        <span className="h-[60%] border border-white/10 border-l-gray-800"></span>
        <div>
          <Moon />
        </div>
      </div>
    </div>
  )
}
