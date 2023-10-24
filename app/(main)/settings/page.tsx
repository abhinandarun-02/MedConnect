import { UserProfile } from '@clerk/nextjs'

export default function page() {
  return (
    <div className=" flex h-full w-full items-center">
      <UserProfile path="/settings" routing="hash" />
    </div>
  )
}
