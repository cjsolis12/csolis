"use client";
import React, { useState } from "react";
import aboutMe from "../../public/aboutme.jpg";

export default function About() {
  const [selectedContent, setSelectedContent] = useState("default");

  const buttonClicked = (content) => {
    setSelectedContent(content);
  };

  const contentMap = {
    default: (
      <p className="pt-8">
        As a full-stack web developer, I find joy in both frontend and backend
        work. However, I have a special interest in the backend technologies. I
        am fascinated by how different technologies work together to create
        amazing user experiences. Currently, my experience includes working with
        <span className="text-rose-500">
          {" "}
          Node.js, Express, MongoDB, MySQL, and Firebase
        </span>
        . I am eager to expand my knowledge and explore technologies like
        GraphQL, AWS and other cloud based services. I am deeply motivated to
        continue learning and refining my skills to make an impact in tech.
      </p>
    ),
    careerSwap: (
      <p className="pt-8">Before transitioning to tech, I was an elementary teacher for Kindergarten, 3rd, and 4th grades. This experience cultivated my adaptability, patience, and problem-solving skills. It taught me the art of breaking down complex concepts into digestible parts, making learning engaging and accessible.</p>
    ),
    funFacts: <p className="pt-8">Fun Facts: <ul>
      <li> I took all the pictures you see on my site.</li>
      <li> I received "Most Calm and Collected" award from my web bootcamp .</li>
      <li> I have a cat named Melo that watches me code. </li>
      </ul> 
      </p>,
  };
  return (
    <div>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">About Me</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-rose-300 opacity-25"></div>
           
            {contentMap[selectedContent]}
            <div className="pt-12 pb-8 flex space-x-4">
              <button
                onClick={() => buttonClicked("default")}
                className="w-36  bg-rose-300 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded-full"
              >
                Web Developer
              </button>
              <button
                onClick={() => buttonClicked("careerSwap")}
                className="w-36 bg-rose-300 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded-full"
              >
                Career Swap
              </button>
              <button
                onClick={() => buttonClicked("funFacts")}
                className=" w-36 bg-rose-300 hover:bg-rose-400 text-white font-bold py-2 px-4 rounded-full"
              >
                Fun Facts
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img
            src={aboutMe.src}
            alt="About Me"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          ></img>
        </div>
      </div>
    </div>
  );
}
