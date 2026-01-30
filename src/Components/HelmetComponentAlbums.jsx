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
        href={`https://katya-granova.com/${type}/${year}`}
      />
    </Helmet>
  );
};

export default HelmetComponentAlbums;
