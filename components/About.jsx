import React from "react";
const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            // I am currently still a student of University of Greenwich
          </p>
          <p className="py-2 text-gray-600">
            I have been studying programming at University for about 3 years.
            Before that, I have always had a knack for technology and working
            with computers because unlike some of my friends who like to play
            sports, I was more draw into video game since highschool. In 2019 I
            started researching and learning about basic programming and follow
            youtube tutorials of HTML & CSS to make some minor beginner web
            projects. After learning programming for a while, I decided to
            choose IT as my major in University.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning javascript and was even more
            enthused with making websites interactive. I then started to buy
            programming courses online/offline and even attended an academy
            called Cybersoft to learn more about javascript, web development. I
            am now spending my time learning and building projects with
            javascript libraries and frameworks like React JS, Nodejs, Nextjs,
            and some other technologies such as Firebase, MongoDB, MySQL, etc.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
