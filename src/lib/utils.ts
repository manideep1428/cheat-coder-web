
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { randomBytes } from "crypto"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date))
}

export function generateApiKey() {
  // Generate a secure random string for the API key
  // Format: prefix_randomstring (e.g., pk_123456789)
  const prefix = "pk"
  const randomString = randomBytes(16).toString("hex")
  return `${prefix}_${randomString}`
}
