import { Helmet } from "react-helmet-async";

const HelmetComponentDynamic = ({ props, type }) => {
  return (
    <Helmet>
      <title>
        {type === "work"
          ? `${props[0].title} works | Katya Granova`
          : `${props[0].title}, ${props[0].date} | Katya Granova`}
      </title>
      <meta
        name="description"
        content={
          type === "work"
            ? `Discover selected paintings, prints, works on paper and more from Katya Granova. Year of origin and method in the title of the Album.`
            : `${props[0].title} – an exhibition by Katya Granova, ${props[0].date}. Paintings and works on canvas.`
        }
      />
      <link
        rel="canonical"
        href={`https://katya-granova.com/exhibition/${props[0].link}`}
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

export default HelmetComponentDynamic;
