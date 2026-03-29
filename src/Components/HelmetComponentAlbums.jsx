import { Helmet } from "react-helmet-async";

const HelmetComponentAlbums = ({ year, type, exhibition_title }) => {
  // provides meta-data from album arrays in Data.jsx for work and exhibition galleries
  return (
    <Helmet key={year}>
      <title>
        {year} {type === "work" ? "Works" : "Exhibition"} - Katya Granova
      </title>
      <meta
        name="description"
        content={`Selected ${type === "work" ? "paintings and artworks" : "Exhibition"} by Katya Granova from ${year}. ${exhibition_title}`}
      />
      <link
        rel="canonical"
        href={`https://katya-granova.com/${type}/${year}/`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${year} ${type === "work" ? "Works" : "Exhibition"} - Katya Granova`} />
      <meta property="og:description" content={`Selected ${type === "work" ? "paintings and artworks" : "Exhibition"} by Katya Granova from ${year}. ${exhibition_title}`} />
      <meta property="og:url" content={`https://katya-granova.com/${type}/${year}/`} />
      <meta property="og:image" content="https://katya-granova.com/OpenGraphMetaPNG1200x1200.png" />
    </Helmet>
  );
};

export default HelmetComponentAlbums;
