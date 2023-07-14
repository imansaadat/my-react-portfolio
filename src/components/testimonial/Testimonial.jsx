import React from "react";
import Title from "../title/Title";
const Testimonial = () => {

  return (
    <section id="testimonial" className="w-full py-16 border-b-black border-b-[1px]">
      <Title
        title="WHAT CLIENTS SAY"
        desc="Testimonial"
        styles="text-center"
        fontSize="text-3xl md:text-5xl"
      />
    </section>
  );
};

export default Testimonial;