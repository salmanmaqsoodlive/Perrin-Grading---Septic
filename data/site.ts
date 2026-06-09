import {
  Mountain,
  Droplets,
  Wrench,
  Shovel,
  TreePine,
  Truck,
  Waves,
} from "lucide-react";

export const site = {
  name: "Perrin's Grading & Septic",
  legalName: "Perrin's Grading & Septic LLC",
  slogan: "Great People, Great Company",
  shortDesc:
    "Professional land grading and septic system installation & repair, built on honest work and decades of dirt-moving experience.",
  phone: "(555) 412-0098",
  phoneHref: "tel:+15554120098",
  email: "office@perrinsgrading.com",
  emailHref: "mailto:office@perrinsgrading.com",
  address: "Serving the greater county region & surrounding areas",
  hours: "Mon – Sat · 7:00 AM – 6:00 PM",
  serviceArea: [
    "Residential lots",
    "Rural acreage",
    "New construction",
    "Farms & estates",
    "Commercial sites",
  ],
  social: {
    facebook: "#",
    instagram: "#",
    google: "#",
  },
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export type Service = {
  slug: string;
  title: string;
  icon: typeof Mountain;
  tagline: string;
  description: string;
  features: string[];
  accent: "red" | "green" | "blue";
  image: string;
};

export const services: Service[] = [
  {
    slug: "land-grading",
    title: "Land Grading",
    icon: Mountain,
    tagline: "Level, drain, and build with confidence",
    description:
      "Precision grading that gives your project the right foundation — proper slope, positive drainage, and a clean, compacted surface ready for whatever comes next.",
    features: [
      "Site & lot grading",
      "Driveway grading",
      "Drainage & slope correction",
      "Pad & foundation prep",
      "Finish grading",
    ],
    accent: "green",
    image: "/gallery/work-09.jpg",
  },
  {
    slug: "septic-installation",
    title: "Septic System Installation",
    icon: Droplets,
    tagline: "Complete systems, done by the book",
    description:
      "Full septic installs engineered for your soil and household — tanks, drain fields, and distribution laid out to pass inspection and perform for decades.",
    features: [
      "New system design & layout",
      "Tank & drain field install",
      "Soil & perc evaluation support",
      "Permitting assistance",
      "Code-compliant installs",
    ],
    accent: "blue",
    image: "/gallery/work-12.jpg",
  },
  {
    slug: "septic-repair",
    title: "Septic Repair",
    icon: Wrench,
    tagline: "Fast, lasting fixes when it matters",
    description:
      "From failing drain fields to broken lines, we diagnose the real problem and repair it right — protecting your property, your health, and your wallet.",
    features: [
      "Drain field repair & replacement",
      "Line & pipe repair",
      "Tank replacement",
      "System diagnostics",
      "Emergency response",
    ],
    accent: "red",
    image: "/gallery/work-24.jpg",
  },
  {
    slug: "excavation",
    title: "Excavation & Earthwork",
    icon: Shovel,
    tagline: "Dig, move, and shape any site",
    description:
      "Trenching, foundation digs, cut-and-fill, and bulk earthmoving handled by operators who know how to move dirt efficiently and safely.",
    features: [
      "Foundation & footer digs",
      "Utility trenching",
      "Cut & fill",
      "Bulk excavation",
      "Backfill & compaction",
    ],
    accent: "green",
    image: "/gallery/work-20.jpg",
  },
  {
    slug: "land-clearing",
    title: "Land Clearing",
    icon: TreePine,
    tagline: "Turn raw land into a buildable site",
    description:
      "Brush, trees, and stumps cleared and hauled so your acreage is ready for grading, building, or farming — clean lines and a fresh start.",
    features: [
      "Brush & undergrowth removal",
      "Tree & stump removal",
      "Lot & acreage clearing",
      "Debris hauling",
      "Site prep",
    ],
    accent: "green",
    image: "/gallery/work-02.jpg",
  },
  {
    slug: "hauling",
    title: "Hauling & Materials",
    icon: Truck,
    tagline: "Gravel, fill, and topsoil delivered",
    description:
      "Our own fleet means reliable delivery and removal — gravel, fill dirt, topsoil, and debris hauled on your schedule without the runaround.",
    features: [
      "Gravel & stone delivery",
      "Fill dirt & topsoil",
      "Driveway material",
      "Debris removal",
      "Dependable scheduling",
    ],
    accent: "blue",
    image: "/gallery/work-30.jpg",
  },
  {
    slug: "pond-building",
    title: "Pond Building & Repair",
    icon: Waves,
    tagline: "Dug, sealed, and built to hold",
    description:
      "From new farm and recreational ponds to repairing leaks and failing dams, we excavate, shape, and seal water features that hold their level and last for years.",
    features: [
      "New pond design & excavation",
      "Dam building & repair",
      "Leak sealing & lining",
      "Dredging & cleanouts",
      "Shoreline & bank shaping",
    ],
    accent: "blue",
    image: "/gallery/work-25.webp",
  },
];

export const stats = [
  { value: 25, suffix: "+", label: "Years of experience" },
  { value: 1200, suffix: "+", label: "Projects completed" },
  { value: 100, suffix: "%", label: "Licensed & insured" },
  { value: 4.9, suffix: "★", label: "Average rating", decimals: 1 },
];

export const whyChooseUs = [
  {
    title: "Owner-Operated, Always",
    description:
      "You work directly with the people moving the dirt — no layers, no excuses, just accountability from start to finish.",
    accent: "red" as const,
  },
  {
    title: "Licensed & Fully Insured",
    description:
      "Every job is backed by proper licensing and full insurance, so your property and your peace of mind are protected.",
    accent: "blue" as const,
  },
  {
    title: "Done Right the First Time",
    description:
      "Proper drainage, correct grade, code-compliant septic — we build it to last, not just to pass.",
    accent: "green" as const,
  },
  {
    title: "Honest, Upfront Pricing",
    description:
      "Clear estimates and straight talk. The number we quote is the number we stand behind.",
    accent: "red" as const,
  },
  {
    title: "Our Own Fleet",
    description:
      "Excavators, dozers, and dump trucks ready to roll means your project stays on schedule.",
    accent: "blue" as const,
  },
  {
    title: "Local & Reliable",
    description:
      "We live and work in this community. Our reputation is built one honest job at a time.",
    accent: "green" as const,
  },
];

export const testimonials = [
  {
    quote:
      "Perrin's graded our lot and installed a full septic system. Crew was on time every day, clean, and the finished grade drains perfectly. Couldn't ask for better.",
    name: "Daniel R.",
    role: "New Home Build",
  },
  {
    quote:
      "Our drain field failed and another company quoted us a fortune. Perrin's found the real issue, fixed it for a fair price, and stood behind the work. Great people.",
    name: "Karen M.",
    role: "Septic Repair",
  },
  {
    quote:
      "They cleared and graded five acres for us. Professional, honest, and the site looked incredible when they finished. I recommend them to everyone.",
    name: "Tom & Lisa P.",
    role: "Acreage Clearing",
  },
  {
    quote:
      "Reliable, fairly priced, and they actually answer the phone. The grading on our driveway has held up through two winters with zero issues.",
    name: "Marcus W.",
    role: "Driveway Grading",
  },
];

export const timeline = [
  {
    year: "The Start",
    title: "Built on a dump truck and a handshake",
    description:
      "Perrin's began with one truck, a strong back, and a simple promise: do honest work and treat people right.",
  },
  {
    year: "Growing Up",
    title: "From grading to full septic systems",
    description:
      "As neighbors and builders kept calling back, we added equipment and expertise — expanding into complete septic installation and repair.",
  },
  {
    year: "The Fleet",
    title: "Our own equipment, our own crew",
    description:
      "Investing in excavators, dozers, and dump trucks let us control quality and schedule, keeping every project moving.",
  },
  {
    year: "Today",
    title: "A trusted name in the dirt",
    description:
      "Hundreds of completed projects later, we're still owner-operated and still living by the same words: Great People, Great Company.",
  },
];
