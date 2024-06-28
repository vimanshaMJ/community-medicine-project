import { Outlet } from "react-router-dom";
import logo from "../images/logo.png";
import frame1 from "../images/frame-1.png";
import frame2 from "../images/Frame-2.png";

export default function BaseLayout() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="w-20 h-20 mt-3 ml-3">
          <img src={logo} alt="" />
        </div>

        <div className="absolute top-0 right-0 w-20 h-20">
          <img src={frame1} alt="" />
        </div>
      </div>
      <Outlet />
      <div className="absolute bottom-0 left-0 w-20 h-20">
        <img src={frame2} alt="" />
      </div>
    </div>
  );
}
