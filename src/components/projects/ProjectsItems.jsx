import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
const ProjectsItems = ({ item: { title, img, desc } }) => {
  return (
    <div className="w-full p-6 xl:p-8 h-[450px] rounded-lg shadow-shadowOne flex flex-col justify-center bg-gradient-to-r from-primaryColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
      <div className="w-full overflow-hidden h-64 rounded-lg">
        <img
          src={img}
          className="w-full object-cover group-hover:-translate-y-[calc(100%-256px)] duration-[2500ms] ease-linear cursor-pointer"
          alt={title}
        />
      </div>
      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base uppercase text-secondaryColor font-normal">
            {title}
          </h3>
          <div className="space-x-2">
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-secondaryColor duration-300 cursor-pointer">
              <BsGithub />
            </span>
            <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-secondaryColor duration-300 cursor-pointer">
              <FaGlobe />
            </span>
          </div>
        </div>
        <p className="text-sm tracking-wide mt-4 hover:text-gray-100 duration-300">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectsItems;
