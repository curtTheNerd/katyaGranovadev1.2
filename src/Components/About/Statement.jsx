import img1 from "../../assets/aboutPics/aboutPic2.jpg";
import img2 from "../../assets/aboutPics/about3.jpg";

const Statement = () => {
  return (
    <div className="flex-center flex-col w-[95%] md:w-[90%] m-auto px-3">
      <h2 className="w-full lg:ml-8">Artist's Statement</h2>

      {/* Layout Desktop */}

      <div className="hidden w-full lg:grid lg:grid-cols-2 gap-8 pb-8">
        <div className="flex-center">
          <p className="p-8">
            My practice is fueled by a desire to penetrate the past and rebel
            against the irreversibility of time. I use vintage photographs as a
            conduit for initiating my painting. These photographs offer me a
            window into collective history, though they are imbued with inherent
            bias and discernment, as the window is cut by the person behind the
            lens.
            <br />
            Through their flaws, the photographs present glimpsed moments of the
            past - preserved to be viewed, yet never truly entered.
            <br />
            <br />
            Being born in the USSR just before its collapse, my childhood
            unfolded amid the ruins of a fading cultural paradigm.
            <br />
            The inherited remnants of my family’s lived experience under Soviet
            rule stood in stark contrast to an education built on a rapidly
            revised and re-written version of the past. From this tension, my
            generation learned early that history cannot be trusted. <br />
            <br />
            As Machiavelli wrote, “Whoever wishes to foresee the future must
            consult the past.” Being born at a point of fissure is to be
            conditioned by absence. My practice responds to that absence as an
            effort to recover, reclaim, and reimagine the past.
          </p>
        </div>

        <div className="flex-center p-4">
          <img
            classname="object-cover top-0 left-0 md:max-w-[80%]"
            src={img1}
            alt="katyaGranova"
          />
        </div>
        <div className="flex-center p-4">
          <img
            classname="object-cover top-0 left-0"
            src={img2}
            alt="katyaGranova"
          />
        </div>
        <div className="flex-center">
          <p className="p-8">
            I alter, abstract, and fictionalize transferred photographic images
            - either of my family or found in flea markets - leaving behind an
            imprint of my own bodily movement through my gestured marks.
            <br />
            By translating the sign of “oldness” into a painted image, I begin
            to control the visual dynamics of the photographic source, impose my
            own subjective position, and organize a formal space for thinking
            through painting. The large formats of my canvases allow me to feel
            them not as a window, but rather as a portal to the past through
            which I can insert my presence.
            <br />I seek to disrupt the linear spatial perspective of the
            photograph, deliberately collapsing distinctions between foreground
            and background, fusing them into a single pictorial mass.
            <br />
            <br />
            My paintings serve as an entrance to a form of sensual interaction
            with a remembered reality, captured in images, driven by my protest
            against the subjectivity of history.
          </p>
        </div>
      </div>

      {/* Layout Tablet/Smartphone */}

      <div className="flex-center flex-col lg:hidden pb-8">
        <div className="flex justify-center items-center">
          <p className="pb-8">
            My practice is fueled by a desire to penetrate the past and rebel
            against the irreversibility of time. I use vintage photographs as a
            conduit for initiating my painting. These photographs offer me a
            window into collective history, though they are imbued with inherent
            bias and discernment, as the window is cut by the person behind the
            lens.
            <br />
            Through their flaws, the photographs present glimpsed moments of the
            past—preserved to be viewed, yet never truly entered.
            <br />
            <br />
            Being born in the USSR just before its collapse, my childhood
            unfolded amid the ruins of a fading cultural paradigm.
            <br />
            The inherited remnants of my family’s lived experience under Soviet
            rule stood in stark contrast to an education built on a rapidly
            revised and re-written version of the past. From this tension, my
            generation learned early that history cannot be trusted. <br />
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
            to control the visual dynamics of the photographic source, impose my
            own subjective position, and organize a formal space for thinking
            through painting. The large formats of my canvases allow me to feel
            them not as a window, but rather as a portal to the past through
            which I can insert my presence.
            <br />I seek to disrupt the linear spatial perspective of the
            photograph, deliberately collapsing distinctions between foreground
            and background, fusing them into a single pictorial mass.
            <br />
            <br />
            My paintings serve as an entrance to a form of sensual interaction
            with a remembered reality, captured in images, driven by my protest
            against the subjectivity of history.
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
  );
};

export default Statement;
