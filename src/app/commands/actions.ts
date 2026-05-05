"use server";

import { revalidatePath } from "next/cache";
import { isSuperadmin } from "../superadmin/auth";
import { deleteContributionFiles } from "../contribute/contributions";

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

  await deleteContributionFiles(storedFileName, metadataFileName);

  revalidatePath("/commands");
}
