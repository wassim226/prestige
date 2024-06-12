import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navigation } from "../components";
import { Logo } from "../assets";
import { Typography } from "@mui/material";

function Layout(props) {
  return (
    <div className={`flex flex-col justify-start items-center `}>
      <div
        id="header"
        className={`flex flex-row justify-between items-center z-50 w-full h-[10vh] text-dimWhite bg-darkSecondary`}
      >
        <div className="ml-[5vw] my-5 flex flex-row justify-center items-center text-primary">
          <img src={Logo} className="rounded w-auto h-[9vh] mr-5" />
          <Typography variant="h4">PRESTIGE</Typography>
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
