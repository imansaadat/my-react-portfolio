import React from "react";
import { motion } from "framer-motion";
const SkillItems = ({ item: { title, percent } }) => {
  return (
    <div className="overflow-x-hidden mb-6">
      <p className="text-sm uppercase font-medium tracking-widest">{title}</p>
      <div className="w-full h-2 bg-black bg-opacity-40 rounded-md inline-flex mt-2">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          style={{width:percent}}
          className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative">
          <span className="absolute -top-7 right-0">{percent}</span>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillItems;
