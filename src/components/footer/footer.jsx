import React from "react";
import { FooterLinksData } from "../../data/data";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";
import Media from "../media/Media";
import Logo from "../logo/Logo";
const Footer = () => {
  return (
    <section className="w-full">
      <div className="py-2 max-w-screen-xl mx-auto px-3 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-10 py-16 border-b-black border-b-[1px]">
          <div className="flex flex-col space-y-4">
            <Logo name='iman' />
            <Media />
          </div>
          {/* links */}
          {FooterLinksData.map((item) => (
            <FooterLinks key={item.id} item={item} />
          ))}
        </div>
        <FooterBottom />
      </div>
    </section>
  );
};

export default Footer;
