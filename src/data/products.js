// Product catalog: edit names, prices or units here.
import greenBasket from '../assets/products/green-basket.jpg';
import bell from '../assets/products/bell.jpg';
import nemaliVankilu from '../assets/products/nemali-vankilu.jpg';
import greenMat from '../assets/products/green-mat.jpg';
import mixedMat from '../assets/products/mixed-mat.jpg';
import whiteMat from '../assets/products/white-mat.jpg';
import whiteDhanda from '../assets/products/white-dhanda.jpg';
import mixedDhanda from '../assets/products/mixed-dhanda.jpg';
import whiteChilaka from '../assets/products/white-chilaka.jpg';
import roseChilaka from '../assets/products/rose-chilaka.jpg';
import whiteBasket from '../assets/products/white-basket.jpg';
import greenDhanda from '../assets/products/green-dhanda.jpg';
import greenChilaka from '../assets/products/green-chilaka.jpg';
import ringBird from '../assets/products/ring-bird.jpg';
import thoranalu from '../assets/products/thoranalu.jpg';

export const categories = [
  { id: 'all', label: 'All' },
  { id: 'baskets-bells', label: 'Baskets & Bells' },
  { id: 'mats', label: 'Mats' },
  { id: 'dhandalu', label: 'Dhandalu' },
  { id: 'chilakalu', label: 'Chilakalu' },
  { id: 'thoranalu', label: 'Thoranalu' },
  { id: 'special', label: 'Special Designs' },
];

// price: null shows "Price on request" until a price is filled in

export const products = [
  {
    id: 'green-basket',
    name: 'Green Basket',
    category: 'baskets-bells',
    price: 400,
    unit: '1 piece',
    image: greenBasket,
    description:
      'Hand-woven round basket of fresh coconut leaves with a spiral pattern. Good for return gifts, fruits, flowers and pooja items.',
    featured: true,
  },
  {
    id: 'bell',
    name: 'Bell',
    category: 'baskets-bells',
    price: 400,
    unit: '1 piece',
    image: bell,
    description:
      'Bell-shaped hanging woven from green coconut leaves. Adds a traditional touch to mandapams, entrances and stages.',
    featured: true,
  },
  {
    id: 'white-basket',
    name: 'White Basket',
    category: 'baskets-bells',
    price: null,
    unit: '1 piece',
    image: whiteBasket,
    description:
      'Round basket hand-woven from pale tender coconut leaves. An elegant choice for return gifts, flowers and pooja items.',
  },
  {
    id: 'nemali-vankilu',
    name: 'Nemali Vankilu',
    category: 'special',
    price: 500,
    unit: '1 piece',
    image: nemaliVankilu,
    description:
      'A curving leaf design inspired by the peacock. A centrepiece for wedding stages and decor.',
    featured: true,
  },
  {
    id: 'green-mat',
    name: 'Green Mat',
    category: 'mats',
    price: 35,
    unit: '1 × 1 ft',
    image: greenMat,
    description:
      'Fresh green woven leaf mat. Use it for backdrops, table runners, wall panels and stage flooring.',
  },
  {
    id: 'mixed-mat',
    name: 'Mixed Mat',
    category: 'mats',
    price: 40,
    unit: '1 × 1 ft',
    image: mixedMat,
    description:
      'Checkered green-and-white weave. A classic pattern for pandhiri walls and backdrops.',
    featured: true,
  },
  {
    id: 'white-mat',
    name: 'White Mat',
    category: 'mats',
    price: 60,
    unit: '1 × 1 ft',
    image: whiteMat,
    description:
      'Soft pale tender-leaf weave with a bright, elegant finish. Suits haldi, mehendi and pellikuthuru settings.',
  },
  {
    id: 'white-dhanda',
    name: 'White Dhanda',
    category: 'dhandalu',
    price: 100,
    unit: '1 feet',
    image: whiteDhanda,
    description:
      'Hanging garland of tightly folded tender coconut leaves. Use it on entrances, pillars and mandapams.',
  },
  {
    id: 'mixed-dhanda',
    name: 'Mixed Dhanda',
    category: 'dhandalu',
    price: 90,
    unit: '1 feet',
    image: mixedDhanda,
    description:
      'Garland with alternating green and white bands, for festive hangings and stage borders.',
  },
  {
    id: 'green-dhanda',
    name: 'Green Dhanda',
    category: 'dhandalu',
    price: null,
    unit: '1 feet',
    image: greenDhanda,
    description:
      'Lush garland of tightly folded green coconut leaves. Rich and festive on entrances, pillars and mandapams.',
  },
  {
    id: 'white-chilaka',
    name: 'White Chilaka',
    category: 'chilakalu',
    price: 40,
    unit: '1 piece',
    image: whiteChilaka,
    description:
      'Leaf parrot (chilaka) with a red ribbon beak and collar. A traditional hanging for any celebration.',
  },
  {
    id: 'rose-chilaka',
    name: 'Rose Chilaka',
    category: 'chilakalu',
    price: 50,
    unit: '1 piece',
    image: roseChilaka,
    description:
      'Leaf parrots with roses and ribbons (gulabi chilakalu). Colourful decor for welcome areas and stages.',
  },
  {
    id: 'green-chilaka',
    name: 'Green Chilaka',
    category: 'chilakalu',
    price: null,
    unit: '1 piece',
    image: greenChilaka,
    description:
      'Parrot folded from green coconut leaves, with a red beak and yellow ribbon. A classic auspicious hanging.',
  },
  {
    id: 'ring-bird',
    name: 'Ring Bird',
    category: 'chilakalu',
    price: null,
    unit: '1 piece',
    image: ringBird,
    description:
      'Graceful leaf bird perched on a golden ring. A modern hanging for entrances, stages and gifting.',
  },
  {
    id: 'thoranalu',
    name: 'Thoranalu',
    category: 'thoranalu',
    price: null,
    unit: '1 piece',
    image: thoranalu,
    description:
      'Traditional hanging of folded tender coconut leaves for doorways and mandapams, a sign of welcome and good fortune.',
  },
];

export const hasPrice = (price) => typeof price === 'number';
export const formatPrice = (price) => (hasPrice(price) ? `₹${price.toLocaleString('en-IN')}` : 'Price on request');
