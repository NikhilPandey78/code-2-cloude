"use client";

import { useActionState } from "react";
import { submitContribution } from "./actions";
import styles from "./page.module.css";

const initialState = {
  error: "",
  success: "",
  filePath: "",
};

export default function ContributeForm() {
  const [state, formAction, pending] = useActionState(
    submitContribution,
    initialState
  );

  return (
    <form action={formAction} className={styles.form}>
      <div className={styles.fieldGrid}>
        <label className={styles.field}>
          <span>Your Name</span>
          <input type="text" name="contributor" placeholder="Your Name" required />
        </label>

        <label className={styles.field}>
          <span>Command Title</span>
          <input
            type="text"
            name="title"
            placeholder="command name or topic"
            required
          />
        </label>
      </div>

      <label className={styles.field}>
        <span>Upload Document</span>
        <input
          type="file"
          name="document"
          accept=".md,.txt,.pdf,.doc,.docx"
          required
        />
      </label>

      <label className={styles.field}>
        <span>Contribution Notes</span>
        <textarea
          name="notes"
          rows={6}
          placeholder="Explain what the command document adds and how someone should use it."
          required
        />
      </label>

      <div className={styles.formFooter}>
        <button type="submit" className={styles.submitButton} disabled={pending}>
          {pending ? "Uploading..." : "Upload Contribution"}
        </button>
        <p className={styles.helperText}>
          Supported files: `.md`, `.txt`, `.pdf`, `.doc`, `.docx`
        </p>
      </div>

      {state.error ? <p className={styles.errorMessage}>{state.error}</p> : null}
      {state.success ? (
        <div className={styles.successMessage}>
          <p>{state.success}</p>
          {state.filePath ? (
            <a href={state.filePath} target="_blank" rel="noreferrer">
              Open uploaded document
            </a>
          ) : null}
        </div>
      ) : null}
    </form>
  );
}
