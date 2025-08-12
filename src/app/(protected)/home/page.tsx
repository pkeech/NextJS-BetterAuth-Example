// IMPORTS
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/auth/logout";

export default async function HomePage() {
  // VALIDATE SESSION
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // REDIRECT IF NO SESSION
  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 pt-8 text-center">
        <p className="text-2xl font-bold">This is a protected route</p>
        <p className="text-sm text-slate-500">
          You are logged in as {session.user.name} ({session.user.email})
        </p>
        <p className="text-sm text-slate-500">
          Your email is:{" "}
          {session.user.emailVerified ? (
            <span className="text-green-600">verified</span>
          ) : (
            <span className="text-red-600">unverified</span>
          )}
        </p>
        <LogoutButton />
        <div className="rounded-md border border-slate-200 bg-slate-50 p-4 font-mono text-black dark:border-slate-700 dark:bg-slate-900 dark:text-white">
          <pre className="text-left">{JSON.stringify(session, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}
