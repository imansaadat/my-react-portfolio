import React from "react";
import { motion } from "framer-motion";
import { designSkillsData, developmentSkillsData } from "../../data/data";
import SkillItems from "./SkillItems";
import Title from "../title/Title";
const Skills = () => {
  return (
    <motion.div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1, transition: { duration: 0.5 } }}
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5}}
      className="w-full grid lg:grid-cols-2 gap-16"
    >
      {/* Design Skill */}
      <div>
        <Title
          title="FEATURES"
          desc="Design Skills"
          fontSize="text-2xl md:text-4xl"
        />
        <div>
          {designSkillsData.map((item, index) => (
            <SkillItems key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Development Skill */}
      <div>
        <Title
          title="FEATURES"
          desc="Development Skills"
          fontSize="text-2xl md:text-4xl"
        />
        <div>
          {developmentSkillsData.map((item, index) => (
            <SkillItems key={index} item={item} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
