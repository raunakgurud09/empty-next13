import { Link } from "lucide-react"

const tools = [
  "Next.js",
  "Redux",
  "Node"
]


export default function Experience() {
  return (
    <section id="experience" className="flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl">
      <h3 className="text-2xl px-4">Experience</h3>
      <div className="flex flex-col space-y-2">
        {
          [...Array(3)].map((_, i) => (
            <div className="px-4" key={i}>
              <ExperienceCard />
            </div>
          ))
        }
      </div>


    </section>
  )
}

function ExperienceCard() {
  return (
    <div className="flex flex-col md:flex-row mx-auto py-4 ease-in transition-all rounded-md">
      <div className="w-full md:w-2/12 p-1 py-2 text-xs">Jun 2022 - ongoing</div>
      <div className="w-full md:w-9/12 flex flex-col p-1 ">
        <h4 className="text-lg font-bold">Title of position</h4>
        <div className="flex items-center justify-start">
          <Link size={12}/>
          <p className="text-white/50 ml-2"> link to work</p>
        </div>
        <p className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, fuga est, nam alias dolore sunt quo sit facere esse cumque debitis animi explicabo eum, eius quidem commodi quis repellendus excepturi necessitatibus sapiente deleniti ut ipsum sequi. Amet quod dolorem deserunt placeat, debitis corrupti delectus fugiat mollitia, laboriosam facilis officiis deleniti</p>
        <div className="flex flex-row">
          {
            tools.map((t, i) =>
              <p key={i} className="text-sm">
                {i != 0 && <span className="mx-1">•</span>}
                {t} </p>
            )
          }
        </div>
      </div>
    </div>
  )
}