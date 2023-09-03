import { Container, Plus } from 'lucide-react'

type Props = {
  skill: {
    icon: any
    name: string
  }
}

export default function SkillCard({ skill }: Props) {
  return (
    <div className="flex pr-3 py-2 space-x-2 opacity-90">
      <span className={"w-4 h-4"}>{skill.icon}</span>
      <p className='text-xs'>{skill.name}</p>
    </div>
  )
}
