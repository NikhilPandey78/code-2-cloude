import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero} id="top">
          <span className={styles.eyebrow}>Welcome to Code2Cloud</span>
          <h1>Move Your App From Code to Cloud</h1>
          <p>
            A complete developer and DevOps reference guide. Learn the essential
            commands, workflows, and best practices for modern application development
            and deployment across all major platforms and tools.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/commands" className={styles.primaryButton}>
              Explore Commands
            </Link>
            <a href="#about" className={styles.secondaryButton}>
              Learn More
            </a>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection} id="about">
          <div className={styles.aboutContent}>
            <h2>What is Code2Cloud?</h2>
            <p>
              Code2Cloud is a beginner-friendly, comprehensive reference website
              designed for developers and DevOps engineers. Whether you&apos;re learning
              your first programming language, mastering cloud deployment, or
              optimizing your CI/CD pipeline, this website provides practical,
              real-world commands and workflows in one easy-to-access place.
            </p>
          </div>
        </section>

        {/* Purpose Cards */}
        <section className={styles.grid}>
          <article className={styles.card} id="commands">
            <div className={styles.cardIcon}>📚</div>
            <h2>What This Website Does</h2>
            <p>
              Collects the core steps of a modern web app workflow in one place,
              from local development to production deployment.
            </p>
            <code>Develop → Build → Test → Deploy</code>
          </article>

          <article className={styles.card} id="deployment">
            <div className={styles.cardIcon}>👨‍💻</div>
            <h2>For Developers</h2>
            <p>
              Understand which commands and environments are needed before app
              goes live. Follow a clear path for running, checking, and preparing
              your project with confidence.
            </p>
            <ul>
              <li>Quick command reference</li>
              <li>Workflow examples</li>
              <li>Best practices</li>
            </ul>
          </article>

          <article className={styles.card} id="included">
            <div className={styles.cardIcon}>⚙️</div>
            <h2>For DevOps Engineers</h2>
            <p>
              Standardize build and release steps, enable better collaboration,
              and make deployment practices easier to explain to new team members.
            </p>
            <ul>
              <li>Infrastructure automation</li>
              <li>CI/CD pipelines</li>
              <li>Monitoring & scaling</li>
            </ul>
          </article>
        </section>

        {/* Features Section */}
        <section className={styles.featuresSection}>
          <h2>13+ Command Cheatsheets Available</h2>
          <p>Access comprehensive guides for all major technologies:</p>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureBadge}>📦</div>
              <h3>Package Management</h3>
              <p>npm, Docker, PM2</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureBadge}>🗄️</div>
              <h3>Databases</h3>
              <p>SQL, PostgreSQL</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureBadge}>💻</div>
              <h3>Programming</h3>
              <p>Python, PHP, C++</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureBadge}>☁️</div>
              <h3>Cloud & DevOps</h3>
              <p>Kubernetes, DevOps</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureBadge}>🔧</div>
              <h3>Tools</h3>
              <p>Git, Linux, WordPress</p>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureBadge}>🚀</div>
              <h3>Deployment</h3>
              <p>Build • Test • Deploy</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Ready to Explore?</h2>
          <p>Browse hundreds of essential commands across all major technologies.</p>
          <Link href="/commands" className={styles.primaryButton}>
            View All Commands
          </Link>
        </section>
      </main>
    </div>
  );
}
