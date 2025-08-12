// IMPORTS
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { SignOut } from "@/components/sign-out";

// RENDER PAGE
export default async function HomePage() {
  // GET USER SESSION
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  // SAFETY NET, SHOULD BE CAUGHT BY MIDDLEWARE
  if (!session) redirect("/auth/login");

  // PAGE
  return (
    <main className="flex min-h-screen flex-col items-center">
      <p>
        This is the future <b>Protected</b> Home Page.
      </p>
      <br />
      <div className="flex flex-col gap-4">
        <p>
          <b>Email</b>: {session.user.email}
        </p>
        <p>
          <b>Name</b>: {session.user.name}
        </p>
        <p>
          <b>Role</b>: {session.user.role || "No Roles Assigned"}
        </p>
        <SignOut />
      </div>
    </main>
  );
}
