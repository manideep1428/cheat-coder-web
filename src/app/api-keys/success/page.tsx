"use client"

import { useEffect, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { CheckCircle, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ApiKeySuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const apiKey = searchParams.get("key")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!apiKey) {
      router.push("/api-keys")
    }
  }, [apiKey, router])

  const copyToClipboard = () => {
    if (apiKey) {
      navigator.clipboard.writeText(apiKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!apiKey) {
    return null
  }

  return (
    <div className="container py-10 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Access Key Created</CardTitle>
          <CardDescription>
            Your new Access key has been created. Please copy it now as you won't be able to see it again.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="warning">
            <AlertTitle>Important!</AlertTitle>
            <AlertDescription>
              This Access key will only be displayed once. If you lose it, you'll need to generate a new one.
            </AlertDescription>
          </Alert>

          <div className="flex items-center gap-2">
            <Input value={apiKey} readOnly className="font-mono text-sm" />
            <Button variant="outline" size="icon" onClick={copyToClipboard} className="flex-shrink-0">
              {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.push("/api-keys")} className="w-full">
            Return to Access Keys
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
