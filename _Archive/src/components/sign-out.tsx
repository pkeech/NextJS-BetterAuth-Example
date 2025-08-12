// CLIENT COMPONENT
"use client";

// IMPORTS
import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

// RENDER COMPONENT
export function SignOut() {
  // HANDLE STATE
  const [isPending, setIsPending] = useState(false);
  const router = useRouter();

  // HANDLE SIGN OUT
  async function handleClick() {
    await signOut({
      fetchOptions: {
        onRequest: () => {
          setIsPending(true);
        },
        onResponse: () => {
          setIsPending(false);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
        onSuccess: () => {
          toast.success("You’ve logged out. See you soon!");
          router.push("/");
        },
      },
    });
  }

  // BUTTON COMPONENT
  return (
    <Button
      className="hover:cursor-pointer"
      onClick={handleClick}
      disabled={isPending}
    >
      Sign Out
    </Button>
  );
}
