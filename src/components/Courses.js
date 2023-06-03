import React, { useState } from "react";
import WebDevelopment from "../assets/WebDevelopment.jpg";
import  MachineLearning from "../assets/MachineLearning.jpg";
import Artificial from "../assets/Artificial.jpg";
import DeepLearning from "../assets/DeepLearning.jpg";
import DataScience from "../assets/DataScience.jpg";
import AndroidDevelopment from "../assets/AndroidDevelopment.jpg";
import Devops from "../assets/Devops.png";
import CyberSecurity from "../assets/CyberSecurity.jpg";

function Courses() {
  const [imageFirst, setImageFirst] = useState(WebDevelopment);
  const [imageSecond, setImageSecond] = useState(DataScience);
  const installationStepsFirstSet = [
    {
      id: 1,
      header: "Web Development",
      description:
        "Risus ornare fermentum egestas convallis quis. Donec ut pharetra placerat suspendisse.",
      image: WebDevelopment,
    },
    {
      id: 2,
      header: "Machine Learning",
      description:
        "Porttitor penatibus velit risus fermentum facilisis. Sit at phasellus dictumst ut in.",
      image: MachineLearning,
    },
    {
      id: 3,
      header: "Artificial Intelligence",
      description:
        "Tincidunt lobortis non quis egestas pulvinar maecenas. Molestie nulla vestibulum sodales facilisis vitae lacus aliquet.",
      image: Artificial,
    },
    {
      id: 4,
      header: "Deep Learning",
      description:
        "Elit dolor amet quam et. Egestas risus libero diam lorem commodo.",
      image: DeepLearning,
    },
  ];
  const installationStepsSecondSet = [
    {
      id: 5,
      header: "Data Science",
      description:
        "Risus ornare fermentum egestas convallis quis. Donec ut pharetra placerat suspendisse.",
      image: DataScience,
    },
    {
      id: 6,
      header: "Android Development",
      description:
        "Porttitor penatibus velit risus fermentum facilisis. Sit at phasellus dictumst ut in.",
      image: AndroidDevelopment,
    },
    {
      id: 7,
      header: "Dev Ops",
      description:
        "Tincidunt lobortis non quis egestas pulvinar maecenas. Molestie nulla vestibulum sodales facilisis vitae lacus aliquet.",
      image: Devops,
    },
    {
      id: 8,
      header: "Cyber Security",
      description:
        "Elit dolor amet quam et. Egestas risus libero diam lorem commodo.",
      image: CyberSecurity,
    },
  ];
  return (
    <div className="overflow-hidden bg-[#101828]">
      <div className="">
        <div className="p-12 w-full h-full flex flex-col-reverse xl:flex-row md:flex-row">
          <div className="w-full xl:w-1/2 relative">
            <p className="text-[#6172F3] font-bold">INSTALLATION GUIDE</p>
            <p className="font-title text-[#FCFCFD] text-2xl md:text-4xl pt-2 pb-2">
              TCET Linux Installation Steps
            </p>
            <div className="absolute z-30 top-14 left-0 w-48 h-80  bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-100 opacity-30 blur-2xl flex-none order-4 rounded-xl transform -rotate-45"></div>
            <div onMouseLeave={() => setImageFirst(WebDevelopment)}>
              {installationStepsFirstSet.map((step) => (
                <div
                  className="pt-6 cursor-pointer text-sm sm:text-base"
                  onMouseEnter={() => setImageFirst(step.image)}
                  key={step.id}
                >
                  <p className="text-[#98A2B3] font-semibold">
                    {step.id}. {step.header}
                  </p>
                  <p className="text-[#F9FAFB] pt-2">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 hidden xl:block md:block">
              <button className="text-[#F9FAFB] border border-[#667085] rounded-lg p-3">
                {" "}
                Download
              </button>
            </div>
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
            <p className="text-[#6172F3] font-bold hidden xl:block md:block">INSTALLATION GUIDE</p>
            <p className="font-title text-[#FCFCFD] text-4xl pt-2 pb-2 hidden xl:block md:block">
              TCET Linux Installation Steps
            </p>
            <div className="absolute z-30 top-20 right-0 w-48 h-52 bg-gradient-to-r from-teal-100 via-indigo-500 to-pink-100 opacity-30 blur-2xl flex-none order-4 rounded-full transform rotate-45"></div>
            <div onMouseLeave={() => setImageSecond(DataScience)}>
              {installationStepsSecondSet.map((step) => (
                <div
                  className="pt-6 cursor-pointer"
                  onMouseEnter={() => setImageSecond(step.image)}
                  key={step.id}
                >
                  <p className="text-[#98A2B3] font-semibold">
                    {step.id}. {step.header}
                  </p>
                  <p className="text-[#F9FAFB] pt-2">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <button className="text-[#F9FAFB] border border-[#667085] rounded-lg p-3">
                {" "}
                Download
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Courses;
