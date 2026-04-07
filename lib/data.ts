export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  description: string;
  client?: string;
  heroVideo: string;
  hoverVideo: string;
  poster: string;
  youtubeEmbed?: string;
  featured?: boolean;
};

export const siteConfig = {
  brand: "MMBARK",
  studioName: "MMBARKSTUDIO",
  personName: "Murshid",
  location: "Kerala, India",
  contact: "Murshid Mubarak, Tirur, Malappuram",
  email: "mmbarkstudio@gmail.com",
  whatsapp: "https://wa.me/918157860499",
  instagram: "https://instagram.com/mmbarkstudio",
  youtube: "https://youtube.com/@tseries",
  title:
    "A Kerala-based filmmaker and editor redefining the digital frame—where local soul meets a global rhythm.",
  heroIntro:
    "Murshid is a Kerala-based filmmaker and editor crafting cinematic visuals, brand stories, and modern digital experiences through MMBARKSTUDIO.",
  address: ["Kerala, India"],
  stats: [
    { label: "Subscribers", value: "50K+" },
    { label: "Followers", value: "120K+" },
    { label: "Views", value: "5M+" },
  ],
  partners: ["Canon", "YouTube", "DJI", "Brands"],
  services: [
    "Cinematic Filmmaking & Production",
    "AI-Powered Brand Advertisements",
    "Professional Post-Production & Editing",
  ],
};

export const works: WorkItem[] = [
  {
    slug: "cinematic-filmmaking-production",
    title: "Cinematic Filmmaking & Production",
    category: "Signature Service",
    date: "2025",
    client: "MMBARKSTUDIO",
    description:
      "A complete visual storytelling experience from concept to final cut with cinematic composition, precision lighting, art direction, and polished color grading.",
    heroVideo: "/videos/works/work-1.mp4",
    hoverVideo: "/videos/works/work-1.mp4",
    poster: "/videos/works/work-1-poster.png",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/j18MRhEfmPk?si=D5uIOiXNVxrLWVhg?autoplay=1&rel=0",
    featured: true,
  },
  {
    slug: "ai-powered-brand-advertisements",
    title: "AI-Powered Brand Advertisements",
    category: "Brand Ads",
    date: "2025",
    client: "Brand Campaign",
    description:
      "Futuristic commercial content using AI-driven visuals, bold concepts, hyper-real environments, and high-impact creative direction for standout brand communication.",
    heroVideo: "/videos/works/work-2.mp4",
    hoverVideo: "/videos/works/work-2.mp4",
    poster: "/videos/works/work-2-poster.png",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/ekQKl4JyFEQ?si=cAwdYh6Lhpn3mXtA?autoplay=1&rel=0",
    featured: true,
  },
  {
    slug: "post-production-editing",
    title: "Professional Post-Production & Editing",
    category: "Editing",
    date: "2025",
    client: "Post Suite",
    description:
      "Raw footage transformed into a high-energy final film using rhythm, seamless transitions, sound design, pacing, and narrative clarity.",
    heroVideo: "/videos/works/work-3.mp4",
    hoverVideo: "/videos/works/work-3.mp4",
    poster: "/videos/works/work-3-poster.png",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/dTsrUZVlmJk?si=IzM1Dllb7rUPYtgF?autoplay=1&rel=0",
  },
  {
    slug: "fashion-reel",
    title: "Fashion Reel",
    category: "Commercial",
    date: "2024",
    client: "Fashion Brand",
    description:
      "A sleek visual piece built for premium branding and digital-first storytelling.",
    heroVideo: "/videos/works/work-4.mp4",
    hoverVideo: "/videos/works/work-4.mp4",
    poster: "/videos/works/work-4-poster.png",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/kvpfmNsQ7XA?si=wjP8gKPbkBue1QNU?autoplay=1&rel=0",
  },
  {
    slug: "travel-film",
    title: "Travel Film",
    category: "Lifestyle",
    date: "2024",
    client: "Tourism",
    description:
      "A mood-heavy travel visual built with motion, atmosphere, and cinematic color work.",
    heroVideo: "/videos/works/work-5.mp4",
    hoverVideo: "/videos/works/work-5.mp4",
    poster: "/videos/works/work-5-poster.png",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/MlS7X6PKfhQ?si=5qOdXvtf6LzRruuc?autoplay=1&rel=0",
  },
  {
    slug: "event-film",
    title: "Event Film",
    category: "Live Coverage",
    date: "2024",
    client: "Event Client",
    description:
      "Fast-cut and emotional event storytelling designed for social and long-form use.",
    heroVideo: "/videos/works/work-6.mp4",
    hoverVideo: "/videos/works/work-6.mp4",
    poster: "/videos/works/work-6-poster.png",
    youtubeEmbed: "https://www.youtube-nocookie.com/embed/X3TfcGdmY6k?si=YTCco0ugnyY7_j_v?autoplay=1&rel=0",
  },
];