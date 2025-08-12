// IMPORTS
import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";

// INSTANTIATE AUTH CLIENT
const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  plugins: [adminClient()],
});

// EXPORT AUTH CLIENT
export const { signIn, signUp, signOut, useSession } = authClient;
