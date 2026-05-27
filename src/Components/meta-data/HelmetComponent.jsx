import { Helmet } from "react-helmet-async";

const HelmetComponent = ({ props }) => {
  return (
    <Helmet>
      <title>{props.title}</title>
      <meta name="description" content={props.meta_description} />
      <link
        rel="canonical"
        href={`https://katya-granova.com/${props.url_fragment}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.meta_description} />
      <meta
        property="og:url"
        content={`https://katya-granova.com/${props.url_fragment}/`}
      />
      <meta
        property="og:image"
        content="https://katya-granova.com/OpenGraphMetaPNG1200x1200.png"
      />
    </Helmet>
  );
};

export default HelmetComponent;
