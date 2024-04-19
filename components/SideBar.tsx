import Image from 'next/image'
import Logo from '../public/logo.jpg'
import { SideNav } from '@/components/SideNav'
import { CommandMenu } from './command-menu'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

export const SideBar = () => {
  return (
    <div className="my-4 flex h-full flex-col px-2">
      <Link
        href="/dashboard"
        className="header flex items-center justify-center gap-4 text-xl font-bold "
      >
        <Image src={Logo} width={40} height={40} alt="Medconnect Logo" />
        <h2>Health Connect</h2>
      </Link>
      <div className="mx-4">
        <CommandMenu />
      </div>
      <SideNav />
      <div className="mt-auto">
        <UserButton
          afterSignOutUrl="/sign-in"
          userProfileMode="navigation"
          userProfileUrl="/settings"
          showName
          appearance={{
            elements: {
              userButtonAvatarBox: 'w-[48px] h-[48px]',
              userButtonBox: 'flex-row-reverse justify-end ml-10',
            },
          }}
        />
      </div>
    </div>
  )
}
