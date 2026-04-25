import type { Metadata } from "next";
import styles from "../section-page.module.css";

export const metadata: Metadata = {
  title: "Included | Code2Cloud",
  description: "Overview of what is included in the Code2Cloud starter.",
};

export default function IncludedPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Included</span>
          <h1>See what comes with the starter out of the box.</h1>
          <p>
            This route highlights the core pieces already set up in the project
            so each top navigation item opens its own page.
          </p>
        </section>

        <section className={styles.grid}>
          <article className={styles.card}>
            <h2>Framework</h2>
            <ul className={styles.list}>
              <li>Next.js 16 App Router setup</li>
              <li>React 19 integration</li>
              <li>Static route generation support</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h2>Developer Tooling</h2>
            <ul className={styles.list}>
              <li>TypeScript configuration</li>
              <li>ESLint with Next.js rules</li>
              <li>npm scripts for dev, lint, build, and start</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h2>UI Foundation</h2>
            <ul className={styles.list}>
              <li>Fixed header navigation</li>
              <li>Responsive landing page layout</li>
              <li>Shared visual styling for section pages</li>
            </ul>
          </article>

          <article className={styles.card}>
            <h2>Project Docs</h2>
            <ul className={styles.list}>
              <li>`DEPLOYMENT.md` for release steps</li>
              <li>`README.md` for project overview</li>
              <li>App structure ready for extension</li>
            </ul>
          </article>
        </section>
      </main>
    </div>
  );
}
