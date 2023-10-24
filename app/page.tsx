import { profileSetup } from '@/lib/profile-setup'
import { redirect } from 'next/navigation'

export default async function Home() {
  const profile = await profileSetup()
  return redirect('/dashboard')
}
