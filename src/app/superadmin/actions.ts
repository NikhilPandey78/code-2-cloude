"use server";

import { redirect } from "next/navigation";
import {
  clearSuperadminSession,
  getSuperadminSecret,
  setSuperadminSession,
} from "./auth";

type SuperadminState = {
  error?: string;
};

export async function loginSuperadmin(
  _prevState: SuperadminState,
  formData: FormData
): Promise<SuperadminState> {
  const password = String(formData.get("password") ?? "").trim();
  const secret = await getSuperadminSecret();

  if (!secret) {
    return { error: "SUPERADMIN_PASSWORD is not configured." };
  }

  if (password !== secret) {
    return { error: "Invalid superadmin password." };
  }

  await setSuperadminSession(secret);
  redirect("/commands");
}

export async function logoutSuperadmin() {
  await clearSuperadminSession();
  redirect("/commands");
}
