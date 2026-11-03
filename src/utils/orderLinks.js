import { business } from '../config';
import { formatPrice, hasPrice } from '../data/products';

export function whatsappLink(message) {
  const text = message ?? `Hi ${business.name}! I'd like to know more about your decorations.`;
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function productWhatsappLink(product) {
  const text = hasPrice(product.price)
    ? `Hi ${business.name}! I'm interested in *${product.name}* (${formatPrice(product.price)} / ${product.unit}). Please share details.`
    : `Hi ${business.name}! I'm interested in *${product.name}*. Please share the price and details.`;
  return whatsappLink(text);
}
