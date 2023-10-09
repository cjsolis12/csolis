"use client";
import React, { useState } from "react";
import projectData from "@/public/ProjectData";
import extraWork from "@/public/extraWork";
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
      <div className="py-6 md:py-12">
        <div className="px-4 mx-auto">
          <div className="md:flex md:-mx-4">
            <div className="px-4 md:w-10/12 xl:w-8/12 mx-auto text-center text-white py-16">
              <h1 className="text-2xl md:text-4xl font-medium mb-4">My Work</h1>
              <p class="text-xl">
                Hover to see more detail about my projects and their links.
              </p>
            </div>
          </div>

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
                  className={`overlay ${
                    hoveredIndex === index ? "active" : ""
                  }`}
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
                        className="text- p-4"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href={item.websiteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue p-4"
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
      </div>
      <div className="projects  pt-40">
        <h2 className="p-8 text-white text-5xl text-center ">
          Other Projects / Work
        </h2>
        <div className="extra-work grid grid-cols-1 md:grid-cols-3 gap-4 justify-center flex-wrap p-8">
          {extraWork.map((extraWork, index) => (
            <div
              key={index}
              className="other-projects text-white border border-white rounded-lg p-8"
            >
              <h3 className="text-center m-4 text-3xl">{extraWork.title}</h3>
              <p className="flex-grow">{extraWork.description}</p>
              <div className="mt-auto text-center">
                <a
                  href={extraWork.link}
                  className="btn-link text-rose-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      ;
    </>
  );
}
