import { Minus, Plus } from "lucide-react";

type Props = {
  state: boolean
}


export default function More({ state }: Props) {
  return (
    <div className="flex px-3 py-2 space-x-2 hover:bg-white/10 rounded-full">
      <span>{state ? <Plus size={16} /> : <Minus size={16} />}</span>
      <p className="text-xs hover:cursor-pointer">{state ? "more" : "less"}</p>
    </div>
  )
}
