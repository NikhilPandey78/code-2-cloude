"use server";

import { unlink } from "node:fs/promises";
import path from "node:path";
import { revalidatePath } from "next/cache";
import { isSuperadmin } from "../superadmin/auth";

export async function deleteContribution(formData: FormData) {
  const superadmin = await isSuperadmin();

  if (!superadmin) {
    throw new Error("Unauthorized");
  }

  const storedFileName = String(formData.get("storedFileName") ?? "");
  const metadataFileName = String(formData.get("metadataFileName") ?? "");

  if (!storedFileName || !metadataFileName) {
    throw new Error("Missing contribution file details.");
  }

  const contributionDirectory = path.join(
    process.cwd(),
    "public",
    "contributions"
  );

  await Promise.allSettled([
    unlink(path.join(contributionDirectory, storedFileName)),
    unlink(path.join(contributionDirectory, metadataFileName)),
  ]);

  revalidatePath("/commands");
}
