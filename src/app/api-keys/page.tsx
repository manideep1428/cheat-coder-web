import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { PlusCircle, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {  createToken, getUserApiKeys } from "@/lib/actions"
import { authOptions } from "@/lib/auth"

export const metadata: Metadata = {
  title: "API Keys",
  description: "Manage your API keys",
}

export default async function ApiKeysPage() {
  const session = await getServerSession(authOptions)
  console.log("Session check:", !!session, session?.user?.email);

  if (!session?.user) {
    redirect("/signin")
  }

  const token = await getUserApiKeys()

  return (
    <div className="container py-10 max-w-5xl">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Access Keys</h1>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create Access Key</CardTitle>
            <CardDescription>Generate a new API key to authenticate your requests.</CardDescription>
          </CardHeader>
          <CardContent>
              <Button onClick={createToken} type="submit" className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                Generate Token
              </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Access Keys</CardTitle>
            <CardDescription>
              Manage your existing Access keys. Keep your keys secure - they will only be shown once when created.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {token === null  ? (
              <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-sm text-muted-foreground">No Access Token found</p>
                  <p className="text-xs text-muted-foreground">Create your Access Token to get started</p>
                </div>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Last used</TableHead>
                    <TableHead>Expires</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                          <input type="hidden" name="keyId" value={token} />
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
