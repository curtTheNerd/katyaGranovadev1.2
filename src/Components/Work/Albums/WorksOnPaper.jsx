import Gallery from "../Gallery/Gallery";
import { Helmet } from "react-helmet-async";
import { worksOnPaper as images } from "../Data";

const WorksOnPaper = () => {
  return (
    <>
      <Helmet key="works-on-paper">
        <title>Works on Paper - Katya Granova</title>
        <meta
          name="description"
          content="Selected works on paper by Katya Granova from 2019 - 2023."
        />
        <link
          rel="canonical"
          href={`https://katya-granova.com/works-on-paper`}
        />
      </Helmet>
      <div className="w-full pb-12">
        <h2 className="h2-standard">{images[0].title}</h2>
        <Gallery images={images} />
      </div>
    </>
  );
};

export default WorksOnPaper;
