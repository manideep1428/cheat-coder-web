"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { prisma } from "../../prisma"
import jwt from "jsonwebtoken"
import { getSession } from "next-auth/react"

export async function getUserApiKeys() {
  const session = await getServerSession()

  if (!session?.user?.email) {
    return []
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!user) {
    return []
  }

  return user.token 
}

export async function createToken() {
  const session = await getServerSession()

  if (!session?.user?.email) {
    redirect("/signin")
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!user) {
    redirect("/signin")
  }

  // Generate a secure API key
  const token = await generateApiKey()
  

  // Create the API key in the database
     await prisma.user.update({
     where  : {
       email : user.email
     } ,
     data : {
       token
     }
  })

  // Revalidate the API keys page
  revalidatePath("/api-keys")

  // Redirect to a success page with the API key
  redirect(`/api-keys/success?key=${token}`)
}


export async function generateApiKey() {
  const session  =  await getSession()
  if (!session?.user?.email) {
    redirect("/signin")
  }

  const token = jwt.sign(session?.user , process.env.JWT_SECRET!)
  return token
}

