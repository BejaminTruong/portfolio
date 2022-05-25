import React from "react";
import todoappImg from "../public/assets/projects/todoapp.jpeg";
import rentalzImg from "../public/assets/projects/RentalZ.png";
import ProjectItem from "./ProjectItem";
import moviewebsiteImg from "../public/assets/projects/FE44-Movie-Website.jpg";
import toystore from "../public/assets/projects/toystore.jpeg";
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Movie Website"
            tech="ReactJS"
            backgroundImg={moviewebsiteImg}
            projectUrl="/moviewebsite"
          />
          <ProjectItem
            title="Toy Store"
            tech="ReactJS"
            backgroundImg={toystore}
            projectUrl="/toystore"
          />
          <ProjectItem
            title="Todo App"
            tech="ReactJS"
            backgroundImg={todoappImg}
            projectUrl="/todoapp"
          />
          <ProjectItem
            title="RentalZ Mobile App"
            tech="React Native"
            backgroundImg={rentalzImg}
            projectUrl="/rentalz"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
