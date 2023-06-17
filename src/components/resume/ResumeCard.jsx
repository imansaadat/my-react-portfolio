import React from "react";

const ResumeCard = ({ item: { title, subTitle, result, desc } }) => {
  return (
    <div className="w-full flex group">
      <div className="w-10 h-[6px] bg-black bg-opacity-40 relative mt-16">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
          <span className="w-3 h-3 rounded-full bg-primaryColor inline-flex group-hover:bg-secondaryColor duration-300"></span>
        </span>
      </div>
      <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 px-4 md:px-8 py-4 duration-300 rounded-lg shadow-shadowOne flex flex-col justify-center gap-5 md:gap-8">
        <div className="flex flex-col md:flex-row gap-5 justify-between md:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <h4 className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </h4>
          </div>
          <span className="px-4 py-2 text-center text-secondaryColor bg-black bg-opacity-25 rounded-lg shadow-shadowOne text-sm font-medium">
            {result}
          </span>
        </div>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};

export default ResumeCard;
