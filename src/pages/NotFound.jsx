import { Link } from 'react-router-dom';
import { LeafSprig } from '../components/Logo';
import { LeafDivider } from '../components/Ornaments';
import { usePageMeta } from '../utils/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <section className="section" style={{ textAlign: 'center', minHeight: '60vh' }}>
      <div className="container">
        <div style={{ width: 72, margin: '0 auto' }}>
          <LeafSprig color="var(--leaf)" />
        </div>
        <h1 style={{ marginTop: 12 }}>Page not found</h1>
        <LeafDivider />
        <p className="lead">This page has blown away like a leaf in the wind.</p>
        <Link to="/" className="btn btn--primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
}
