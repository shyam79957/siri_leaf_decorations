import { useSearchParams } from 'react-router-dom';
import { categories, products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { LeafDivider } from '../components/Ornaments';
import PageHero from '../components/PageHero';
import { WhatsAppIcon, TruckIcon } from '../components/Icons';
import { whatsappLink } from '../utils/orderLinks';
import { usePageMeta } from '../utils/usePageMeta';
import styles from './Products.module.css';

export default function Products() {
  usePageMeta(
    'Products & Prices',
    'Price list for Siri Decorations coconut leaf products: baskets, bells, mats, dhandalu, chilakalu, thoranalu and nela vankilu.'
  );
  const [params, setParams] = useSearchParams();
  const active = categories.some((c) => c.id === params.get('category')) ? params.get('category') : 'all';
  const visible = active === 'all' ? products : products.filter((p) => p.category === active);

  const select = (id) => {
    setParams(id === 'all' ? {} : { category: id }, { replace: true });
  };

  return (
    <>
      <PageHero
        eyebrow="Our Collection"
        title="Products & Prices"
        text="Every piece is hand-woven from fresh, natural coconut leaves and made to order for your celebration."
      />

      <section className="section">
        <div className="container">
          <div className={styles.filters} role="tablist" aria-label="Filter by category">
            {categories.map((c) => {
              const count = c.id === 'all' ? products.length : products.filter((p) => p.category === c.id).length;
              return (
                <button
                  key={c.id}
                  role="tab"
                  aria-selected={active === c.id}
                  className={`${styles.pill} ${active === c.id ? styles.pillActive : ''}`}
                  onClick={() => select(c.id)}
                >
                  {c.label}
                  <span className={styles.count}>{count}</span>
                </button>
              );
            })}
          </div>

          <div className={styles.grid}>
            {visible.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>

          <Reveal className={styles.note}>
            <LeafDivider />
            <h3>Planning a wedding or a big function?</h3>
            <p className="lead">
              We take bulk orders, custom sizes and full stage &amp; pandhiri decoration. Message us
              your date and requirements and we'll send you a quote.
            </p>
            <div className={styles.noteActions}>
              <a
                className="btn btn--primary"
                href={whatsappLink('Hi Siri Decorations! I would like a quote for a bulk / custom order.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon /> Get a Quote
              </a>
              <span className={styles.delivery}>
                <TruckIcon /> Delivery available
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
