import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { LeafDivider } from '../components/Ornaments';
import { LeafIcon, HandIcon, RecycleIcon, SparkIcon, ArrowIcon, WhatsAppIcon } from '../components/Icons';
import { business } from '../config';
import { whatsappLink } from '../utils/orderLinks';
import { usePageMeta } from '../utils/usePageMeta';
import whiteDhanda from '../assets/products/white-dhanda.jpg';
import whiteChilaka from '../assets/products/white-chilaka.jpg';
import mixedMat from '../assets/products/mixed-mat.jpg';
import roseChilaka from '../assets/products/rose-chilaka.jpg';
import styles from './About.module.css';

const values = [
  { icon: LeafIcon, title: 'Pure & natural', text: 'Fresh coconut leaves only. Nothing synthetic, nothing artificial.' },
  { icon: HandIcon, title: 'Made by hand', text: 'Each fold, weave and knot is done by hand with care.' },
  { icon: SparkIcon, title: 'Rooted in tradition', text: 'Designs from our culture: chilakalu, dhandalu, pandhiri and more.' },
  { icon: RecycleIcon, title: 'Kind to the earth', text: 'Fully biodegradable decor, so your celebration leaves no waste behind.' },
];

export default function About() {
  usePageMeta('About Us', `About ${business.name}: natural coconut leaf decorations handmade in ${business.city}.`);

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Bringing nature to every celebration"
        text={`A small, passionate team in ${business.city} keeping the art of coconut leaf decoration alive.`}
      />

      <section className="section">
        <div className={`container ${styles.story}`}>
          <Reveal className={styles.storyText}>
            <span className="eyebrow">Who we are</span>
            <h2>Handmade with love, from leaf to celebration</h2>
            <p>
              In Telugu homes, fresh coconut leaves have always been part of celebrations: woven
              into mandapams, hung as parrots at the doorway and tied as dhandalu at the entrance.
              They mean freshness, prosperity and new beginnings.
            </p>
            <p>
              At <strong>{business.name}</strong> we carry that tradition into today's weddings and
              functions. We hand-weave every basket, bell, mat, garland and bird from natural
              coconut leaves, so your decor is beautiful, traditional and kind to the earth.
            </p>
            <p>
              From a few chilakalu for a pooja to a full wedding stage, we make each order fresh
              for your day.
            </p>
            <Link to="/products" className="btn btn--primary">
              Explore our products <ArrowIcon />
            </Link>
          </Reveal>

          <Reveal className={styles.gallery} delay={120}>
            <img src={whiteDhanda} alt="White coconut leaf dhandalu hanging at an entrance" loading="lazy" />
            <img src={whiteChilaka} alt="Coconut leaf parrot (chilaka) with red ribbon" loading="lazy" />
            <img src={mixedMat} alt="Checkered green and white coconut leaf mat" loading="lazy" />
            <img src={roseChilaka} alt="Rose chilakalu with flowers and ribbons" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <Reveal className="section-head">
            <span className="eyebrow">What we believe in</span>
            <h2>Our values</h2>
            <LeafDivider />
          </Reveal>
          <div className={styles.values}>
            {values.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 80} className={styles.value}>
                <Icon />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal className={`container ${styles.cta}`}>
          <h2>Let's decorate your celebration</h2>
          <p className="lead">Tell us your date, venue and ideas, and we'll suggest the right decor.</p>
          <a className="btn btn--whatsapp" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon /> Talk to us on WhatsApp
          </a>
        </Reveal>
      </section>
    </>
  );
}
