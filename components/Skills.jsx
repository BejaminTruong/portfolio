import Image from "next/image";
import React from "react";
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import javascriptImg from '../public/assets/skills/javascript.png'
import reactjsImg from '../public/assets/skills/react.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import firebaseImg from '../public/assets/skills/firebase.png'
import githubImg from '../public/assets/skills/github.png'
import nextjsImg from '../public/assets/skills/nextjs.png'
import nodejsImg from '../public/assets/skills/nodejs.png'
import chakrauiImg from '../public/assets/skills/chakra-ui.png'
import materialuiImg from '../public/assets/skills/material-ui.png'
import antdesignImg from '../public/assets/skills/ant-design.png'
import bootstrapImg from '../public/assets/skills/bootstrap.png'
import mongodbImg from '../public/assets/skills/mongodb.png'
import mysqlImg from '../public/assets/skills/mysql.png'
const skillArr = [
  {
    name: "HTML",
    imageURL: htmlImg,
  },
  {
    name: "CSS",
    imageURL: cssImg,
  },
  {
    name: "JavaScript",
    imageURL: javascriptImg,
  },
  {
    name: "ReactJS",
    imageURL: reactjsImg,
  },
  {
    name: "Tailwind CSS",
    imageURL: tailwindImg,
  },
  {
    name: "Firebase",
    imageURL: firebaseImg,
  },
  {
    name: "Github",
    imageURL: githubImg,
  },
  {
    name: "NextJS",
    imageURL: nextjsImg,
  },
  {
    name: "NodeJS",
    imageURL: nodejsImg,
  },
  {
    name: "Chakra UI",
    imageURL: chakrauiImg,
  },
  {
    name: "Material UI",
    imageURL: materialuiImg,
  },
  {
    name: "Ant Design",
    imageURL: antdesignImg,
  },
  {
    name: "Bootstrap",
    imageURL: bootstrapImg,
  },
  {
    name: "MongoDB",
    imageURL: mongodbImg,
  },
  {
    name: "MySQL",
    imageURL: mysqlImg,
  },
  {
    name: "React Native",
    imageURL: reactjsImg,
  },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillArr.map((i, index) => (
            <div key={index} className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <Image src={i.imageURL} width="64px" height="64px" alt="/" />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{i.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
