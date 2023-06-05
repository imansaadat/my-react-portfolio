import React from "react";
import Title from "../title/Title";
import FeatureItems from "./FeatureItems";
import { featuresData } from "../../data/data";
const Features = () => {
  return (
    <section id="features" className="py-16 border-b-black border-b-[1px]">
      <Title title="features" desc="what i do" fontSize='text-3xl md:text-5xl' styles='text-center' />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuresData.map((item) => (
          <FeatureItems item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;
