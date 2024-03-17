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

export const SkillTag = ({ name }: { name: string }) => {
  return (
    <div className="flex px-3 py-1 space-x-2 opacity-90 bg-blue-400/20 rounded-full items-center">
      <p className='text-xs text-blue-400'>{name}</p>
    </div>
  )
}