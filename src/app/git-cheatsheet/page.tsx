import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Getting Started",
    commands: [
      {
        label: "Start a new repo:",
        command: "git init",
      },
      {
        label: "Clone an existing repo:",
        command: "git clone <url>",
      },
    ],
  },
  {
    title: "Prepare to Commit",
    commands: [
      {
        label: "Add untracked file or unstaged changes:",
        command: "git add <file>",
      },
      {
        label: "Add all untracked files and unstaged changes:",
        command: "git add .",
      },
      {
        label: "Choose which parts of a file to stage:",
        command: "git add -p",
      },
      {
        label: "Move file:",
        command: "git mv <old> <new>",
      },
      {
        label: "Delete file from Git and disk:",
        command: "git rm <file>",
      },
      {
        label: "Remove file from Git but keep it locally:",
        command: "git rm --cached <file>",
      },
      {
        label: "Unstage a file:",
        command: "git reset <file>",
      },
      {
        label: "Check current status:",
        command: "git status",
      },
    ],
  },
  {
    title: "Committing",
    commands: [
      {
        label: "Commit using the default editor:",
        command: "git commit",
      },
      {
        label: 'Commit with a short message:',
        command: 'git commit -m "message"',
      },
      {
        label: 'Commit all tracked changes with a message:',
        command: 'git commit -am "message"',
      },
    ],
  },
  {
    title: "Branching",
    commands: [
      {
        label: "Switch to another branch:",
        command: "git switch <name>",
      },
      {
        label: "Create and switch to a new branch:",
        command: "git switch -c <name>",
      },
      {
        label: "List local branches:",
        command: "git branch",
      },
      {
        label: "Delete a merged branch:",
        command: "git branch -d <name>",
      },
      {
        label: "Force delete a branch:",
        command: "git branch -D <name>",
      },
    ],
  },
  {
    title: "Diff and Compare",
    commands: [
      {
        label: "Show unstaged changes:",
        command: "git diff",
      },
      {
        label: "Show staged changes:",
        command: "git diff --staged",
      },
      {
        label: "Show all current changes:",
        command: "git diff HEAD",
      },
      {
        label: "Show details for a commit:",
        command: "git show <commit>",
      },
    ],
  },
  {
    title: "Undo and Reset",
    commands: [
      {
        label: "Discard local changes in a file:",
        command: "git restore <file>",
      },
      {
        label: "Reset tracked files to the last commit:",
        command: "git reset --hard",
      },
      {
        label: "Remove untracked files:",
        command: "git clean",
      },
      {
        label: "Temporarily save your work:",
        command: "git stash",
      },
    ],
  },
  {
    title: "History and Logs",
    commands: [
      {
        label: "View compact commit history:",
        command: "git log --oneline",
      },
      {
        label: "Show history as a graph:",
        command: "git log --graph",
      },
      {
        label: "See who changed each line in a file:",
        command: "git blame <file>",
      },
    ],
  },
  {
    title: "Merge and Rebase",
    commands: [
      {
        label: "Merge another branch into the current branch:",
        command: "git merge <branch>",
      },
      {
        label: "Rebase the current branch onto another branch:",
        command: "git rebase <branch>",
      },
      {
        label: "Apply a specific commit here:",
        command: "git cherry-pick <commit>",
      },
    ],
  },
  {
    title: "Remote and Push",
    commands: [
      {
        label: "Add a remote repository:",
        command: "git remote add origin <url>",
      },
      {
        label: "Push to the main branch:",
        command: "git push origin main",
      },
      {
        label: "Push a new branch and track it:",
        command: "git push -u origin <branch>",
      },
      {
        label: "Safely force push:",
        command: "git push --force-with-lease",
      },
    ],
  },
  {
    title: "Pull and Fetch",
    commands: [
      {
        label: "Fetch new remote changes:",
        command: "git fetch",
      },
      {
        label: "Pull and merge remote changes:",
        command: "git pull",
      },
      {
        label: "Pull using rebase:",
        command: "git pull --rebase",
      },
    ],
  },
  {
    title: "Config",
    commands: [
      {
        label: "Set your Git username:",
        command: 'git config user.name "Name"',
      },
      {
        label: "Update global Git configuration:",
        command: "git config --global ...",
      },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "Git Cheat Sheet | Code2Cloud",
  description: "A quick Git command reference grouped by common workflows.",
};

export default function GitCheatSheetPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {sections.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.sectionGrid}>
              {section.commands.map((item) => (
                <article key={`${section.title}-${item.command}`} className={styles.card}>
                  <h3>{item.label}</h3>
                  <code>{item.command}</code>
                </article>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
