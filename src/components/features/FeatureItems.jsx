import React from "react";
import { HiArrowRight } from "react-icons/hi";
const FeatureItems = ({ item: { icon, title, desc } }) => {
  return (
    <div className="px-12 h-72 py-8 overflow-hidden rounded-lg shadow-shadowOne bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-200 group">
      <div className="space-y-4 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
        <span className="text-secondaryColor text-4xl">{icon}</span>
        <h3 className="text-xl md:text-2xl text-gray-300 font-bold font-titleFont">
          {title}
        </h3>
        <p>{desc}</p>
        <span className="text-2xl text-secondaryColor inline-block translate-y-20 group-hover:translate-y-0 transition-transform duration-[600ms]">
          <HiArrowRight />
        </span>
      </div>
    </div>
  );
};

export default FeatureItems;
