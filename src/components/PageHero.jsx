import { LeafDivider } from './Ornaments';
import leafTexture from '../assets/backgrounds/leaf-texture.jpg';
import styles from './PageHero.module.css';

/** Banner at the top of inner pages, set on a leaf-texture photograph */
export default function PageHero({ eyebrow, title, text }) {
  return (
    <section className={`${styles.hero} photo-bg`} style={{ '--bg-image': `url(${leafTexture})` }}>
      <div className={styles.frame} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <LeafDivider light />
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}
