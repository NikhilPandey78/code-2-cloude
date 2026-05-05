import { mkdir, readdir, readFile, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { del, list, put } from "@vercel/blob";

export type ContributionRecord = {
  contributor: string;
  title: string;
  notes: string;
  originalFileName: string;
  storedFileName: string;
  submittedAt: string;
  metadataFileName: string;
  documentUrl: string;
};

type ContributionMetadata = Omit<
  ContributionRecord,
  "metadataFileName" | "documentUrl"
> & {
  documentUrl?: string;
};

const contributionPrefix = "contributions";
const metadataPrefix = `${contributionPrefix}/metadata`;

function hasBlobStore() {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN?.trim());
}

function isVercelDeployment() {
  return process.env.VERCEL === "1";
}

function getLocalContributionDirectory() {
  return path.join(process.cwd(), "public", contributionPrefix);
}

export async function saveContribution({
  documentName,
  file,
  metadata,
}: {
  documentName: string;
  file: File;
  metadata: ContributionMetadata;
}) {
  if (hasBlobStore()) {
    const documentPathname = `${contributionPrefix}/${documentName}`;
    const metadataPathname = `${metadataPrefix}/${documentName}.json`;
    const documentBlob = await put(documentPathname, file, {
      access: "public",
      addRandomSuffix: false,
      contentType: file.type || undefined,
    });

    await put(
      metadataPathname,
      JSON.stringify({ ...metadata, documentUrl: documentBlob.url }, null, 2),
      {
        access: "public",
        addRandomSuffix: false,
        contentType: "application/json",
      }
    );

    return documentBlob.url;
  }

  if (isVercelDeployment()) {
    throw new Error(
      "BLOB_READ_WRITE_TOKEN is not configured in the deployment environment."
    );
  }

  const uploadDirectory = getLocalContributionDirectory();
  await mkdir(uploadDirectory, { recursive: true });

  await writeFile(
    path.join(uploadDirectory, documentName),
    Buffer.from(await file.arrayBuffer())
  );
  await writeFile(
    path.join(uploadDirectory, `${documentName}.json`),
    JSON.stringify(metadata, null, 2),
    "utf8"
  );

  return `/${contributionPrefix}/${documentName}`;
}

export async function getContributionRecords(): Promise<ContributionRecord[]> {
  if (hasBlobStore()) {
    try {
      const { blobs } = await list({
        limit: 1000,
        prefix: `${metadataPrefix}/`,
      });

      const records = await Promise.all(
        blobs.map(async (blob) => {
          const response = await fetch(blob.url, { cache: "no-store" });
          const metadata = (await response.json()) as ContributionMetadata;
          return {
            ...metadata,
            metadataFileName: blob.pathname,
            storedFileName: metadata.storedFileName.startsWith(
              `${contributionPrefix}/`
            )
              ? metadata.storedFileName
              : `${contributionPrefix}/${metadata.storedFileName}`,
            documentUrl:
              metadata.documentUrl ??
              `/${contributionPrefix}/${metadata.storedFileName}`,
          } satisfies ContributionRecord;
        })
      );

      return sortRecords(records);
    } catch {
      return [];
    }
  }

  try {
    const contributionDirectory = getLocalContributionDirectory();
    const files = await readdir(contributionDirectory);
    const metadataFiles = files.filter((file) => file.endsWith(".json"));

    const records = await Promise.all(
      metadataFiles.map(async (file) => {
        const filePath = path.join(contributionDirectory, file);
        const fileContents = await readFile(filePath, "utf8");
        const metadata = JSON.parse(fileContents) as ContributionMetadata;
        return {
          ...metadata,
          metadataFileName: file,
          documentUrl:
            metadata.documentUrl ??
            `/${contributionPrefix}/${metadata.storedFileName}`,
        } satisfies ContributionRecord;
      })
    );

    return sortRecords(records);
  } catch {
    return [];
  }
}

export async function deleteContributionFiles(
  storedFileName: string,
  metadataFileName: string
) {
  if (hasBlobStore()) {
    await del([storedFileName, metadataFileName]);
    return;
  }

  const contributionDirectory = getLocalContributionDirectory();
  await Promise.allSettled([
    unlink(path.join(contributionDirectory, storedFileName)),
    unlink(path.join(contributionDirectory, metadataFileName)),
  ]);
}

function sortRecords(records: ContributionRecord[]) {
  return records.sort(
    (a, b) =>
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
  );
}
