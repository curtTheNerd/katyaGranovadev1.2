import { Helmet } from "react-helmet-async";

const HelmetComponent = ({ title, meta_description, url_fragment }) => {
  return (
    <Helmet key={title}>
      <title>{title} - Katya Granova</title>
      <meta name="description" content={meta_description} />
      <link
        rel="canonical"
        href={`https://katya-granova.com/${url_fragment}/`}
      />
    </Helmet>
  );
};

export default HelmetComponent;
