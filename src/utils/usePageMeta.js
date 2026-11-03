import { useEffect } from 'react';
import { business } from '../config';

export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${business.name}` : `${business.name} | ${business.tagline}`;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    }
  }, [title, description]);
}
