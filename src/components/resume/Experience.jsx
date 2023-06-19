import React from 'react'
import Title from "../title/Title";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";
const Experience = ({ educationData, experienceData }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full grid lg:grid-cols-2 gap-16"
    >
      {/* Education */}
      <div>
        <Title
          title="2010 - 2022"
          desc="Job Experience"
          fontSize="text-2xl md:text-4xl"
        />
        <div className="w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {educationData.map((item) => (
            <ResumeCard item={item} key={item.id} />
          ))}
        </div>
      </div>
      {/* Experience */}
      <div>
        <Title
          title="2001 - 2020"
          desc="Trainer Experience"
          fontSize="text-2xl md:text-4xl"
        />
        <div className="w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {experienceData.map((item) => (
            <ResumeCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Experience