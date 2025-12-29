import HelmetComponent from "../HelmetComponent";

const Homepage = () => {
  return (
    <>
      <HelmetComponent
        title="Katya Granova – Contemporary Painter"
        meta_description="Katya Granova is a contemporary artist based in London, known for her paintings and exhibitions worldwide. Explore her portfolio, media & videos, and more."
        url_fragment=""
      />

      <div className="w-full bg-white pt-2">
        <div className="hidden lg:flex lg:flex-col items-center justify-start w-full h-[calc(100vh-4rem)]">
          <img
            className="w-full max-w-[1000px] h-auto object-contain"
            src="/assets/A song of unrequited love for Britain, exhibition interior 2.jpg"
            alt="exhibition interior 2024, love for Britain"
          />
        </div>
        <div className="flex flex-col lg:hidden items-center justify-start">
          <img
            className="w-full max-w-[600px] h-full object-contain"
            src="/assets/IMG_2624.webp"
            alt="exhibition interior 2024, love for Britain"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;

/*
//  Homepage Version 1.0

// excluded for now during to clients preferences to have <Work /> as Homepage

import img1 from "page;../../Assets/old pics/d/07 Katya_Granova_Zinoviys_kids130x195cm_2020.jpg";
import img2 from "../../Assets/old pics/d/08 Maria_and_her_sisters_195x130cm.jpg";
import img3 from "../../Assets/old pics/d/06 Mums_picnic_51x60cm.jpg";
import img4 from "../../Assets/old pics/d/17 7_father_as_a_baby_1962_Oil_on_canvas_1300_850mm.jpg";
import img5 from "../../Assets/old pics/d/03 pediatric_surgery_1.jpeg";
import img6 from "../../Assets/old pics/d/09 Red_square_1991_148x98.jpg";
import img7 from "../../Assets/old pics/d/12 Ediks_friends_lrr.jpeg";
import img8 from "../../Assets/old pics/d/11 3_Going_to_swim_1961_600_400mm_oil_on_canvas.jpeg";
import img9 from "../../Assets/old pics/d/10 Mum_and_Nietzsche_on_the_party_30x40.jpg";
import img10 from "../../Assets/old pics/d/05 2_surgery_in_the_unknown_patient_oil_on_canvas_19_AUe4SKG.jpg";

const Home = () => {
  return (
    <div className="container home">
      <div className="item item1">
        <img src={img1} alt="samplePic" />
      </div>
      <div className="item item2">
        <img src={img8} alt="samplePic" />
      </div>
      <div className="item item3">
        <img src={img7} alt="samplePic" />
      </div>
      <div className="item item4">
        <img src={img10} alt="samplePic" />
      </div>
      <div className="item item5">
        <img src={img3} alt="samplePic" />
      </div>
      <div className="item item6">
        <img src={img5} alt="samplePic" />
      </div>
      <div className="item item7">
        <img src={img6} alt="samplePic" />
      </div>
      <div className="item item8">
        <img src={img2} alt="samplePic" />
      </div>
      <div className="item item9">
        <img src={img4} alt="samplePic" />
      </div>
      <div className="item item10">
        <img src={img9} alt="samplePic" />
      </div>
    </div>
  );
};

export default Home; */
