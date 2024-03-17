// "use client"

import Signature from "./signature";
import ThemeSwitch from "./themeSwitch";
import Menu from "./menu";
import ScrollProgress from "./ScrollProgress";
import Link from "next/link";
export default function Header() {

  return (
    <div className="sticky top-6 z-10 text-white">
      <header className="flex h-14 justify-center ">
        <div className="w-full max-w-[1024px] px-4 rounded-full border-[1px] border-white/10 backdrop-blur flex justify-between">
          <Link href="/" className="flex items-center justify-center ">
            <Signature />
            {/* <p className="font-semibold text-primary/80">raunakgurud</p> */}
          </Link>
          <div className="flex md:flex-row flex-row-reverse space-x-3  items-center justify-center">
            <Menu />
            <span className="h-[60%] border-none md:border  border-white/10 border-l-white/10 "></span>
            {/* <ThemeSwitch /> */}
          </div>
        </div>
      </header>
      {/* <ScrollProgress /> */}
    </div>
  )
}
