import { Helmet } from "react-helmet-async";

// --- Customize this section as the site evolves ---

const ARTIST = {
  name: "Katya Granova",
  url: "https://katya-granova.com/",
  description:
    "Contemporary painter based in London & Leipzig, known for oil on canvas, acrylic transfer, van Dyke, and paperworks.",
  jobTitle: "Contemporary Painter",
  image: "https://katya-granova.com/OpenGraphMetaPNG1200x1200.png",
  sameAs: [
    // Add social / gallery profile URLs here when available:
    // "https://www.instagram.com/katya.granova",
    // "https://www.artsy.net/artist/katya-granova",
  ],
};

const SECTIONS = [
  { name: "Selected Work", url: "https://katya-granova.com/work/" },
  { name: "Exhibitions", url: "https://katya-granova.com/exhibition/" },
  { name: "News & Shows", url: "https://katya-granova.com/news/" },
  { name: "Biography", url: "https://katya-granova.com/biography/" },
  { name: "Press Coverage", url: "https://katya-granova.com/press-coverage/" },
  { name: "Contact", url: "https://katya-granova.com/contact/" },
];

// --------------------------------------------------

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: ARTIST.name,
  url: ARTIST.url,
  description: ARTIST.description,
  jobTitle: ARTIST.jobTitle,
  image: ARTIST.image,
  ...(ARTIST.sameAs.length > 0 && { sameAs: ARTIST.sameAs }),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: ARTIST.name,
  url: ARTIST.url,
  description: ARTIST.description,
  significantLink: SECTIONS.map((s) => s.url),
};

const SiteStructuredData = () => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
    <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
  </Helmet>
);

export default SiteStructuredData;
