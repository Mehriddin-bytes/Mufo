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
  { label: 'About Us', href: '/about' },
];

// Services for navigation dropdown and pages
export interface ServiceImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Service {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  gallery: ServiceImage[];
  features: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'kitchen-renovation',
    title: 'Kitchen Renovation',
    shortTitle: 'Kitchen',
    tagline: 'The Heart of Your Home, Reimagined',
    description: 'Transform your kitchen into a modern, functional masterpiece with custom cabinetry and premium finishes.',
    longDescription: 'Your kitchen is more than just a cooking space—it\'s where memories are made, conversations flow, and families come together. Our kitchen renovation services combine innovative design with expert craftsmanship to create spaces that are as beautiful as they are functional. From custom cabinetry to premium countertops, we handle every detail with precision and care.',
    icon: 'ChefHat',
    image: '/images/services/kitchen.jpg',
    gallery: [
      { src: '/images/services/kitchen/kitchen-1.jpg', alt: 'Modern kitchen with white cabinets', caption: 'Custom White Cabinetry' },
      { src: '/images/services/kitchen/kitchen-2.jpg', alt: 'Kitchen island with quartz countertop', caption: 'Quartz Island Design' },
      { src: '/images/services/kitchen/kitchen-3.jpg', alt: 'Kitchen backsplash tile detail', caption: 'Handcrafted Backsplash' },
      { src: '/images/services/kitchen/kitchen-4.jpg', alt: 'Open concept kitchen renovation', caption: 'Open Concept Layout' },
      { src: '/images/services/kitchen/kitchen-5.jpg', alt: 'Kitchen lighting and fixtures', caption: 'Custom Lighting Solutions' },
      { src: '/images/services/kitchen/kitchen-6.jpg', alt: 'Completed kitchen project', caption: 'Completed Renovation' },
    ],
    features: [
      'Custom Cabinetry Design & Installation',
      'Premium Countertop Selection',
      'Modern Appliance Integration',
      'Custom Lighting Solutions',
      'Backsplash & Tile Work',
      'Plumbing & Electrical Updates',
      'Island & Breakfast Bar Design',
      'Storage Optimization',
    ],
    benefits: [
      {
        title: 'Increased Home Value',
        description: 'A modern kitchen renovation typically returns 70-80% of its cost in home value.',
      },
      {
        title: 'Energy Efficiency',
        description: 'New appliances and lighting reduce energy consumption and lower utility bills.',
      },
      {
        title: 'Better Functionality',
        description: 'Optimized layouts and storage solutions make cooking and entertaining easier.',
      },
      {
        title: 'Modern Aesthetics',
        description: 'Contemporary designs that reflect your personal style and current trends.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Consultation & Design',
        description: 'We meet with you to understand your vision, assess your space, and create detailed design plans.',
      },
      {
        step: 2,
        title: 'Material Selection',
        description: 'Choose from our curated selection of cabinets, countertops, fixtures, and finishes.',
      },
      {
        step: 3,
        title: 'Preparation & Demolition',
        description: 'We carefully prepare your space, protecting your home while removing old fixtures.',
      },
      {
        step: 4,
        title: 'Construction & Installation',
        description: 'Our skilled craftsmen bring your design to life with precision and attention to detail.',
      },
      {
        step: 5,
        title: 'Final Walkthrough',
        description: 'We ensure every detail meets your expectations before completing the project.',
      },
    ],
    faqs: [
      {
        question: 'How long does a typical kitchen renovation take?',
        answer: 'Most kitchen renovations take 4-8 weeks depending on the scope of work. We provide a detailed timeline during our consultation.',
      },
      {
        question: 'Can I stay in my home during the renovation?',
        answer: 'Yes, most clients stay in their homes. We set up temporary cooking areas and work to minimize disruption to your daily routine.',
      },
      {
        question: 'Do you handle permits and inspections?',
        answer: 'Absolutely. We manage all necessary permits and coordinate inspections as part of our comprehensive service.',
      },
    ],
  },
  {
    id: '2',
    slug: 'bathroom-renovation',
    title: 'Bathroom Renovation',
    shortTitle: 'Bathroom',
    tagline: 'Your Personal Sanctuary Awaits',
    description: 'Create your personal spa retreat with elegant fixtures, tile work, and thoughtful layouts.',
    longDescription: 'Transform your bathroom into a luxurious retreat that combines style, comfort, and functionality. Whether you\'re dreaming of a spa-like master bath or updating a family bathroom, our team delivers exceptional results. We specialize in creating spaces that feel both indulgent and practical, using premium materials and expert craftsmanship.',
    icon: 'Bath',
    image: '/images/services/bathroom.jpg',
    gallery: [
      { src: '/images/services/bathroom/bathroom-1.jpg', alt: 'Modern spa bathroom with freestanding tub', caption: 'Luxury Spa Design' },
      { src: '/images/services/bathroom/bathroom-2.jpg', alt: 'Walk-in shower with rainfall head', caption: 'Rainfall Shower' },
      { src: '/images/services/bathroom/bathroom-3.jpg', alt: 'Custom vanity with double sinks', caption: 'Double Vanity Setup' },
      { src: '/images/services/bathroom/bathroom-4.jpg', alt: 'Bathroom tile detail', caption: 'Premium Tile Work' },
      { src: '/images/services/bathroom/bathroom-5.jpg', alt: 'Heated floor installation', caption: 'Heated Flooring' },
      { src: '/images/services/bathroom/bathroom-6.jpg', alt: 'Completed bathroom renovation', caption: 'Finished Project' },
    ],
    features: [
      'Custom Tile & Stone Work',
      'Vanity Design & Installation',
      'Walk-in Shower Conversions',
      'Freestanding Tub Installation',
      'Modern Plumbing Fixtures',
      'Heated Flooring Systems',
      'Custom Lighting & Ventilation',
      'Built-in Storage Solutions',
    ],
    benefits: [
      {
        title: 'Daily Luxury',
        description: 'Start and end each day in a space designed for relaxation and rejuvenation.',
      },
      {
        title: 'Water Efficiency',
        description: 'Modern fixtures reduce water usage without sacrificing performance.',
      },
      {
        title: 'Improved Safety',
        description: 'Updated fixtures and layouts enhance safety for all family members.',
      },
      {
        title: 'Spa-Like Experience',
        description: 'Heated floors, rainfall showers, and soaking tubs bring the spa home.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Design Consultation',
        description: 'We explore your style preferences and functional needs to create the perfect design.',
      },
      {
        step: 2,
        title: 'Fixture & Finish Selection',
        description: 'Choose from premium tiles, fixtures, vanities, and accessories.',
      },
      {
        step: 3,
        title: 'Careful Demolition',
        description: 'We protect surrounding areas while carefully removing existing fixtures.',
      },
      {
        step: 4,
        title: 'Expert Installation',
        description: 'Our team installs plumbing, electrical, tile, and fixtures with precision.',
      },
      {
        step: 5,
        title: 'Quality Assurance',
        description: 'Thorough inspection ensures everything works perfectly before handover.',
      },
    ],
    faqs: [
      {
        question: 'How long does a bathroom renovation typically take?',
        answer: 'A standard bathroom renovation takes 2-4 weeks. Larger or more complex projects may take longer.',
      },
      {
        question: 'Can you work with my existing plumbing layout?',
        answer: 'We can work with existing layouts or reconfigure plumbing to accommodate new designs. We\'ll discuss options during consultation.',
      },
      {
        question: 'What tile options do you offer?',
        answer: 'We offer a wide range including ceramic, porcelain, natural stone, and glass tiles in various styles and price points.',
      },
    ],
  },
  {
    id: '3',
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    shortTitle: 'Basement',
    tagline: 'Unlock Your Home\'s Hidden Potential',
    description: 'Unlock your basement\'s potential with complete finishing solutions for extra living space.',
    longDescription: 'Your basement holds incredible potential—extra bedrooms, a home theater, a gym, or a private office. Our basement finishing services transform underutilized space into valuable living areas that expand your home\'s functionality and value. We handle everything from moisture control to custom finishes, creating comfortable spaces your family will love.',
    icon: 'Home',
    image: '/images/services/basement.jpg',
    gallery: [
      { src: '/images/services/basement/basement-1.jpg', alt: 'Finished basement living area', caption: 'Open Living Space' },
      { src: '/images/services/basement/basement-2.jpg', alt: 'Home theater room', caption: 'Home Theater Setup' },
      { src: '/images/services/basement/basement-3.jpg', alt: 'Basement bar area', caption: 'Custom Wet Bar' },
      { src: '/images/services/basement/basement-4.jpg', alt: 'Basement bedroom with egress window', caption: 'Guest Bedroom' },
      { src: '/images/services/basement/basement-5.jpg', alt: 'Basement bathroom', caption: 'Full Bathroom' },
      { src: '/images/services/basement/basement-6.jpg', alt: 'Finished basement recreation room', caption: 'Recreation Room' },
    ],
    features: [
      'Complete Space Planning',
      'Moisture & Waterproofing Solutions',
      'Custom Framing & Insulation',
      'Electrical & HVAC Integration',
      'Home Theater Setup',
      'Bathroom & Wet Bar Installation',
      'Custom Built-ins & Storage',
      'Egress Window Installation',
    ],
    benefits: [
      {
        title: 'Added Living Space',
        description: 'Gain hundreds of square feet of usable space without building an addition.',
      },
      {
        title: 'Increased Home Value',
        description: 'Finished basements significantly increase your property\'s market value.',
      },
      {
        title: 'Rental Potential',
        description: 'Create a legal basement suite for rental income or extended family.',
      },
      {
        title: 'Custom Functionality',
        description: 'Design the exact space you need—gym, office, theater, or guest suite.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Assessment & Planning',
        description: 'We evaluate your basement\'s condition and discuss your vision for the space.',
      },
      {
        step: 2,
        title: 'Moisture Management',
        description: 'Address any moisture issues to ensure a dry, comfortable living space.',
      },
      {
        step: 3,
        title: 'Framing & Systems',
        description: 'Install framing, electrical, plumbing, and HVAC as needed.',
      },
      {
        step: 4,
        title: 'Finishing Work',
        description: 'Complete drywall, flooring, trim, and custom features.',
      },
      {
        step: 5,
        title: 'Final Touches',
        description: 'Paint, fixtures, and finishing details bring your vision to life.',
      },
    ],
    faqs: [
      {
        question: 'Do I need permits for basement finishing?',
        answer: 'Yes, most basement finishing projects require permits. We handle all permit applications and inspections.',
      },
      {
        question: 'What about moisture and humidity issues?',
        answer: 'We assess moisture conditions first and implement appropriate solutions like waterproofing, drainage, or dehumidification.',
      },
      {
        question: 'Can I add a bathroom to my basement?',
        answer: 'Yes, we regularly add bathrooms to basements. We\'ll evaluate plumbing options and recommend the best approach.',
      },
    ],
  },
  {
    id: '4',
    slug: 'full-home-renovation',
    title: 'Full Home Renovation',
    shortTitle: 'Full Home',
    tagline: 'Complete Transformation, Seamless Experience',
    description: 'Comprehensive whole-home transformations that reimagine your entire living space.',
    longDescription: 'When your home needs more than a refresh, our full home renovation services deliver complete transformations. We coordinate every aspect of your renovation—from structural changes to finishing touches—ensuring a cohesive result that reflects your style and meets your needs. Our experienced team manages the complexity so you can focus on the excitement of your new home.',
    icon: 'Building',
    image: '/images/services/full-home.jpg',
    gallery: [
      { src: '/images/services/full-home/full-home-1.jpg', alt: 'Complete home exterior transformation', caption: 'Exterior Renovation' },
      { src: '/images/services/full-home/full-home-2.jpg', alt: 'Open floor plan living area', caption: 'Open Floor Plan' },
      { src: '/images/services/full-home/full-home-3.jpg', alt: 'Modern kitchen in full renovation', caption: 'Kitchen Transformation' },
      { src: '/images/services/full-home/full-home-4.jpg', alt: 'Master bedroom renovation', caption: 'Master Suite' },
      { src: '/images/services/full-home/full-home-5.jpg', alt: 'Renovated staircase and entryway', caption: 'Grand Entryway' },
      { src: '/images/services/full-home/full-home-6.jpg', alt: 'Before and after comparison', caption: 'Complete Transformation' },
    ],
    features: [
      'Complete Design & Planning',
      'Structural Modifications',
      'Kitchen & Bath Renovations',
      'Flooring Throughout',
      'Electrical System Updates',
      'Plumbing Modernization',
      'HVAC Improvements',
      'Interior & Exterior Finishing',
    ],
    benefits: [
      {
        title: 'Cohesive Design',
        description: 'Every room flows together with consistent style and quality throughout.',
      },
      {
        title: 'Single Point of Contact',
        description: 'One team manages everything, simplifying communication and coordination.',
      },
      {
        title: 'Cost Efficiency',
        description: 'Bundled renovations often cost less than multiple separate projects.',
      },
      {
        title: 'Faster Completion',
        description: 'Coordinated scheduling means your complete renovation finishes sooner.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Comprehensive Consultation',
        description: 'We tour your entire home, discuss your goals, and develop a master plan.',
      },
      {
        step: 2,
        title: 'Design Development',
        description: 'Detailed designs for each space ensure cohesive style throughout.',
      },
      {
        step: 3,
        title: 'Phased Construction',
        description: 'We work room by room or section by section to minimize disruption.',
      },
      {
        step: 4,
        title: 'Systems Integration',
        description: 'Update electrical, plumbing, and HVAC for modern performance.',
      },
      {
        step: 5,
        title: 'Complete Finishing',
        description: 'Every detail is perfected before your final walkthrough.',
      },
    ],
    faqs: [
      {
        question: 'How long does a full home renovation take?',
        answer: 'Full home renovations typically take 3-6 months depending on scope. We\'ll provide a detailed timeline during planning.',
      },
      {
        question: 'Do we need to move out during renovation?',
        answer: 'It depends on the scope. We can often phase work to allow you to stay, or recommend temporary arrangements if needed.',
      },
      {
        question: 'How do you handle unexpected issues?',
        answer: 'We include contingencies in our planning and communicate transparently about any discoveries that affect scope or timeline.',
      },
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

// Projects / Portfolio
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  description: string;
  image: string;
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  features: string[];
  completionDate: string;
  duration: string;
}

export const projectCategories = [
  { slug: 'all', label: 'All Projects' },
  { slug: 'kitchen-renovation', label: 'Kitchen' },
  { slug: 'bathroom-renovation', label: 'Bathroom' },
  { slug: 'basement-finishing', label: 'Basement' },
  { slug: 'full-home-renovation', label: 'Full Home' },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'modern-kitchen-toronto',
    title: 'Modern Kitchen Transformation',
    category: 'Kitchen Renovation',
    categorySlug: 'kitchen-renovation',
    location: 'Toronto, ON',
    description: 'Complete kitchen overhaul featuring custom white shaker cabinets, quartz waterfall island, and integrated smart appliances.',
    image: '/images/projects/kitchen-1.jpg',
    gallery: [
      { src: '/images/projects/kitchen-1-1.jpg', alt: 'Kitchen island view', caption: 'Waterfall Island' },
      { src: '/images/projects/kitchen-1-2.jpg', alt: 'Cabinet detail', caption: 'Custom Cabinetry' },
      { src: '/images/projects/kitchen-1-3.jpg', alt: 'Backsplash', caption: 'Marble Backsplash' },
    ],
    features: ['Custom Cabinetry', 'Quartz Countertops', 'Under-cabinet Lighting', 'Smart Appliances'],
    completionDate: '2024',
    duration: '6 weeks',
  },
  {
    id: '2',
    slug: 'spa-bathroom-oakville',
    title: 'Spa-Inspired Master Bath',
    category: 'Bathroom Renovation',
    categorySlug: 'bathroom-renovation',
    location: 'Oakville, ON',
    description: 'Luxurious master bathroom with freestanding soaking tub, rainfall shower, and heated marble floors.',
    image: '/images/projects/bathroom-1.jpg',
    gallery: [
      { src: '/images/projects/bathroom-1-1.jpg', alt: 'Freestanding tub', caption: 'Soaking Tub' },
      { src: '/images/projects/bathroom-1-2.jpg', alt: 'Walk-in shower', caption: 'Rainfall Shower' },
      { src: '/images/projects/bathroom-1-3.jpg', alt: 'Double vanity', caption: 'Custom Vanity' },
    ],
    features: ['Freestanding Tub', 'Heated Floors', 'Custom Vanity', 'Frameless Glass Shower'],
    completionDate: '2024',
    duration: '4 weeks',
  },
  {
    id: '3',
    slug: 'basement-entertainment-mississauga',
    title: 'Entertainment Basement Suite',
    category: 'Basement Finishing',
    categorySlug: 'basement-finishing',
    location: 'Mississauga, ON',
    description: 'Full basement transformation with home theater, wet bar, bedroom, and full bathroom.',
    image: '/images/projects/basement-1.jpg',
    gallery: [
      { src: '/images/projects/basement-1-1.jpg', alt: 'Home theater', caption: 'Theater Room' },
      { src: '/images/projects/basement-1-2.jpg', alt: 'Wet bar', caption: 'Custom Bar' },
      { src: '/images/projects/basement-1-3.jpg', alt: 'Guest bedroom', caption: 'Guest Suite' },
    ],
    features: ['Home Theater', 'Wet Bar', 'Full Bathroom', 'Guest Bedroom', 'Soundproofing'],
    completionDate: '2024',
    duration: '10 weeks',
  },
  {
    id: '4',
    slug: 'complete-home-burlington',
    title: 'Complete Home Renovation',
    category: 'Full Home Renovation',
    categorySlug: 'full-home-renovation',
    location: 'Burlington, ON',
    description: 'Whole-home transformation including open concept main floor, updated kitchen, three bathrooms, and modern finishes throughout.',
    image: '/images/projects/full-home-1.jpg',
    gallery: [
      { src: '/images/projects/full-home-1-1.jpg', alt: 'Open concept living', caption: 'Open Floor Plan' },
      { src: '/images/projects/full-home-1-2.jpg', alt: 'Kitchen', caption: 'Gourmet Kitchen' },
      { src: '/images/projects/full-home-1-3.jpg', alt: 'Master suite', caption: 'Master Suite' },
    ],
    features: ['Open Concept', 'Kitchen Upgrade', 'Three Bathrooms', 'New Flooring', 'Updated Electrical'],
    completionDate: '2023',
    duration: '16 weeks',
  },
  {
    id: '5',
    slug: 'transitional-kitchen-etobicoke',
    title: 'Transitional Kitchen Design',
    category: 'Kitchen Renovation',
    categorySlug: 'kitchen-renovation',
    location: 'Etobicoke, ON',
    description: 'Elegant transitional kitchen with navy blue island, brass hardware, and custom range hood.',
    image: '/images/projects/kitchen-2.jpg',
    gallery: [
      { src: '/images/projects/kitchen-2-1.jpg', alt: 'Navy island', caption: 'Statement Island' },
      { src: '/images/projects/kitchen-2-2.jpg', alt: 'Range hood', caption: 'Custom Hood' },
      { src: '/images/projects/kitchen-2-3.jpg', alt: 'Hardware detail', caption: 'Brass Accents' },
    ],
    features: ['Two-tone Cabinetry', 'Brass Hardware', 'Custom Range Hood', 'Butcher Block Accent'],
    completionDate: '2024',
    duration: '5 weeks',
  },
  {
    id: '6',
    slug: 'contemporary-bathroom-vaughan',
    title: 'Contemporary Guest Bath',
    category: 'Bathroom Renovation',
    categorySlug: 'bathroom-renovation',
    location: 'Vaughan, ON',
    description: 'Sleek contemporary bathroom with floating vanity, large format tiles, and linear drain shower.',
    image: '/images/projects/bathroom-2.jpg',
    gallery: [
      { src: '/images/projects/bathroom-2-1.jpg', alt: 'Floating vanity', caption: 'Floating Vanity' },
      { src: '/images/projects/bathroom-2-2.jpg', alt: 'Shower', caption: 'Walk-in Shower' },
      { src: '/images/projects/bathroom-2-3.jpg', alt: 'Tile detail', caption: 'Large Format Tiles' },
    ],
    features: ['Floating Vanity', 'Linear Drain', 'Large Format Tiles', 'LED Mirror'],
    completionDate: '2024',
    duration: '3 weeks',
  },
  {
    id: '7',
    slug: 'rec-room-basement-toronto',
    title: 'Family Recreation Room',
    category: 'Basement Finishing',
    categorySlug: 'basement-finishing',
    location: 'Toronto, ON',
    description: 'Bright and welcoming basement recreation space with play area, home office, and powder room.',
    image: '/images/projects/basement-2.jpg',
    gallery: [
      { src: '/images/projects/basement-2-1.jpg', alt: 'Recreation area', caption: 'Play Space' },
      { src: '/images/projects/basement-2-2.jpg', alt: 'Home office', caption: 'Home Office' },
      { src: '/images/projects/basement-2-3.jpg', alt: 'Powder room', caption: 'Powder Room' },
    ],
    features: ['Recreation Area', 'Home Office', 'Powder Room', 'Built-in Storage', 'Egress Window'],
    completionDate: '2023',
    duration: '8 weeks',
  },
  {
    id: '8',
    slug: 'heritage-home-hamilton',
    title: 'Heritage Home Restoration',
    category: 'Full Home Renovation',
    categorySlug: 'full-home-renovation',
    location: 'Hamilton, ON',
    description: 'Thoughtful restoration of a heritage home preserving character details while modernizing systems and functionality.',
    image: '/images/projects/full-home-2.jpg',
    gallery: [
      { src: '/images/projects/full-home-2-1.jpg', alt: 'Restored millwork', caption: 'Original Millwork' },
      { src: '/images/projects/full-home-2-2.jpg', alt: 'Updated kitchen', caption: 'Period Kitchen' },
      { src: '/images/projects/full-home-2-3.jpg', alt: 'Master bath', caption: 'Vintage-inspired Bath' },
    ],
    features: ['Heritage Restoration', 'Modern Systems', 'Period Details', 'Energy Upgrades'],
    completionDate: '2023',
    duration: '20 weeks',
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
