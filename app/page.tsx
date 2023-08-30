import { ModeToggle } from '@/components/theme-button'
import { UserButton, auth } from '@clerk/nextjs'

export default function Home() {
  const { userId } = auth()
  return (
    <main className="flex items-center justify-between bg-slate-400 px-8 py-2  dark:bg-slate-800">
      <h1>{'hello ' + userId}</h1>
      <div className="flex gap-4">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </main>
  )
}
