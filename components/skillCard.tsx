import { Container, Plus } from 'lucide-react'

type Props = {
  skill: {
    icon: any
    name: string
  }
}

export default function SkillCard({ skill }: Props) {
  return (
    <div className="flex pr-3 py-2 space-x-2 hover:bg-white/10 rounded-full">
      <span>{skill.icon}</span>
      <p>{skill.name}</p>
    </div>
  )
}
