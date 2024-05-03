'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Roboto } from 'next/font/google'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import {
  CalendarDays,
  Code,
  CreditCard,
  HeartPulse,
  Home,
  MessageSquare,
  Settings,
} from 'lucide-react'

const routes = [
  {
    label: 'Home',
    icon: Home,
    href: '/dashboard',
    disabled: false,
  },
  {
    label: 'Predict',
    icon: Code,
    href: '/predict',
    disabled: false,
  },
  {
    label: 'Doctors',
    icon: HeartPulse,
    href: '/doctors',
    disabled: false,
  },
  {
    label: 'Appointments',
    icon: CalendarDays,
    href: '/appointments',
    disabled: true,
  },
  {
    label: 'Messages',
    icon: MessageSquare,
    href: '/chat',
    disabled: true,
  },
  {
    label: 'Payments',
    icon: CreditCard,
    href: '/payments',
    disabled: true,
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    disabled: false,
  },
]

export const SideNav = () => {
  const pathname = usePathname()

  return (
    <div className="links mx-4 mt-16 flex flex-col items-center gap-3">
      {routes.map((route) => (
        <Button
          key={route.href}
          variant={'ghost'}
          disabled={route.disabled}
          className={cn(
            'w-full justify-start hover:bg-secondary',
            pathname === route.href ? 'bg-muted text-blue-500' : 'text-zinc-500'
          )}
        >
          <Link
            href={route.href}
            className="mx-4 flex h-10 w-full cursor-pointer items-center justify-start rounded-lg p-3 text-sm font-semibold"
          >
            <div className="flex">
              <route.icon
                className={cn(
                  'mr-3 h-5 w-5',
                  pathname === route.href ? 'text-blue-500' : 'text-zinc-500'
                )}
              />
              {route.label}
            </div>
          </Link>
        </Button>
      ))}
    </div>
  )
}
