"use server"

import { revalidatePath } from "next/cache"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { generateApiKey } from "@/lib/utils"
import { prisma } from "../../prisma"
import { useSession } from "next-auth/react"

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

  const apiKeys = await prisma.apiKey.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  })

  return apiKeys
}

export async function createApiKey(formData: FormData) {
  const session = await getServerSession()

  if (!session?.user?.email) {
    redirect("/api/auth/signin")
  }

  const name = formData.get("name") as string

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!user) {
    redirect("/api/auth/signin")
  }

  // Generate a secure API key
  const apiKey = generateApiKey()

  // Create the API key in the database
  const createdKey = await prisma.apiKey.create({
    data: {
      key: apiKey,
      name,
      userId: user.id,
      // Set expiration to 1 year from now (optional)
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
    },
  })

  // Revalidate the API keys page
  revalidatePath("/api-keys")

  // Redirect to a success page with the API key
  redirect(`/api-keys/success?key=${apiKey}&id=${createdKey.id}`)
}

export async function deleteApiKey(formData: FormData) {
  const session = await getServerSession()

  if (!session?.user?.email) {
    redirect("/api/auth/signin")
  }

  const keyId = formData.get("keyId") as string

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  })

  if (!user) {
    redirect("/api/auth/signin")
  }

  // Delete the API key
  await prisma.apiKey.delete({
    where: {
      id: keyId,
      userId: user.id,
    },
  })

  // Revalidate the API keys page
  revalidatePath("/api-keys")
}
