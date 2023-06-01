import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "../media/Media";
const TextIntro = ({name}) => {
  const [text] = useTypewriter({
    words: ["Passionate programmer.","front-end developer.","learner and teacher."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="flex flex-col gap-4 w-full">
      <h4 className="text-lg font-normal uppercase">welcome to my world</h4>
      <h1 className="text-3xl md:text-5xl font-bold text-white">
        <span>Hi, I'm</span> {''}
        <span className="text-secondaryColor capitalize">{name}</span>
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-white">
        a <span className="capitalize">{text}</span>
        <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
      </h2>
      <p className="text-base font-mainFont tracking-wide leading-6 py-6">I am a developer who specializes in front-end development. I have a strong enthusiasm for programming and continuously expanding my knowledge. Furthermore, I take pleasure in imparting my acquired knowledge with others.</p>
      {/* Media */}
      <Media show={true} text='FIND ME IN' />
    </div>
  );
};

export default TextIntro;
