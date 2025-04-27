
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { randomBytes } from "crypto"
import jwt from "jsonwebtoken"

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

