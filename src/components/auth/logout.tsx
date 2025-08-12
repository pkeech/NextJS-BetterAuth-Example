// CLIENT COMPONENT
"use client";

// IMPORTS
import { Button } from "@/components/ui/button";
import { LogoutUser } from "@/server/actions/auth";
import { useActionState } from "react";

// COMPONENT: LOGOUT BUTTON
export default function LogoutButton() {
  const [state, formAction, pending] = useActionState(LogoutUser, null);

  return (
    <form action={formAction}>
      <Button
        // variant="outline"
        size="sm"
        disabled={pending}
        className="bg-primary hover:bg-primary/80 text-white hover:cursor-pointer"
      >
        Logout
      </Button>
    </form>
  );
}
