import { Link } from "lucide-react"
import { experiences } from "@/data/experience.js"
import UnderlineLink from "./links/UnderlineLink";
import { SkillTag } from "./skillCard";


export default function Experience() {
  return (
    <section id="experience" className="flex flex-col w-full mx-auto space-y-4 drop-shadow-2xl">
      <h3 className="font-bold text-2xl px-4"> <UnderlineLink href='/#experience'>Experience</UnderlineLink></h3>
      <div className="flex flex-col space-y-2">
        {
          experiences.map((exp, i) => (
            <div className="px-4" key={i}>
              <ExperienceCard
                _id={exp._id}
                date={exp.date}
                position={exp.position}
                proof_of_work={exp.proof_of_work}
                place_of_work={exp.place_of_work}
                brief={exp.brief}
                skills={exp.skills}
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
  date: string;
  position: string;
  proof_of_work: string;
  place_of_work: string;
  brief: string;
  skills: string[];
}

function ExperienceCard(
  {
    _id,
    date,
    position,
    proof_of_work,
    place_of_work,
    brief,
    skills
  }: Props
) {
  return (
    <div className="flex flex-col md:flex-row mx-auto py-4 ease-in transition-all rounded-md">
      <div className="w-full md:w-2/12 p-1 py-2 text-xs">{date}</div>
      <div className="w-full md:w-9/12 flex flex-col p-1 ">
        <h4 className="text-lg font-semibold">{position}</h4>
        <div className="flex items-center justify-start">
          <p className="opacity-80">
            <a href={proof_of_work} target="_black">
              @{place_of_work}
            </a>
          </p>
        </div>
        <p className="text-sm font-light">
          {brief}
        </p>
        <div className="flex flex-row mt-2 gap-2">
          {
            skills.map((t, i) =>
              <SkillTag name={t} key={i}/>
            )
          }
        </div>
      </div>
    </div>
  )
}