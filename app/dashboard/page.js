import Link from "next/link";
import {
  Package,
  FileText,
  Layers,
  Clock,
  Search,
  ArrowUpRight,
  Smartphone,
  Keyboard,
  BookOpen,
  BatteryCharging,
  Plus,
  Grid3x3,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./dashboard.module.css";

const metrics = [
  { label: "Total Items", value: "42", note: "Belongings tracked across your vault", icon: Package, color: "#4f8cff", bg: "#23324c" },
  { label: "Documents", value: "16", note: "Stored securely in your vault", icon: FileText, color: "#5bc9a1", bg: "#213730" },
  { label: "Categories", value: "7", note: "Keeping your belongings organized", icon: Layers, color: "#aa9af0", bg: "#302d41" },
  { label: "Recently Added", value: "5", note: "New additions from the last few days", icon: Clock, color: "#e8b45a", bg: "#393126" },
];

const items = [
  { name: "Samsung Galaxy S25", added: "Added today", category: "Electronics", date: "Oct 2, 2026", storage: "Desk", icon: Smartphone },
  { name: "Kreo Swarm Keyboard", added: "Added yesterday", category: "Accessories", date: "Oct 1, 2026", storage: "Drawer", icon: Keyboard },
  { name: "First Law Trilogy", added: "Added Oct 1", category: "Books", date: "Oct 1, 2026", storage: "Bookshelf", icon: BookOpen },
  { name: "Passport", added: "Added Sep 30", category: "Documents", date: "Sep 30, 2026", storage: "Safe", icon: FileText },
  { name: "USB-C Charger", added: "Added Sep 29", category: "Electronics", date: "Sep 29, 2026", storage: "Backpack", icon: BatteryCharging },
];

const quickActions = [
  { title: "Add an Item", text: "Track a new gadget, accessory, or personal belonging.", icon: Plus, color: "#4f8cff", bg: "#23324c", href: "/add-item" },
  { title: "Add a Document", text: "Store a passport, receipt, or important paper safely.", icon: FileText, color: "#5bc9a1", bg: "#213730", href: "/add-document" },
  { title: "Browse My Inventory", text: "Open your full collection and review every item.", icon: Grid3x3, color: "#aa9af0", bg: "#302d41", href: "/my-inventory" },
];

export default function DashboardPage() {
  return (
    <>
      <Navbar active="Dashboard" />

      <main className={styles.content}>
        <div className={styles.heading}>
          <h1>Your Personal Vault</h1>
          <p>Everything you own, organized in one place.</p>
        </div>

        {/* Overview cards */}
        <div className={styles.metrics}>
          {metrics.map(({ label, value, note, icon: Icon, color, bg }) => (
            <div key={label} className={styles.metricCard}>
              <div className={styles.metricHead}>
                <span>{label}</span>
                <span className={styles.metricIcon} style={{ background: bg }}>
                  <Icon size={17} color={color} />
                </span>
              </div>
              <strong className={styles.metricValue}>{value}</strong>
              <p className={styles.metricNote}>{note}</p>
            </div>
          ))}
        </div>

        {/* Recently added table */}
        <section className={styles.panel}>
          <div className={styles.panelHeader}>
            <div className={styles.panelTitle}>
              <h2>Recently Added</h2>
              <p>The latest personal items you’ve added to your vault.</p>
            </div>
            <div className={styles.controls}>
              <label className={styles.search}>
                <Search size={16} color="#a1aab9" />
                <input type="text" placeholder="Find something in your vault…" />
              </label>
              <Link href="/my-inventory" className={styles.viewAll}>
                View All
                <ArrowUpRight size={16} color="#f0f3f9" />
              </Link>
            </div>
          </div>

          <div className={styles.tableHead}>
            <span className={styles.colItem}>Item</span>
            <span className={styles.colCategory}>Category</span>
            <span className={styles.colAdded}>Added</span>
            <span className={styles.colStorage}>Storage</span>
          </div>

          <div>
            {items.map(({ name, added, category, date, storage, icon: Icon }) => (
              <div key={name} className={styles.row}>
                <div className={`${styles.colItem} ${styles.itemDetails}`}>
                  <span className={styles.itemSymbol}>
                    <Icon size={18} color="#a1aab9" />
                  </span>
                  <div className={styles.itemInfo}>
                    <span className={styles.itemName}>{name}</span>
                    <span className={styles.itemMeta}>{added}</span>
                  </div>
                </div>
                <div className={styles.colCategory}>
                  <span className={styles.tag}>{category}</span>
                </div>
                <span className={`${styles.colAdded} ${styles.cell}`}>{date}</span>
                <span className={`${styles.colStorage} ${styles.cell}`}>{storage}</span>
              </div>
            ))}
          </div>

          <div className={styles.tableFooter}>
            <span>Showing 5 of 42 items</span>
            <span className={styles.sync}>
              <i className={styles.dot} />
              All changes saved · Last synced just now
            </span>
          </div>
        </section>

        {/* Quick actions */}
        <div className={styles.quickActions}>
          {quickActions.map(({ title, text, icon: Icon, color, bg, href }) => (
            <Link key={title} href={href} className={styles.quickCard}>
              <span className={styles.quickIcon} style={{ background: bg }}>
                <Icon size={18} color={color} />
              </span>
              <div className={styles.quickText}>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
