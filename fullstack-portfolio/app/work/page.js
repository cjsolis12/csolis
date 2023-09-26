"use client";
import React, { useState } from "react";
import projectData from "@/public/ProjectData";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


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
       <div className="mt-64 m-10 mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectData.map((item, index) => (
            <motion.div
            variants={{
              hidden: { opacity: 0, y: -200 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.25 }}
              key={index}
              className="flex flex-col relative"
              onMouseEnter={() => handleHoverStart(index)}
              onMouseLeave={handleHoverEnd}
            >
              <motion.img
                src={item.img.src}
                alt={item.title}
                className="object-cover w-full h-full"
                initial={{ opacity: 1 }}
                animate={
                  hoveredIndex === index ? { opacity: 0.6 } : { opacity: 1 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              <h2 className="text-2xl text-white mt-4">{item.title}</h2>
              <motion.div
                className={`overlay ${hoveredIndex === index ? "active" : ""}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className=" overlay-content absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-75 p-4">
                  <p className="text-white text-lg md:text-xl lg:text-xl xl:text-3xl p-4">
                    {item.description}
                  </p>
                  <div className="flex text-3xl">
                    <a
                      href={item.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lilac p-4"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={item.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lilac p-4"
                    >
                      <FaLink />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
