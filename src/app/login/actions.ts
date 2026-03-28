"use server";

import { cookies } from "next/headers";

export async function authenticate(password: string) {
  const correctPassword = process.env.PORTFOLIO_PASSWORD;

  if (password === correctPassword) {
    const cookieStore = await cookies();
    cookieStore.set("portfolio-auth", "true", {
      path: "/",
      maxAge: 3600, // 1 hour
      sameSite: "lax",
      httpOnly: true, // More secure
      secure: process.env.NODE_ENV === "production",
    });
    return { success: true };
  }

  return { success: false, error: "Incorrect password" };
}
