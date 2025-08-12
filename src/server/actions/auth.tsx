// SERVER COMPONENT
"use server";

// IMPORTS
import { auth, type ErrorCode } from "@/lib/auth";
import { registerSchema } from "@/types/forms";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
// import { APIError } from "better-auth/api";

// FUNCTION: LOGIN USER ACTION
export async function LoginUser(initalState: any, formData: FormData) {
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
  // TODO: MAKE THIS REDIRECT DYNAMIC
  redirect("/home");
}

// FUNCTION: REGISTER USER ACTION
export async function RegisterUser(initalState: any, formData: FormData) {
  // VALIDATE FORM
  const validatedFields = registerSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  });

  // console.log("[INFO] VALIDATED FIELDS", validatedFields);

  // HANDLE FORM VALIDATION
  if (!validatedFields.success) {
    return { error: validatedFields.error.flatten().fieldErrors };
  }

  // HANDLE CONFIRMATION PASSWORD
  if (validatedFields.data.password !== validatedFields.data.confirmPassword) {
    return { error: "Passwords do not match" };
  }

  // REGISTER USER
  const data = await auth.api.signUpEmail({
    body: {
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      password: validatedFields.data.password,
    },
    asResponse: true,
  });

  // ERROR HANDLING
  if (data.status !== 200) {
    return {
      error: "Unable to register user. Please try again.",
      formData: formData,
    };
  }

  // SUCCESSFUL FORM SUBMISSION
  redirect("/auth/login");

  // TODO: FIGURE OUT THE BEST APPROACH TO CATCH ERRORS
  // try {
  //   const data = await auth.api.signUpEmail({
  //     body: {
  //       name: validatedFields.data.name,
  //       email: validatedFields.data.email,
  //       password: validatedFields.data.password,
  //     },
  //   });

  //   // DEBUG
  //   console.log("[INFO] DATA", data);

  //   // SUCCESSFUL FORM SUBMISSION
  //   redirect("/auth/login");
  // } catch (error) {
  //   if (error instanceof APIError) {
  //     const errCode = error.body ? (error.body.code as ErrorCode) : "UNKNOWN";
  //     switch (errCode) {
  //       case "USER_ALREADY_EXISTS":
  //         return {
  //           error: "Oops! Something went wrong. Please try again.",
  //           formData: formData,
  //         };
  //       default:
  //         return { error: error.message, formData: formData };
  //     }
  //   }
  //   return { error: "Internal Server Error", formData: formData };
  // }
}

// FUNCTION: LOGOUT USER ACTION
export async function LogoutUser() {
  // LOGOUT USER
  await auth.api.signOut({
    headers: await headers(),
  });

  // REDIRECT TO LANDING PAGE
  redirect("/");
}
