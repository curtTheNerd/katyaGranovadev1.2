import img1 from "../../../assets/aboutPics/aboutPic2.jpg";
import img2 from "../../../assets/aboutPics/about3.jpg";
import HelmetComponent from "../../meta-data/HelmetComponent";
import { MetaDataForHelmet } from "../../meta-data/MetaDataForHelmet";

const Statement = () => {
  const meta = MetaDataForHelmet.statement;
  return (
    <>
      <HelmetComponent props={meta} />
      <div className="flex items-center justify-center flex-col w-[90%] md:w-[80%] xl:w-[90%] max-w-[1440px] xl:pl-4 m-auto xl:m-0 pb-20">
        <h2 className="h2-standard">Artist's Statement</h2>

        {/* Layout Desktop */}

        <div className="hidden w-full lg:grid lg:grid-cols-2 gap-12 pb-8">
          <div className="flex-center">
            <p className="p-0">
              My practice is fueled by a desire to penetrate the past and rebel
              against the irreversibility of time. I use vintage photographs as
              a conduit for initiating my painting. These photographs offer me a
              window into collective history, though they are imbued with
              inherent bias and discernment, as the window is cut by the person
              behind the lens.
              <br />
              Through their flaws, the photographs present glimpsed moments of
              the past - preserved to be viewed, yet never truly entered.
              <br />
              <br />
              Being born in the USSR just before its collapse, my childhood
              unfolded amid the ruins of a fading cultural paradigm.
              <br />
              The inherited remnants of my family’s lived experience under
              Soviet rule stood in stark contrast to an education built on a
              rapidly revised and re-written version of the past. From this
              tension, my generation learned early that history cannot be
              trusted. <br />
              <br />
              As Machiavelli wrote, “Whoever wishes to foresee the future must
              consult the past.” Being born at a point of fissure is to be
              conditioned by absence. My practice responds to that absence as an
              effort to recover, reclaim, and reimagine the past.
            </p>
          </div>

          <div className="flex-center p-0">
            <img
              classname="object-cover top-0 left-0 md:max-w-[80%]"
              src={img1}
              alt="katyaGranova"
            />
          </div>
          <div className="flex-center p-0">
            <img
              classname="object-cover top-0 left-0"
              src={img2}
              alt="katyaGranova"
            />
          </div>
          <div className="flex-center">
            <p className="p-0">
              I alter, abstract, and fictionalize transferred photographic
              images - either of my family or found in flea markets - leaving
              behind an imprint of my own bodily movement through my gestured
              marks.
              <br />
              By translating the sign of “oldness” into a painted image, I begin
              to control the visual dynamics of the photographic source, impose
              my own subjective position, and organize a formal space for
              thinking through painting. The large formats of my canvases allow
              me to feel them not as a window, but rather as a portal to the
              past through which I can insert my presence.
              <br />I seek to disrupt the linear spatial perspective of the
              photograph, deliberately collapsing distinctions between
              foreground and background, fusing them into a single pictorial
              mass.
              <br />
              <br />
              My paintings serve as an entrance to a form of sensual interaction
              with a remembered reality, captured in images, driven by my
              protest against the subjectivity of history.
            </p>
          </div>
        </div>

        {/* Layout Tablet/Smartphone */}

        <div className="flex-center flex-col lg:hidden pb-8">
          <div className="flex justify-center items-center">
            <p className="pb-8">
              My practice is fueled by a desire to penetrate the past and rebel
              against the irreversibility of time. I use vintage photographs as
              a conduit for initiating my painting. These photographs offer me a
              window into collective history, though they are imbued with
              inherent bias and discernment, as the window is cut by the person
              behind the lens.
              <br />
              Through their flaws, the photographs present glimpsed moments of
              the past—preserved to be viewed, yet never truly entered.
              <br />
              <br />
              Being born in the USSR just before its collapse, my childhood
              unfolded amid the ruins of a fading cultural paradigm.
              <br />
              The inherited remnants of my family’s lived experience under
              Soviet rule stood in stark contrast to an education built on a
              rapidly revised and re-written version of the past. From this
              tension, my generation learned early that history cannot be
              trusted. <br />
              <br />
              As Machiavelli wrote, “Whoever wishes to foresee the future must
              consult the past.” Being born at a point of fissure is to be
              conditioned by absence. My practice responds to that absence as an
              effort to recover, reclaim, and reimagine the past.
              <br />
              <br />I alter, abstract, and fictionalize transferred photographic
              images - either of my family or found in flea markets - leaving
              behind an imprint of my own bodily movement through my gestured
              marks.
              <br />
              By translating the sign of “oldness” into a painted image, I begin
              to control the visual dynamics of the photographic source, impose
              my own subjective position, and organize a formal space for
              thinking through painting. The large formats of my canvases allow
              me to feel them not as a window, but rather as a portal to the
              past through which I can insert my presence.
              <br />I seek to disrupt the linear spatial perspective of the
              photograph, deliberately collapsing distinctions between
              foreground and background, fusing them into a single pictorial
              mass.
              <br />
              <br />
              My paintings serve as an entrance to a form of sensual interaction
              with a remembered reality, captured in images, driven by my
              protest against the subjectivity of history.
            </p>
          </div>

          <div className="flex-center p-4 pb-8">
            <img
              classname="object-cover top-0 left-0 md:max-w-[80%]"
              src={img1}
              alt="katyaGranova"
            />
          </div>
          <div className="flex-center p-4 pb-16">
            <img
              classname="object-cover top-0 left-0"
              src={img2}
              alt="katyaGranova"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Statement;
