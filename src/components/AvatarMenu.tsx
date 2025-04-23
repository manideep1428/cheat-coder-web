"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { signOut, useSession } from "next-auth/react";

export function AvatarMenu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { data : session } = useSession();

  if (!session?.user) return null;

  return (
    <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
      <PopoverPrimitive.Trigger asChild>
        <button aria-label="Open user menu">
          <Avatar>
            <AvatarImage src={ session?.user?.image || "/avatar-placeholder.png"} alt="User avatar" />
            <AvatarFallback>{session?.user?.name || "U"}</AvatarFallback>
          </Avatar>
        </button>
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          align="end"
          sideOffset={8}
          className="z-[100] rounded-lg bg-zinc-900 border border-zinc-700 p-4 shadow-lg min-w-[160px]"
        >
          <div className="font-semibold mb-2 text-white">{session?.user?.name || "User"}</div>
          <div className="flex flex-col gap-2">
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setOpen(false);
                router.push("/settings");
              }}
            >
              Settings
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setOpen(false);
                router.push("/dashboard");
              }}
            >
              Dashboard
            </Button>
            <div className="w-full">
              <Button onClick={() => {
                setOpen(false);
                signOut();
              }} className="w-full">
                Sign out
              </Button>
            </div>
          </div>
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}

