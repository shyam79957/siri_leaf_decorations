import styles from './Logo.module.css';

// Three-leaf sprig that sits above the "ı" in SIRI, matching the brand logo
export function LeafSprig({ className, color = 'currentColor' }) {
  const leaf = 'M0 0 C5 -8 5 -18 0 -26 C-5 -18 -5 -8 0 0Z';
  return (
    <svg className={className} viewBox="-20 -30 40 32" aria-hidden="true" focusable="false">
      <g fill={color}>
        <path d={leaf} />
        <path d={leaf} transform="rotate(-48) scale(.72)" />
        <path d={leaf} transform="rotate(48) scale(.72)" />
      </g>
    </svg>
  );
}

/**
 * Brand wordmark recreated from the Siri Decorations logo, name only.
 * size: 'sm' (header), 'md', 'lg' (hero). showTagline adds the italic tagline.
 */
export default function Logo({ size = 'md', showTagline = false, light = false }) {
  return (
    <span
      className={`${styles.logo} ${styles[size]} ${light ? styles.light : ''}`}
      role="img"
      aria-label="Siri Decorations"
    >
      <span className={styles.word} aria-hidden="true">
        S
        <span className={styles.iWrap}>
          <LeafSprig className={styles.sprig} />
          ı
        </span>
        RI
      </span>
      <span className={styles.sub} aria-hidden="true">
        Decorations
      </span>
      {showTagline && (
        <span className={styles.tagline} aria-hidden="true">
          <span className={styles.rule} />
          <em>Bringing Nature to Every Celebration</em>
        </span>
      )}
    </span>
  );
}
