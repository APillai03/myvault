import { Search, ChevronDown, ChevronLeft, ChevronRight, Check } from "lucide-react";
import styles from "../../styles/browse.module.css";

const widthClass = { 192: styles.w192, 216: styles.w216, 176: styles.w176 };

export function SearchField({ label, placeholder }) {
  return (
    <div className={styles.searchField}>
      <label className={styles.label} htmlFor="browse-search">
        {label}
      </label>
      <div className={styles.searchBar}>
        <Search size={18} color="#a1aab9" />
        <input id="browse-search" type="text" placeholder={placeholder} />
      </div>
    </div>
  );
}

export function FilterSelect({ label, value, width }) {
  return (
    <div className={`${styles.filter} ${widthClass[width]}`}>
      <span className={styles.label}>{label}</span>
      <button type="button" className={styles.select}>
        <span>{value}</span>
        <ChevronDown size={16} color="#a1aab9" />
      </button>
    </div>
  );
}

export function SortControl({ icon: Icon, value }) {
  return (
    <button type="button" className={styles.sortControl}>
      <Icon size={16} color="#a1aab9" />
      <span>{value}</span>
      <ChevronDown size={16} color="#a1aab9" />
    </button>
  );
}

export function Pagination({ pages, active = "1" }) {
  return (
    <div className={styles.pagination}>
      <button
        type="button"
        aria-label="Previous page"
        className={`${styles.pageBtn} ${styles.pageDisabled}`}
      >
        <ChevronLeft size={16} color="#a1aab9" />
      </button>
      {pages.map((page, i) => (
        <button
          key={`${page}-${i}`}
          type="button"
          className={`${styles.pageBtn} ${
            page === active ? styles.pageActive : ""
          }`}
        >
          {page}
        </button>
      ))}
      <button
        type="button"
        aria-label="Next page"
        className={`${styles.pageBtn} ${styles.pageArrow}`}
      >
        <ChevronRight size={16} color="#a1aab9" />
      </button>
    </div>
  );
}

export function SyncStatus() {
  return (
    <span className={styles.sync}>
      <i className={styles.dot} />
      All changes saved · Last synced just now
    </span>
  );
}

export function SortMenu({ options, active }) {
  return (
    <div className={styles.menu}>
      <div className={styles.menuHeading}>Sort options</div>
      <span className={styles.menuDivider} />
      {options.map((option) => {
        const isActive = option === active;
        return (
          <div
            key={option}
            className={`${styles.menuOption} ${
              isActive ? styles.menuActive : ""
            }`}
          >
            {option}
            {isActive && <Check size={16} color="#4f8cff" />}
          </div>
        );
      })}
    </div>
  );
}
