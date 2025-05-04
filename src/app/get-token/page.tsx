// app/auth/token/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ClipboardCopy, CheckCircle2, RefreshCw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";

export default function TokenPage() {
  const { data: session, status } = useSession();
  const [token, setToken] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const router = useRouter();
  const { toast } = useToast()

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/signin");
      return;
    }

    if (status === "authenticated") {
      fetchOrCreateToken();
    }
  }, [status, router]);

  const fetchOrCreateToken = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/v1/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch token");
      }

      const data = await response.json();
      setToken(data.token);
    } catch (error) {
      console.error("Error fetching token:", error);
      toast({
        title: "Error",
        description: "Failed to fetch your authentication token",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const createNewToken = async () => {
    try {
      setIsCreating(true);
      const response = await fetch("/api/v1/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to create new token");
      }

      const data = await response.json();
      setToken(data.token);
      toast({
        title: "Success",
        description: "New authentication token created successfully",
      });
    } catch (error) {
      console.error("Error creating new token:", error);
      toast({
        title: "Error",
        description: "Failed to create new authentication token",
        variant: "destructive",
      });
    } finally {
      setIsCreating(false);
    }
  };

  const copyToClipboard = () => {
    if (token) {
      navigator.clipboard.writeText(token);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied",
        description: "Token copied to clipboard",
      });
    }
  };

  if (status === "loading" || isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-3xl border-border bg-card text-card-foreground">
          <CardHeader>
            <CardTitle>
              <Skeleton className="h-8 w-72 bg-muted" />
            </CardTitle>
            <CardDescription>
              <Skeleton className="h-5 w-full bg-muted" />
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-3">
                <Skeleton className="h-6 w-32 bg-muted" />
                <Skeleton className="h-12 w-full bg-muted" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-3xl border-border bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Provide Authentication Token</CardTitle>
          <CardDescription className="text-muted-foreground">
            To finish setup, provide your authentication token to your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-12">
          {/* Step 1 */}
          <div>
            {!token ? (
              <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">1. Copy the token below to your clipboard</h2>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={createNewToken} 
                disabled={isCreating} 
                className="border-border hover:bg-muted"
              >
                {isCreating ? (
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <RefreshCw className="mr-2 h-4 w-4" />
                )}
                Generate New Token
              </Button>
            </div>
            ) : "" }
            <div className="relative">
              <div className="flex items-center justify-between rounded border border-border bg-muted p-3">
                <code className="font-mono text-sm text-muted-foreground overflow-hidden resize-none">{token}</code>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  onClick={copyToClipboard} 
                  className="hover:bg-accent"
                >
                  {copied ? <CheckCircle2 size={16} /> : <ClipboardCopy size={16} />}
                </Button>
              </div>
              {copied && (
                <div className="absolute right-0 top-0 translate-x-full translate-y-1/2 transform rounded bg-accent px-2 py-1 text-xs text-accent-foreground">
                  Copied!
                </div>
              )}
            </div>
          </div>

          {/* Step 2 */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">
              2. In your application, open the Command Palette <span className="text-muted-foreground">(Ctrl/Cmd + Shift + P)</span>, type
            </h2>
            <div className="mb-2">
              <span className="font-bold">YourApp: Provide Auth Token</span>, and hit <span className="font-bold">Enter</span>.
            </div>
            <div className="overflow-hidden rounded border border-border bg-muted">
              <div className="border-b border-border bg-card p-2 text-muted-foreground">
                &gt; YourApp: Provide Auth Token
              </div>
              <div className="flex items-center justify-between bg-primary/10 p-2">
                <span className="text-primary">YourApp: Provide Auth Token (Backup Login)</span>
                <span className="text-xs text-muted-foreground">recently used</span>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">3. Paste the token into the input box and submit</h2>
            <div className="rounded border border-border bg-muted p-4">
              <div className="mb-2 text-center text-sm text-muted-foreground">
                Enter your authentication token
              </div>
              <Input 
                className="mb-2 bg-card border-border text-foreground placeholder:text-muted-foreground"
                placeholder="Paste your authentication token here" 
              />
              <div className="text-center text-xs text-muted-foreground">
                Press 'Enter' to confirm your input or 'Escape' to cancel
              </div>
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t border-border justify-center p-6">
          <p className="text-sm text-muted-foreground">
            If you have any trouble, please let us know on our <a href="#" className="text-primary hover:underline">Discord</a> server.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}