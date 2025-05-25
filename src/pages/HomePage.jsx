import HeroSec from "./HomePageContainer/HeroSec";
import video1 from "../assets/video1.mp4";
import { IoMdArrowDropdown } from "react-icons/io";

let cardData = [
  {
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
    date: "May 20, 2025",
    title: "Stitch Returns in Season 04",
    des: `Following a daring jailbreak conducted by his former adversary, Stitch’s clandestine resurrection is achieved and he returns to the fray with orders to crack the codes needed to uncover the Pantheon moles. Get the backstory on his intense rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving in the Season 04 Battle Pass.`,
  },
  {
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
    date: "May 15, 2025",
    title: "Support C.O.D.E. Military Appreciation Month with USAA",
    des: `The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and the C.O.D.E. Got Your Six Event`,
  },
  {
    image:
      "https://www.tonyhawkthegame.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
    date: "May 09, 2025",
    title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
    des: `THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk’s Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at  `,
  },
  {
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
    date: "May 07, 2025",
    title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
    des: `#TeamRICOCHET Season 03 Recap and Update`,
  },
  {
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp  ",
    date: "May 01, 2025",
    title: "C.O.D.E. celebrates Military Appreciation Month with USA",
    des: `The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack, the C.O.D.E. Got Your Six Event, Kane Brown High Road Challenge, and more.`,
  },
  {
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
    date: "Apr 29, 2025",
    title: "Black Ops 6 Season 03 Reloaded: All the Details",
    des: `Season 03 Reloaded brings two new Multiplayer maps, Directed Mode for Shattered Veil, and new updates to Verdansk. Get new Loadout items like the Vendetta Perk and the Ladra SMG and participate in new events and more when the mid-season update launches on May 1!`,
  },
];

function HomePage() {
  return (
    <div className="">
      <div className="">
        <video
          src={video1}
          className="w-full h-screen object-cover "
          autoPlay
          loop
          muted
        />
      </div>
      <div className="flex w-full lg:w-200 justify-center items-center">
        <div className="absolute top-52 p-5 ">
          <img
            src="https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blackops6/common/black-ops-6-full-logo.png"
            alt=""
          />
          <p className="text-white text-2xl font-medium text-center mt-3">
            Forced to go rogue. Hunted from within
          </p>
          <p className="text-white text-2xl font-medium text-center">
            This is Black Ops 6.{" "}
          </p>
          <div className="mt-5 flex flex-col lg:flex-row justify-center gap-9 items-center">
            <button className=" h-15 w-55 bg-blue-500/50 rounded-full text-white font-bold border-4 border-blue-700 hover:bg-blue-600/50">
              PLAY WITH GAME PASS
            </button>
            <button className="h-15 w-55 border-2 border-white rounded-full text-white font-bold  hover:bg-blue-600/50 hover:border-blue-700">
              VISIT SITE
            </button>
          </div>
        </div>
      </div>
      {/* <div className="hidden sticky top-135 p-5 lg:flex justify-end w-full">
        <img
          className="h-20"
          src="https://imgs.callofduty.com/content/dam/atvi/global/ratings/esrb/cod-hub-esrb-en.png"
          alt=""
        />
      </div> */}
      <div className="mt-14">
        <div>
          <div className="flex justify-center items-center mb-5 border-b-blue-50">
            <p className="text-white text-3xl font-bold border-b-blue-50 ">
              Latest News & Articles
            </p>
          </div>
          <div className="flex justify-center items-start border-1 border-t-white border-b-white lg:h-21">
            <ul className="flex justify-between items-center gap-10 lg:w-200 md:w-200 w-full lg:h-20">
              <li className="flex items-center lg:text-2xl text-white lg:border-b-4 lg:h-20 font-medium p-2 lg:border-b-blue-800 lg:bg-blue-400/55">
                ALL NEWS
              </li>
              <li className=" lg:hidden md:hidden">
                <IoMdArrowDropdown className="text-white text-3xl" />
              </li>
              <li>
                <img
                  className="hidden lg:flex md:flex w-30 hover:border-b-4   lg:h-20 p-2  hover:border-b-blue-800 hover:bg-blue-400/55"
                  src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="hidden lg:flex md:flex w-30 hover:border-b-4  h-20  p-2 hover:border-b-blue-800 hover:bg-blue-400/55"
                  src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="hidden lg:flex md:flex w-30 hover:border-b-4  h-20 p-2  hover:border-b-blue-800 hover:bg-blue-400/55"
                  src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg"
                  alt=""
                />
              </li>
              <li>
                <img
                  className="hidden lg:flex md:flex w-30 hover:border-b-4 h-20 p-2  hover:border-b-blue-800 hover:bg-blue-400/55"
                  src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png"
                  alt=""
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:m-15 m-5">
          {cardData.map((i) => {
            return (
              <div className="card h-120 md:h-170 lg:h-170 border text-white rounded-2xl">
                <div>
                  <img src={i.image} alt="" className="rounded-t-2xl" />
                </div>
                <div className="flex flex-col gap-4 mt-4 p-3">
                  <p className="text-xs ">{i.date}</p>
                  <p className="text-2xl font-bold">{i.title}</p>
                </div>
                <div>
                  <p className="hidden md:block lg:block mt-3 p-3">{i.des}</p>
                </div>
                <div className="flex justify-start items-center text-blue-800 p-3">
                  <p className="text-sm font-bold">READ MORE</p>
                  <IoMdArrowDropdown className=" text-3xl rotate-270" />
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex flex-col lg:flex-row justify-center gap-9 items-center">
          <button className="h-15 w-55 border-2 border-white rounded-full text-white font-bold hover:border-4 hover:bg-blue-600/50 hover:border-blue-700">
            VIEW ALL
          </button>
        </div>
        <div className="mt-15">
          <div className="  bg-cover bg-center h-100 w-full bg-[url(https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg)]">
            <div className="flex  md:pl-10 lg:pl-10 h-100 justify-center md:justify-start lg:justify-start items-center bg-gradient-to-r from-black to-white/5 ">
              <div className="md:w-75 lg:w-75 w-70 flex flex-col justify-center md:justify-start lg:justify-start items-start gap-3">
                <p className="text-white text-3xl font-medium text-center md:text-left lg:text-left">
                  We're here to help!
                </p>
                <p className="text-white text-lx text-center md:text-left lg:text-left">
                  Get answers to frequently asked questions, check server
                  status, and engage with a support expert
                </p>
                <button className="ml-6 lg:ml-0 md:ml-0 h-15 w-55 border-2 border-white rounded-full text-white font-bold hover:border-4 hover:bg-blue-600/50 hover:border-blue-700">
                  VISIT SUPPORT
                </button>
              </div>
            </div>
          </div>
          <div className="  bg-cover bg-left lgh-100 w-full bg-[url(https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png)]">
            <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center h-100 w-full img2">
              <div className="mt-20 md:mt-0 lg:mt-0 w-100 flex flex-col justify-center items-center gap-4">
                <p className="text-blue-700 text-5xl font-bold">Have Fun</p>
                <p className="text-white text-3xl text-center ">
                  Learn more about job opportunities
                </p>
                <button className="h-15 w-55 border-2 border-white rounded-full text-white font-bold hover:border-4 hover:bg-blue-600/50 hover:border-blue-700">
                  JOIN US
                </button>
              </div>
              <div className="text-white">
                <p className="hidden md:flex lg:flex text-2xl font-bold">
                  OUR TEAMS
                </p>
                <div className="hidden md:flex lg:flex w-100 gap-8 text-lg">
                  <ul>
                    <li>Game Design</li>
                    <li>Art & Animation</li>
                    <li>Brand Management</li>
                    <li>Production</li>
                    <li>Quality Assurance</li>
                  </ul>
                  <ul>
                    <li>Customer Support</li>
                    <li> Studio Operations</li>
                    <li>Programming</li>
                    <li>Finance & Accounting</li>
                    <li>Human Resources</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-5 mt-5 text-white ">
            <p className="md:hidden lg:hidden text-2xl font-bold text-center">
              OUR TEAMS
            </p>
            <div className="flex flex-col w-full md:hidden justify-center items-center text-center lg:hidden text-lg mb-10">
              <ul>
                <li>Game Design</li>
                <li>Art & Animation</li> 
                <li>Brand Management</li>
                <li>Production</li>
                <li>Quality Assurance</li>
              </ul>
              <ul>
                <li>Customer Support</li>
                <li> Studio Operations</li>
                <li>Programming</li>
                <li>Finance & Accounting</li>
                <li>Human Resources</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
