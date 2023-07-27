import React from "react";

const FooterLinks = ({ item: { title, links } }) => {
  return (
    <div className="w-full">
      <h3 className="text-xl uppercase text-secondaryColor tracking-wider mb-4">{title}</h3>
      <ul className="flex flex-col items-start space-y-3">
        {links.map((link, index) => (
          <li
            key={index}
            className="text-light text-lg tracking-wide font-normal relative cursor-pointer duration-300 hover:text-secondaryColor capitalize after:duration-300 after:content-[''] after:absolute after:-bottom-1 after:w-0 after:h-[1px] after:left-0 after:bg-secondaryColor hover:after:w-full"
          >
            <a href="/">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
