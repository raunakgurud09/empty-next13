import { Moon } from "lucide-react";
import Signature from "./signature";
import ThemeSwitch from "./themeSwitch";
import Menu from "./menu";

export default function Header() {
  return (
    <header className="w-full  px-4 py-2 flex justify-between">
      <div className="flex items-center justify-center">
        <Signature />
        <div>Raunak Gurud</div>
      </div>
      <div className="flex md:flex-row flex-row-reverse space-x-3 bg-blue-200/10 items-center justify-center">
        <Menu />
        <span className="h-[60%] border-none md:border  border-white/10 border-l-white/10 "></span>
        <ThemeSwitch />
      </div>
    </header>
  )
}
