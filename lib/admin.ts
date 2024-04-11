import { auth } from "@clerk/nextjs"

const allowedAdminIds = ["user_2dyhwfigGwj0etRnNZCVVd54DTG"]

export const isAdmin = () => {
  const { userId } = auth()

  if (!userId) {
    return false
  }

  return allowedAdminIds.indexOf(userId) !== -1
}