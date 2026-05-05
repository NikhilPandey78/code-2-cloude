import Link from "next/link";
import type { Metadata } from "next";
import sharedStyles from "../section-page.module.css";
import styles from "./page.module.css";
import { commandCards } from "./data";
import { getContributionRecords } from "../contribute/contributions";
import { isSuperadmin } from "../superadmin/auth";
import { logoutSuperadmin } from "../superadmin/actions";
import DeleteContributionButton from "./DeleteContributionButton";

export const metadata: Metadata = {
  title: "Commands | Code2Cloud",
  description: "Commands reference shown as linked cards.",
};

export default async function CommandsPage() {
  const contributionRecords = await getContributionRecords();
  const superadmin = await isSuperadmin();

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
          <div className={styles.heroActions}>
            <Link href="/contribute" className={styles.contributeLink}>
              Contribute Commands
            </Link>
            {superadmin ? (
              <form action={logoutSuperadmin}>
                <button type="submit" className={styles.adminLink}>
                  Logout Superadmin
                </button>
              </form>
            ) : null}
          </div>
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

        {contributionRecords.length > 0 ? (
          <section className={styles.communitySection}>
            <div className={styles.communityHeader}>
              <h2>Community Contributions</h2>
              <p>
                Uploaded command documents shared by contributors now appear
                here as reference cards.
              </p>
            </div>

            <div className={styles.commandsGrid}>
              {contributionRecords.map((record) => (
                <article
                  key={`${record.storedFileName}-${record.submittedAt}`}
                  className={`${sharedStyles.card} ${styles.commandCard}`}
                >
                  <div className={styles.communityMeta}>
                    <span>Uploaded by {record.contributor}</span>
                    <span>
                      {new Date(record.submittedAt).toLocaleDateString("en-IN")}
                    </span>
                  </div>
                  <h2>{record.title}</h2>
                  <p>{record.notes}</p>
                  <Link
                    href={record.documentUrl}
                    className={styles.viewButton}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Document
                  </Link>
                  {superadmin ? (
                    <DeleteContributionButton
                      storedFileName={record.storedFileName}
                      metadataFileName={record.metadataFileName}
                    />
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
