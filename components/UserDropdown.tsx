import Link from 'next/link'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { ChevronDown, Option, Settings, User } from 'lucide-react'

const options = [
  { label: 'Profile', href: '/profile', disabled: true, icon: User },
  { label: 'Preferences', href: '/preferences', disabled: true, icon: Option },
  { label: 'Settings', href: '/settings', disabled: false, icon: Settings },
]

export function UserMenu() {
  return (
    <div className="absolute -right-1">
      <Menubar className="justify-end border-0 bg-transparent focus:ring-0 focus:ring-offset-0">
        <MenubarMenu>
          <MenubarTrigger className="h-12 w-20 justify-end data-[state=closed]:bg-transparent data-[state=open]:bg-transparent">
            <ChevronDown className="h-5 w-5" />
          </MenubarTrigger>
          <MenubarContent className="mx-2">
            {options.map((option) => (
              <MenubarItem
                key={option.href}
                disabled={option.disabled}
                className="text-primary"
              >
                <Link href={option.href} className="flex gap-2">
                  <option.icon className="h-5 w-5 text-zinc-500" />
                  {option.label}
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  )
}
