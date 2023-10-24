import Image from 'next/image'
import Logo from '../public/logo.jpg'
import { SideNav } from '@/components/SideNav'
import { CommandMenu } from './command-menu'

export const SideBar = () => {
  return (
    <div className="my-4 flex flex-col px-2">
      <div className="header flex items-center justify-center gap-4 text-xl font-bold ">
        <Image src={Logo} width={40} height={40} alt="Medconnect Logo" />
        <h2>MedConnect</h2>
      </div>
      <div className="mx-4">
        <CommandMenu />
      </div>
      <SideNav />
    </div>
  )
}
