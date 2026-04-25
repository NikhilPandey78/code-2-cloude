import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

export type ContributionRecord = {
  contributor: string;
  title: string;
  notes: string;
  originalFileName: string;
  storedFileName: string;
  submittedAt: string;
  metadataFileName: string;
};

export async function getContributionRecords(): Promise<ContributionRecord[]> {
  const contributionDirectory = path.join(
    process.cwd(),
    "public",
    "contributions"
  );

  try {
    const files = await readdir(contributionDirectory);
    const metadataFiles = files.filter((file) => file.endsWith(".json"));

    const records = await Promise.all(
      metadataFiles.map(async (file) => {
        const filePath = path.join(contributionDirectory, file);
        const fileContents = await readFile(filePath, "utf8");
        return {
          ...(JSON.parse(fileContents) as Omit<ContributionRecord, "metadataFileName">),
          metadataFileName: file,
        } satisfies ContributionRecord;
      })
    );

    return records.sort(
      (a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
  } catch {
    return [];
  }
}
