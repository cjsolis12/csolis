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
      <div className="py-6 md:py-12">
        <div className="container px-4 mx-auto">
          {/* Title and description */}
          <div className="md:flex md:-mx-4">
            <div className="px-4 md:w-10/12 xl:w-8/12 mx-auto text-center">
              <h1 className="text-2xl md:text-4xl font-medium mb-4">My Work</h1>
              <p class="text-xl">
                Hover to see more detail about my projects and their links.
              </p>
            </div>
          </div>
          <div className="md:flex md:flex-wrap md:-mx-4 mt-6 pt-6 md:mt-12">
            {projectData.map((project, index) => (
              <div key={index} className="px-4 md:w-1/2 mb-4">
                <motion.img
                  src={project.img.src}
                  alt={project.title}
                  className="w-full h-full object-fit"
                  animate={
                    hoveredIndex === index
                      ? { opacity: 0.6 }
                      : { opacity: 1 }
                  }
                  transition={{ duration: 0.5, delay: 0.3 }}
                  onMouseEnter={() => handleHoverStart(index)}
                  onMouseLeave={handleHoverEnd}
                />
                <h2 className="text-lg font-semibold mt-2">{project.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
