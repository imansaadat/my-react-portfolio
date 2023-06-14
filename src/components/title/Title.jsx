import React from "react";

const Title = ({ title, desc, styles, fontSize }) => {
  return (
    <div className={`flex flex-col gap-2 mb-10 ${styles}`}>
      <h4 className="text-secondaryColor text-base font-light uppercase tracking-wide">
        {title}
      </h4>
      <h2 className={`capitalize text-gray-300 font-bold ${fontSize}`}>
        {desc}
      </h2>
    </div>
  );
};

export default Title;
