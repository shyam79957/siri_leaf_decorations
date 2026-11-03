import { Link } from 'react-router-dom';
import Logo from './Logo';
import { WhatsAppIcon, InstagramIcon, PinIcon, TruckIcon } from './Icons';
import { business } from '../config';
import { whatsappLink } from '../utils/orderLinks';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <Logo size="md" light />
          <p className={styles.tagline}>{business.tagline}</p>
          <p className={styles.blurb}>
            Natural coconut leaf decorations, handmade for weddings, functions and festivals.
          </p>
        </div>

        <div>
          <h4 className={styles.heading}>Explore</h4>
          <ul className={styles.list}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products &amp; Prices</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={styles.heading}>Get in touch</h4>
          <ul className={styles.list}>
            <li>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon /> {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer">
                <InstagramIcon /> @{business.instagramHandle}
              </a>
            </li>
            <li>
              <span><PinIcon /> {business.location}</span>
            </li>
            <li>
              <span><TruckIcon /> Delivery available</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          © {year} {business.name}. Handmade with nature.
        </div>
      </div>
    </footer>
  );
}
