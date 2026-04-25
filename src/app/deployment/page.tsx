import type { Metadata } from "next";
import styles from "../section-page.module.css";

export const metadata: Metadata = {
  title: "Deployment | Code2Cloud",
  description: "Deployment guidance for Code2Cloud on Vercel or generic Node hosting.",
};

export default function DeploymentPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Deployment</span>
          <h1>Ship the starter with a clean production workflow.</h1>
          <p>
            The project already includes a deployment guide in the repository
            root. This page gives a quick overview so the header link opens a
            dedicated deployment screen.
          </p>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <h2>Before Deploying</h2>
            <ol className={styles.steps}>
              <li>Install dependencies with `npm install`.</li>
              <li>Run `npm run lint` to catch code issues.</li>
              <li>Run `npm run build` to verify the production bundle.</li>
            </ol>
          </article>

          <article className={styles.card}>
            <h2>Hosting Options</h2>
            <ul className={styles.list}>
              <li>Vercel for the fastest Next.js deployment path.</li>
              <li>Generic Node hosting using the production build output.</li>
              <li>Any platform that supports running `next start`.</li>
            </ul>
          </article>

          <article className={`${styles.card} ${styles.cardWide}`}>
            <h2>Project Guide</h2>
            <p>
              Open the repository-level `DEPLOYMENT.md` file for the full
              step-by-step deployment instructions and hosting notes.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
