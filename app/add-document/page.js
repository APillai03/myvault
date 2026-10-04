import {
  FileText,
  X,
  Check,
  ChevronDown,
  LockKeyhole,
  CalendarDays,
} from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import form from "../../styles/form.module.css";
import styles from "./addDocument.module.css";

const owners = ["Me", "Father", "Mother", "Brother", "Sister", "Other"];
const selectedOwner = "Other";

const documentTypes = [
  "Identity",
  "Education",
  "Financial",
  "Medical",
  "Insurance",
  "Property",
  "Vehicle",
  "Employment",
  "Legal",
  "Warranty",
  "Other",
];
const selectedType = "Identity";

const tags = ["Important", "Travel"];

export default function AddDocumentPage() {
  return (
    <>
      <Navbar active="Dashboard" />

      <main className={form.page}>
        <section className={form.card}>
          <div className={form.heading}>
            <h1>Add a Document</h1>
            <p>Keep important documents organized and easy to find.</p>
          </div>

          <div className={form.divider} />

          {/* Upload */}
          <div className={styles.upload}>
            <div className={`${form.dropzone} ${styles.dropzone}`}>
              <FileText size={28} color="#4f8cff" />
              <p className={styles.dropTitle}>Drag &amp; drop your file here</p>
              <p className={styles.dropSub}>
                or <span className={styles.browse}>Browse Files</span>
              </p>
              <p className={form.hint}>PDF, JPG, PNG, DOCX</p>
            </div>

            <div className={styles.selectedFile}>
              <span className={styles.fileSymbol}>
                <FileText size={20} color="#4f8cff" />
              </span>
              <div className={styles.fileInfo}>
                <span className={styles.fileName}>Alex_Morgan_Passport.pdf</span>
                <span className={styles.fileMeta}>
                  PDF document · 2.4 MB · Ready to save
                </span>
              </div>
              <button type="button" className={styles.replace}>
                Replace
              </button>
              <span className={styles.fileSeparator} />
              <button type="button" className={styles.remove}>
                <X size={14} color="#a1aab9" />
                Remove
              </button>
            </div>
          </div>

          <div className={form.field}>
            <label className={form.label} htmlFor="docName">
              Document Name <span className={form.required}>*</span>
            </label>
            <input
              id="docName"
              className={form.input}
              type="text"
              defaultValue="Passport"
            />
            <p className={form.hint}>
              e.g. Aadhaar Card, Passport, College Certificate
            </p>
          </div>

          {/* Owner */}
          <div className={styles.owner}>
            <div className={form.field}>
              <span className={form.label}>
                Belongs To <span className={form.required}>*</span>
              </span>
              <div className={styles.ownerOptions}>
                {owners.map((name) => {
                  const active = name === selectedOwner;
                  return (
                    <button
                      key={name}
                      type="button"
                      className={`${styles.ownerOption} ${
                        active ? styles.ownerActive : ""
                      }`}
                    >
                      {name}
                      {active && <Check size={14} color="#4f8cff" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={form.field}>
              <label className={form.label} htmlFor="personName">
                Person Name <span className={form.required}>*</span>
              </label>
              <input
                id="personName"
                className={form.input}
                type="text"
                defaultValue="Alex Morgan"
              />
            </div>
          </div>

          {/* Type + storage */}
          <div className={form.row}>
            <div className={form.field}>
              <span className={form.label}>
                Document Type <span className={form.required}>*</span>
              </span>
              <button
                type="button"
                className={`${form.shell} ${styles.typeSelect}`}
              >
                <span>{selectedType}</span>
                <ChevronDown size={16} color="#a1aab9" />
              </button>
              <p className={form.hint}>
                Choose the type that best fits this document.
              </p>
            </div>

            <div className={form.field}>
              <div className={form.labelSplit}>
                <span className={form.label}>Storage Category</span>
                <span className={form.autoTag}>Auto-derived</span>
              </div>
              <div className={`${form.shell} ${styles.readOnly}`}>
                <LockKeyhole size={14} color="#8993a3" />
                <span>Documents / {selectedType}</span>
              </div>
              <p className={form.hint}>
                Set automatically from Document Type · Read-only
              </p>
            </div>
          </div>

          <div className={form.field}>
            <label className={form.label} htmlFor="docNumber">
              Document Number / ID{" "}
              <span className={form.optional}>(optional)</span>
            </label>
            <input
              id="docNumber"
              className={form.input}
              type="text"
              placeholder="e.g. Aadhaar, passport or license number"
            />
          </div>

          <div className={form.row}>
            <div className={form.field}>
              <label className={form.label} htmlFor="issueDate">
                Issue Date <span className={form.optional}>(optional)</span>
              </label>
              <div className={form.shell}>
                <input id="issueDate" type="text" placeholder="DD / MM / YYYY" />
                <CalendarDays size={16} color="#a1aab9" />
              </div>
            </div>

            <div className={form.field}>
              <label className={form.label} htmlFor="expiryDate">
                Expiry Date <span className={form.optional}>(optional)</span>
              </label>
              <div className={form.shell}>
                <input id="expiryDate" type="text" placeholder="DD / MM / YYYY" />
                <CalendarDays size={16} color="#a1aab9" />
              </div>
            </div>
          </div>

          <div className={form.field}>
            <label className={form.label} htmlFor="authority">
              Issuing Authority / Organization{" "}
              <span className={form.optional}>(optional)</span>
            </label>
            <input
              id="authority"
              className={form.input}
              type="text"
              placeholder="e.g. Government of India, University, Bank, Insurance Company"
            />
          </div>

          <div className={form.field}>
            <label className={form.label} htmlFor="docNotes">
              Notes <span className={form.optional}>(optional)</span>
            </label>
            <textarea
              id="docNotes"
              className={form.textarea}
              placeholder="Anything else you’d like to remember about this document…"
            />
          </div>

          <div className={form.field}>
            <label className={form.label} htmlFor="tagInput">
              Tags <span className={form.optional}>(optional)</span>
            </label>
            <div className={`${form.shell} ${styles.tagShell}`}>
              {tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                  <X size={12} color="#4f8cff" />
                </span>
              ))}
              <input id="tagInput" type="text" placeholder="Add a tag…" />
            </div>
            <p className={form.hint}>
              Try tags like Important, Travel, College, Finance.
            </p>
          </div>

          <div className={form.divider} />

          <div className={form.footer}>
            <span className={form.footNote}>* Required field</span>
            <div className={form.actions}>
              <button
                type="button"
                className={`${form.btn} ${form.btnSecondary}`}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`${form.btn} ${form.btnPrimary}`}
              >
                <FileText size={16} color="#fff" />
                Save Document
              </button>
            </div>
          </div>

          {/* Document Type dropdown (open state, shown beside the card) */}
          <div className={styles.menu}>
            <div className={styles.menuHeading}>Document Type options</div>
            <span className={styles.menuDivider} />
            {documentTypes.map((type) => {
              const active = type === selectedType;
              return (
                <div
                  key={type}
                  className={`${styles.menuOption} ${
                    active ? styles.menuActive : ""
                  }`}
                >
                  {type}
                  {active && <Check size={16} color="#4f8cff" />}
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
