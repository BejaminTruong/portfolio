import Image from "next/image";
import React from "react";

const skillArr = [
  {
    name: "HTML",
    imageURL: "/../public/assets/skills/html.png",
  },
  {
    name: "CSS",
    imageURL: "/../public/assets/skills/css.png",
  },
  {
    name: "JavaScript",
    imageURL: "/../public/assets/skills/javascript.png",
  },
  {
    name: "ReactJS",
    imageURL: "/../public/assets/skills/react.png",
  },
  {
    name: "Tailwind CSS",
    imageURL: "/../public/assets/skills/tailwind.png",
  },
  {
    name: "Firebase",
    imageURL: "/../public/assets/skills/firebase.png",
  },
  {
    name: "Github",
    imageURL: "/../public/assets/skills/github.png",
  },
  {
    name: "NextJS",
    imageURL: "/../public/assets/skills/nextjs.png",
  },
  {
    name: "NodeJS",
    imageURL: "/../public/assets/skills/nodejs.png",
  },
  {
    name: "Chakra UI",
    imageURL: "/../public/assets/skills/chakra-ui.png",
  },
  {
    name: "Material UI",
    imageURL: "/../public/assets/skills/material-ui.png",
  },
  {
    name: "Ant Design",
    imageURL: "/../public/assets/skills/ant-design.png",
  },
  {
    name: "Bootstrap",
    imageURL: "/../public/assets/skills/bootstrap.png",
  },
  {
    name: "MongoDB",
    imageURL: "/../public/assets/skills/mongodb.png",
  },
  {
    name: "MySQL",
    imageURL: "/../public/assets/skills/mysql.png",
  },
  {
    name: "React Native",
    imageURL: "/../public/assets/skills/react.png",
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
