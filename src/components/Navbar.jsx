import { useNavigate, useLocation } from "react-router-dom";
import OfferIcon from "../assets/svg/localOfferIcon.svg?react";
import ExploreIcon from "../assets/svg/exploreIcon.svg?react";
import PersonOutlineIcon from "../assets/svg/personOutlineIcon.svg?react";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 h-[85px] bg-white z-[1000] flex justify-center items-center">
      <nav className="w-full mt-3 overflow-y-hidden">
        <ul className="m-0 p-0 flex justify-evenly items-center">
          <li
            className="cursor-pointer flex flex-col items-center"
            onClick={() => navigate("/")}
          >
            <ExploreIcon
              fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={`mt-1 text-sm font-semibold ${
                pathMatchRoute("/") ? "text-[#2c2c2c]" : "text-[#8f8f8f]"
              }`}
            >
              Explore
            </p>
          </li>
          <li
            className="cursor-pointer flex flex-col items-center"
            onClick={() => navigate("/offers")}
          >
            <OfferIcon
              fill={pathMatchRoute("/offers") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={`mt-1 text-sm font-semibold ${
                pathMatchRoute("/offers") ? "text-[#2c2c2c]" : "text-[#8f8f8f]"
              }`}
            >
              Offers
            </p>
          </li>
          <li
            className="cursor-pointer flex flex-col items-center"
            onClick={() => navigate("/profile")}
          >
            <PersonOutlineIcon
              fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={`mt-1 text-sm font-semibold ${
                pathMatchRoute("/profile") ? "text-[#2c2c2c]" : "text-[#8f8f8f]"
              }`}
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
export default Navbar;
