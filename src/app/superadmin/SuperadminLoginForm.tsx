"use client";

import { useActionState } from "react";
import { loginSuperadmin } from "./actions";
import styles from "./page.module.css";

const initialState = {
  error: "",
};

export default function SuperadminLoginForm() {
  const [state, formAction, pending] = useActionState(
    loginSuperadmin,
    initialState
  );

  return (
    <form action={formAction} className={styles.form}>
      <label className={styles.field}>
        <span>Superadmin Password</span>
        <input
          type="password"
          name="password"
          placeholder="Enter superadmin password"
          required
        />
      </label>

      <button type="submit" className={styles.submitButton} disabled={pending}>
        {pending ? "Checking..." : "Login as Superadmin"}
      </button>

      {state.error ? <p className={styles.errorMessage}>{state.error}</p> : null}
    </form>
  );
}
