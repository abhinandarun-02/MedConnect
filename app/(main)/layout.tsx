import { SideBar } from '@/components/SideBar'

import { Separator } from '@/components/ui/separator'
import NavBar from '@/components/navbar'

import { Toaster } from '@/components/ui/toaster'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex font-mono">
      <div className="sidebar fixed hidden h-screen w-[300px] flex-col bg-card drop-shadow-sm md:flex">
        <SideBar />
      </div>
      <Separator
        decorative
        orientation="vertical"
        className="h-auto w-[1px] md:ml-[300px]"
      />
      <div className="w-full">
        <NavBar />
        {children}
      </div>
      <Toaster />
    </main>
  )
}
