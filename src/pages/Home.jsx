import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import ProductCard from '../components/ProductCard';
import Reveal from '../components/Reveal';
import { LeafDivider } from '../components/Ornaments';
import {
  WhatsAppIcon,
  LeafIcon,
  HandIcon,
  RecycleIcon,
  TruckIcon,
  ArrowIcon,
} from '../components/Icons';
import { categories, products, formatPrice, hasPrice } from '../data/products';
import { business } from '../config';
import { whatsappLink } from '../utils/orderLinks';
import { usePageMeta } from '../utils/usePageMeta';
import palmDark from '../assets/backgrounds/palm-leaves-dark.jpg';
import leafTexture from '../assets/backgrounds/leaf-texture.jpg';
import basket from '../assets/products/green-basket.jpg';
import mixedMat from '../assets/products/mixed-mat.jpg';
import whiteDhanda from '../assets/products/white-dhanda.jpg';
import mixedDhanda from '../assets/products/mixed-dhanda.jpg';
import ringBird from '../assets/products/ring-bird.jpg';
import thoranalu from '../assets/products/thoranalu.jpg';
import nela from '../assets/products/nela-vankilu.jpg';
import styles from './Home.module.css';

const collectionImages = {
  'baskets-bells': basket,
  mats: mixedMat,
  dhandalu: mixedDhanda,
  chilakalu: ringBird,
  thoranalu,
  special: nela,
};

// Lowest known price in each category; categories with no prices yet show "Price on request"
const collections = categories
  .filter((c) => c.id !== 'all')
  .map((c) => {
    const prices = products.filter((p) => p.category === c.id && hasPrice(p.price)).map((p) => p.price);
    return {
      ...c,
      image: collectionImages[c.id],
      priceLabel: prices.length ? `From ${formatPrice(Math.min(...prices))}` : 'Price on request',
    };
  });

const promises = [
  { icon: LeafIcon, title: '100% Natural', text: 'Only fresh coconut leaves. No plastic and no artificial colours.' },
  { icon: HandIcon, title: 'Handcrafted', text: 'Every fold and weave is done by hand, the traditional way.' },
  { icon: RecycleIcon, title: 'Eco-friendly', text: 'Fully biodegradable, so your celebration leaves no waste behind.' },
  { icon: TruckIcon, title: 'Delivered Fresh', text: 'Made to order and delivered to your home or venue.' },
];

const occasions = [
  'Weddings',
  'Pellikoduku & Pellikuthuru',
  'Haldi & Mehendi',
  'Engagements',
  'Gruhapravesam',
  'Festivals & Poojas',
  'Stage & Pandhiri Decor',
  'Birthdays & Functions',
];

const steps = [
  { n: '01', title: 'Choose', text: 'Browse our collection and prices, and pick the pieces you love.' },
  { n: '02', title: 'Message us', text: 'Send your list and event date on WhatsApp or Instagram.' },
  { n: '03', title: 'We deliver', text: 'We hand-make your order fresh and deliver it for your occasion.' },
];

export default function Home() {
  usePageMeta(null);
  const featured = products.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className={styles.hero} style={{ '--bg-image': `url(${palmDark})` }}>
        <div className={styles.frame} aria-hidden="true" />
        <div className={`container ${styles.heroInner}`}>
          <span className={styles.heroEyebrow}>Natural Coconut Leaf Decorations · {business.city}</span>
          <Logo size="lg" showTagline light />
          <p className={styles.heroIntro}>
            Handwoven, traditional décor for weddings, poojas and every celebration, made fresh
            from natural coconut leaves.
          </p>
          <div className={styles.actions}>
            <Link to="/products" className="btn btn--gold">
              View Collection <ArrowIcon />
            </Link>
            <a className="btn btn--ghost" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Order on WhatsApp
            </a>
          </div>
        </div>

        <ul className={styles.promiseBar}>
          {promises.map(({ icon: Icon, title }) => (
            <li key={title}>
              <Icon />
              {title}
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- Signature collection ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Signature Collection</span>
            <h2>Woven by hand, for every ritual</h2>
            <LeafDivider />
            <p className="lead">
              From welcome parrots to wedding-stage centrepieces, every piece is made fresh from
              natural coconut leaves.
            </p>
          </Reveal>
          <div className={styles.collections}>
            {collections.map((c, i) => (
              <Reveal key={c.id} delay={i * 90}>
                <Link to={`/products?category=${c.id}`} className={styles.collection}>
                  <span className={styles.archFrame}>
                    <img src={c.image} alt={c.label} loading="lazy" />
                  </span>
                  <span className={styles.collectionName}>{c.label}</span>
                  <span className={styles.collectionFrom}>{c.priceLabel}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Our craft ---------- */}
      <section className="section section--ivory">
        <div className={`container ${styles.craft}`}>
          <Reveal className={styles.craftMedia}>
            <img src={whiteDhanda} alt="White dhandalu: hand-folded tender coconut leaf garlands" loading="lazy" />
          </Reveal>
          <Reveal className={styles.craftText} delay={120}>
            <span className="eyebrow">Our Craft</span>
            <h2>A living tradition, woven by hand</h2>
            <p className="lead">
              Fresh coconut leaves have graced Telugu celebrations for generations. They hang as
              thoranams at the doorway, are woven into the pandhiri and are shaped into chilakalu.
              At {business.name} we carry this auspicious craft into today's weddings and
              functions, with the care it deserves.
            </p>
            <ul className={styles.promises}>
              {promises.map(({ icon: Icon, title, text }) => (
                <li key={title}>
                  <span className={styles.promiseIcon}>
                    <Icon />
                  </span>
                  <span>
                    <strong>{title}</strong>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Featured products ---------- */}
      <section className={`section section--dark photo-bg`} style={{ '--bg-image': `url(${leafTexture})` }}>
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Customer Favourites</span>
            <h2>Loved at every celebration</h2>
            <LeafDivider light />
          </Reveal>
          <div className={styles.featured}>
            {featured.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
          <div className={styles.center}>
            <Link to="/products" className="btn btn--gold">
              View all products &amp; prices <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Occasions ---------- */}
      <section className="section">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Made for your special day</span>
            <h2>Crafted for every occasion</h2>
            <LeafDivider />
          </Reveal>
          <Reveal className={styles.occasions}>
            {occasions.map((o) => (
              <span key={o} className={styles.occasion}>
                {o}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- How to order ---------- */}
      <section className="section section--ivory">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">Simple &amp; personal</span>
            <h2>How to order</h2>
            <LeafDivider />
          </Reveal>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100} className={styles.step}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing call to action ---------- */}
      <section className={`${styles.cta} photo-bg`} style={{ '--bg-image': `url(${palmDark})` }}>
        <div className={styles.frame} aria-hidden="true" />
        <Reveal className={`container ${styles.ctaInner}`}>
          <span className={styles.heroEyebrow}>Planning a celebration?</span>
          <h2>Let nature adorn your special day</h2>
          <LeafDivider light />
          <p>
            Tell us your date, venue and ideas. We'll suggest the right décor and send you a quote,
            from a few pieces to a full wedding stage.
          </p>
          <div className={styles.actions}>
            <a className="btn btn--gold" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <Link to="/contact" className="btn btn--ghost">
              Send an enquiry
            </Link>
          </div>
          <p className={styles.ctaPhone}>or call {business.phoneDisplay}</p>
        </Reveal>
      </section>
    </>
  );
}
