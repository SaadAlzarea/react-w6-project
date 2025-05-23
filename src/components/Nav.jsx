import { Link } from "react-router-dom";

import video1 from "../assets/video1.mp4";
function Nav() {
  return (
    <div className="w-full h-screen">
      <video
        src={video1}
        className="w-full h-screen object-cover "
        autoPlay
        loop
        muted
      />
      <div className="absolute h-screen w-full top-0 bg-black/50">

      </div>
    </div>
  );
}

export default Nav;

// <div>
//   <Link to="homePage"><li>home</li></Link>
//   <Link to="homePage"><li>home</li></Link>
//   <Link to="homePage"><li>home</li></Link>
//   <Link to="homePage"><li>home</li></Link>
// </div>
