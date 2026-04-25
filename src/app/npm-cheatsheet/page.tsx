import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Package Management",
    commands: [
      { label: "Alias for npm install:", command: "npm i" },
      { label: "Install everything from package.json:", command: "npm install" },
      {
        label: "Install only production dependencies:",
        command: "npm install --production",
      },
    ],
  },
  {
    title: "Adding Packages",
    commands: [
      { label: "Install a package:", command: "npm install lodash" },
      { label: "Install as a dev dependency:", command: "npm install --save-dev lodash" },
      { label: "Install with an exact version:", command: "npm install --save-exact lodash" },
      { label: "Install latest version:", command: "npm i package@latest" },
      { label: "Install specific version:", command: "npm i package@1.2.3" },
    ],
  },
  {
    title: "Listing",
    commands: [
      { label: "List installed local dependencies:", command: "npm list" },
      {
        label: "List installed global packages:",
        command: "npm list -g --depth 0",
      },
      { label: "View package metadata:", command: "npm view package" },
      { label: "Show outdated dependencies:", command: "npm outdated" },
    ],
  },
  {
    title: "Updating",
    commands: [
      { label: "Update production packages:", command: "npm update" },
      { label: "Update dev packages:", command: "npm update --dev" },
      { label: "Update global packages:", command: "npm update -g" },
      { label: "Update one package:", command: "npm update lodash" },
    ],
  },
  {
    title: "Removing",
    commands: [
      { label: "Remove a package:", command: "npm rm lodash" },
    ],
  },
  {
    title: "Install Names",
    commands: [
      { label: "Install an npm package:", command: "npm i sax" },
      { label: "Install the latest tagged version:", command: "npm i sax@latest" },
      { label: "Install a specific version:", command: "npm i sax@3.0.0" },
      { label: "Install a version range:", command: 'npm i sax@">=1 <2.0"' },
      { label: "Install a scoped package:", command: "npm i @org/sax" },
      { label: "Install from GitHub:", command: "npm i user/repo" },
      { label: "Install from a GitHub branch:", command: "npm i user/repo#master" },
      { label: "Install via GitHub shortcut:", command: "npm i github:user/repo" },
      { label: "Install via GitLab shortcut:", command: "npm i gitlab:user/repo" },
      { label: "Install from an absolute path:", command: "npm i /path/to/repo" },
      { label: "Install from a local tarball:", command: "npm i ./archive.tgz" },
      { label: "Install from a remote tarball:", command: "npm i https://site.com/archive.tgz" },
    ],
  },
  {
    title: "Bumping Versions",
    commands: [
      { label: "Set an exact version:", command: "npm version 1.2.3" },
      { label: "Bump the major version:", command: "npm version major" },
      { label: "Bump the minor version:", command: "npm version minor" },
      { label: "Bump the patch version:", command: "npm version patch" },
    ],
  },
  {
    title: "Misc Features",
    commands: [
      { label: "Add someone as a package owner:", command: "npm owner add USERNAME PACKAGENAME" },
      { label: "List packages quickly:", command: "npm ls" },
      {
        label: "Deprecate an old package version range:",
        command: 'npm deprecate PACKAGE@"< 0.2.0" "critical bug fixed in v0.2.0"',
      },
      { label: "Update all or selected packages:", command: "npm update [-g] PACKAGE" },
      { label: "Check outdated packages optionally by name:", command: "npm outdated [PACKAGE]" },
    ],
  },
  {
    title: "Security",
    commands: [
      { label: "Check vulnerabilities:", command: "npm audit" },
      { label: "Fix security issues:", command: "npm audit fix" },
    ],
  },
  {
    title: "Scripts & Config",
    commands: [
      { label: "Show all available scripts:", command: "npm run" },
      { label: "Start dev server:", command: "npm run dev" },
      { label: "Build project:", command: "npm run build" },
      { label: "Start app:", command: "npm start" },
      { label: "Run tests:", command: "npm test" },
      { label: "Run tests in watch mode:", command: "npm test -- --watch" },
    ],
  },
  {
    title: "Install Sources",
    commands: [
      { label: "Install scoped package:", command: "npm i @org/package" },
      { label: "Install from GitHub repo:", command: "npm i user/repo" },
      { label: "Install GitHub with shortcut:", command: "npm i github:user/repo" },
      { label: "Install from GitLab:", command: "npm i gitlab:user/repo" },
      { label: "Install local tar file:", command: "npm i ./file.tgz" },
      { label: "Install remote tar file:", command: "npm i https://url.tgz" },
    ],
  },
  {
    title: "Cleanup & Fix",
    commands: [
      { label: "Clear npm cache:", command: "npm cache clean --force" },
      { label: "Rebuild native modules:", command: "npm rebuild" },
      { label: "Full reset (nuclear option):", command: "rm -rf node_modules package-lock.json && npm install" },
    ],
  },
  {
    title: "Global Management",
    commands: [
      { label: "Install package globally:", command: "npm install -g package" },
      { label: "Remove global package:", command: "npm uninstall -g package" },
      { label: "Update global packages:", command: "npm update -g" },
    ],
  },
  {
    title: " Debug & Info",
    commands: [
      { label: "Check npm version:", command: "npm -v" },
      { label: "Check Node version:", command: "node -v" },
      { label: "Diagnose npm environment:", command: "npm doctor" },
      { label: "Show npm info:", command: "npx next info" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "npm Cheat Sheet | Code2Cloud",
  description: "An npm cheat sheet covering installs, updates, versions, and package workflows.",
};

export default function NpmCheatSheetPage() {
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
