import callOfDuty from "../assets/callOgDuty.png";

let games = [
  {
    game:"CALL OF DUTY: BLACK OPS 6",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg"
  },
    {
    game:"ACCOUNT & SECURITY",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg"
  },
    {
    game:"CALL OF DUTY: WARZONE",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/WZV-home-tile.jpg"
  },
    {
    game:"CALL OF DUTY: MOBILE",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg"
  },
    {
    game:"TONY HAWK'S PRO SKATER 3 + 4",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/THPS34-home-tile.png"
  },
    {
    game:"CALL OF DUTY: MODERN WARFARE III",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWIII-home-tile-1c.png"
  },
    {
    game:"CALL OF DUTY: MODERN WARFARE II",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg"
  },
    {
    game:"CALL OF DUTY: MODERN WARFARE",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/MW_module_001.jpg"
  },
    {
    game:"CALL OF DUTY: BLACK OPS COLD WAR",
    image:"https://support.activision.com/content/dam/atvi/support/home/modules/tall/cold-war-home-page-tile.jpg"
  },

]

function Support() {
  return (
    <div>
      <div className="min-h-100 bg-cover bg-center bg-[url(https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6_S3R_hero.jpg)]">
        <div className="flex flex-col justify-center items-center h-100">
          <img src={callOfDuty} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10">
        {games.map((i) => {
          return(
        <div className=" flex flex-col ">
          <p className="text-gray-600 text font-bold" >{i.game}</p>
          <img
            src={i.image}
            alt=""
          />  
        </div>
          )
        })}
      </div>
    </div>
  );
}

export default Support;
