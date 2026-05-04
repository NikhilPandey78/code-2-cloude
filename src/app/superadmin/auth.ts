"use server";

import { cookies } from "next/headers";

const SUPERADMIN_COOKIE = "code2cloud_superadmin";

export async function getSuperadminSecret() {
  return process.env.SUPERADMIN_PASSWORD?.trim() ?? "";
}

export async function isSuperadmin() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(SUPERADMIN_COOKIE)?.value;
  const secret = await getSuperadminSecret();

  if (!secret) {
    return false;
  }

  return sessionCookie === secret;
}

export async function setSuperadminSession(secret: string) {
  const cookieStore = await cookies();
  cookieStore.set(SUPERADMIN_COOKIE, secret, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 8,
  });
}

export async function clearSuperadminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SUPERADMIN_COOKIE);
}
