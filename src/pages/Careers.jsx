import v2 from "../assets/v2.mp4";
import games from "../assets/games.mp4";
import { MdFavoriteBorder } from "react-icons/md";

let explor = [
  {
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg",
    title: "Our Locations",
  },
  {
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg",
    title: "DE&I",
  },
  {
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg",
    title: "Early Careers",
  },
  {
    img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png",
    title: "Mission & Talent Brand ",
  },
];

let studios = [
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_treyarch.png",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_infinityward.png",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_highmoon-studios.png",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_raven.png",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png",
  },
  {
    img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png",
  },
];

let card = [
  {
    title: "Senior Gameplay Engineer - High Moon Studios",
    category: "Programming/Software Engineering",
    number: "R024108",
    para: "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game... ",
  },
  {
    title: "Lead Analytics Engineer",
    category: "Data Analytics",
    number: "R024154 ",
    para: "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
  },
  {
    title: "Expert Animation Engineer - Infinity Ward",
    category: "Programming/Software Engineering",
    number: "R024307",
    para: "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
  },
  {
    title: "Senior AI Animator - Infinity Ward",
    category: "Animation",
    number: "R022959",
    para: "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
  },
  {
    title: "Level Designer",
    category: "Game/Level Design",
    number: "R025221",
    para: "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
  },
];

function Careers() {
  return (
    <div>
      <div className="h-screen">
        <video
          src={v2}
          className="w-full h-screen object-cover "
          autoPlay
          loop
          muted
        />
      </div>
      <div className="flex flex-col justify-center items-center pt-10">
        <p className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">
          START YOUR GAME CHANGING CAREER
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 m-5 gap-5">
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            ART, ANIMATION & SOUND
          </button>
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            ENGINEERING
          </button>
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            PRODUCTION
          </button>
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            CORPORATE FUNCTIONS
          </button>
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            DESIGN
          </button>
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            MARKETING & SALES
          </button>
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            QUALITY ASSURANCE (QA)
          </button>
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            CENTRAL TECH
          </button>
          <button className=" border-3 w-80 h-13 text-gray-300 border-gray-300">
            MOBILE
          </button>
        </div>
      </div>
      <div>
        <p className="text-center  text-2xl md:text-3xl lg:text-4xl text-white font-bold p-5 mt-5">
          EXPLORE OUR WORLD
        </p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-5 gap-5 ">
          {explor.map((i) => {
            return (
              <div className="flex flex-col justify-start items-center gap-5 border-2 rounded-2xl bg-[#121212]">
                <div>
                  <img src={i.img} alt="" className="rounded-t-2xl" />
                </div>
                <div className="flex flex-col items-center justify-center gap-5 pt-3 pb-3">
                  <p className="text-3xl text-white font-bold text-center">
                    {i.title}
                  </p>
                  <button className=" border-1 rounded-full w-40 h-10 text-gray-300 border-gray-300">
                    LEARN MORE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" drop-shadow-2xl">
        <video
          src={games}
          className="min-h-50  w-full object-cover "
          autoPlay
          loop
          muted
        />
      </div>
      <div className="min-h-150 pt-15">
        <p className="text-center  text-2xl md:text-3xl lg:text-4xl font-bold pb-5 text-white">
          OUR STUDIOS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  border-t  border-gray-600 pt-4 w-full">
          {studios.map((i) => {
            return (
              <div className="flex flex-col justify-center items-center gap-3">
                <div className="">
                  <img src={i.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <p className="text-white text-3xl text-center font-bold m-4">
          Be the First to Apply
        </p>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 m-15">
          {card.map((i) => {
            return (
              <div className="flex flex-col   bg-white gap-3 p-5 rounded-2xl">
                <div className="flex justify-between items-center ">
                  <div className="text-lg font-bold">
                    <p>{i.title}</p>
                  </div>
                  <div>
                    <MdFavoriteBorder className="text-2xl font-bold" />
                  </div>
                </div>
                <div className="flex justify-around items-center text-xs text-gray-500">
                  <p>{i.category}</p>
                  <p>{i.number}</p>
                </div>
                <div className=" text-sm font-medium">
                  <p>{i.para}</p>
                </div>
                <div>
                  <button className="w-25 h-10 bg-gray-800 text-white m-5">
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Careers;
