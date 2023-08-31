"use client"

import briefly from "@/assets/briefly_logo.png"
import NextImage from "next/image"
import SkillCard from "./skillCard"
import { Atom, BookPlus, Boxes, Cat, Clapperboard, ContainerIcon, Link, Pencil, Plus, Wind } from "lucide-react"
import { useState } from "react"
import More from "./more"
import { AiFillGithub } from "react-icons/ai"

const skills = [
  {
    name: "Docker",
    icon: <ContainerIcon />
  },
  {
    name: "React",
    icon: <Atom />
  },
  {
    name: "kubernetes",
    icon: <Boxes />
  },
  {
    name: "Next.JS",
    icon: <Pencil />
  },
  {
    name: "Cut",
    icon: <Clapperboard />
  },
  {
    name: "Metamask",
    icon: <Cat />
  },
  {
    name: "tailwindcss",
    icon: <Wind />
  },
  {
    name: "Storybook",
    icon: <BookPlus />
  },


]

export default function Project() {
  return (
    <section id="projects" className="flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl">
      <h3 className="text-2xl px-4 font-bold">Project</h3>
      <div className="flex flex-col space-y-2">
        {
          [...Array(1)].map((_, i) => (
            <div className="px-4" key={i}>
              <ProjectCard />
            </div>
          ))
        }
      </div>


    </section>
  )
}

function ProjectCard() {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/12 flex flex-col-reverse md:flex-col">
        <p className="text-xs mt-1 mb-2" >Jun 2022 - Aug 2022</p>
        <div className="w-full flex justify-start md:justify-end items-center">
          <NextImage
            src={briefly}
            alt="logo"
            width={30}
            height={30}
            className="m-1"
          />
        </div>
      </div>
      <div className="w-full md:ml-2 md:w-10/12">
        <h4 className="text-xl font-semibold">Project name</h4>
        <div className="flex space-x-2">
          <a href=""><Link size={12} /></a>
          <a href=""><AiFillGithub size={12} /></a>
        </div>
        <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aspernatur alias, debitis cumque ducimus obcaecati tempore numquam dicta, veritatis expedita maiores. Aliquid repellendus sint sunt? Sint iure deleniti dicta praesentium.</p>
        <div className="flex flex-wrap my-1">
          {
            show ? skills.map((skill, i) => {
              return (
                <SkillCard skill={skill} key={i} />
              )
            }) : skills.slice(0, 4).map((skill, i) => {
              return (
                <>
                  <SkillCard skill={skill} key={i} />
                </>
              )
            })
          }
          {<div onClick={() => setShow(!show)}>
            <More state={!show} />
          </div>}
        </div>
      </div>
    </div>
  )
}
