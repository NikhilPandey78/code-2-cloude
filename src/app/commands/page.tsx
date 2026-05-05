import Link from "next/link";
import type { Metadata } from "next";
import sharedStyles from "../section-page.module.css";
import styles from "./page.module.css";
import { commandCards } from "./data";

export const metadata: Metadata = {
  title: "Commands | Code2Cloud",
  description: "Commands reference shown as linked cards.",
};

export default function CommandsPage() {
  return (
    <div className={sharedStyles.page}>
      <main className={`${sharedStyles.main} ${styles.commandsMain}`}>
        <section className={styles.commandsHero}>
          <span className={sharedStyles.eyebrow}>Commands</span>
          <h1>Browse the command library.</h1>
          <p>
            This page is for exploring all available commands. Open any card to
            see the selected command and a separate explanation page for what it
            does.
          </p>
        </section>

        <section className={styles.commandsGrid}>
          {commandCards.map((card) => (
            <article key={card.slug} className={`${sharedStyles.card} ${styles.commandCard}`}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              <Link
                href={
                  card.slug === "git"
                    ? "/git-cheatsheet"
                    : card.slug === "Linux"
                      ? "/linux-cheatsheet"
                      : card.slug === "npm"
                        ? "/npm-cheatsheet"
                        : card.slug === "Docker"
                          ? "/docker-cheatsheet"
                          : card.slug === "pm2"
                            ? "/pm2-cheatsheet"
                            : card.slug === "SQL"
                              ? "/sql-cheatsheet"
                              : card.slug === "PostgreSQL"
                                ? "/postgresql-cheatsheet"
                                : card.slug === "WordPress"
                                  ? "/wordpress-cheatsheet"
                                  : card.slug === "PHP"
                                    ? "/php-cheatsheet"
                                    : card.slug === "Python"
                                      ? "/python-cheatsheet"
                                      : card.slug === "C++"
                                        ? "/cpp-cheatsheet"
                                      : card.slug === "ci-cd"
                                        ? "/ci-cd-cheatsheet"
                      : `/commands/${card.slug}`
                }
                className={styles.viewButton}
              >
                View Command
              </Link>
            </article>
          ))}
        </section>

      </main>
    </div>
  );
}
