import type { Metadata } from "next";
import Link from "next/link";
import sharedStyles from "../section-page.module.css";
import styles from "./page.module.css";
import SuperadminLoginForm from "./SuperadminLoginForm";
import { isSuperadmin } from "./auth";
import { logoutSuperadmin } from "./actions";

export const metadata: Metadata = {
  title: "Superadmin Access | Code2Cloud",
  description: "Restricted access page for command contribution management.",
};

export default async function SuperadminPage() {
  const superadmin = await isSuperadmin();

  return (
    <div className={sharedStyles.page}>
      <main className={`${sharedStyles.main} ${styles.main}`}>
        <section className={styles.hero}>
          <span className={sharedStyles.eyebrow}>Superadmin</span>
          <h1>Manage contribution moderation.</h1>
          <p>
            Login with the configured superadmin password to reveal delete
            controls on community contribution cards.
          </p>
        </section>

        <section className={styles.card}>
          <h2>Restricted Access</h2>
          {superadmin ? (
            <>
              <p>
                You are logged in as superadmin. You can now manage community
                contributions from the commands page.
              </p>
              <div className={styles.actions}>
                <Link href="/commands" className={styles.secondaryButton}>
                  Go to Commands
                </Link>
                <form action={logoutSuperadmin}>
                  <button type="submit" className={styles.submitButton}>
                    Logout Superadmin
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              <p>
                Only superadmins can remove uploaded contribution documents from the
                commands library.
              </p>
              <SuperadminLoginForm />
            </>
          )}
        </section>
      </main>
    </div>
  );
}
