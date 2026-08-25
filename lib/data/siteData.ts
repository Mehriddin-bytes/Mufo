/**
 * MUFO RENOVATION - Centralized Site Data
 * ========================================
 */

export const siteConfig = {
  name: 'Mufo Renovation',
  tagline: 'Crafting Beautiful Spaces',
  description: 'Expert renovation and remodeling services that transform your vision into reality. Quality craftsmanship, timeless results.',

  // Contact Information
  contact: {
    phone: '+1 (416) 357-6597',
    email: 'mufo.ista@gmail.com',
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
    facebook: 'https://www.facebook.com/share/1DFLJryqAj/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/mufo.ca',
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
  { label: 'Gallery', href: '/gallery' },
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
    slug: 'parking-restoration',
    title: 'Parking Structure Restoration',
    shortTitle: 'Parking',
    tagline: 'Protecting Your Investment, Extending Structure Life',
    description: 'Comprehensive parking garage restoration including concrete repair, waterproofing, and protective coatings.',
    longDescription: 'Parking structures face unique challenges from vehicle traffic, salt exposure, and environmental factors. Our parking restoration services address structural deterioration, waterproofing failures, and surface degradation to extend the life of your investment. We utilize advanced repair techniques and high-performance materials to deliver lasting results that minimize future maintenance.',
    icon: 'Car',
    image: '/images/services/parking/parking-2.jpg',
    gallery: [
      { src: '/images/services/parking/parking-2.jpg', alt: 'Waterproofing membrane installation', caption: 'Membrane Application' },
      { src: '/images/services/parking/parking-6.jpg', alt: 'Completed parking restoration', caption: 'Completed Project' },
    ],
    features: [
      'Concrete Repair & Restoration',
      'Waterproofing Membrane Systems',
      'Traffic Coating Applications',
      'Expansion Joint Replacement',
      'Structural Reinforcement',
      'Corrosion Protection',
      'Drainage System Repairs',
      'Line Striping & Signage',
    ],
    benefits: [
      {
        title: 'Extended Structure Life',
        description: 'Professional restoration can add decades to your parking structure\'s service life.',
      },
      {
        title: 'Reduced Liability',
        description: 'Properly maintained structures minimize safety risks and potential legal issues.',
      },
      {
        title: 'Cost Savings',
        description: 'Preventive restoration costs far less than major structural replacement.',
      },
      {
        title: 'Property Value',
        description: 'Well-maintained parking facilities enhance overall property appeal and value.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Condition Assessment',
        description: 'Thorough inspection and testing to identify all areas requiring attention.',
      },
      {
        step: 2,
        title: 'Engineering Analysis',
        description: 'Detailed analysis and repair recommendations from our engineering team.',
      },
      {
        step: 3,
        title: 'Surface Preparation',
        description: 'Proper preparation including cleaning, removal of deteriorated concrete, and priming.',
      },
      {
        step: 4,
        title: 'Repair & Restoration',
        description: 'Execute repairs using industry-leading materials and techniques.',
      },
      {
        step: 5,
        title: 'Final Inspection',
        description: 'Quality assurance inspection and maintenance recommendations.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my parking garage needs restoration?',
        answer: 'Signs include cracking, spalling concrete, water infiltration, exposed rebar, and deteriorating joints. We offer free assessments.',
      },
      {
        question: 'Can restoration be done while the garage is in use?',
        answer: 'Yes, we typically phase work to maintain partial access. We\'ll work with you to minimize disruption.',
      },
      {
        question: 'What warranty do you provide?',
        answer: 'We provide comprehensive warranties on materials and workmanship, typically ranging from 5-10 years depending on the scope.',
      },
    ],
  },
  {
    id: '2',
    slug: 'swing-stage-services',
    title: 'Swing Stage Services',
    shortTitle: 'Swing Stage',
    tagline: 'Safe Access for Any Height',
    description: 'Professional swing stage and suspended access solutions for high-rise building maintenance and restoration.',
    longDescription: 'Our swing stage services provide safe, efficient access for building envelope work at any height. With certified operators and modern equipment, we deliver suspended access solutions that meet the strictest safety standards. Whether for inspection, maintenance, or major restoration projects, our team ensures your high-rise work proceeds safely and efficiently.',
    icon: 'Building2',
    image: '/images/services/swing-stage.jpg',
    gallery: [
      { src: '/images/services/swing-stage/swing-1.jpg', alt: 'Swing stage installation', caption: 'Equipment Setup' },
      { src: '/images/services/swing-stage/swing-2.jpg', alt: 'High-rise work in progress', caption: 'High-Rise Access' },
      { src: '/images/services/swing-stage/swing-3.jpg', alt: 'Safety equipment', caption: 'Safety Systems' },
      { src: '/images/services/swing-stage/swing-4.jpg', alt: 'Building facade work', caption: 'Facade Work' },
      { src: '/images/services/swing-stage/swing-5.jpg', alt: 'Window installation from swing stage', caption: 'Window Installation' },
      { src: '/images/services/swing-stage/swing-6.jpg', alt: 'Completed swing stage project', caption: 'Project Completion' },
    ],
    features: [
      'Certified Equipment & Operators',
      'Custom Rigging Solutions',
      'Multi-Point Suspension Systems',
      'Weather Monitoring Protocols',
      'Fall Protection Systems',
      'Project Planning & Logistics',
      'Emergency Response Procedures',
      'Regulatory Compliance',
    ],
    benefits: [
      {
        title: 'Safety First',
        description: 'All operations meet or exceed OSHA and local safety regulations.',
      },
      {
        title: 'Access Anywhere',
        description: 'Reach any height or building configuration with our versatile equipment.',
      },
      {
        title: 'Cost Effective',
        description: 'More economical than scaffolding for many high-rise applications.',
      },
      {
        title: 'Minimal Disruption',
        description: 'Work proceeds without blocking ground-level access or sidewalks.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Site Survey',
        description: 'Evaluate building structure, anchor points, and access requirements.',
      },
      {
        step: 2,
        title: 'Engineering & Permits',
        description: 'Prepare rigging plans and obtain necessary permits and approvals.',
      },
      {
        step: 3,
        title: 'Equipment Installation',
        description: 'Install and test all equipment with safety inspections.',
      },
      {
        step: 4,
        title: 'Work Execution',
        description: 'Perform planned work with continuous safety monitoring.',
      },
      {
        step: 5,
        title: 'Demobilization',
        description: 'Safe removal of equipment and final site inspection.',
      },
    ],
    faqs: [
      {
        question: 'What certifications do your operators hold?',
        answer: 'All operators are certified through recognized programs and hold current working at heights certifications.',
      },
      {
        question: 'What weather conditions prevent work?',
        answer: 'Operations are suspended during high winds (typically over 35 km/h), lightning, heavy rain, or ice conditions.',
      },
      {
        question: 'Can you work on any building type?',
        answer: 'We work on virtually all building types. Our engineering team designs custom solutions for challenging configurations.',
      },
    ],
  },
  {
    id: '3',
    slug: 'balcony-restoration',
    title: 'Balcony Restoration',
    shortTitle: 'Balcony',
    tagline: 'Restoring Safety and Beauty to Your Balconies',
    description: 'Expert balcony repair and restoration services including structural repairs, waterproofing, and railing upgrades.',
    longDescription: 'Balconies are exposed to harsh weather conditions and require specialized attention to maintain safety and appearance. Our balcony restoration services address structural deterioration, waterproofing failures, and aesthetic concerns. We restore balconies to their original condition while implementing improvements that extend their service life and enhance building curb appeal.',
    icon: 'Home',
    image: '/images/services/balcony.jpg',
    gallery: [
      { src: '/images/services/balcony/balcony-1.jpg', alt: 'Balcony concrete repair', caption: 'Concrete Restoration' },
      { src: '/images/services/balcony/balcony-2.jpg', alt: 'Railing installation', caption: 'New Railings' },
      { src: '/images/services/balcony/balcony-3.jpg', alt: 'Waterproofing application', caption: 'Waterproofing' },
      { src: '/images/services/balcony/balcony-4.jpg', alt: 'Balcony tile work', caption: 'Tile Restoration' },
      { src: '/images/services/balcony/balcony-5.jpg', alt: 'Structural reinforcement', caption: 'Structural Work' },
      { src: '/images/services/balcony/balcony-6.jpg', alt: 'Completed balcony restoration', caption: 'Completed Project' },
    ],
    features: [
      'Structural Concrete Repair',
      'Waterproofing Systems',
      'Railing Replacement & Repair',
      'Tile & Surface Restoration',
      'Drainage Improvements',
      'Expansion Joint Treatment',
      'Coating & Sealant Application',
      'Safety Inspections',
    ],
    benefits: [
      {
        title: 'Safety Assurance',
        description: 'Ensure balconies meet current safety codes and structural requirements.',
      },
      {
        title: 'Water Protection',
        description: 'Prevent water infiltration that causes interior damage and mold growth.',
      },
      {
        title: 'Curb Appeal',
        description: 'Restored balconies dramatically improve building appearance.',
      },
      {
        title: 'Property Value',
        description: 'Well-maintained balconies are a key selling point for units.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Inspection & Assessment',
        description: 'Detailed inspection of structural condition, waterproofing, and railings.',
      },
      {
        step: 2,
        title: 'Scope Development',
        description: 'Prepare comprehensive repair specifications and material selections.',
      },
      {
        step: 3,
        title: 'Preparation Work',
        description: 'Remove deteriorated materials and prepare surfaces for restoration.',
      },
      {
        step: 4,
        title: 'Restoration',
        description: 'Execute repairs, waterproofing, and finishing work.',
      },
      {
        step: 5,
        title: 'Quality Review',
        description: 'Final inspection and documentation of completed work.',
      },
    ],
    faqs: [
      {
        question: 'How often should balconies be inspected?',
        answer: 'We recommend professional inspections every 3-5 years, or immediately if you notice cracking, spalling, or water staining.',
      },
      {
        question: 'Can residents use balconies during restoration?',
        answer: 'For safety, balconies are typically off-limits during active restoration work. We schedule to minimize inconvenience.',
      },
      {
        question: 'Do you work with condominium boards?',
        answer: 'Yes, we regularly work with condo boards and property managers, providing detailed reports and presentations as needed.',
      },
    ],
  },
  {
    id: '4',
    slug: 'masonry-services',
    title: 'Masonry Services',
    shortTitle: 'Masonry',
    tagline: 'Expert Brick and Stone Craftsmanship',
    description: 'Professional masonry repair and restoration including brick replacement, tuckpointing, and stone restoration.',
    longDescription: 'Masonry is the backbone of many building envelopes, and its proper maintenance is essential for structural integrity and weather protection. Our masonry services encompass everything from minor tuckpointing to major brick replacement projects. We combine traditional craftsmanship with modern techniques to restore and preserve masonry facades while maintaining architectural character.',
    icon: 'Layers',
    image: '/images/services/masonry.jpg',
    gallery: [
      { src: '/images/services/masonry/masonry-1.jpg', alt: 'Brick replacement work', caption: 'Brick Replacement' },
      { src: '/images/services/masonry/masonry-3.jpg', alt: 'Stone restoration', caption: 'Stone Work' },
      { src: '/images/services/masonry/masonry-4.jpg', alt: 'Lintel replacement', caption: 'Lintel Repairs' },
      { src: '/images/services/masonry/masonry-5.jpg', alt: 'Chimney repair', caption: 'Chimney Restoration' },
      { src: '/images/services/masonry/masonry-6.jpg', alt: 'Completed masonry project', caption: 'Completed Project' },
    ],
    features: [
      'Brick Replacement & Matching',
      'Tuckpointing & Repointing',
      'Stone Repair & Restoration',
      'Lintel & Shelf Angle Repair',
      'Chimney Repair & Rebuilding',
      'Parapet Wall Restoration',
      'Masonry Cleaning',
      'Waterproofing & Sealants',
    ],
    benefits: [
      {
        title: 'Structural Protection',
        description: 'Proper masonry maintenance prevents water infiltration and structural damage.',
      },
      {
        title: 'Historical Preservation',
        description: 'Maintain architectural character while ensuring modern performance.',
      },
      {
        title: 'Energy Efficiency',
        description: 'Well-maintained masonry contributes to better building insulation.',
      },
      {
        title: 'Long-Term Savings',
        description: 'Regular maintenance prevents costly major repairs.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Masonry Survey',
        description: 'Comprehensive assessment of masonry condition and deterioration patterns.',
      },
      {
        step: 2,
        title: 'Material Matching',
        description: 'Source matching brick, stone, and mortar to preserve appearance.',
      },
      {
        step: 3,
        title: 'Preparation',
        description: 'Careful removal of deteriorated materials while protecting sound masonry.',
      },
      {
        step: 4,
        title: 'Restoration Work',
        description: 'Execute repairs using traditional techniques and quality materials.',
      },
      {
        step: 5,
        title: 'Protection',
        description: 'Apply appropriate sealants and provide maintenance recommendations.',
      },
    ],
    faqs: [
      {
        question: 'How do you match existing brick?',
        answer: 'We maintain relationships with suppliers of historical and specialty brick. When exact matches aren\'t available, we can custom-blend mortar colors.',
      },
      {
        question: 'What causes mortar joint deterioration?',
        answer: 'Freeze-thaw cycles, moisture infiltration, and age all contribute. Proper tuckpointing with appropriate mortar prevents further deterioration.',
      },
      {
        question: 'Do you work on heritage buildings?',
        answer: 'Yes, we specialize in heritage masonry restoration and work within heritage guidelines and requirements.',
      },
    ],
  },
  {
    id: '5',
    slug: 'stucco-services',
    title: 'Stucco Services',
    shortTitle: 'Stucco',
    tagline: 'Restoring and Protecting Your Building Envelope',
    description: 'Complete stucco repair, restoration, and application services for residential and commercial buildings.',
    longDescription: 'Stucco provides both aesthetic appeal and weather protection, but requires proper installation and maintenance. Our stucco services address cracking, water damage, and deterioration while enhancing building appearance. Whether you need repairs to existing stucco or new application, our skilled technicians deliver durable, attractive results that stand up to the elements.',
    icon: 'PaintBucket',
    image: '/images/gallery/stucco-3.jpg',
    gallery: [
      { src: '/images/gallery/stucco-3.jpg', alt: 'Stucco crack repair', caption: 'Crack Repair' },
      { src: '/images/gallery/stucco-4.jpg', alt: 'Stucco application', caption: 'New Application' },
      { src: '/images/services/stucco/stucco-3.jpg', alt: 'EIFS repair', caption: 'EIFS Restoration' },
      { src: '/images/services/stucco/stucco-4.jpg', alt: 'Color matching', caption: 'Color Matching' },
      { src: '/images/services/stucco/stucco-5.jpg', alt: 'Stucco texturing', caption: 'Texture Work' },
      { src: '/images/services/stucco/stucco-6.jpg', alt: 'Completed stucco project', caption: 'Completed Project' },
    ],
    features: [
      'Traditional Stucco Repair',
      'EIFS (Synthetic Stucco) Services',
      'Crack Repair & Prevention',
      'Water Damage Restoration',
      'Color Matching & Refinishing',
      'Texture Matching',
      'New Stucco Application',
      'Waterproof Coating Systems',
    ],
    benefits: [
      {
        title: 'Weather Protection',
        description: 'Properly maintained stucco provides excellent protection from the elements.',
      },
      {
        title: 'Energy Efficiency',
        description: 'Stucco systems, especially EIFS, contribute to building insulation.',
      },
      {
        title: 'Aesthetic Appeal',
        description: 'Stucco offers versatile design options with various textures and colors.',
      },
      {
        title: 'Durability',
        description: 'Quality stucco installation provides decades of service.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Assessment',
        description: 'Evaluate stucco condition, identify failure causes, and develop repair strategy.',
      },
      {
        step: 2,
        title: 'Preparation',
        description: 'Remove damaged stucco, address underlying issues, and prepare substrate.',
      },
      {
        step: 3,
        title: 'Base Repairs',
        description: 'Install proper lath, flashing, and base coats as needed.',
      },
      {
        step: 4,
        title: 'Finish Application',
        description: 'Apply finish coat with matching color and texture.',
      },
      {
        step: 5,
        title: 'Sealing',
        description: 'Apply protective coatings and seal all penetrations.',
      },
    ],
    faqs: [
      {
        question: 'What causes stucco to crack?',
        answer: 'Common causes include building settlement, improper installation, freeze-thaw cycles, and impact damage. We identify and address root causes.',
      },
      {
        question: 'Can you match my existing stucco color?',
        answer: 'Yes, we can match existing colors closely. For large areas, we may recommend refinishing entire sections for uniform appearance.',
      },
      {
        question: 'What\'s the difference between traditional stucco and EIFS?',
        answer: 'Traditional stucco is cement-based and rigid. EIFS is a multi-layer system with foam insulation that offers energy benefits but requires different repair approaches.',
      },
    ],
  },
  {
    id: '6',
    slug: 'high-rise-renovation',
    title: 'High-Rise Building Renovation',
    shortTitle: 'High-Rise',
    tagline: 'Transforming Towers, Enhancing Living',
    description: 'Comprehensive high-rise building envelope renovation including facade restoration, window replacement, and cladding systems.',
    longDescription: 'High-rise buildings present unique challenges requiring specialized expertise and equipment. Our high-rise renovation services address the complete building envelope—from roof to grade. We coordinate complex multi-trade projects to deliver comprehensive renovations that improve building performance, appearance, and resident satisfaction while maintaining occupied building operations.',
    icon: 'Building',
    image: '/images/gallery/swingstage-1.jpg',
    gallery: [
      { src: '/images/services/high-rise/high-rise-1.jpg', alt: 'High-rise facade work', caption: 'Facade Renovation' },
      { src: '/images/services/high-rise/high-rise-2.jpg', alt: 'Window replacement', caption: 'Window Replacement' },
      { src: '/images/services/high-rise/high-rise-3.jpg', alt: 'Cladding installation', caption: 'New Cladding' },
      { src: '/images/services/high-rise/high-rise-4.jpg', alt: 'Roof work', caption: 'Roofing Systems' },
      { src: '/images/services/high-rise/high-rise-5.jpg', alt: 'Common area renovation', caption: 'Interior Upgrades' },
      { src: '/images/services/high-rise/high-rise-6.jpg', alt: 'Completed high-rise renovation', caption: 'Completed Project' },
    ],
    features: [
      'Building Envelope Assessment',
      'Facade Restoration & Recladding',
      'Window & Door Replacement',
      'Roofing System Replacement',
      'Balcony Restoration',
      'Common Area Upgrades',
      'Energy Efficiency Improvements',
      'Project Management',
    ],
    benefits: [
      {
        title: 'Comprehensive Solution',
        description: 'Address all building envelope issues in a coordinated renovation program.',
      },
      {
        title: 'Resident Satisfaction',
        description: 'Improved comfort, reduced drafts, and enhanced building appearance.',
      },
      {
        title: 'Energy Savings',
        description: 'Modern systems significantly reduce heating and cooling costs.',
      },
      {
        title: 'Property Value',
        description: 'Major renovations substantially increase unit and building values.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Building Assessment',
        description: 'Comprehensive review of building envelope condition and performance.',
      },
      {
        step: 2,
        title: 'Project Planning',
        description: 'Develop phasing, schedule, and coordination plan for minimal disruption.',
      },
      {
        step: 3,
        title: 'Resident Communication',
        description: 'Clear communication program to keep residents informed throughout.',
      },
      {
        step: 4,
        title: 'Phased Execution',
        description: 'Execute work in planned phases while maintaining building operations.',
      },
      {
        step: 5,
        title: 'Project Closeout',
        description: 'Final inspections, warranty documentation, and maintenance planning.',
      },
    ],
    faqs: [
      {
        question: 'How do you minimize disruption to residents?',
        answer: 'We develop detailed phasing plans, provide advance notice of work, and schedule noisy activities during acceptable hours.',
      },
      {
        question: 'How long do major renovations take?',
        answer: 'Duration varies significantly based on scope. We provide detailed schedules during planning and keep residents updated on progress.',
      },
      {
        question: 'Do you work with condo boards?',
        answer: 'Yes, we regularly work with condo corporations, providing presentations, detailed proposals, and ongoing communication throughout projects.',
      },
    ],
  },
  {
    id: '7',
    slug: 'underground-parking',
    title: 'Underground Parking Restoration',
    shortTitle: 'Underground',
    tagline: 'Protecting Below-Grade Assets',
    description: 'Specialized underground parking garage restoration addressing waterproofing, structural repairs, and drainage systems.',
    longDescription: 'Underground parking structures face unique challenges from hydrostatic pressure, salt exposure, and limited ventilation. Our underground parking restoration services address these challenges with proven solutions for waterproofing, concrete repair, and drainage improvements. We understand the critical importance of protecting these below-grade assets and the building systems that run through them.',
    icon: 'Warehouse',
    image: '/images/services/underground.jpg',
    gallery: [
      { src: '/images/services/underground/underground-1.jpg', alt: 'Underground concrete repair', caption: 'Concrete Restoration' },
      { src: '/images/services/underground/underground-2.jpg', alt: 'Waterproofing installation', caption: 'Waterproofing' },
      { src: '/images/services/underground/underground-3.jpg', alt: 'Drainage work', caption: 'Drainage Systems' },
      { src: '/images/services/underground/underground-4.jpg', alt: 'Slab repair', caption: 'Slab Repairs' },
      { src: '/images/services/underground/underground-5.jpg', alt: 'Wall repairs', caption: 'Wall Restoration' },
      { src: '/images/services/underground/underground-6.jpg', alt: 'Completed underground project', caption: 'Completed Project' },
    ],
    features: [
      'Concrete Slab Restoration',
      'Negative-Side Waterproofing',
      'Injection Grouting',
      'Drainage System Repairs',
      'Membrane Applications',
      'Column & Wall Repairs',
      'Expansion Joint Systems',
      'Ventilation Improvements',
    ],
    benefits: [
      {
        title: 'Water Control',
        description: 'Stop water infiltration that damages structure and building systems.',
      },
      {
        title: 'Asset Protection',
        description: 'Protect mechanical and electrical systems from water damage.',
      },
      {
        title: 'Air Quality',
        description: 'Reduce moisture that contributes to poor air quality and mold growth.',
      },
      {
        title: 'Structural Integrity',
        description: 'Prevent ongoing deterioration that threatens structural safety.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Investigation',
        description: 'Identify water entry points, structural issues, and drainage problems.',
      },
      {
        step: 2,
        title: 'Solution Design',
        description: 'Develop repair strategy addressing root causes, not just symptoms.',
      },
      {
        step: 3,
        title: 'Access Coordination',
        description: 'Plan work to maintain parking access throughout project.',
      },
      {
        step: 4,
        title: 'Restoration Work',
        description: 'Execute repairs using specialized below-grade techniques.',
      },
      {
        step: 5,
        title: 'Verification',
        description: 'Monitor results and verify water control success.',
      },
    ],
    faqs: [
      {
        question: 'Why is my underground garage always wet?',
        answer: 'Common causes include failed waterproofing, hydrostatic pressure, drainage issues, or condensation. We identify specific causes before recommending solutions.',
      },
      {
        question: 'Can you stop leaks from inside?',
        answer: 'Yes, we offer negative-side waterproofing solutions including injection grouting and crystalline coatings that work from inside the structure.',
      },
      {
        question: 'Will repairs eliminate all moisture?',
        answer: 'We target water infiltration. Some humidity may remain and can be managed with dehumidification. We\'ll set appropriate expectations.',
      },
    ],
  },
  {
    id: '8',
    slug: 'interior-exterior',
    title: 'Interior & Exterior Finishing',
    shortTitle: 'Interior/Exterior',
    tagline: 'Complete Building Finishing Solutions',
    description: 'Comprehensive interior and exterior finishing services including painting, coatings, and decorative finishes.',
    longDescription: 'The finishing touches make all the difference in building appearance and protection. Our interior and exterior finishing services cover everything from protective coatings to decorative finishes. We work with property managers and building owners to maintain and enhance building aesthetics while providing protective barriers against the elements and wear.',
    icon: 'Paintbrush',
    image: '/images/wallpanel/wallpanel-1.jpg',
    gallery: [
      { src: '/images/services/interior-exterior/ie-1.jpg', alt: 'Exterior painting', caption: 'Exterior Coating' },
      { src: '/images/services/interior-exterior/ie-2.jpg', alt: 'Interior painting', caption: 'Interior Finishing' },
      { src: '/images/services/interior-exterior/ie-3.jpg', alt: 'Common area renovation', caption: 'Common Areas' },
      { src: '/images/services/interior-exterior/ie-4.jpg', alt: 'Decorative finishes', caption: 'Decorative Work' },
      { src: '/images/services/interior-exterior/ie-5.jpg', alt: 'Ceiling work', caption: 'Ceiling Systems' },
      { src: '/images/services/interior-exterior/ie-6.jpg', alt: 'Completed finishing project', caption: 'Completed Project' },
    ],
    features: [
      'Exterior Painting & Coatings',
      'Interior Painting',
      'Common Area Renovations',
      'Decorative Finishes',
      'Ceiling Systems',
      'Wall Coverings',
      'Floor Coatings',
      'Protective Coatings',
    ],
    benefits: [
      {
        title: 'First Impressions',
        description: 'Quality finishes create positive impressions for residents and visitors.',
      },
      {
        title: 'Protection',
        description: 'Proper coatings protect surfaces from wear, moisture, and UV damage.',
      },
      {
        title: 'Maintenance Reduction',
        description: 'Quality finishes last longer and require less frequent maintenance.',
      },
      {
        title: 'Property Value',
        description: 'Well-maintained finishes enhance property values and resident satisfaction.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Scope Review',
        description: 'Assess current conditions and discuss finish options and colors.',
      },
      {
        step: 2,
        title: 'Surface Preparation',
        description: 'Proper preparation ensures long-lasting, quality results.',
      },
      {
        step: 3,
        title: 'Protection',
        description: 'Protect floors, fixtures, and adjacent areas during work.',
      },
      {
        step: 4,
        title: 'Application',
        description: 'Apply finishes using appropriate techniques for each surface.',
      },
      {
        step: 5,
        title: 'Inspection',
        description: 'Quality review and touch-ups to ensure satisfaction.',
      },
    ],
    faqs: [
      {
        question: 'How often should common areas be repainted?',
        answer: 'High-traffic areas typically need repainting every 3-5 years. We can recommend maintenance schedules based on your specific conditions.',
      },
      {
        question: 'Can you work around building occupants?',
        answer: 'Yes, we schedule work to minimize disruption and use low-odor products where appropriate.',
      },
      {
        question: 'Do you provide color consultation?',
        answer: 'Yes, we can assist with color selection and provide samples and mock-ups for approval.',
      },
    ],
  },
  {
    id: '9',
    slug: 'waterproofing',
    title: 'Waterproofing Solutions',
    shortTitle: 'Waterproofing',
    tagline: 'Keeping Water Where It Belongs',
    description: 'Comprehensive waterproofing services for roofs, walls, foundations, and plaza decks.',
    longDescription: 'Water infiltration is the leading cause of building deterioration and damage. Our waterproofing services address water control throughout the building envelope—from roofing systems to below-grade foundations. We utilize proven membrane systems, coatings, and sealants to provide lasting protection against water damage, protecting both building structure and interior finishes.',
    icon: 'Droplets',
    image: '/images/projects/waterproofing-1-2.jpg',
    gallery: [
      { src: '/images/services/waterproofing/wp-1.jpg', alt: 'Roof waterproofing', caption: 'Roof Systems' },
      { src: '/images/services/waterproofing/wp-2.jpg', alt: 'Foundation waterproofing', caption: 'Foundation Work' },
      { src: '/images/services/waterproofing/wp-3.jpg', alt: 'Plaza deck membrane', caption: 'Plaza Decks' },
      { src: '/images/services/waterproofing/wp-4.jpg', alt: 'Wall waterproofing', caption: 'Wall Systems' },
      { src: '/images/services/waterproofing/wp-5.jpg', alt: 'Sealant application', caption: 'Joint Sealing' },
      { src: '/images/services/waterproofing/wp-6.jpg', alt: 'Completed waterproofing', caption: 'Completed Project' },
    ],
    features: [
      'Roofing System Installation',
      'Foundation Waterproofing',
      'Plaza Deck Membranes',
      'Below-Grade Systems',
      'Joint Sealant Programs',
      'Traffic Coatings',
      'Injection Grouting',
      'Drainage Solutions',
    ],
    benefits: [
      {
        title: 'Damage Prevention',
        description: 'Stop water damage before it affects structure and finishes.',
      },
      {
        title: 'Mold Prevention',
        description: 'Eliminate moisture that leads to mold growth and poor air quality.',
      },
      {
        title: 'Energy Efficiency',
        description: 'Dry insulation performs better, reducing energy costs.',
      },
      {
        title: 'Long-Term Savings',
        description: 'Waterproofing investment prevents costly water damage repairs.',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Water Audit',
        description: 'Identify current and potential water infiltration points.',
      },
      {
        step: 2,
        title: 'System Selection',
        description: 'Recommend appropriate waterproofing systems for each application.',
      },
      {
        step: 3,
        title: 'Surface Preparation',
        description: 'Prepare surfaces to ensure proper membrane adhesion.',
      },
      {
        step: 4,
        title: 'Installation',
        description: 'Install waterproofing systems following manufacturer specifications.',
      },
      {
        step: 5,
        title: 'Testing & Warranty',
        description: 'Test installations and provide comprehensive warranties.',
      },
    ],
    faqs: [
      {
        question: 'How long do waterproofing systems last?',
        answer: 'Quality systems typically last 15-25 years depending on type and exposure. We provide warranty coverage and maintenance recommendations.',
      },
      {
        question: 'Can you waterproof from inside?',
        answer: 'Yes, for existing structures we offer negative-side waterproofing solutions when exterior access isn\'t practical.',
      },
      {
        question: 'What waterproofing system is best?',
        answer: 'The best system depends on application, substrate, and exposure. We\'ll recommend the most appropriate solution for your specific situation.',
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
  { id: '3', value: '100', suffix: '%', label: 'Client Satisfaction' },
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
    content: 'Mufo Renovation completely transformed our dated space into a stunning modern area. Their attention to detail and craftsmanship exceeded all our expectations.',
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
    role: 'Exterior Designer',
    location: 'Oakville, ON',
    content: 'I regularly recommend Mufo to my clients. Their quality of work is consistently excellent, and they understand how to bring design visions to life.',
    rating: 5,
  },
  {
    id: '4',
    name: 'Michael Chen',
    role: 'Property Manager',
    location: 'North York, ON',
    content: 'We hired Mufo for our condo building balcony restoration project. They completed the work on schedule, maintained excellent communication with residents, and the results speak for themselves.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Sarah & James Mitchell',
    role: 'Homeowners',
    location: 'Etobicoke, ON',
    content: 'After getting multiple quotes, we chose Mufo for our parking garage waterproofing. Best decision we made. Professional team, fair pricing, and outstanding workmanship.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Robert Kovacs',
    role: 'Building Superintendent',
    location: 'Scarborough, ON',
    content: 'The masonry restoration work Mufo did on our heritage building was exceptional. They matched the original brickwork perfectly and completed everything with minimal disruption to tenants.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Amanda Foster',
    role: 'Condo Board President',
    location: 'Vaughan, ON',
    content: 'Mufo handled our high-rise facade renovation flawlessly. Their swing stage team was safe, efficient, and the building looks brand new. Highly recommend for any large-scale project.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Tony Rossi',
    role: 'Commercial Property Owner',
    location: 'Brampton, ON',
    content: 'I have used Mufo for three different properties now. Their consistency and reliability is unmatched. They treat every project with the same level of care and professionalism.',
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
  { slug: 'parking-restoration', label: 'Parking' },
  { slug: 'balcony-restoration', label: 'Balcony' },
  { slug: 'masonry-services', label: 'Masonry' },
  { slug: 'high-rise-renovation', label: 'High-Rise' },
  { slug: 'waterproofing', label: 'Waterproofing' },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'downtown-parking-structure',
    title: 'Downtown Parking Structure Restoration',
    category: 'Parking Structure Restoration',
    categorySlug: 'parking-restoration',
    location: 'Toronto, ON',
    description: 'Complete restoration of a 500-space parking structure including concrete repairs, waterproofing, and traffic coatings.',
    image: '/images/parking/parking-structure.jpg',
    gallery: [
      { src: '/images/parking/parking-web-1.jpg', alt: 'Concrete repair work', caption: 'Structural Repairs' },
      { src: '/images/parking/parking-web-2.jpg', alt: 'Waterproofing membrane', caption: 'Membrane Installation' },
      { src: '/images/parking/parking-web-3.jpg', alt: 'Traffic coating', caption: 'Traffic Coating' },
    ],
    features: ['Concrete Restoration', 'Waterproofing', 'Traffic Coatings', 'Joint Replacement'],
    completionDate: '2024',
    duration: '12 weeks',
  },
  {
    id: '2',
    slug: 'condo-balcony-restoration',
    title: 'Condominium Balcony Restoration',
    category: 'Balcony Restoration',
    categorySlug: 'balcony-restoration',
    location: 'Mississauga, ON',
    description: 'Full balcony restoration for 200-unit condominium including structural repairs, waterproofing, and new railings.',
    image: '/images/projects/balcony-1.jpg',
    gallery: [
      { src: '/images/balcony/balcony-1.jpg', alt: 'Concrete repair', caption: 'Structural Work' },
      { src: '/images/balcony/balcony-2.jpg', alt: 'Railing installation', caption: 'New Railings' },
      { src: '/images/balcony/balcony-3.jpg', alt: 'Waterproofing', caption: 'Membrane Application' },
    ],
    features: ['Structural Repairs', 'Glass Railings', 'Waterproofing', 'Tile Restoration'],
    completionDate: '2024',
    duration: '16 weeks',
  },
  {
    id: '3',
    slug: 'heritage-masonry-restoration',
    title: 'Heritage Building Masonry Restoration',
    category: 'Masonry Services',
    categorySlug: 'masonry-services',
    location: 'Hamilton, ON',
    description: 'Comprehensive masonry restoration of a heritage commercial building including brick replacement and tuckpointing.',
    image: '/images/projects/masonry-1.jpg',
    gallery: [
      { src: '/images/masonry/masonry-3.jpg', alt: 'Brick replacement', caption: 'Brick Matching' },
      { src: '/images/masonry/masonry-5.jpg', alt: 'Tuckpointing', caption: 'Mortar Restoration' },
      { src: '/images/masonry/masonry-8.jpg', alt: 'Completed facade', caption: 'Restored Facade' },
    ],
    features: ['Heritage Brick Matching', 'Tuckpointing', 'Stone Restoration', 'Sealant Application'],
    completionDate: '2024',
    duration: '10 weeks',
  },
  {
    id: '4',
    slug: 'high-rise-facade-renovation',
    title: 'High-Rise Facade Renovation',
    category: 'High-Rise Building Renovation',
    categorySlug: 'high-rise-renovation',
    location: 'Toronto, ON',
    description: 'Complete building envelope renovation for 30-storey residential tower including window replacement and cladding.',
    image: '/images/gallery/swingstage-4.jpg',
    gallery: [
      { src: '/images/wallpanel/wallpanel-2.jpg', alt: 'Cladding work', caption: 'Cladding System' },
      { src: '/images/wallpanel/wallpanel-4.jpg', alt: 'Panel installation', caption: 'Panel System' },
      { src: '/images/gallery/swingstage-2.jpg', alt: 'Facade work', caption: 'Facade Restoration' },
    ],
    features: ['Window Replacement', 'Cladding System', 'Balcony Restoration', 'Energy Upgrades'],
    completionDate: '2023',
    duration: '24 weeks',
  },
  {
    id: '5',
    slug: 'underground-garage-waterproofing',
    title: 'Underground Garage Waterproofing',
    category: 'Waterproofing Solutions',
    categorySlug: 'waterproofing',
    location: 'Oakville, ON',
    description: 'Comprehensive waterproofing of underground parking with injection grouting and membrane installation.',
    image: '/images/projects/waterproofing-1-2.jpg',
    gallery: [
      { src: '/images/projects/waterproofing-2-1.jpg', alt: 'Injection grouting', caption: 'Crack Injection' },
      { src: '/images/parking/parking-caulking-coating.jpg', alt: 'Membrane work', caption: 'Membrane System' },
      { src: '/images/gallery/waterproofing-3.jpg', alt: 'Drainage installation', caption: 'Drainage Work' },
    ],
    features: ['Injection Grouting', 'Membrane Systems', 'Drainage Improvements', 'Concrete Repairs'],
    completionDate: '2024',
    duration: '8 weeks',
  },
  {
    id: '6',
    slug: 'commercial-masonry-repair',
    title: 'Commercial Building Masonry Repair',
    category: 'Masonry Services',
    categorySlug: 'masonry-services',
    location: 'Burlington, ON',
    description: 'Extensive masonry repairs to commercial building including lintel replacement and parapet restoration.',
    image: '/images/masonry/masonry-12.jpg',
    gallery: [
      { src: '/images/masonry/masonry-16.jpg', alt: 'Lintel work', caption: 'Lintel Replacement' },
      { src: '/images/masonry/masonry-20.jpg', alt: 'Parapet repair', caption: 'Parapet Restoration' },
      { src: '/images/masonry/masonry-1.jpg', alt: 'Completed work', caption: 'Finished Project' },
    ],
    features: ['Lintel Replacement', 'Parapet Restoration', 'Brick Replacement', 'Waterproofing'],
    completionDate: '2024',
    duration: '6 weeks',
  },
  {
    id: '7',
    slug: 'condo-tower-renovation',
    title: 'Condominium Tower Renovation',
    category: 'High-Rise Building Renovation',
    categorySlug: 'high-rise-renovation',
    location: 'Vaughan, ON',
    description: 'Multi-phase renovation of residential tower including common areas, balconies, and building systems.',
    image: '/images/wallpanel/wallpanel-1.jpg',
    gallery: [
      { src: '/images/wallpanel/wallpanel-3.jpg', alt: 'Lobby renovation', caption: 'Lobby Upgrade' },
      { src: '/images/gallery/balcony-3.jpg', alt: 'Balcony work', caption: 'Balcony Restoration' },
      { src: '/images/gallery/swingstage-3.jpg', alt: 'Exterior', caption: 'Building Exterior' },
    ],
    features: ['Common Area Renovation', 'Balcony Restoration', 'Roofing Replacement', 'Facade Repairs'],
    completionDate: '2023',
    duration: '20 weeks',
  },
  {
    id: '8',
    slug: 'plaza-deck-waterproofing',
    title: 'Plaza Deck Waterproofing Project',
    category: 'Waterproofing Solutions',
    categorySlug: 'waterproofing',
    location: 'Toronto, ON',
    description: 'Complete plaza deck waterproofing system replacement including membrane, drainage, and paver reinstallation.',
    image: '/images/caulking/caulking-coating.jpg',
    gallery: [
      { src: '/images/gallery/waterproofing-3.jpg', alt: 'Membrane installation', caption: 'New Membrane' },
      { src: '/images/gallery/waterproofing-4.jpg', alt: 'Drainage system', caption: 'Drainage Layer' },
      { src: '/images/projects/waterproofing-2-1.jpg', alt: 'Paver installation', caption: 'Paver Reinstall' },
    ],
    features: ['Membrane Replacement', 'Drainage System', 'Paver Installation', 'Planter Waterproofing'],
    completionDate: '2023',
    duration: '14 weeks',
  },
];

// Gallery Images
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  categorySlug: string;
}

export const galleryCategories = [
  { slug: 'all', label: 'All Photos' },
  { slug: 'parking-restoration', label: 'Parking' },
  { slug: 'balcony-restoration', label: 'Balcony' },
  { slug: 'masonry-services', label: 'Masonry' },
  { slug: 'high-rise-renovation', label: 'High-Rise' },
  { slug: 'waterproofing', label: 'Waterproofing' },
  { slug: 'stucco-services', label: 'Stucco' },
  { slug: 'swing-stage-services', label: 'Swing Stage' },
];

// Helper to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const galleryImagesUnshuffled: GalleryImage[] = [
  // Parking Restoration (10 images)
  { id: 'p2', src: '/images/parking/parking-2.jpg', alt: 'Concrete repair work', title: 'Concrete Repair', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p6', src: '/images/parking/parking-6.jpg', alt: 'Structural reinforcement', title: 'Reinforcement Work', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p8', src: '/images/parking/parking-8.jpg', alt: 'Underground parking work', title: 'Underground Work', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p14', src: '/images/parking/parking-structure.jpg', alt: 'Parking structure', title: 'Structure Work', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p15', src: '/images/parking/parking-work.jpg', alt: 'Parking work in progress', title: 'Work In Progress', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p16', src: '/images/parking/parking-patching.jpg', alt: 'Concrete patching', title: 'Patching Work', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p17', src: '/images/parking/parking-rebar.jpg', alt: 'Rebar installation', title: 'Rebar Work', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p18', src: '/images/parking/rebar-structure.jpg', alt: 'Rebar structure', title: 'Structural Rebar', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p19', src: '/images/parking/parking-web-1.jpg', alt: 'Parking restoration', title: 'Restoration Work', category: 'Parking Restoration', categorySlug: 'parking-restoration' },
  { id: 'p20', src: '/images/parking/parking-web-2.jpg', alt: 'Parking repair', title: 'Repair Work', category: 'Parking Restoration', categorySlug: 'parking-restoration' },

  // Balcony Restoration (5 images)
  { id: 'b1', src: '/images/balcony/balcony-1.jpg', alt: 'Balcony structural repair', title: 'Structural Repair', category: 'Balcony Restoration', categorySlug: 'balcony-restoration' },
  { id: 'b2', src: '/images/balcony/balcony-2.jpg', alt: 'Balcony railing work', title: 'Railing Installation', category: 'Balcony Restoration', categorySlug: 'balcony-restoration' },
  { id: 'b3', src: '/images/balcony/balcony-3.jpg', alt: 'Balcony waterproofing', title: 'Waterproofing', category: 'Balcony Restoration', categorySlug: 'balcony-restoration' },
  { id: 'b9', src: '/images/gallery/balcony-1.jpg', alt: 'Balcony project', title: 'Balcony Project', category: 'Balcony Restoration', categorySlug: 'balcony-restoration' },
  { id: 'b10', src: '/images/gallery/balcony-2.jpg', alt: 'Balcony work', title: 'Balcony Work', category: 'Balcony Restoration', categorySlug: 'balcony-restoration' },

  // Masonry Services (19 images)
  { id: 'm1', src: '/images/masonry/masonry-1.jpg', alt: 'Brick replacement', title: 'Brick Replacement', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm3', src: '/images/masonry/masonry-3.jpg', alt: 'Stone restoration', title: 'Stone Restoration', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm4', src: '/images/masonry/masonry-4.jpg', alt: 'Masonry repair', title: 'Masonry Repair', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm5', src: '/images/masonry/masonry-5.jpg', alt: 'Brick work', title: 'Brick Work', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm6', src: '/images/masonry/masonry-6.jpg', alt: 'Heritage masonry', title: 'Heritage Work', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm7', src: '/images/masonry/masonry-7.jpg', alt: 'Masonry project', title: 'Masonry Project', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm8', src: '/images/masonry/masonry-8.jpg', alt: 'Wall restoration', title: 'Wall Restoration', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm9', src: '/images/masonry/masonry-9.jpg', alt: 'Brick restoration', title: 'Brick Restoration', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm10', src: '/images/masonry/masonry-10.jpg', alt: 'Masonry services', title: 'Masonry Services', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm11', src: '/images/masonry/masonry-11.jpg', alt: 'Stone work', title: 'Stone Work', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm12', src: '/images/masonry/masonry-12.jpg', alt: 'Masonry restoration', title: 'Restoration', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm13', src: '/images/masonry/masonry-13.jpg', alt: 'Building masonry', title: 'Building Work', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm14', src: '/images/masonry/masonry-14.jpg', alt: 'Facade masonry', title: 'Facade Work', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm15', src: '/images/masonry/masonry-15.jpg', alt: 'Repointing work', title: 'Repointing', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm16', src: '/images/masonry/masonry-16.jpg', alt: 'Masonry finishing', title: 'Finishing Work', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm17', src: '/images/masonry/masonry-17.jpg', alt: 'Brick finishing', title: 'Brick Finishing', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm18', src: '/images/masonry/masonry-18.jpg', alt: 'Masonry detail', title: 'Detail Work', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm19', src: '/images/masonry/masonry-19.jpg', alt: 'Stone detail', title: 'Stone Detail', category: 'Masonry Services', categorySlug: 'masonry-services' },
  { id: 'm20', src: '/images/masonry/masonry-20.jpg', alt: 'Completed masonry', title: 'Completed Work', category: 'Masonry Services', categorySlug: 'masonry-services' },

  // High-Rise Renovation (5 images)
  { id: 'h5', src: '/images/wallpanel/wallpanel-1.jpg', alt: 'Wall panel installation', title: 'Panel Installation', category: 'High-Rise Renovation', categorySlug: 'high-rise-renovation' },
  { id: 'h6', src: '/images/wallpanel/wallpanel-2.jpg', alt: 'Building cladding', title: 'Building Cladding', category: 'High-Rise Renovation', categorySlug: 'high-rise-renovation' },
  { id: 'h7', src: '/images/wallpanel/wallpanel-3.jpg', alt: 'Exterior panels', title: 'Exterior Panels', category: 'High-Rise Renovation', categorySlug: 'high-rise-renovation' },
  { id: 'h8', src: '/images/wallpanel/wallpanel-4.jpg', alt: 'Panel system', title: 'Panel System', category: 'High-Rise Renovation', categorySlug: 'high-rise-renovation' },
  { id: 'h9', src: '/images/wallpanel/wallpanel-5.jpg', alt: 'Wall system', title: 'Wall System', category: 'High-Rise Renovation', categorySlug: 'high-rise-renovation' },

  // Waterproofing (2 images)
  { id: 'w11', src: '/images/parking/parking-caulking-coating.jpg', alt: 'Caulking and coating', title: 'Caulking & Coating', category: 'Waterproofing', categorySlug: 'waterproofing' },
  { id: 'w12', src: '/images/caulking/caulking-coating.jpg', alt: 'Sealant application', title: 'Sealant Work', category: 'Waterproofing', categorySlug: 'waterproofing' },

  // Stucco Services (8 images)
  { id: 's3', src: '/images/caulking/caulking-1.jpg', alt: 'Exterior caulking', title: 'Exterior Caulking', category: 'Stucco Services', categorySlug: 'stucco-services' },
  { id: 's4', src: '/images/caulking/caulking-2.jpg', alt: 'Building caulking', title: 'Building Caulking', category: 'Stucco Services', categorySlug: 'stucco-services' },
  { id: 's5', src: '/images/caulking/caulking-3.jpg', alt: 'Caulking project', title: 'Caulking Project', category: 'Stucco Services', categorySlug: 'stucco-services' },
  { id: 's8', src: '/images/tile/tile-1.jpg', alt: 'Tile work', title: 'Tile Work', category: 'Stucco Services', categorySlug: 'stucco-services' },
  { id: 's9', src: '/images/tile/tile-2.jpg', alt: 'Tile installation', title: 'Tile Installation', category: 'Stucco Services', categorySlug: 'stucco-services' },
  { id: 's10', src: '/images/tile/tile-3.jpg', alt: 'Tile project', title: 'Tile Project', category: 'Stucco Services', categorySlug: 'stucco-services' },
  { id: 's11', src: '/images/patching/patching-1.jpg', alt: 'Surface patching', title: 'Surface Patching', category: 'Stucco Services', categorySlug: 'stucco-services' },
  { id: 's12', src: '/images/patching/patching-2.jpg', alt: 'Patching work', title: 'Patching Work', category: 'Stucco Services', categorySlug: 'stucco-services' },

  // Swing Stage Services (3 images)
  { id: 'ss1', src: '/images/stage/stage-1.jpg', alt: 'Swing stage setup', title: 'Stage Setup', category: 'Swing Stage Services', categorySlug: 'swing-stage-services' },
  { id: 'ss2', src: '/images/stage/stage-assembly.jpg', alt: 'Stage assembly', title: 'Stage Assembly', category: 'Swing Stage Services', categorySlug: 'swing-stage-services' },
  { id: 'ss3', src: '/images/stage/stage-weight.jpg', alt: 'Stage equipment', title: 'Equipment Setup', category: 'Swing Stage Services', categorySlug: 'swing-stage-services' },
];

// Export shuffled gallery images
export const galleryImages: GalleryImage[] = shuffleArray(galleryImagesUnshuffled);

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
