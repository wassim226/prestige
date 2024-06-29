import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LandscapeMenu } from "../components";
import { navList, landscape } from "../constantes/data";
import { Box, IconButton, Tooltip } from "@mui/material";
import { Person } from "@mui/icons-material";
import LoginForm from "./forms/login_form";
import { close, menu } from "../assets";
import { desktopMenu, mobileMenu } from "../constantes/style";

function Navigation(props) {
  const [anchorLandscape, setAnchorElLandscape] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const orientationHandler = () => {
      setToggle(() => true);
    };
    screen.orientation.addEventListener("change", orientationHandler);
    return () => {
      screen.orientation.removeEventListener("change", orientationHandler);
    };
  }, []);

  return (
    <>
      <div className="md:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? menu : close}
          alt="menu"
          className="w-[32px] h-[32px] object-contain mr-10"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
      </div>
      <div
        className={`${
          desktopMenu + (toggle ? " hidden" : mobileMenu)
        } text-dimWhite`}
      >
        {navList.map((val, ind) => (
          <Link
            key={"nav_" + ind}
            to={ind == 0 ? "/" : ind != 1 ? val.toLowerCase() : ""}
          >
            {ind == 1 ? (
              <div
                key={"title_" + ind}
                onMouseEnter={(event) => {
                  setAnchorElLandscape(event.currentTarget);
                }}
                className="hover:text-primary my-4 md:my-0"
              >
                {val}
              </div>
            ) : (
              <div
                key={"title_" + ind}
                className="hover:text-primary my-4 md:my-0"
              >
                {val}
              </div>
            )}
          </Link>
        ))}
        {!props.isFooter && (
          <Box sx={{ flexGrow: 0 }} className="pl-2.5 my-4 md:my-0">
            <Tooltip title={"Account"}>
              <IconButton
                onClick={(event) => {
                  setOpenLogin(() => true);
                }}
                sx={{ p: 0 }}
              >
                <Person className="text-dimWhite hover:text-primary" />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        <LandscapeMenu
          anchorLandscape={anchorLandscape}
          handleCloseLandscapeMenu={() => {
            setAnchorElLandscape(null);
          }}
          landscape={landscape}
        />
        <LoginForm open={openLogin} setOpen={setOpenLogin} />
      </div>
    </>
  );
}

export default Navigation;
