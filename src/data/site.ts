// Company details and navigation. Values in [brackets] are placeholders to confirm.
export const company = {
  name: 'Degmark Engineering',
  wordmark: 'DEGMARK',
  tagline: 'Radiation detection, monitoring and measurement instruments',
  address: 'Mumbai, India',
  phone: '+91 79778 16330', // mobile / WhatsApp
  phoneHref: 'tel:+917977816330',
  landline: '+91 22 6502 7149',
  landlineHref: 'tel:+912265027149',
  email: 'degmark@gmail.com', // all enquiries and form submissions go here
  emailHref: 'mailto:degmark@gmail.com',
  whatsapp: 'https://wa.me/917977816330?text=' + encodeURIComponent('Hello DEGMARK, I have an enquiry about radiation instruments.'),
  hours: '[PLACEHOLDER: business hours]',
  responseTime: '[PLACEHOLDER: response time]',
  domain: 'https://www.degmarkeng.com',
  founded: '2002',
};

export const mainNav = [
  { href: '/products/', label: 'Products' },
  { href: '/brands/', label: 'Brands' },
  { href: '/applications/', label: 'Applications' },
  { href: '/industries/', label: 'Industries' },
  { href: '/resources/', label: 'Resources' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

export const footerNav = [
  ...mainNav,
  { href: '/privacy-policy/', label: 'Privacy' },
  { href: '/terms/', label: 'Terms' },
];
