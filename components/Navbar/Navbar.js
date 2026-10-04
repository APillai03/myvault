import Link from "next/link";
import { Shield, Plus, FileText } from "lucide-react";
import styles from "./Navbar.module.css";

const tabs = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "My Inventory", href: "/my-inventory" },
  { label: "My Documents", href: "/my-documents" },
];

export default function Navbar({ active = "Dashboard" }) {
  return (
    <header className={styles.nav}>
      <div className={styles.left}>
        <Link href="/dashboard" className={styles.brand}>
          <span className={styles.brandMark}>
            <Shield size={18} color="#fff" />
          </span>
          <span className={styles.brandName}>MyVault</span>
        </Link>

        <span className={styles.separator} />

        <nav className={styles.links}>
          {tabs.map((tab) => (
            <Link
              key={tab.label}
              href={tab.href}
              className={`${styles.tab} ${
                tab.label === active ? styles.tabActive : ""
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className={styles.right}>
        <Link href="/add-item" className={`${styles.action} ${styles.primary}`}>
          <Plus size={16} color="#fff" />
          Add Item
        </Link>
        <Link
          href="/add-document"
          className={`${styles.action} ${styles.secondary}`}
        >
          <FileText size={16} color="#fff" />
          Add Document
        </Link>

        <span className={styles.separator} />

        <div className={styles.avatar}>JD</div>
      </div>
    </header>
  );
}
