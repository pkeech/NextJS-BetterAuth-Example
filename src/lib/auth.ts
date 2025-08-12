// ------------------------------------------------------------
//
// HANDLE AUTHENTICATION
// https://better-auth.com/docs/getting-started/quick-start
//
// ------------------------------------------------------------

import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  // DATABASE
  database: drizzleAdapter(db, {
    provider: "sqlite", // or "mysql", "pg"
  }),

  // EMAIL AND PASSWORD
  emailAndPassword: {
    enabled: true,
    autoSignIn: false, //defaults to true
    requireEmailVerification: false, //defaults to true
  },

  // PLUGINS
  plugins: [nextCookies(), admin({ defaultRole: "regular" })],
});

export type ErrorCode = keyof typeof auth.$ERROR_CODES | "UNKNOWN";
