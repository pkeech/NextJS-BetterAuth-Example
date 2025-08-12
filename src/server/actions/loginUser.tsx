// SERVER COMPONENT
"use server";

// IMPORTS
import { auth, type ErrorCode } from "@/lib/auth";
import { registerSchema } from "@/types/forms";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { APIError } from "better-auth/api";

// FUCTION: REGISTER USER ACTION
export async function LoginUser(initalState: any, formData: FormData) {
  // VALIDATE FORM
  // const validatedFields = registerSchema.safeParse({
  //   email: formData.get("email"),
  //   password: formData.get("password"),
  // });

  // console.log("[INFO] VALIDATED FIELDS", validatedFields);

  // TODO: HANDLE FORM VALIDATION

  // LOGIN USER
  // TODO: FIGURE OUT THE BEST APPROACH TO CATCH ERRORS

  const data = await auth.api.signInEmail({
    headers: await headers(),
    body: {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    },
    asResponse: true,
  });

  // DEBUG
  console.log("[INFO] DATA", data);

  // ERROR HANDLING
  if (data.status === 401) {
    return { error: "Invalid Email or Password", formData: formData };
  }

  // SUCCESSFUL FORM SUBMISSION
  redirect("/home");
}
