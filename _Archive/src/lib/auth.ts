// ------------------------------------------------------------
//
// HANDLE AUTHENTICATION
// https://better-auth.com/docs/getting-started/quick-start
//
// ------------------------------------------------------------

// IMPORTS
import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";
import { nextCookies } from "better-auth/next-js";

// AUTH CONFIGURATION
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false, //defaults to true
    requireEmailVerification: false,
  },
  plugins: [nextCookies(), admin({ defaultRole: "regular" })],
});

export type ErrorCode = keyof typeof auth.$ERROR_CODES | "UNKNOWN";
