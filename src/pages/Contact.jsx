import { useState } from 'react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { WhatsAppIcon, InstagramIcon, PinIcon, TruckIcon } from '../components/Icons';
import { business } from '../config';
import { products } from '../data/products';
import { whatsappLink } from '../utils/orderLinks';
import { usePageMeta } from '../utils/usePageMeta';
import styles from './Contact.module.css';

const occasionOptions = ['Wedding', 'Pellikoduku / Pellikuthuru', 'Haldi / Mehendi', 'Gruhapravesam', 'Festival / Pooja', 'Other function'];

export default function Contact() {
  usePageMeta('Contact', `Contact ${business.name} on WhatsApp or Instagram to order natural coconut leaf decorations.`);
  const [form, setForm] = useState({ name: '', date: '', occasion: '', items: [], message: '' });

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const toggleItem = (name) =>
    setForm((f) => ({
      ...f,
      items: f.items.includes(name) ? f.items.filter((i) => i !== name) : [...f.items, name],
    }));

  const onSubmit = (e) => {
    e.preventDefault();
    const eventDate =
      form.date &&
      new Date(`${form.date}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const details = [
      `*Name:* ${form.name}`,
      form.occasion && `*Occasion:* ${form.occasion}`,
      eventDate && `*Event date:* ${eventDate}`,
      form.items.length > 0 && `*Interested in:* ${form.items.join(', ')}`,
      form.message && `*Details:* ${form.message}`,
    ].filter(Boolean);
    const text = [`Hi ${business.name}! I'd like to enquire about decorations.`, '', ...details].join('\n');
    window.open(whatsappLink(text), '_blank', 'noopener');
  };

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title="Contact Us"
        text="Message us to order or ask about decorations for your occasion. We're happy to help."
      />

      <section className="section">
        <div className={`container ${styles.layout}`}>
          <div className={styles.cards}>
            <Reveal as="a" href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={styles.card}>
              <span className={`${styles.icon} ${styles.wa}`}><WhatsAppIcon /></span>
              <div>
                <h3>WhatsApp</h3>
                <p>
                  <strong>{business.phoneDisplay}</strong>
                  <br />
                  The quickest way to order or ask for a quote.
                </p>
              </div>
            </Reveal>
            <Reveal as="a" href={business.instagramDmUrl} target="_blank" rel="noopener noreferrer" className={styles.card} delay={80}>
              <span className={`${styles.icon} ${styles.ig}`}><InstagramIcon /></span>
              <div>
                <h3>Instagram</h3>
                <p>DM us at @{business.instagramHandle}</p>
              </div>
            </Reveal>
            <Reveal className={styles.card} delay={160}>
              <span className={styles.icon}><PinIcon /></span>
              <div>
                <h3>Location</h3>
                <p>{business.location}</p>
              </div>
            </Reveal>
            <Reveal className={styles.card} delay={240}>
              <span className={styles.icon}><TruckIcon /></span>
              <div>
                <h3>Delivery available</h3>
                <p>We deliver to your home or venue. Ask us about your area.</p>
              </div>
            </Reveal>
          </div>

          <Reveal as="form" className={styles.form} onSubmit={onSubmit} delay={120}>
            <h2>Send an enquiry</h2>
            <p className={styles.formNote}>Fill this in and we'll open WhatsApp with your message ready to send.</p>

            <label className={styles.field}>
              <span>Your name *</span>
              <input required value={form.name} onChange={update('name')} placeholder="e.g. Lakshmi" autoComplete="name" />
            </label>

            <div className={styles.row}>
              <label className={styles.field}>
                <span>Occasion</span>
                <select value={form.occasion} onChange={update('occasion')}>
                  <option value="">Select…</option>
                  {occasionOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className={styles.field}>
                <span>Event date</span>
                <input type="date" value={form.date} onChange={update('date')} />
              </label>
            </div>

            <fieldset className={styles.field}>
              <legend>Products you're interested in</legend>
              <div className={styles.chips}>
                {products.map((p) => (
                  <button
                    type="button"
                    key={p.id}
                    className={`${styles.chip} ${form.items.includes(p.name) ? styles.chipOn : ''}`}
                    aria-pressed={form.items.includes(p.name)}
                    onClick={() => toggleItem(p.name)}
                  >
                    {p.name}
                  </button>
                ))}
              </div>
            </fieldset>

            <label className={styles.field}>
              <span>Message</span>
              <textarea
                rows="4"
                value={form.message}
                onChange={update('message')}
                placeholder="Quantity, venue, any special design ideas…"
              />
            </label>

            <button type="submit" className="btn btn--whatsapp">
              <WhatsAppIcon /> Send on WhatsApp
            </button>
          </Reveal>
        </div>
      </section>

      <section className={styles.mapWrap}>
        <iframe
          title={`Map of ${business.city}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(business.city + ', Andhra Pradesh')}&z=12&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
