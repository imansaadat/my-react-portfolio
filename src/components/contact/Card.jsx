import React from "react";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa";
import { contact} from "../../assets";
import { CgMail } from "react-icons/cg";
const Card = () => {
  return (
    <div className="w-full h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lg:p-6 rounded-lg shadow-shadowOne flex flex-col space-y-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contact}
        alt="contactImg"
      />
      <div className="flex flex-col space-y-4">
        <h3 className="text-3xl font-bold text-white capitalize">
          iman saadat
        </h3>
        <p className="text-lg font-normal capitalize text-gray-400">
          Front-End Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          I'm a passionate front-end developer who loves to learn and share my
          knowledge. Let's build something amazing together.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-light">+98 9129323358</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-light">e.saadat72@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex space-x-5">
          <a href="https://www.linkedin.com/in/imansaadat/">
            <span className="mediaIcon">
              <FaLinkedinIn />
            </span>
          </a>
          <a href="mailto:e.saadat72@gmail.com">
            <span className="mediaIcon text-2xl">
              <CgMail />
            </span>
          </a>
          <a href="https://t.me/imansaadat72">
            <span className="mediaIcon">
              <FaTelegram />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
