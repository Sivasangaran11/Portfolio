import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaHtml5,
  FaNode,
  FaCss3,
  FaPython,
  FaDatabase
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 style={{ color: "black" }} />,
    CSS: <FaCss3 style={{ color: "black" }}/>,
    Javascript: <DiJavascript1 style={{ color: "black" }}/>,
    Bootstrap: <FaBootstrap style={{ color: "black" }}/>,
    Tailwind: <SiTailwindcss style={{ color: "black" }}/>,
    "C++": <CgCPlusPlus style={{ color: "black" }}/>,
    React: <FaReact style={{ color: "black" }}/>,
    Git: <FaGitAlt style={{ color: "black" }}/>,
    Github: <FaGithub style={{ color: "black" }}/>,
    Npm: <FaNpm style={{ color: "black" }}/>,
    Figma: <FaFigma style={{ color: "black" }}/>,
    Python: <FaPython style={{ color: "black" }}/>,
    Database: <FaDatabase style={{ color: "black" }}/>,
    Node: <FaNode style={{ color: "black" }}/>,
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
