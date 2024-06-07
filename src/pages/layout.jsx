import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../components";
import { Logo } from "../assets";

function Layout(props) {
  return (
    <div className={`flex flex-col justify-start items-center `}>
      <div
        id="header"
        className={`flex flex-row justify-between items-center z-50 w-full h-[10vh] text-dimWhite bg-darkSecondary`}
      >
        <div className="ml-[5vw]">
          <img
            src={Logo}
            className="md:hidden rounded w-auto h-[9vh] mt-[1vh]"
          />
        </div>
        <Navigation {...props} />
      </div>
      <div className="flex flex-col w-full h-min overflow-y-auto overflow-x-clip bg-secondary">
        <div id="body" className="flex flex-col">
          <Outlet />
        </div>

        <div
          id="footer"
          className={`hidden md:flex flex-row items-center w-full text-dimWhite`}
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Layout;
