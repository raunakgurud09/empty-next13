import { Minus, Plus } from "lucide-react";

type Props = {
  state: boolean
}


export default function More({ state }: Props) {
  return (
    <div className="flex px-3 py-2 space-x-2 hover:bg-white/10 rounded-full">
      <span>{state ? <Plus /> : <Minus />}</span>
      {state ? <p>more</p> : <p>less</p>}
    </div>
  )
}
