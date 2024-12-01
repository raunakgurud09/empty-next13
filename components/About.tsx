import Image from "next/image"
import Link from "next/link"
import UnderlineLink from "./links/UnderlineLink"

export const About = () => {
  return (
    <div className="flex">
      <div className="p-1 w-1/2  text-white">
        <h3 className="font-semibold text-xl">BACKGROUND</h3>
        <div className="space-y-3 mt-3 font-light">
          <p>I'm currently an working as software engineer at <UnderlineLink href="https://getsaral.com"><strong>SARAL</strong></UnderlineLink>. I recently graduated from Mumbai University after completing 2 awesome six-month internships at <UnderlineLink href="https://www.fullcover.in"><strong>Fullcover</strong></UnderlineLink> and <UnderlineLink href="https://https://entrespace.in"><strong>Enterspace</strong></UnderlineLink>.
          </p>
          <p>As a software engineer, I enjoy bridging the gap between ideas and execution — combining my technical knowledge with design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood.
          </p>
          <p>When I'm not in front of a computer screen, I'm probably walking, hanging out with friends, or swimming.</p>
        </div>
      </div>
      <div className="p-2 w-1/2 h-96 grid grid-cols-3 grid-rows-3 gap-4 rounded-xl">
        <div className="bg-blue-600 col-span-1 row-span-2 w-full h-full rounded-xl">
          <Image src={"/images/personal/manali2.jpeg"} alt="raunak-gurud" width={1000} height={1800} className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="bg-pink-600 col-span-2 row-span-1 w-full h-full rounded-xl">
          <Image src={"/images/personal/manali1.jpeg"} alt="raunak-gurud" width={1000} height={1800} className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="bg-red-600 col-span-1 row-span-1 w-full h-full rounded-xl">
          <Image src={"/images/personal/mohak.jpg"} alt="raunak-gurud" width={1000} height={1800} className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="bg-green-600 col-span-1 row-span-2 w-full h-full rounded-xl">
          <Image src={"/images/personal/alibag.jpg"} alt="raunak-gurud" width={1000} height={1800} className="w-full h-full object-cover rounded-xl" />
        </div>
        <div className="bg-yellow-600 col-span-2 row-span-1 w-full h-full rounded-xl">
          <Image src={"/images/personal/vik.jpeg"} alt="raunak-gurud" width={1000} height={1800} className="w-full h-full object-cover rounded-xl" />
        </div>
      </div>

    </div>
  )
}