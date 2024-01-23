// "use client"

import Signature from "./signature";
import ThemeSwitch from "./themeSwitch";
import Menu from "./menu";
import ScrollProgress from "./ScrollProgress";
export default function Header() {
  
  return (
    <div className="sticky top-0 z-10 text-white/80">
      <header className="w-full flex justify-center border-b-[0.1px] border-white/10 bg-black">
        <div className="w-full max-w-[1360px] px-4  flex justify-between">
          <div className="flex items-center justify-center">
            <Signature />
            <p className="font-semibold text-primary/80">raunakgurud</p>
          </div>
          <div className="flex md:flex-row flex-row-reverse space-x-3  items-center justify-center">
            <Menu />
            <span className="h-[60%] border-none md:border  border-white/10 border-l-white/10 "></span>
            <ThemeSwitch />
          </div>
        </div>
      </header>
      {/* <ScrollProgress /> */}
    </div>
  )
}
