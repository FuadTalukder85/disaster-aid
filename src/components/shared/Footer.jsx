import { FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlSocialPintarest } from "react-icons/sl";
import Container from "../Container";
import logo from "../../../public/disaster-aid-02.png";
import Image from "next/image";
import BtnPrimary from "./BtnPrimary";

const Footer = () => {
  return (
    <div className="bg-primary">
      <Container>
        <footer className="grid grid-cols-12 py-16">
          <div className="col-span-4">
            <Image src={logo} alt="logo"></Image>
            <p className="max-w-[34ch] mt-3 text-white">
              Nulla ultricies justo sit amet ante efficitur, eget pharetra augue
              efficitur. Vestibulum viverra, dolor sit amet ultricies.
            </p>
            <BtnPrimary>Donate Now</BtnPrimary>
          </div>
          <div className="col-span-2 text-white ms-10">
            <h5 className="text-xl font-semibold">Service</h5>
            <ul className="mt-5 space-y-2">
              <li>Donate</li>
              <li>Sponsor</li>
              <li>Fundraise</li>
              <li>Volunteer</li>
              <li>Partner</li>
            </ul>
          </div>
          <div className="col-span-3 text-white">
            <h5 className="text-xl font-semibold">Non profit</h5>
            <ul className="mt-5 space-y-2">
              <li>Differently Abled Kids</li>
              <li>Help Child Cancer</li>
              <li>Clean Pure Water</li>
              <li>Give them Education</li>
              <li>Start a Fundraising</li>
            </ul>
          </div>
          <div className="col-span-3 text-white">
            <h5 className="text-xl font-semibold">Contact</h5>
            <p className="mt-2">
              380 Street Kilda Broklyn Road Melbourne Australia
            </p>
            <div className="flex gap-3 items-center mt-2">
              <FaEnvelope className="text-white text-xl"></FaEnvelope>
              disaster@gmail.com
            </div>
            <div className="flex gap-3 items-center">
              <IoIosCall className="text-white text-2xl"></IoIosCall>+ 98 (000)
              - 9630
            </div>
            <p className="mt-2 flex gap-3">
              <button className="border-2 border-red w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <FaFacebook className="text-white text-xl"></FaFacebook>
              </button>
              <button className="border-2 border-red w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <FaInstagram className="text-white text-xl"></FaInstagram>
              </button>
              <button className="border-2 border-red w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <FaTwitter className="text-white text-xl"></FaTwitter>
              </button>
              <button className="border-2 border-red w-[40px] h-[40px] flex items-center justify-center rounded-full">
                <SlSocialPintarest className="text-white text-xl"></SlSocialPintarest>
              </button>
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
