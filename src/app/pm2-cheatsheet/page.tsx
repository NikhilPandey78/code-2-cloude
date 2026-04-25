import type { Metadata } from "next";
import styles from "./page.module.css";

const sections = [
  {
    title: "Getting Started",
    commands: [
      { label: "Install PM2 globally:", command: "npm install -g pm2" },
      { label: "Start an app:", command: "pm2 start app.js" },
      { label: "Start with app name:", command: "pm2 start app.js --name my-app" },
      { label: "Stop an app:", command: "pm2 stop app-name" },
      { label: "Restart an app:", command: "pm2 restart app-name" },
      { label: "Delete an app:", command: "pm2 delete app-name" },
    ],
  },
  {
    title: "Process Monitoring",
    commands: [
      { label: "List all processes:", command: "pm2 list" },
      { label: "View process details:", command: "pm2 info app-name" },
      { label: "View live logs:", command: "pm2 logs" },
      { label: "View logs for specific app:", command: "pm2 logs app-name" },
      { label: "Show monitoring dashboard:", command: "pm2 monit" },
      { label: "Filter logs:", command: "pm2 logs app-name --lines 50" },
    ],
  },
  {
    title: "Process Management",
    commands: [
      { label: "Stop all processes:", command: "pm2 stop all" },
      { label: "Restart all processes:", command: "pm2 restart all" },
      { label: "Reload all processes:", command: "pm2 reload all" },
      { label: "Delete all processes:", command: "pm2 delete all" },
      { label: "Increment instance count:", command: "pm2 scale app-name 3" },
      { label: "Kill PM2 daemon:", command: "pm2 kill" },
    ],
  },
  {
    title: "Cluster Mode",
    commands: [
      { label: "Start in cluster mode:", command: "pm2 start app.js -i max" },
      { label: "Start with specific instances:", command: "pm2 start app.js -i 4" },
      { label: "Scale up cluster:", command: "pm2 scale app-name +2" },
      { label: "Scale down cluster:", command: "pm2 scale app-name -1" },
      { label: "Reload cluster gracefully:", command: "pm2 reload app-name" },
    ],
  },
  {
    title: "Configuration Files",
    commands: [
      { label: "Start with config file:", command: "pm2 start ecosystem.config.js" },
      { label: "Generate config template:", command: "pm2 init" },
      { label: "Reload with config:", command: "pm2 reload ecosystem.config.js" },
      { label: "Start all from config:", command: "pm2 start ecosystem.config.js --env production" },
    ],
  },
  {
    title: "Environment & Variables",
    commands: [
      { label: "Start with env variable:", command: "pm2 start app.js --env development" },
      { label: "Production environment:", command: "pm2 start app.js --env production" },
      { label: "Set environment variable:", command: "pm2 start app.js -- --port 3000" },
      { label: "Pass arguments:", command: "pm2 start app.js --args '--port 3000'" },
    ],
  },
  {
    title: "Persistence & Auto-restart",
    commands: [
      { label: "Save process list:", command: "pm2 save" },
      { label: "Restore saved processes:", command: "pm2 resurrect" },
      { label: "Enable auto-restart on reboot:", command: "pm2 startup" },
      { label: "Disable auto-restart:", command: "pm2 unstartup" },
      { label: "Generate startup script:", command: "pm2 startup systemd -u user --hp /home/user" },
    ],
  },
  {
    title: "Monitoring & Stats",
    commands: [
      { label: "Show CPU/Memory usage:", command: "pm2 list" },
      { label: "Real-time monitoring:", command: "pm2 monit" },
      { label: "Save metrics snapshot:", command: "pm2 snapshot" },
      { label: "Memory watch interval:", command: "pm2 start app.js --max-memory-restart 100M" },
    ],
  },
  {
    title: "Advanced Features",
    commands: [
      { label: "Watch for file changes:", command: "pm2 start app.js --watch" },
      { label: "Ignore files in watch:", command: "pm2 start app.js --watch --ignore-watch 'logs'" },
      { label: "Set max restarts:", command: "pm2 start app.js --max-restarts 5" },
      { label: "Set restart delay:", command: "pm2 start app.js --restart-delay 4000" },
      { label: "Disable auto-restart:", command: "pm2 start app.js --no-autorestart" },
    ],
  },
  {
    title: "PM2 Plus & Web Dashboard",
    commands: [
      { label: "Link to PM2 Plus:", command: "pm2 link" },
      { label: "Disconnect from PM2 Plus:", command: "pm2 unlink" },
      { label: "Monitor via web:", command: "pm2 web" },
      { label: "View web dashboard:", command: "http://localhost:9615" },
    ],
  },
  {
    title: "Debugging & Troubleshooting",
    commands: [
      { label: "Check PM2 version:", command: "pm2 -v" },
      { label: "Show PM2 runtime info:", command: "pm2 info" },
      { label: "Kill PM2 daemon:", command: "pm2 kill" },
      { label: "Clear logs:", command: "pm2 flush" },
      { label: "Reset metadata:", command: "pm2 reset all" },
      { label: "Check for issues:", command: "pm2 diagnose" },
    ],
  },
] as const;

export const metadata: Metadata = {
  title: "PM2 Cheat Sheet | Code2Cloud",
  description: "A comprehensive PM2 cheat sheet covering process management, clustering, configuration, and production deployment.",
};

export default function PM2CheatSheetPage() {
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
