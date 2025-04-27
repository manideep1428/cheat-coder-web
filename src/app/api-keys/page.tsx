import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { PlusCircle, Trash2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatDate } from "@/lib/utils"
import { createApiKey, deleteApiKey, getUserApiKeys } from "@/lib/actions"
import { authOptions } from "@/lib/auth"

export const metadata: Metadata = {
  title: "API Keys",
  description: "Manage your API keys",
}

export default async function ApiKeysPage() {
  const session = await getServerSession(authOptions)
  console.log("Session check:", !!session, session?.user?.email);

  // if (!session?.user) {
  //   redirect("/signin")
  // }

  const apiKeys = await getUserApiKeys()

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
            <form action={createApiKey} className="flex items-end gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Input type="text" name="name" placeholder="Key name (e.g. test)" required />
              </div>
              <Button type="submit" className="flex items-center gap-2">
                <PlusCircle className="h-4 w-4" />
                Generate Key
              </Button>
            </form>
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
            {apiKeys.length === 0 ? (
              <div className="flex h-32 items-center justify-center rounded-md border border-dashed">
                <div className="flex flex-col items-center gap-1 text-center">
                  <p className="text-sm text-muted-foreground">No Access keys found</p>
                  <p className="text-xs text-muted-foreground">Create your first Access key to get started</p>
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
                  {apiKeys.map((key) => (
                    <TableRow key={key.id}>
                      <TableCell className="font-medium">{key.name || "Unnamed Key"}</TableCell>
                      <TableCell>{formatDate(key.createdAt)}</TableCell>
                      <TableCell>{key.lastUsed ? formatDate(key.lastUsed) : "Never"}</TableCell>
                      <TableCell>{key.expiresAt ? formatDate(key.expiresAt) : "Never"}</TableCell>
                      <TableCell className="text-right">
                        <form action={deleteApiKey}>
                          <input type="hidden" name="keyId" value={key.id} />
                          <Button variant="ghost" size="icon" type="submit">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </form>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
