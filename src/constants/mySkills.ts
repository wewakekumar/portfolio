import {
  faJs,
  faHtml5,
  faReact,
  faNodeJs,
  faSass,
  faGitAlt,
  faCss3Alt,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

import html5 from "@/assets/image/html5.png";
import css3 from "@/assets/image/css3.png";

import javascript from "@/assets/image/javascript.png";

import redux from "@/assets/image/redux.svg";

import webpack from "@/assets/image/webpack.png";
import aws from "@/assets/image/aws.png";

import typescript from "@/assets/image/typescript.png";

import jest from "@/assets/image/jest.png";

const mySkills = [
  [
    {
      title: "HTML",
      iconUrl: html5,
    },
    { title: "CSS", iconUrl: css3 },
    { title: "Javascript", iconUrl: javascript },
    { title: "React", faIcon: faReact, style: { color: "#00D8FE" } },
  ],
  [
    { title: "Node", faIcon: faNodeJs, style: { color: "#52A040" } },
    { title: "Redux", iconUrl: redux },
    { title: "Sass", faIcon: faSass, style: { color: "#CF6C9C" } },
    { title: "Webpack", iconUrl: webpack },
  ],
  [
    { title: "Git", faIcon: faGitAlt, style: { color: "#F05134" } },
    { title: "AWS", iconUrl: aws },
    { title: "Typescript", iconUrl: typescript },
  ],
  [
    { title: "Jest", iconUrl: jest },
    { title: "React Testing Library", faIcon: faGitAlt, style: {} },
  ],
];

export { mySkills };
