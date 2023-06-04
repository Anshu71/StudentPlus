import React, { useState } from "react";
import WebDevelopment from "../assets/WebDevelopment.jpg";
import  MachineLearning from "../assets/MachineLearning.jpg";
import Artificial from "../assets/Artificial.webp";
import DeepLearning from "../assets/DeepLearning.jpg";
import DataScience from "../assets/DataScience.webp";
import AndroidDevelopment from "../assets/AndroidDevelopment.jpg";
import Devops from "../assets/Devops.jpg";
import CyberSecurity from "../assets/CyberSecurity.cms";

function Courses() {
  const [imageFirst, setImageFirst] = useState(WebDevelopment);
  const [imageSecond, setImageSecond] = useState(DataScience);

  const coursesFirstSet = [
    {
      id: 1,
      header: "Web Development",
      description:
        "Unlock the World of Web Development: Build, Create, Innovate",
      image: WebDevelopment,
      link: "/Webdev",
    },
    {
      id: 2,
      header: "Machine Learning",
      description:
        "Harness the power of Machine Learning to uncover patterns, make predictions, and unlock the hidden potential of data.",
      image: MachineLearning,
      link: "/Machine.js",
    },
    {
      id: 3,
      header: "Artificial Intelligence",
      description:
        "Embrace the future with Artificial Intelligence, where intelligent machines revolutionize the way we live, work, and interact.",
      image: Artificial,
      link: "/Artificial.js",
    },
    {
      id: 4,
      header: "Deep Learning",
      description:
        "Dive into the depths of Deep Learning, where neural networks learn, adapt, and uncover complex patterns to fuel groundbreaking advancements.",
      image: DeepLearning,
      link: "/DeepLearning.js",
    },
  ];
  const coursesSecoundSet = [
    {
      id: 5,
      header: "Data Science",
      description:
        "Embark on a data-driven journey, unraveling insights and driving innovation through the dynamic field of Data Science.",
      image: DataScience,
      link: "/DataScience.js",
    },
    {
      id: 6,
      header: "Android Development",
      description:
        "Enter the world of Android Development and bring your app ideas to life, shaping the digital experiences of millions.",
      image: AndroidDevelopment,
      link: "/AndroidDev.js",
    },
    {
      id: 7,
      header: "Dev Ops",
      description:
        "Experience the synergy of development and operations with DevOps, streamlining processes and accelerating software delivery for enhanced efficiency and collaboration.",
      image: Devops,
      link: "/Devops.js",
    },
    {
      id: 8,
      header: "Cyber Security",
      description:
        "Explore the realm of Cybersecurity and safeguard digital landscapes against threats, ensuring confidentiality, integrity, and availability in an interconnected world.",
      image: CyberSecurity,
      link: "/Cyber.js",
    },
  ];
  return (
    <div className="overflow-hidden bg-[#101828]" id="Courses">
      <div className="">
        <div className="p-12 w-full h-full flex flex-col-reverse xl:flex-row md:flex-row">
          <div className="w-full xl:w-1/2 relative">
            <p className="text-[#6172F3] font-bold">COURSES LIST</p>
            <p className="font-title text-[#FCFCFD] text-2xl md:text-4xl pt-2 pb-2">
            TechXpertise: Explore Cutting-Edge Courses 1.
            </p>
            <div className="absolute z-30 top-14 left-0 w-48 h-80  bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-100 opacity-30 blur-2xl flex-none order-4 rounded-xl transform -rotate-45"></div>
            <div className="" onMouseLeave={() => setImageFirst(WebDevelopment)}>
              {coursesFirstSet.map((step) => (
                <div
                  className="pt-6 cursor-pointer text-sm sm:text-base"
                  onMouseEnter={() => setImageFirst(step.image)}
                  key={step.id}
                >
                  <a href={step.link}>
                  <p className="text-[#98A2B3] font-semibold">
                    {step.id}. {step.header}
                  </p>
                  <p className="text-[#F9FAFB] pt-2">{step.description}</p>
                  </a>
                </div>
              ))}
            </div>
            {/* <div className="mt-8 hidden xl:block md:block">
              <button className="text-[#F9FAFB] border border-[#667085] rounded-lg p-3">
                {" "}
                Download
              </button>
            </div> */}
          </div>
          <div className="relative w-full flex justify-center align-middle xl:w-1/2">
            <div className="absolute z-30 top-5 w-48 h-52 xl:w-[600px] xl:h-[450px] bg-[#98A2B3] opacity-30 blur-2xl flex-none order-4 rounded-full"></div>
            <div className="z-50 flex align-middle rounded-xl m-2">
              <img className="w-full object-contain rounded-lg" src={imageFirst} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pl-12 pr-12 pb-12 xl:pt-12 md:pt-12 sm:pt-0 w-full h-full flex flex-col xl:flex-row md:flex-row">
          <div className="relative w-full flex justify-center align-middle xl:w-1/2">
            <div className="absolute z-30 top-5 w-48 h-52 xl:w-[600px] xl:h-[450px] bg-[#98A2B3] opacity-30 blur-2xl flex-none order-4 rounded-full"></div>
            <div className="z-50 flex align-middle rounded-xl m-2">
              <img className="w-full object-contain rounded-lg" src={imageSecond} />
            </div>
          </div>
          <div className="relative w-full xl:w-1/2 sm:pl-0 md:pl-6 xl:pl-6">
            <p className="text-[#6172F3] font-bold hidden xl:block md:block">COURSES LIST</p>
            <p className="font-title text-[#FCFCFD] text-4xl pt-2 pb-2 hidden xl:block md:block">
            TechXpertise: Explore Cutting-Edge Courses.
            </p>
            <div className="absolute z-30 top-20 right-0 w-48 h-52 bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-100 opacity-30 blur-2xl flex-none order-4 rounded-full transform rotate-45"></div>
            <div onMouseLeave={() => setImageSecond(DataScience)}>
              {coursesSecoundSet.map((step) => (
                <div
                  className="pt-6 cursor-pointer"
                  onMouseEnter={() => setImageSecond(step.image)}
                  key={step.id}
                >
                  <a href={step.link}>
                  <p className="text-[#98A2B3] font-semibold">
                    {step.id}. {step.header}
                  </p>
                  <p className="text-[#F9FAFB] pt-2">{step.description}</p>
                  </a>
                </div>
              ))}
            </div>
            {/* <div className="mt-8">
              <button className="text-[#F9FAFB] border border-[#667085] rounded-lg p-3">
                {" "}
                Download
              </button>
            </div> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Courses;
