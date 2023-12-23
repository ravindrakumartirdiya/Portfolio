import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { html, css, tailwind, javascript, reactjs, git } from "../assets";

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  {
    name: "git",
    icon: git,
  },
  
];

const Tech = () => {
  return (
    <div className='flex max-w-7xl flex-wrap justify-center items-center gap-4 lg:gap-10 lg:mx-24'>
      {technologies.map((technology) => (
        <div className='w-20 h-20' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech);
