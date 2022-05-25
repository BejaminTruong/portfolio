import Image from "next/image";
import React from "react";
import rentalzImg from "../public/assets/projects/RentalZ.png";
import todoapp from "../public/assets/projects/todoapp.jpeg";
import toystore from "../public/assets/projects/toystore.jpeg";
import addsuccess from "../public/assets/projects/rentalz/addsuccess.png";
import confirm from "../public/assets/projects/rentalz/confirm.png";
import deleteimg from "../public/assets/projects/rentalz/delete.png";
import deleteall from "../public/assets/projects/rentalz/deleteall.png";
import description from "../public/assets/projects/rentalz/description.png";
import drawer from "../public/assets/projects/rentalz/drawer.png";
import edit from "../public/assets/projects/rentalz/edit.png";
import editdescription from "../public/assets/projects/rentalz/editdescription.png";
import editmodal from "../public/assets/projects/rentalz/editmodal.png";
import extra from "../public/assets/projects/rentalz/extra.png";
import extrafeatures from "../public/assets/projects/rentalz/extrafeatures.png";
import filter from "../public/assets/projects/rentalz/filter.png";
import filterchecked from "../public/assets/projects/rentalz/filterchecked.png";
import homescreen from "../public/assets/projects/rentalz/homescreen.png";
import nodata from "../public/assets/projects/rentalz/nodata.png";
import search from "../public/assets/projects/rentalz/search.png";
import add from "../public/assets/projects/rentalz/add.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";

const sliderImg = [
  homescreen,
  nodata,
  add,
  addsuccess,
  confirm,
  edit,
  editmodal,
  drawer,
  editdescription,
  description,
  deleteimg,
  deleteall,
  filter,
  filterchecked,
  extra,
  extrafeatures,
  search,
];
const rentalz = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={rentalzImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">RentalZ Mobile App</h2>
          <h3>React Native / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app was built using React Native and used Firebase as a Backend
            to store and interact with data. This is my Mobile Application
            subject's assignment at university, in this app user can
            create/edit/delete different kind of place to live such as house,
            apartment, villa, etc. User can also view the details of each place
            and add a description for that place. User can also filter out their
            favorite places or search by name. The app also have two small extra
            feature which are ring a bell by pressing the button and vibrate the
            device.
          </p>
          <a
            href="https://github.com/BejaminTruong/RentalZ-Hybrid-"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React Native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
      <div className="grid place-items-center mb-2">
        <Slide easing="ease" className="all-slide">
          {sliderImg.map((i) => (
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${i.src})`,
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default rentalz;
