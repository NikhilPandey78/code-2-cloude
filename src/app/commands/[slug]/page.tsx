import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import sharedStyles from "../../section-page.module.css";
import styles from "./page.module.css";
import { commandCards } from "../data";

type CommandDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return commandCards.map((card) => ({ slug: card.slug }));
}

export async function generateMetadata(
  props: CommandDetailPageProps,
): Promise<Metadata> {
  const params = await props.params;
  const command = commandCards.find((card) => card.slug === params.slug);

  if (!command) {
    return {
      title: "Command Not Found | Code2Cloud",
    };
  }

  return {
    title: `${command.title} | Code2Cloud`,
    description: command.description,
  };
}

export default async function CommandDetailPage(props: CommandDetailPageProps) {
  const params = await props.params;
  const command = commandCards.find((card) => card.slug === params.slug);

  if (!command) {
    notFound();
  }

  return (
    <div className={sharedStyles.page}>
      <main className={`${sharedStyles.main} ${styles.detailMain}`}>
        <section className={styles.detailIntro}>
          <span className={sharedStyles.eyebrow}>Command</span>
          <h1>{command.title}</h1>
          <p>{command.description}</p>
        </section>

        <section className={styles.detailGrid}>
          <article className={styles.infoCard}>
            <h2>Run This Command</h2>
            <code className={styles.detailCode}>{command.command}</code>
          </article>

          <article className={styles.infoCard}>
            <h2>What It Does</h2>
            <p>{command.details}</p>
          </article>
        </section>

        {command.steps ? (
          <section className={styles.stepsSection}>
            <h2>Production Deployment Setup</h2>
            <div className={styles.stepsGrid}>
              {command.steps.map((step) => (
                <article key={step.title} className={styles.stepCard}>
                  <h3>{step.title}</h3>
                  <code className={styles.detailCode}>{step.command}</code>
                  <p>{step.details}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <Link href="/commands" className={styles.backLink}>
          Back to All Commands
        </Link>
      </main>
    </div>
  );
}
