import { Helmet } from "react-helmet-async";

const HelmetComponent = ({ title, meta_description, url_fragment }) => {
  // provides meta-data from separate default content components
  return (
    <Helmet key={title}>
      <title>{title} - Katya Granova</title>
      <meta name="description" content={meta_description} />
      <link
        rel="canonical"
        href={`https://katya-granova.com/${url_fragment}/`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} - Katya Granova`} />
      <meta property="og:description" content={meta_description} />
      <meta property="og:url" content={`https://katya-granova.com/${url_fragment}/`} />
      <meta property="og:image" content="https://katya-granova.com/OpenGraphMetaPNG1200x1200.png" />
    </Helmet>
  );
};

export default HelmetComponent;
