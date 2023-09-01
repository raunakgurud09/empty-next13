import React from 'react'
import NextImage from "next/image"
import Signature from './signature'
import profile_image from "@/assets/bg-removed.png"
import Socials from './socials'


export default function Main() {
  return (
    <section className='flex flex-col-reverse md:flex-row w-full h-screen   mx-auto space-y-4 px-4  '>
      <div className="absolute top-0 left-0 right-0">
        <div className="absolute left-10 md:left-32 top-1 -z-10 overflow-visible opacity-20">
          <div className="circle-1 -z-10 h-[400px] w-[200px] rounded-full bg-cyan-400 mix-blend-multiply blur-[128px]" />
        </div>
        <div className="absolute right-36 top-60 -z-10 overflow-visible opacity-20">
          <div className="circle-1 -z-10 h-[400px] w-[200px] rounded-full bg-cyan-400 mix-blend-multiply blur-[128px]" />
        </div>
      </div>

      <div className='w-full md:w-3/4'>
        <h1 className=' text-5xl '>Raunak Gurud</h1>
        <p className='flex'>
          <span className='p-1'>
            I&apos;m a
          </span>
          <div className="animation">
            <div className="first"><div>Student</div></div>
            <div className="second"><div>Frontend engineer</div></div>
            <div className="third"><div>Backend engineer</div></div>
          </div>
        </p>
        <br />
        <p className='font-normal'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem laudantium molestiae enim, autem, placeat, dolor mollitia commodi tempore numquam laboriosam recusandae! Eligendi commodi aperiam corporis iste esse ratione illo ad.
        </p>
        <div className='mt-10'>
          <Socials />
        </div>

      </div>
      <div className='w-full md:w-fit flex justify-start items-start'>
        <NextImage
          src={profile_image}
          alt='profile'
          width={224}
          height={224}
          className='h-56 w-56 rounded-full backdrop-blur-sm shadow-orange-400 shadow-lg bg-black'
        />
      </div>
    </section >
  )
}
