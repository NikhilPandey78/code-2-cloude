"use server";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

type ContributionState = {
  error?: string;
  success?: string;
  filePath?: string;
};

const allowedExtensions = new Set([".md", ".txt", ".pdf", ".doc", ".docx"]);
const maxFileSize = 10 * 1024 * 1024;

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
    return { error: "Please upload a document smaller than 10 MB." };
  }

  const extension = path.extname(file.name).toLowerCase();
  if (!allowedExtensions.has(extension)) {
    return {
      error: "Only .md, .txt, .pdf, .doc, and .docx files are supported.",
    };
  }

  const uploadDirectory = path.join(process.cwd(), "public", "contributions");
  await mkdir(uploadDirectory, { recursive: true });

  const safeContributor = toSlug(contributor) || "guest";
  const safeTitle = toSlug(title) || "command";
  const timestamp = Date.now();
  const documentName = `${safeTitle}-${safeContributor}-${timestamp}${extension}`;
  const metadataName = `${safeTitle}-${safeContributor}-${timestamp}.json`;

  const fileBuffer = Buffer.from(await file.arrayBuffer());
  const documentPath = path.join(uploadDirectory, documentName);
  const metadataPath = path.join(uploadDirectory, metadataName);

  await writeFile(documentPath, fileBuffer);
  await writeFile(
    metadataPath,
    JSON.stringify(
      {
        contributor,
        title,
        notes,
        originalFileName: file.name,
        storedFileName: documentName,
        submittedAt: new Date(timestamp).toISOString(),
      },
      null,
      2
    ),
    "utf8"
  );

  return {
    success: "Contribution uploaded successfully.",
    filePath: `/contributions/${documentName}`,
  };
}
