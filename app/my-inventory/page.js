import Link from "next/link";
import {
  Plus,
  ChevronRight,
  MapPin,
  ArrowDownWideNarrow,
  Search,
  Smartphone,
  Keyboard,
  BookOpen,
  BatteryCharging,
  Backpack,
  HardDrive,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import {
  SearchField,
  FilterSelect,
  SortControl,
  Pagination,
  SyncStatus,
  SortMenu,
} from "../../components/Browse/Browse";
import styles from "../../styles/browse.module.css";

const items = [
  { name: "Samsung Galaxy S25", category: "Electronics", description: "Everyday phone with a protective case.", location: "Desk", date: "Oct 2, 2026", icon: Smartphone },
  { name: "Kreo Swarm Keyboard", category: "Accessories", description: "Mechanical keyboard for my desk setup.", location: "Drawer", date: "Oct 1, 2026", icon: Keyboard },
  { name: "First Law Trilogy", category: "Books", description: "The complete fantasy trilogy by Joe Abercrombie.", location: "Bookshelf", date: "Oct 1, 2026", icon: BookOpen },
  { name: "USB-C Charger", category: "Electronics", description: "Compact charger and cable for on the go.", location: "Backpack", date: "Sep 29, 2026", icon: BatteryCharging },
  { name: "Backpack", category: "Accessories", description: "Everyday backpack with a padded laptop sleeve.", location: "Closet", date: "Sep 28, 2026", icon: Backpack },
  { name: "External SSD", category: "Electronics", description: "Portable drive for photos and personal backups.", location: "Desk drawer", date: "Sep 27, 2026", icon: HardDrive },
];

const recent = items.slice(0, 3);

export default function MyInventoryPage() {
  return (
    <>
      <Navbar active="My Inventory" />

      <main className={styles.content}>
        {/* Heading + search */}
        <div className={styles.top}>
          <div className={styles.pageHeading}>
            <div className={styles.headingCopy}>
              <h1>My Inventory</h1>
              <p>Everything you own, organized in one place.</p>
            </div>
            <Link href="/add-item" className={styles.addBtn}>
              <Plus size={16} color="#fff" />
              Add Item
            </Link>
          </div>

          <div className={styles.filters}>
            <div className={styles.controls}>
              <SearchField
                label="Find a belonging"
                placeholder="Search your inventory…"
              />
              <FilterSelect label="Category" value="All categories" width={192} />
              <FilterSelect label="Storage Location" value="All locations" width={216} />
              <FilterSelect label="Date Added" value="Any time" width={176} />
            </div>
            <p className={styles.guidance}>
              Search by item name, category, description, or location.
            </p>
          </div>
        </div>

        {/* Recently added */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeading}>
              <h2>Recently Added</h2>
              <p>The latest personal items you’ve added to your vault.</p>
            </div>
            <span className={styles.count}>Latest 3 items</span>
          </div>

          <div className={styles.grid}>
            {recent.map(({ name, category, location, date, icon: Icon }) => (
              <article key={name} className={styles.card}>
                <div className={styles.cardHead}>
                  <span className={styles.symbol}>
                    <Icon size={22} color="#a1aab9" />
                  </span>
                  <div className={styles.info}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.sub}>{category}</span>
                  </div>
                  <ChevronRight size={16} color="#a1aab9" />
                </div>
                <div className={styles.meta}>
                  <span className={styles.location}>
                    <MapPin size={14} color="#a1aab9" />
                    {location}
                  </span>
                  <span className={styles.date}>{date}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* All items */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeading}>
              <h2>All Items</h2>
              <p>Your personal collection · 42 items</p>
            </div>
            <SortControl icon={ArrowDownWideNarrow} value="Recently Added" />
          </div>

          <div className={styles.grid}>
            {items.map(
              ({ name, category, description, location, date, icon: Icon }) => (
                <article
                  key={name}
                  className={`${styles.card} ${styles.cardTall}`}
                >
                  <div className={styles.cardHead}>
                    <span className={styles.symbol}>
                      <Icon size={22} color="#a1aab9" />
                    </span>
                    <div className={styles.info}>
                      <span className={styles.name}>{name}</span>
                      <span className={styles.tag}>{category}</span>
                    </div>
                    <ChevronRight size={16} color="#a1aab9" />
                  </div>
                  <p className={styles.desc}>{description}</p>
                  <span className={styles.divider} />
                  <div className={styles.meta}>
                    <span className={styles.location}>
                      <MapPin size={14} color="#a1aab9" />
                      {location}
                    </span>
                    <span className={styles.date}>Added {date}</span>
                  </div>
                </article>
              )
            )}
          </div>

          <div className={styles.footer}>
            <span className={styles.footText}>Showing 6 of 42 items</span>
            <Pagination pages={["1", "2", "3", "…", "7"]} />
            <SyncStatus />
          </div>
        </section>

        {/* Alternate states */}
        <section className={styles.states}>
          <span className={styles.stateDivider} />
          <div className={styles.stateHeading}>
            <strong>Page state details</strong>
            <span>· Alternate appearances</span>
          </div>

          <div className={styles.alternates}>
            <SortMenu
              options={["Recently Added", "Name A–Z", "Name Z–A", "Oldest Added"]}
              active="Recently Added"
            />

            <div className={styles.empty}>
              <p className={styles.emptyLabel}>
                ALTERNATE STATE · NO SEARCH RESULTS
              </p>
              <div className={styles.emptyContent}>
                <span className={styles.emptySymbol}>
                  <Search size={24} color="#4f8cff" />
                </span>
                <div className={styles.emptyMessage}>
                  <h3>No items found</h3>
                  <p>
                    Try another search or clear your filters. You can also add a
                    new item to your vault.
                  </p>
                </div>
                <Link href="/add-item" className={styles.emptyBtn}>
                  <Plus size={16} color="#fff" />
                  Add Item
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
