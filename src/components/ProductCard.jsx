import { formatPrice, hasPrice } from '../data/products';
import { productWhatsappLink } from '../utils/orderLinks';
import { business } from '../config';
import { WhatsAppIcon, InstagramIcon } from './Icons';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const priced = hasPrice(product.price);
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          src={product.image}
          alt={`${product.name}: handmade coconut leaf decoration`}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.name}>{product.name}</h3>
          {priced ? (
            <span className={styles.price}>{formatPrice(product.price)}</span>
          ) : (
            <span className={styles.priceAsk}>On request</span>
          )}
        </div>
        <p className={styles.unit}>{product.unit}</p>
        <p className={styles.desc}>{product.description}</p>

        <div className={styles.actions}>
          <a
            className={`${styles.action} ${styles.order}`}
            href={productWhatsappLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${product.name} on WhatsApp`}
          >
            <WhatsAppIcon />
            <span>Order</span>
          </a>
          <a
            className={`${styles.action} ${styles.dm}`}
            href={business.instagramDmUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Message us on Instagram about ${product.name}`}
          >
            <InstagramIcon />
            <span>DM</span>
          </a>
        </div>
      </div>
    </article>
  );
}
