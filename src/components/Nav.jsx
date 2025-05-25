import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineNavigateNext } from "react-icons/md";

function Nav() {
  return (
    <div className="w-full  bg-black">
      <div>
        <div className="flex text-white h-17 border-b justify-between items-center bg-black/50 ">
          <div className=" flex w-200 gap-20 justify-around lg:justify-center items-center ">
            <img
              src="https://www.activision.com/content/dam/atvi/global/firstparty/activision/activision_logo_white-text.png"
              alt=""
              className=" h-8 "
            />
            <div className="text-4xl lg:hidden">
              <RxHamburgerMenu />
            </div>
            <ul className="hidden lg:flex justify-around items-center gap-7  m-2 text-xl text-gray-400 font-sm ">
              <Link to="">
                <li className="hover:text-white ">
                  <a href="">GAMES</a>
                </li>
              </Link>

              <Link to="about">
                <li className="hover:text-white flex justify-between items-center ga-4">
                  <a href="">ABOUT </a>
                  <MdOutlineNavigateNext className="rotate-90 text-3xl hover:rotate-270" />
                </li>
              </Link>

              <Link to="careers">
                <li className="hover:text-white flex justify-between items-center">
                  <a href="">CAREERS </a>
                  <MdOutlineNavigateNext className="rotate-90 text-3xl hover:rotate-270" />
                </li>
              </Link>

              <Link to="support">
                <li className="hover:text-white flex justify-between items-center">
                  <a href="">SUPPORT </a>
                  <MdOutlineNavigateNext className="rotate-90 text-3xl hover:rotate-270" />
                </li> 
              </Link>
            </ul>
          </div>
          <div className="hidden lg:flex justify-around w-60">
            <button className="h-10 w-25 bg-blue-400/55 rounded-full border-3 border-blue-600/55 font-bold">
              SIGN UP
            </button>
            <button>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;

// <div>
//   <Link to="homePage">
// </Link>
//   <Link to="homePage"><li>home</li></Link>
//   <Link to="homePage"><li>home</li></Link>
//   <Link to="homePage"><li>home</li></Link>
// </div>
