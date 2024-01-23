"use client"

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu } from "lucide-react"

export function DropdownMenuCheckboxes() {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-28 flex flex-col items-start justify-center bg-black">
        <a href="/#experience" className="hover:cursor-pointer">
          <DropdownMenuCheckboxItem
          >
            Experience
          </DropdownMenuCheckboxItem>
        </a>
        <a href="/#projects">
          <DropdownMenuCheckboxItem
          >
            Projects
          </DropdownMenuCheckboxItem>
        </a>
        <a href="/#blogs">
          <DropdownMenuCheckboxItem
          >
            Blogs
          </DropdownMenuCheckboxItem>
        </a>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
