"use client"

import Image from "next/image"
import SkillCard from "./skillCard"
import { AlignJustify, Atom, BookPlus, Boxes, Cat, Clapperboard, ContainerIcon, LayoutGrid, Link, Pencil, Plus, Wind } from "lucide-react"
import { useState } from "react"
import More from "./more"
import { AiFillGithub } from "react-icons/ai"

import { projects } from "@/data/projects.js"
import UnstyledLink from "./links/UnstyledLink"
import UnderlineLink from "./links/UnderlineLink"
import { motion } from "framer-motion"
import { FRAMER_MOTION_UP_LATE } from "@/lib/framer"

const skills = [
  {
    _id: 1,
    name: "Docker",
    icon: <ContainerIcon size={16} />
  },
  {
    _id: 2,
    name: "React",
    icon: <Atom size={16} />
  },
  {
    _id: 3,
    name: "kubernetes",
    icon: <Boxes size={16} />
  },
  {
    _id: 4,
    name: "Next.JS",
    icon: <Pencil size={16} />
  },
  {
    _id: 5,
    name: "Cut",
    icon: <Clapperboard size={16} />
  },
  {
    _id: 6,
    name: "Metamask",
    icon: <Cat size={16} />
  },
  {
    _id: 7,
    name: "tailwindcss",
    icon: <Wind size={16} />
  },
  {
    _id: 8,
    name: "Storybook",
    icon: <BookPlus size={16} />
  },


]

export default function Project() {

  const [toggle, setToggle] = useState(true)


  return (
    <section id="projects" className="flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl">

      <div className="flex items-center justify-between">
        <h3 className="text-2xl px-4 font-bold">Project</h3>
        <button
          onClick={() => {
            console.log(toggle);
            setToggle(!toggle);
          }}
          className="hover:bg-white/20 p-1 rounded-md"
        >
          {
            toggle ? <AlignJustify /> : <LayoutGrid />
          }
        </button>
      </div>

      {
        toggle
          ? (
            <div className='mt-4 grid w-full grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2'>
              {projects.map((proj) => (
                <GridProjectCard
                  key={proj._id}
                  _id={proj._id.toString()}
                  name={proj.name}
                  date={proj.date}
                  live_website={proj.live_website}
                  github={proj.github}
                  image={proj.image}
                  brief={proj.brief}
                />
              ))}
            </div>
          )
          : (
            <div className="flex flex-col space-y-2">
              {
                projects.map(
                  (proj) => {
                    return (
                      <ProjectCard
                        key={proj._id}
                        _id={proj._id.toString()}
                        name={proj.name}
                        date={proj.date}
                        live_website={proj.live_website}
                        github={proj.github}
                        image={proj.image}
                        brief={proj.brief}
                      />
                    )
                  }
                )
              }
            </div>

          )
      }





    </section >
  )
}

type Props = {
  _id: string;
  date?: string;
  name: string;
  live_website?: string;
  github: string;
  brief: string;
  image: string;
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
    <div key={_id} className="flex flex-col md:flex-row px-4">
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

export const GridProjectCard = ({
  _id,
  date,
  name,
  live_website,
  github,
  brief,
  image,
}: Props) => {
  return (
    <UnstyledLink
      href={github}
      className='relative group p-2 focus-visible:rounded-2xl'
      trackEventTag={`Project Card - ${name}`}
    >
      <motion.div
        className='absolute inset-0 z-10 aspect-video rounded-xl group-hover:bg-black/80 flex items-end'>
        <p className='p-3  mt-1 text-xs opacity-0 transition-all group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100'>
          {brief}
        </p>
      </motion.div>

      <div className='aspect-video overflow-hidden rounded-xl border-[1px] border-white/10'>
        <Image
          className='h-full w-full object-cover transition-all group-hover:scale-110 '
          width={1000}
          height={1800}
          src={image}
          alt={name}
        />
      </div>

      <p className='group-hover:animated-underline group-hover:custom-link border-b border-dotted hover:border-white/10 inline-flex items-center font-medium h4 after:bg-light after:dark:bg-primary relative mt-2 max-w-max after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 after:transition-all after:duration-200 group-hover:after:left-0 group-hover:after:right-auto group-hover:after:w-full'>
        {name}
      </p>

    </UnstyledLink>
  )
}
