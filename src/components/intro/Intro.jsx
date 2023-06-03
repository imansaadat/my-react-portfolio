import React from "react";
import ImageIntro from './ImageIntro'
import TextIntro from './TextIntro'
const Intro = () => {
  return (
    <section
      id="home"
      className="w-full grid items-center gap-12 lg:grid-cols-2 pt-10 pb-20 border-b-black border-b-[1px]"
    >
      <TextIntro name="iman saadat" />
      <ImageIntro />
    </section>
  );
};

export default Intro;
