import React from 'react'
import Signature from './signature'


export default function Main() {
  return (
    <div className=''>
      <section className='flex flex-col w-full mx-auto space-y-4 px-4 mt-32 mb-20 '>
        <div className="absolute top-0 left-0 right-0">
          <div className="absolute left-10 md:left-32 top-1 -z-10 overflow-visible opacity-20">
            <div className="circle-1 -z-10 h-[400px] w-[200px] rounded-full bg-cyan-400 mix-blend-multiply blur-[128px]" />
          </div>
          <div className="absolute right-36 top-60 -z-10 overflow-visible opacity-20">
            <div className="circle-1 -z-10 h-[400px] w-[200px] rounded-full bg-cyan-400 mix-blend-multiply blur-[128px]" />
          </div>
        </div>
        <div>
          <h1 className='text-5xl'>Raunak Gurud</h1>
          I&apos;m a
          <div>
            <Signature />
          </div>
        </div>
      </section>
    </div>
  )
}
