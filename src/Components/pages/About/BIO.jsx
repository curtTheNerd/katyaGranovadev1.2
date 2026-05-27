import CV from "./CV";
import HelmetComponent from "../../meta-data/HelmetComponent";
import { MetaDataForHelmet } from "../../meta-data/MetaDataForHelmet";

const BIO = () => {
  const meta = MetaDataForHelmet.biography;
  return (
    <>
      <HelmetComponent props={meta} />
      <div className="flex items-center justify-center flex-col w-[90%] md:w-[80%] xl:w-[90%] m-auto pb-20">
        <h2 className="h2-standard">Biography</h2>
        <p className="w-full">
          Katya Granova (b. 1988, St. Petersburg, Russia) lives and works in
          London. She holds an MA in Painting from the Royal College of Art,
          London (2021); a Certificate in Fine Art from the Paris College of Art
          (2015); and an MA in Art and Space from Kingston University, London
          (2013). In 2017, she completed the New Artistic Strategies program at
          the ICA Moscow. Recent exhibitions include Voices from a Suitcase
          (Shtager Gallery, 2023); When My Babushka Joined the Reich (Barbican
          Art Group Trust, 2022); and A Song of Unrequited Love for Britain
          (RuptureXIBIT Artist-Run Space, 2024). Recent residencies include the
          Barbican Art Group Trust (2022), Aschersleben Sommeratelier (2022) and
          Pilotenkueche (2024). Her work has been recognized with the Bath Open
          Art Prize (2023), Art Works Open (2021), and Signature Art Prize
          (2020); she was a finalist for the Castlegate Art Prize (2020) and the
          Women United Art Prize (2023), received shortlist recognition for the
          Bankley Prize (2019), and was longlisted for both the Contemporary
          British Painting Prize (2023) and the John Moores Painting Prize
          (2020). In 2020, she collaborated with Burberry UK, and in 2021 her
          work entered the permanent collection of the Royal College of Art.
        </p>
        <h2 className="h2-standard mt-12">CV</h2>
        <CV />
      </div>
    </>
  );
};

export default BIO;
