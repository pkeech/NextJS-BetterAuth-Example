// CLIENT COMPONENT
"use client";

// IMPORTS
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useActionState } from "react";
import { LoginUser } from "@/server/actions/auth";

export default function LoginForm() {
  // HANDLE FORM ACTION
  const [state, formAction, pending] = useActionState(LoginUser, null);

  return (
    <form
      action={formAction}
      className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md dark:bg-slate-800"
    >
      {state?.error && (
        <div className="mb-4 rounded-md border border-red-300 bg-red-100 px-4 py-3 text-center text-red-700 dark:border-red-700 dark:bg-red-900 dark:text-red-200">
          <span className="font-semibold">Error:</span> {state.error}
        </div>
      )}
      <div className="text-left">
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          defaultValue={state?.formData?.get("email") as string}
          required
          className="focus:border-primary focus:ring-primary w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-slate-900 focus:ring-2 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="you@example.com"
          autoComplete="email"
        />
      </div>
      <div className="text-left">
        <label
          htmlFor="password"
          className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          required
          minLength={8}
          className="focus:border-primary focus:ring-primary w-full rounded-md border border-slate-300 bg-slate-50 px-4 py-2 text-slate-900 focus:ring-2 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="Enter a strong password"
          autoComplete="new-password"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full hover:cursor-pointer"
        disabled={pending}
      >
        {pending ? "Logging in..." : "Login"}
      </Button>
      <p className="text-center text-sm text-slate-600 dark:text-slate-300">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-primary underline">
          Register
        </Link>
      </p>
    </form>
  );
}
