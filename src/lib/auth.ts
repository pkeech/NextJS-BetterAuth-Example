// ------------------------------------------------------------
//
// HANDLE AUTHENTICATION
// https://better-auth.com/docs/getting-started/quick-start
//
// ------------------------------------------------------------

// IMPORTS
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/server/db";

// AUTH CONFIGURATION
export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
  }),
});
