/**
 * MUFO RENOVATION - Centralized Site Data
 * ========================================
 * All site-wide content is defined here for easy management.
 * Update this file to change company info, navigation, and footer content.
 */

export const siteConfig = {
  name: 'Mufo Renovation',
  tagline: 'Crafting Beautiful Spaces',
  description: 'Expert renovation and remodeling services that transform your vision into reality. Quality craftsmanship, timeless results.',

  // Contact Information
  contact: {
    phone: '+1 (416) 555-0123',
    email: 'hello@muforenovation.com',
    address: {
      street: '456 King Street West',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5V 1K4',
      country: 'Canada',
    },
  },

  // Social Media Links
  social: {
    facebook: 'https://facebook.com/muforenovation',
    instagram: 'https://instagram.com/muforenovation',
    linkedin: 'https://linkedin.com/company/muforenovation',
  },

  // Business Hours
  hours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed',
  },
};

// Navigation Links
export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Services for navigation dropdown and pages
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'kitchen-renovation',
    title: 'Kitchen Renovation',
    shortTitle: 'Kitchen',
    description: 'Transform your kitchen into a modern, functional masterpiece with custom cabinetry and premium finishes.',
    icon: 'ChefHat',
    image: '/images/services/kitchen.jpg',
    features: [
      'Custom Cabinetry',
      'Countertop Installation',
      'Appliance Integration',
      'Lighting Design',
    ],
  },
  {
    id: '2',
    slug: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    shortTitle: 'Bathroom',
    description: 'Create your personal spa retreat with elegant fixtures, tile work, and thoughtful layouts.',
    icon: 'Bath',
    image: '/images/services/bathroom.jpg',
    features: [
      'Custom Tile Work',
      'Vanity Installation',
      'Shower & Tub Upgrades',
      'Plumbing Updates',
    ],
  },
  {
    id: '3',
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    shortTitle: 'Basement',
    description: 'Unlock your basement\'s potential with complete finishing solutions for extra living space.',
    icon: 'Home',
    image: '/images/services/basement.jpg',
    features: [
      'Complete Finishing',
      'Home Theater Rooms',
      'Guest Suites',
      'Home Offices',
    ],
  },
  {
    id: '4',
    slug: 'full-home-renovation',
    title: 'Full Home Renovation',
    shortTitle: 'Full Home',
    description: 'Comprehensive whole-home transformations that reimagine your entire living space.',
    icon: 'Building',
    image: '/images/services/full-home.jpg',
    features: [
      'Complete Redesign',
      'Structural Changes',
      'Modern Updates',
      'Energy Efficiency',
    ],
  },
];

// Company Statistics
export interface Stat {
  id: string;
  value: string;
  label: string;
  suffix?: string;
}

export const stats: Stat[] = [
  { id: '1', value: '12', suffix: '+', label: 'Years Experience' },
  { id: '2', value: '350', suffix: '+', label: 'Projects Completed' },
  { id: '3', value: '98', suffix: '%', label: 'Client Satisfaction' },
  { id: '4', value: '25', suffix: '+', label: 'Expert Craftsmen' },
];

// Testimonials
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location?: string;
  content: string;
  image?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rebecca Thompson',
    role: 'Homeowner',
    location: 'Toronto, ON',
    content: 'Mufo Renovation completely transformed our dated kitchen into a stunning modern space. Their attention to detail and craftsmanship exceeded all our expectations.',
    rating: 5,
  },
  {
    id: '2',
    name: 'David & Maria Santos',
    role: 'Homeowners',
    location: 'Mississauga, ON',
    content: 'From the initial consultation to the final walkthrough, the team was professional, communicative, and delivered exactly what they promised. Our basement is now our favorite room.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer Walsh',
    role: 'Interior Designer',
    location: 'Oakville, ON',
    content: 'I regularly recommend Mufo to my clients. Their quality of work is consistently excellent, and they understand how to bring design visions to life.',
    rating: 5,
  },
];

// Why Choose Us - Value Propositions
export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const valueProps: ValueProp[] = [
  {
    id: '1',
    title: 'Master Craftsmanship',
    description: 'Every detail is executed with precision by our skilled artisans who take pride in their work.',
    icon: 'Gem',
  },
  {
    id: '2',
    title: 'Transparent Process',
    description: 'Clear communication, detailed quotes, and no surprises. You know exactly what to expect.',
    icon: 'Eye',
  },
  {
    id: '3',
    title: 'Timely Delivery',
    description: 'We respect your time. Projects are completed on schedule without compromising quality.',
    icon: 'Clock',
  },
  {
    id: '4',
    title: 'Lasting Quality',
    description: 'Premium materials and expert installation ensure your renovation stands the test of time.',
    icon: 'Shield',
  },
];

// Footer Quick Links
export const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about#team' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  services: services.map((service) => ({
    label: service.shortTitle,
    href: `/services/${service.slug}`,
  })),
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};
