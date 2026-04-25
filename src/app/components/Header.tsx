import Link from "next/link";
import styles from "./Header.module.css";
import SimpleSearch from "./SimpleSearch";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/commands", label: "Commands" },
  { href: "/deployment", label: "Deployment" },
  { href: "/included", label: "Included" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.brand} aria-label="Code2Cloud home">
          <span className={styles.brandMark}>C2C</span>
          <span className={styles.brandText}>
            <strong>Code2Cloud</strong>
            {/* <span>Next.js deployment starter</span> */}
          </span>
        </Link>

        <nav className={styles.nav} aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.headerActions}>
          <Link href="/contribute" className={styles.contributeButton}>
            Contribute
          </Link>
          <SimpleSearch />
        </div>
      </div>
    </header>
  );
}
