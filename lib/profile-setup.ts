import { currentUser, redirectToSignIn } from '@clerk/nextjs'

import { db } from '@/lib/db'

export const profileSetup = async () => {
  const user = await currentUser()

  if (!user) {
    return redirectToSignIn()
  }

  const profile = await db.user.findUnique({
    where: {
      id: user.id,
    },
  })

  if (profile) {
    return profile
  }

  const newProfile = await db.user.create({
    data: {
      id: user.id,
      username: user.username ?? '',
      name: `${user.firstName} ${user.lastName}` ?? '',
      image: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
      role: 'PATIENT',
    },
  })

  return newProfile
}
