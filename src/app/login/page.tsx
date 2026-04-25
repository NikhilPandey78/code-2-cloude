import type { Metadata } from "next";
import sharedStyles from "../section-page.module.css";
import styles from "../superadmin/page.module.css";
import SuperadminLoginForm from "../superadmin/SuperadminLoginForm";
import { logoutSuperadmin } from "../superadmin/actions";
import { isSuperadmin } from "../superadmin/auth";

export const metadata: Metadata = {
  title: "Login | Code2Cloud",
  description: "Secure login page for Code2Cloud administration.",
};

export default async function LoginPage() {
  const superadmin = await isSuperadmin();

  return (
    <div className={sharedStyles.page}>
      <main className={`${sharedStyles.main} ${styles.main}`}>
        <section className={styles.hero}>
          <span className={sharedStyles.eyebrow}>Login</span>
          <h1>Sign in to manage Code2Cloud.</h1>
          <p>
            Use the configured superadmin password to access moderation tools
            for community contributions.
          </p>
        </section>

        <section className={styles.card}>
          <h2>Admin Access</h2>
          {superadmin ? (
            <>
              <p>
                You are already logged in as superadmin. Open the commands page
                to manage community submissions.
              </p>
              <div className={styles.actions}>
                <a href="/commands" className={styles.secondaryButton}>
                  Go to Commands
                </a>
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
                This page is reserved for the site administrator. Sign in to
                enable superadmin controls.
              </p>
              <SuperadminLoginForm />
            </>
          )}
        </section>
      </main>
    </div>
  );
}
