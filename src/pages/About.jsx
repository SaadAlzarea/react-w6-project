import image1 from "../assets/image1.png";

let leadership = [
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg",
    name: "Rob Kostich",
    jobTitle: "President",
  },
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg",
    name: "Josh Taub",
    jobTitle: "Chief Operating Officer",
  },
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg",
    name: "Suzie Carr",
    jobTitle: "Chief People Officer",
  },
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg",
    name: "Terri Durham",
    jobTitle: "SVP & General Counsel",
  },
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg",
    name: "David Stohl",
    jobTitle: "PrHead of Development, Call of Dutyesident",
  },
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg",
    name: "Pat Kelly",
    jobTitle: "Head of Creative, Call of Duty",
  },
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg",
    name: "Tyler Bahl",
    jobTitle: "SVP, Head of Marketing",
  },
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/natasha.jpg",
    name: "Natasha Tatarchuk",
    jobTitle: "SVP, Chief Technology Officer",
  },
  {
    image:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg",
    name: "Matt Cox",
    jobTitle: "GM, Call of Duty",
  },
];

let games = [
  {
    gameImg:
      "https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg",
    gameName: "Call of Duty Black Ops 6",
    category: "Mature 17+",
  },
  {
    gameImg:
      "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg",
    gameName: "Call of Duty®: Warzone",
    category: "Mature 17+",
  },
  {
    gameImg:
      "https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg",
    gameName: "Call of Duty Modern Warfare III",
    category: "Mature 17+",
  },
  {
    gameImg:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
    gameName: "Crash Team Rumble",
    category: "Everyone 10+",
  },
  {
    gameImg:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
    gameName: "Hawk's™ Pro Skater™ 1+2",
    category: "Teen",
  },
  {
    gameImg:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg",
    gameName: "Call of Duty®: Mobile",
    category: "Mature 17+",
  },
  {
    gameImg:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg",
    gameName: "Sekiro®: Shadows Die Twice",
    category: "Mature 17+",
  },
  {
    gameImg:
      "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-boxart.png",
    gameName: "SPYRO® Reignited Trilogy",
    category: "Everyone 10+",
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

function About() {
  return (
    <div className="bg-black">
      <div>
        <div className="h-60 md:h-100 lg:h-200 bg-center p bg-[url()]">
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/atvi-about-hero.jpg"
            alt=""
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center pb-10 gap-30">
          <div className="flex flex-col justify-center items-center gap-4 w-4/5">
            <p className="text-3xl font-bold ">OUR MISSION</p>
            <p className="text-sm font-medium text-center border-t border-gray-600 pt-4">
              At Activision, we strive to create the most iconic brands in
              gaming and entertainment. We’re driven by our mission to deliver
              unrivaled gaming experiences for the world to enjoy, together.
              Home to iconic franchises like Call of Duty®, Crash Bandicoot™,
              and Tony Hawk’s™ Pro Skater™, we're a global leader in interactive
              entertainment. Our goal? Delight millions with innovative, fun,
              and engaging games. With a legacy of success, we're pushing
              boundaries with cutting-edge technology and inclusive practices.
              Join us in delivering unforgettable entertainment and seize the
              chance to level up your career.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4  w-4/5">
            <p className="text-center text-3xl font-bold ">ACTIVATE YOUR FUTURE</p>
            <p className="text-sm font-medium text-center border-t  border-gray-600 pt-4 w-full">
              We unite our global player community with epic entertainment,
              focusing on three core pillars:
            </p>
            <p className="text-sm font-medium text-center  pt-4">
              People - fostering talent and learning opportunities.
            </p>
            <p className="text-sm font-medium text-center pt-4">
              Innovation - consistently pushing to iterate and evolve.
            </p>
            <p className="text-sm font-medium text-center  pt-4">
              Excellence - delivering high-quality games, consistently year in
              and year out.
            </p>
            <p className="text-sm font-medium text-center  pt-4">
              Join us at Activision, where inclusivity thrives, and together we
              shape the future of entertainment for our players. Explore open
              roles now!
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold pb-5">OUR VALUES</p>
            <div className="flex flex-col justify-center items-center gap-5 border-t  border-gray-600 pt-4 w-full">
              <img src={image1} alt="" />
              <div>
                <button className=" h-15 w-55 bg-blue-500/50 rounded-full text-white font-bold border-2 border-blue-700 hover:bg-blue-600/50">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="">
              <p className="text-center text-3xl font-bold pb-5">
                OUR LEADERSHIP TEAM
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  border-t  border-gray-600 pt-4 w-full">
                {leadership.map((i) => {
                  return (
                    <div className="flex flex-col justify-center items-center gap-2 m-5">
                      <img src={i.image} alt="" className="h-70 rounded-full" />
                      <p className="text-lg font-medium">{i.name}</p>
                      <p>{i.jobTitle}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="min-h-screen pt-10">
              <p className="text-center text-3xl font-bold pb-5">OUR GAMES</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center items-center  border-t  border-gray-600 pt-4 w-full">
                {games.map((i) => {
                  return (
                    <div className="flex flex-col justify-center items-center gap-3">
                      <div className="">
                        <img
                          src={i.gameImg}
                          alt=""
                          className="h-80 w-60 object-cover rounded-lg"
                        />
                      </div>
                      <p className="text-lg font-bold">{i.gameName}</p>
                      <p className="text-sm text-gray-500 font-medium">
                        {" "}
                        {i.category}{" "}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="min-h-screen pt-10">
              <p className="text-center text-3xl font-bold pb-5">OUR STUDIOS</p>
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
  );
}

export default About;
