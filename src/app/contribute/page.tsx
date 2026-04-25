import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../section-page.module.css";
import styles from "./page.module.css";
import ContributeForm from "./ContributeForm";

export const metadata: Metadata = {
  title: "Contribute | Code2Cloud",
  description:
    "Upload command documents and contribute new command references to Code2Cloud.",
};

export default function ContributePage() {
  return (
    <div className={sharedStyles.page}>
      <main className={`${sharedStyles.main} ${styles.main}`}>
        <section className={styles.hero}>
          <span className={sharedStyles.eyebrow}>Contribute</span>
          <h1>Help grow the command library.</h1>
          <p>
            Anyone can contribute new commands by uploading a document with the
            command, explanation, and usage notes. We save the uploaded file and
            keep a simple submission record for review.
          </p>
          <div className={styles.heroActions}>
            <Link href="/commands" className={styles.secondaryButton}>
              Browse Commands
            </Link>
          </div>
        </section>

        <section className={styles.contentGrid}>
          <article className={styles.infoCard}>
            <h2>What To Upload</h2>
            <ul className={styles.list}>
              <li>A short command title.</li>
              <li>A document with examples, flags, and expected output.</li>
              <li>Notes explaining when the command should be used.</li>
            </ul>
          </article>

          <article className={styles.infoCard}>
            <h2>Accepted Formats</h2>
            <ul className={styles.list}>
              <li>Markdown files for clean documentation.</li>
              <li>Text files for quick raw notes.</li>
              <li>PDF or Word docs for prepared reference sheets.</li>
            </ul>
          </article>
        </section>

        <section className={styles.uploadCard}>
          <div className={styles.uploadIntro}>
            <h2>Upload Your Command Document</h2>
            <p>
              Add your details, choose the document, and upload it for the
              Code2Cloud library.
            </p>
          </div>
          <ContributeForm />
        </section>
      </main>
    </div>
  );
}
