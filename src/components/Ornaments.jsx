import styles from './Ornaments.module.css';

/** Fine antique-gold rule with a small diamond centre */
export function LeafDivider({ className = '', light = false }) {
  return (
    <div className={`${styles.divider} ${light ? styles.light : ''} ${className}`} aria-hidden="true">
      <span className={styles.line} />
      <svg viewBox="0 0 28 12" className={styles.mark}>
        <path d="M14 1 L19 6 L14 11 L9 6Z" fill="none" stroke="currentColor" strokeWidth="1" />
        <path d="M14 3.6 L16.4 6 L14 8.4 L11.6 6Z" fill="currentColor" />
        <circle cx="3" cy="6" r="1.1" fill="currentColor" />
        <circle cx="25" cy="6" r="1.1" fill="currentColor" />
      </svg>
      <span className={styles.line} />
    </div>
  );
}
