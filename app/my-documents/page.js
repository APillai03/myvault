import Link from "next/link";
import {
  Plus,
  FileText,
  ChevronRight,
  ArrowDownWideNarrow,
  Search,
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
import docStyles from "./myDocuments.module.css";

const documents = [
  { name: "Degree Certificate", owner: "Me", type: "Education", org: "University of Mumbai", issued: "Jun 15, 2022", expiry: "Not applicable", soon: false, tags: ["College", "Career"], added: "Oct 3, 2026" },
  { name: "Insurance Policy", owner: "Father", type: "Insurance", org: "Star Health Insurance", issued: "Nov 1, 2025", expiry: "Oct 31, 2026", soon: true, tags: ["Family", "Health"], added: "Oct 2, 2026" },
  { name: "Aadhaar Card", owner: "Me", type: "Identity", org: "UIDAI · Government of India", issued: "Mar 12, 2018", expiry: "Not applicable", soon: false, tags: ["Important", "Personal"], added: "Oct 1, 2026" },
  { name: "Passport", owner: "Me", type: "Identity", org: "Ministry of External Affairs", issued: "Jul 18, 2021", expiry: "Jul 17, 2031", soon: false, tags: ["Important", "Travel"], added: "Sep 30, 2026" },
  { name: "Vehicle Registration", owner: "Father", type: "Vehicle", org: "RTO · Maharashtra", issued: "Aug 20, 2019", expiry: "Aug 19, 2034", soon: false, tags: ["Family", "Car"], added: "Sep 29, 2026" },
  { name: "Vaccination Certificate", owner: "Mother", type: "Medical", org: "Ministry of Health & Family Welfare", issued: "Feb 10, 2022", expiry: "Not applicable", soon: false, tags: ["Family", "Health"], added: "Sep 28, 2026" },
];

const recent = documents.slice(0, 3);

function DocHead({ doc }) {
  return (
    <div className={styles.cardHead}>
      <span className={styles.symbol}>
        <FileText size={22} color="#a1aab9" />
      </span>
      <div className={styles.info}>
        <span className={styles.name}>{doc.name}</span>
        <span className={styles.sub}>
          {doc.owner} · {doc.type}
        </span>
      </div>
      <ChevronRight size={16} color="#a1aab9" />
    </div>
  );
}

function DocDates({ doc }) {
  return (
    <div className={docStyles.dates}>
      <div className={docStyles.dateBlock}>
        <span className={docStyles.dateLabel}>Issue date</span>
        <span className={docStyles.dateValue}>{doc.issued}</span>
      </div>
      <div className={docStyles.dateBlock}>
        <span className={docStyles.dateLabel}>Expiry date</span>
        <span
          className={`${docStyles.dateValue} ${doc.soon ? docStyles.soon : ""}`}
        >
          {doc.expiry}
        </span>
      </div>
    </div>
  );
}

function DocTags({ doc }) {
  return (
    <div className={docStyles.tagsRow}>
      <div className={docStyles.tags}>
        {doc.tags.map((tag) => (
          <span key={tag} className={docStyles.docTag}>
            {tag}
          </span>
        ))}
      </div>
      {doc.soon && <span className={docStyles.expiryBadge}>Expires soon</span>}
    </div>
  );
}

export default function MyDocumentsPage() {
  return (
    <>
      <Navbar active="My Documents" />

      <main className={styles.content}>
        {/* Heading + search */}
        <div className={styles.top}>
          <div className={styles.pageHeading}>
            <div className={styles.headingCopy}>
              <h1>My Documents</h1>
              <p>Important documents, organized and easy to find.</p>
            </div>
            <Link href="/add-document" className={styles.addBtn}>
              <Plus size={16} color="#fff" />
              Add Document
            </Link>
          </div>

          <div className={styles.filters}>
            <div className={styles.controls}>
              <SearchField
                label="Find a document"
                placeholder="Search your documents…"
              />
              <FilterSelect label="Belongs To" value="Everyone" width={192} />
              <FilterSelect label="Document Type" value="All types" width={216} />
              <FilterSelect label="Expiry Status" value="Any status" width={176} />
            </div>
            <p className={styles.guidance}>
              Search by document name, document type, owner, issuing
              organization, or tags.
            </p>
          </div>
        </div>

        {/* Recently added */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeading}>
              <h2>Recently Added</h2>
              <p>
                The latest personal and family documents you’ve added to your
                vault.
              </p>
            </div>
            <span className={styles.count}>Latest 3 documents</span>
          </div>

          <div className={styles.grid}>
            {recent.map((doc) => (
              <article key={doc.name} className={styles.card}>
                <DocHead doc={doc} />
                <DocDates doc={doc} />
                <DocTags doc={doc} />
                <p className={docStyles.added}>Added {doc.added}</p>
              </article>
            ))}
          </div>
        </section>

        {/* All documents */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionHeading}>
              <h2>All Documents</h2>
              <p>Your personal and family collection · 16 documents</p>
            </div>
            <SortControl icon={ArrowDownWideNarrow} value="Recently Added" />
          </div>

          <div className={styles.grid}>
            {documents.map((doc) => (
              <article
                key={doc.name}
                className={`${styles.card} ${styles.cardTall}`}
              >
                <DocHead doc={doc} />
                <p className={styles.desc}>{doc.org}</p>
                <DocDates doc={doc} />
                <DocTags doc={doc} />
                <span className={styles.divider} />
                <p className={docStyles.added}>Added {doc.added}</p>
              </article>
            ))}
          </div>

          <div className={styles.footer}>
            <span className={styles.footText}>Showing 6 of 16 documents</span>
            <Pagination pages={["1", "2", "3"]} />
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
              options={["Recently Added", "Name A–Z", "Name Z–A", "Expiring Soon"]}
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
                  <h3>No documents found</h3>
                  <p>
                    Try another search or clear your filters. You can also add a
                    document to your vault.
                  </p>
                </div>
                <div className={styles.emptyActions}>
                  <Link href="/add-document" className={styles.emptyBtn}>
                    <Plus size={16} color="#fff" />
                    Add Document
                  </Link>
                  <button type="button" className={styles.clearLink}>
                    Clear filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
