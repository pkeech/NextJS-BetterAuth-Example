// SERVER COMPONENT
"use server";

// IMPORTS
import { auth, type ErrorCode } from "@/lib/auth";
import { registerSchema } from "@/types/forms";
import { redirect } from "next/navigation";
import { APIError } from "better-auth/api";

// FUCTION: REGISTER USER ACTION
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
