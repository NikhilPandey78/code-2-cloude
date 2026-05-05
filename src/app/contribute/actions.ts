"use server";

import path from "node:path";
import { revalidatePath } from "next/cache";
import { saveContribution } from "./contributions";

type ContributionState = {
  error?: string;
  success?: string;
  filePath?: string;
};

const allowedExtensions = new Set([".md", ".txt", ".pdf", ".doc", ".docx"]);
const maxFileSize = 4 * 1024 * 1024;

function toSlug(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export async function submitContribution(
  _prevState: ContributionState,
  formData: FormData
): Promise<ContributionState> {
  const contributor = String(formData.get("contributor") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const notes = String(formData.get("notes") ?? "").trim();
  const file = formData.get("document");

  if (!contributor || !title || !notes) {
    return {
      error: "Please fill in your name, command title, and contribution notes.",
    };
  }

  if (!(file instanceof File) || file.size === 0) {
    return { error: "Please upload a document before submitting." };
  }

  if (file.size > maxFileSize) {
    return { error: "Please upload a document smaller than 4 MB." };
  }

  const extension = path.extname(file.name).toLowerCase();
  if (!allowedExtensions.has(extension)) {
    return {
      error: "Only .md, .txt, .pdf, .doc, and .docx files are supported.",
    };
  }

  const safeContributor = toSlug(contributor) || "guest";
  const safeTitle = toSlug(title) || "command";
  const timestamp = Date.now();
  const documentName = `${safeTitle}-${safeContributor}-${timestamp}${extension}`;
  let documentUrl: string;

  try {
    documentUrl = await saveContribution({
      documentName,
      file,
      metadata: {
        contributor,
        title,
        notes,
        originalFileName: file.name,
        storedFileName: documentName,
        submittedAt: new Date(timestamp).toISOString(),
      },
    });
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "Contribution upload failed. Please try again.",
    };
  }

  revalidatePath("/commands");

  return {
    success: "Contribution uploaded successfully.",
    filePath: documentUrl,
  };
}
