# Siri Decorations: Website

Website for **Siri Decorations** (Instagram [@siri_leaf_decorations](https://www.instagram.com/siri_leaf_decorations/)), Rajahmundry: natural coconut leaf decorations for weddings and celebrations.

Built with React + Vite. Pages: Home, Products & Prices, About and Contact.

## Run it on your computer

```bash
npm install      # first time only
npm run dev      # opens at http://localhost:5173
```

## Common edits

| What to change | File |
|---|---|
| **WhatsApp number**, Instagram handle, location, tagline | `src/config.js` |
| Product names, **prices**, units, descriptions, featured on Home | `src/data/products.js` |
| Product photos | `src/assets/products/` (keep the same file names, or update the imports in `products.js`) |
| Colours and fonts | `src/styles/global.css` (the `:root` variables at the top) |

**WhatsApp number format:** country code + number, digits only. For example `919876543210` (no `+`, spaces or dashes).

### Add a new product
1. Copy the photo into `src/assets/products/`, e.g. `thoranam.jpg`.
2. In `src/data/products.js`, add `import thoranam from '../assets/products/thoranam.jpg';` at the top.
3. Add an entry to the `products` list with `id`, `name`, `category`, `price`, `unit`, `image` and `description`.

## Photo credits

Product photos belong to Siri Decorations. The two background photos in `src/assets/backgrounds/` are from Unsplash and used under the [Unsplash License](https://unsplash.com/license), which allows free commercial use:

- `palm-leaves-dark.jpg`: photo by Jessica Favaro, https://unsplash.com/photos/green-coconut-tree-photo-tZbULR3VWhQ
- `leaf-texture.jpg`: photo by Omid Armin, https://unsplash.com/photos/close-up-of-green-palm-leaf-veins-FnZKE3owM1o

## Publish the website

```bash
npm run build    # creates the dist/ folder
```

**Netlify (free, easiest):** go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `dist` folder onto the page. `public/_redirects` is already included, so links like `/products` work when opened directly.

You can also connect a custom domain (e.g. `siridecorations.in`) in Netlify's domain settings.
