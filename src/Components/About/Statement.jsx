import img1 from "../../assets/aboutPics/aboutPic2.jpg";
import img2 from "../../assets/aboutPics/about3.jpg";
import img3 from "../../assets/aboutPics/aboutPic.jpg";

const Statement = () => {
  return (
    <div className="container about">
      <h2 className="title">
        {
          //About Me
        }
      </h2>

      <div className="aboutContentGrid">
        <div className="item">
          <p>
            The wish to penetrate the past, to rebel against the irreversibility
            of time - this is what fuels my practice. I use vintage photographs
            as a means of launching my painting. They allow me to have a window
            into the past, but this window is cut by the person behind the lens,
            so it is biased and selective. Photographs tease us with a glanced
            moment but they do not allow the moment to be entered into. So as a
            time machine, the photograph is rather flawed.<br></br>
            <br></br>
            Why do I have this desire to enter the past in the first place?
            Being born in the USSR just prior to its collapse, I spent my
            childhood in the ruins of its cultural paradigm. The oral narratives
            passed down to me by family recounting the Soviet era were rather
            contradictory, my school history textbooks were being altered and
            re-written in front of my eyes, so my generation learned early that
            history cannot be trusted. They say to know the future one must know
            the past - but what happens if you have no past, what happens when
            you’re born at the point of a fissure, a crack, a departure?
          </p>
        </div>

        <div className="item">
          <img src={img1} alt="katyaGranova" />
        </div>
        <div className="item">
          <img src={img2} alt="katyaGranova" />
        </div>
        <div className="item">
          <p>
            In my practice I alter, abstract, and fictionalize transferred
            photographic images, either of my family or found in flea markets,
            leaving an imprint of my own bodily movement in them through my
            gestured marks - and this movement driven by the desire to reclaim
            the past.<br></br>
            <br></br>
            By translating the sign of “oldness” into a painted image I can
            control the visual dynamics of the photographic image, start to
            impose my own subjective position, organize a formal space and think
            through painting. The large formats of my canvases allow me to feel
            them not as a window, but rather as a portal to the past, through
            which I can insert my presence.<br></br>
            <br></br>I seek to disrupt the linear spatial perspective of the
            photograph, so I deliberately destroy the relationship between the
            foreground and background, mixing them into a single pictorial mass
            of slimy paint.
          </p>
        </div>
      </div>

      <div className="content_spacer"></div>

      <div className="aboutContentFlex">
        <div className="item">
          <p>
            Therefore, my painting is a way to enter into some sensual
            interaction with the reality from the past, <br></br>captured in
            images, driven by my protest against the subjectivity of history.
          </p>
        </div>

        <div className="content_spacer"></div>

        <div className="item">
          <img src={img3} alt="katyaGranova" />
        </div>
      </div>
    </div>
  );
};

export default Statement;
