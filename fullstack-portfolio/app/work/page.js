"use client";
import React, { useState } from "react";
import projectData from "@/public/ProjectData";
import { motion } from "framer-motion";

export default function work() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHoverStart = (index) => {
    setHoveredIndex(index);
  };

  const handleHoverEnd = () => {
    setHoveredIndex(null);
  };

  return (
    <>
      <div className="m-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <>
              <motion.img
                src={project.img.src}
                alt={project.title}
                className="w-full h-full object-cover"
                animate={
                  hoveredIndex === index ? { opacity: 0.6 } : { opacity: 1 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              {/* <h2 className="text-lg font-semibold mt-2">{project.title}</h2>
            <p className="text-gray-600 mt-2">{project.description}</p> */}
            </>
          ))}
        </section>
      </div>
    </>
  );
}
