import React from "react";
import Container from "./Container";
import BtnPrimary from "./shared/BtnPrimary";

const Banner = () => {
  return (
    <div className="bg-[url(../../public/bannerImg.jpg)] bg-no-repeat bg-cover py-28">
      <Container>
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-8 pr-48">
            <h1 className="text-white text-6xl leading-20 font-black text-shadow">
              Empowering Communities, Saving Lives!
            </h1>
            <p className="mt-10 text-white font-semibold text-2xl text-shadow">
              Be the Change: Volunteer, Donate, Save Lives!
            </p>
            <div className="space-x-3 mt-5">
              <BtnPrimary>Report a Crisis</BtnPrimary>
              <BtnPrimary>Join as a Volunteer</BtnPrimary>
              <BtnPrimary>Donate Now</BtnPrimary>
            </div>
          </div>
          <div className="col-span-4 py-10 px-10 rounded-md backdrop-blur-3xl">
            <h5 className="text-white text-3xl">
              Assistance Available for Disaster Area!
            </h5>
            <p className="mt-5 text-white ">
              Financial assistance is available for individuals in Kentucky who
              have disaster-related needs due to flooding.
            </p>
            <div className="flex justify-end mt-16">
              <BtnPrimary>Learn more</BtnPrimary>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
