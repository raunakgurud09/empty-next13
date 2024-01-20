
// export default function Footer() {
//   return (
//     <footer className="w-full  px-4 py-2 flex justify-between">
//       footer
//     </footer>
//   )
// }

import Signature from './signature'
import Socials from './socials'

const footer = [
  {
    heading: 'Socials',
    options: [
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Github',
      },
      {
        url: 'https://instagram.com/raunak_gurud',
        name: 'Instagram',
      },
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Linkedin',
      },
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Twitter',
      },
      {
        url: 'mailto:raunakgurud2121@gmail.com',
        name: 'Mail',
      },
      {
        url: 'https://raunakgurud.hashnode.dev',
        name: 'Hashnode',
      },
    ],
  },

  {
    heading: 'Random',
    options: [
      {
        url: 'https://github.com/raunakgurud09',
        name: 'Source code',
      },
      {
        url: '/sitemap.xml',
        name: 'Sitemap',
      },
    ],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (

    <footer className="w-full mt-96 mb-20 border-t border-t-primary px-4 py-2 flex justify-center items-center text-sm text-400">
      <div className="max-w-[1360px] flex flex-col py-4 justify-center items-center">
        <Socials />
        <p>&#169; {year} Raunak Gurud</p>
      </div>
    </footer>
  )
}