import { Moon } from "lucide-react";
import Signature from "./signature";
import ThemeSwitch from "./themeSwitch";

export default function Header() {
  return (
    <header className="w-full  px-4 py-2 flex justify-between">
      <div className="flex items-center justify-center">
        <Signature />
        <div>Raunak Gurud</div>
      </div>
      <div className="flex space-x-3  items-center justify-center">
        <ul className="flex space-x-3">
          <a href="/#experience">
            <li className="opacity-60 hover:opacity-100 hover:text-cyan-400 hover:cursor-pointer">Experience</li>
          </a>
          <a href="/#projects">
            <li className="opacity-60 hover:opacity-100 hover:text-cyan-400 hover:cursor-pointer">Projects</li>
          </a>
          <a href="/#blog">
            <li className="opacity-60 hover:opacity-100 hover:text-cyan-400 hover:cursor-pointer">Blog</li>
          </a>
        </ul>
        <span className="h-[60%] border border-white/10 border-l-gray-800"></span>
        <div>
          {/* <Moon /> */}
          <ThemeSwitch />
        </div>
      </div>
    </header>
  )
}
