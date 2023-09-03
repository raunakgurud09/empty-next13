"use client"

import briefly from "@/assets/briefly_logo.png"
import NextImage from "next/image"
import SkillCard from "./skillCard"
import { Atom, BookPlus, Boxes, Cat, Clapperboard, ContainerIcon, Link, Pencil, Plus, Wind } from "lucide-react"
import { useState } from "react"
import More from "./more"
import { AiFillGithub } from "react-icons/ai"

import { projects } from "@/data/projects.js"

const skills = [
  {
    name: "Docker",
    icon: <ContainerIcon size={16} />
  },
  {
    name: "React",
    icon: <Atom size={16} />
  },
  {
    name: "kubernetes",
    icon: <Boxes size={16} />
  },
  {
    name: "Next.JS",
    icon: <Pencil size={16} />
  },
  {
    name: "Cut",
    icon: <Clapperboard size={16} />
  },
  {
    name: "Metamask",
    icon: <Cat size={16} />
  },
  {
    name: "tailwindcss",
    icon: <Wind size={16} />
  },
  {
    name: "Storybook",
    icon: <BookPlus size={16} />
  },


]

export default function Project() {
  return (
    <section id="projects" className="flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl">
      <h3 className="text-2xl px-4 font-bold">Project</h3>
      <div className="flex flex-col space-y-2">
        {
          projects.map((proj, i) => (
            <div className="px-4" key={i}>
              <ProjectCard
                _id={proj._id}
                name={proj.name}
                date={proj.date}
                live_website={proj.live_website}
                github={proj.github}
                image={proj.image}
                brief={proj.brief}
              />
            </div>
          ))
        }
      </div>


    </section>
  )
}

type Props = {
  _id: string;
  date?: string;
  name: string;
  live_website?: string;
  github?: string;
  brief: string;
  image?: string;
  skills?: {
    name?: string;
    icon?: string;
  }[];
}

function ProjectCard({
  _id,
  date,
  name,
  live_website,
  github,
  brief,
  image,
}: Props) {
  const [show, setShow] = useState(false)

  return (
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-2/12 flex flex-col-reverse md:flex-col">
        <p className="text-xs mt-1 mb-2" >{date}</p>
        <div className="w-full flex justify-start md:justify-end items-center">
          {/* <NextImage
            src={brief}
            alt="logo"
            width={30}
            height={30}
            className="m-1"
          /> */}
        </div>
      </div>
      <div className="w-full md:ml-2 md:w-10/12">
        <h4 className="text-lg font-semibold">{name}</h4>
        <div className="flex space-x-2 my-2">
          {live_website && <a href={live_website} target="_black"><Link size={20} /></a>}
          {github && <a href={github} target="_black"><AiFillGithub size={20} /></a>}
        </div>
        <p className="text-sm font-light">{brief}</p>
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
