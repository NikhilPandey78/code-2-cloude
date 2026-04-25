"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

type CopyCodeCardProps = {
  title: string;
  description: string;
  code: string;
  steps: string[];
};

export default function CopyCodeCard({
  title,
  description,
  code,
  steps,
}: CopyCodeCardProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeoutId);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className={`${styles.card} ${styles.cardWide}`}>
      <button
        type="button"
        className={styles.copyButton}
        onClick={handleCopy}
        aria-label={copied ? "Code copied" : `Copy ${title}`}
      >
        {copied ? "Copied" : "Copy"}
      </button>
      <h3>{title}</h3>
      <p>{description}</p>
      <pre className={styles.codeBlock}>{code}</pre>
      <div className={styles.explanationBlock}>
        <h4>How It Works Step by Step</h4>
        <ol className={styles.stepList}>
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </article>
  );
}
