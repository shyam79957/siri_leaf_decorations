import { WhatsAppIcon } from './Icons';
import { whatsappLink } from '../utils/orderLinks';
import styles from './FloatingWhatsApp.module.css';

export default function FloatingWhatsApp() {
  return (
    <a
      className={styles.fab}
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <WhatsAppIcon />
    </a>
  );
}
