// All business details live here. Change once, updates everywhere on the site.
export const business = {
  name: 'Siri Decorations',
  tagline: 'Bringing Nature to Every Celebration',
  intro: 'Handcrafted natural coconut leaf decorations for weddings and every special occasion.',
  location: 'Rajahmundry, Andhra Pradesh',
  city: 'Rajahmundry',

  // WhatsApp number: country code + number, digits only (no +, spaces or dashes)
  whatsappNumber: '918978955510',
  phoneDisplay: '+91 89789 55510',

  instagramHandle: 'siri_leaf_decorations',
  get instagramUrl() {
    return `https://www.instagram.com/${this.instagramHandle}/`;
  },
  // Opens a direct-message chat with the Instagram account
  get instagramDmUrl() {
    return `https://ig.me/m/${this.instagramHandle}`;
  },
};
