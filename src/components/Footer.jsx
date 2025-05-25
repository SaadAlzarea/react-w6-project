import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5";

function Footer() {
  return (
    <div className="footer">
      <div className=" min-h-screen">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4  w-full pt-20 lg:justify-around md:justify-around text-white">
          <div className="flex flex-col gap-10">
            {/* follow us */}
            <div className="flex flex-col gap-3 items-center md:items-left lg:items-left ">
              <p className="text-2xl">Follow Us</p>
              <div className="text-white text-2xl flex gap-4">
                <div className="border-1 p-1 rounded-full hover:text-black hover:bg-white">
                  <FaSquareFacebook />
                </div>
                <div className="border-1 p-1 rounded-full hover:text-black hover:bg-white">
                  <FaTwitter />
                </div>
                <div className="border-1 p-1 rounded-full hover:text-black hover:bg-white">
                  <FaYoutube />
                </div>
                <div className="border-1 p-1 rounded-full hover:text-black hover:bg-white">
                  <FaLinkedinIn />
                </div>
                <div className="border-1 p-1 rounded-full hover:text-black hover:bg-white">
                  <TiSocialInstagram />
                </div>
              </div>
            </div>
            {/* images */}
            <div className="hidden md:flex lg:flex gap-3">
              <img
                src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/common/footer/esrb-e-m.jpg"
                alt=""
                className="h-20"
              />
              <img
                src="https://www.activision.com/content/dam/atvi/activision/home/footer/ESRB_updated.jpg"
                alt=""
                className="h-20"
              />
            </div>
          </div>
          {/* section-2 */}
          <div className="flex flex-col md:flex-row lg:flex-row justify-around gap-10 mt-5 md:gap-20 lg:gap-20">
            <div className="flex flex-col items-start gap-4">
              <p className="text-2xl font-medium">Popular Games</p>
              <ul className="ml-4 text-gray-500 text-md">
                <li>Call of Duty</li>
                <li>Tony Hawk Pro Skater</li>
                <li>Crash Bandicoot</li>
                <li>Spyro</li>
                <li>Sekiro</li>
              </ul>
            </div>
            {/* section-3 */}
            <div className="flex flex-col items-start gap-4">
              <p className="text-2xl font-medium ">Company</p>
              <ul className="ml-4 text-gray-500 text-md">
                <li>Press</li>
                <li>Research</li>
                <li>Activision Blizzard</li>
                <li>Contact Us</li>
              </ul>
            </div>
            {/* section-4 */}
            <div className="flex flex-col items-start gap-4">
              <p className="text-2xl font-medium">Legal</p>
              <ul className="ml-4 text-gray-500 text-md">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
                <li>Cookie Settings</li>
                <li>Online Safety</li>
                <li>Applicant Privacy Policy</li>
                <li>Your Privacy Choices</li>
              </ul>
            </div>
          </div>
          {/* section-5 */}
          <div className="hidden md:flex lg:flex flex-col justify-start items-center">
            <div className="flex justify-center items-center border-1 p-1 rounded-full hover:text-black hover:bg-white">
              <IoArrowBack className="text-3xl rotate-90" />
            </div>
            <p>Back to top</p>
          </div>
        </div>
        <div className="flex gap-3 md:hidden lg:hidden justify-center mt-10">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/common/footer/esrb-e-m.jpg"
            alt=""
            className="h-20"
          />
          <img
            src="https://www.activision.com/content/dam/atvi/activision/home/footer/ESRB_updated.jpg"
            alt=""
            className="h-20"
          />
        </div>
        <div className="flex flex-col mt-20">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo.svg"
            alt=""
            className="h-20"
          />
          <p className="text-white text-center">
            Copyright 2025 Activision Publishing, Inc.
          </p>
        </div>
        <div>
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/rainbow-lines.svg"
            alt=""
            className="h-50 bg-cover"
          />
        </div>
      </div>
    </div>
  );
}
export default Footer;
