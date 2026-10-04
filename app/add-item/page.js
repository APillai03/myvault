import { ChevronDown, CalendarDays, ImagePlus, Plus } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar";
import form from "../../styles/form.module.css";
import styles from "./addItem.module.css";

export default function AddItemPage() {
  return (
    <>
      <Navbar active="Dashboard" />

      <main className={form.page}>
        <section className={form.card}>
          <div className={form.heading}>
            <h1>Add a New Item</h1>
            <p>Add something you own to your personal vault.</p>
          </div>

          <div className={form.divider} />

          <div className={form.row}>
            <div className={form.field}>
              <label className={form.label} htmlFor="itemName">
                Item Name <span className={form.required}>*</span>
              </label>
              <input
                id="itemName"
                className={form.input}
                type="text"
                placeholder="e.g. My headphones"
              />
            </div>

            <div className={form.field}>
              <span className={form.label}>Category</span>
              <button
                type="button"
                className={`${form.shell} ${form.selectLike}`}
              >
                <span>Select a category</span>
                <ChevronDown size={16} color="#a1aab9" />
              </button>
            </div>
          </div>

          <div className={form.field}>
            <label className={form.label} htmlFor="description">
              Description <span className={form.optional}>(optional)</span>
            </label>
            <textarea
              id="description"
              className={form.textarea}
              placeholder="A few details to help you recognize this item…"
            />
          </div>

          <div className={form.row}>
            <div className={form.field}>
              <label className={form.label} htmlFor="storage">
                Storage Location
              </label>
              <input
                id="storage"
                className={form.input}
                type="text"
                placeholder="e.g. Desk, Drawer, Bookshelf, Backpack"
              />
            </div>

            <div className={form.field}>
              <label className={form.label} htmlFor="dateAdded">
                Date Added
              </label>
              <div className={form.shell}>
                <input id="dateAdded" type="text" defaultValue="Oct 3, 2026" />
                <CalendarDays size={16} color="#a1aab9" />
              </div>
            </div>
          </div>

          <div className={form.field}>
            <label className={form.label} htmlFor="notes">
              Notes <span className={form.optional}>(optional)</span>
            </label>
            <textarea
              id="notes"
              className={form.textarea}
              placeholder="Anything else you’d like to remember…"
            />
          </div>

          <div className={form.field}>
            <span className={form.label}>
              Add Photo <span className={form.optional}>(optional)</span>
            </span>
            <div className={`${form.dropzone} ${styles.photoZone}`}>
              <ImagePlus size={24} color="#4f8cff" />
              <p className={styles.prompt}>
                <span className={styles.browse}>Choose a photo</span> or drag it
                here
              </p>
              <p className={form.hint}>JPG or PNG · Up to 10 MB</p>
            </div>
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
                <Plus size={16} color="#fff" />
                Add Item
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
