import Link from "next/link";
import { coverage } from "../lib/coverage";
import styles from "./Nav.module.css";

export default function Nav({ block = true }: { block?: boolean }) {
  return (
    <header className={styles.bar}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={styles.mark} aria-label="AESTRODOM home">
          <div className={styles.logoWrap}>
            <img src="/logo.png" alt="AESTRODOM Ghost Logo" className={styles.logoImg} />
          </div>
          <span>AESTRODOM</span>
        </Link>
        <nav className={styles.links}>
          <Link className={styles.link} href="/#markets">
            Markets
          </Link>
          <Link className={styles.link} href="/#api">
            API
          </Link>
          <Link className={styles.link} href="/docs">
            Method
          </Link>
          <a
            className={styles.link}
            href="https://github.com/aestrodom/aestrodom"
            rel="noopener"
          >
            Source
          </a>
          {block && (
            <span className={styles.block}>BLOCK {coverage.pool_block}</span>
          )}
        </nav>
      </div>
    </header>
  );
}
