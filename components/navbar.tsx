import Image from 'next/image'
import { Roboto } from 'next/font/google'

import Logo from '../public/logo.jpg'
import MobileSideBar from './mobile-sidebar'

const roboto = Roboto({ weight: '500', subsets: ['latin'] })

export default function NavBar() {
  return (
    <div className="flex w-full items-center justify-between px-6 py-4 md:hidden">
      <div className="header flex items-center justify-center gap-4 text-xl font-bold">
        <Image src={Logo} width={40} height={40} alt="Medconnect Logo" />
        <h2 className={roboto.className}>Health Connect</h2>
      </div>
      <MobileSideBar />
    </div>
  )
}
