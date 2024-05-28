import { useState } from "react";
import { Link } from "react-router-dom";
import { LandscapeMenu, UserMenu } from "../components";
import { navList, landscape } from "../constantes";
import { Avatar, Box, IconButton, Tooltip } from "@mui/material";
import { Person } from "@mui/icons-material";
import LoginForm from "./forms/login_form";

function Navigation(props) {
  const [anchorLandscape, setAnchorElLandscape] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <div className="flex flex-row justify-between items-start w-[40vw] mx-10 text-dimWhite">
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
              className="hover:text-primary"
            >
              {val}
            </div>
          ) : (
            <div key={"title_" + ind} className="hover:text-primary">
              {val}
            </div>
          )}
        </Link>
      ))}
      <Box sx={{ flexGrow: 0 }} className="pl-2.5">
        <Tooltip title={"Account"}>
          <IconButton
            onClick={(event) => {
              if (props.authUser == null) {
                setOpenLogin(() => true);
              } else {
                setAnchorElUser(event.currentTarget);
              }
            }}
            sx={{ p: 0 }}
          >
            <Person className="text-dimWhite hover:text-primary" />
          </IconButton>
        </Tooltip>
        {props.authUser != null && (
          <UserMenu
            setAuthUser={props.setAuthUser}
            authUser={props.authUser}
            anchorElUser={anchorElUser}
            handleCloseUserMenu={() => {
              setAnchorElUser(null);
            }}
          />
        )}
      </Box>
      <LandscapeMenu
        anchorLandscape={anchorLandscape}
        handleCloseLandscapeMenu={() => {
          setAnchorElLandscape(null);
        }}
        landscape={landscape}
      />
      <LoginForm
        open={openLogin}
        setOpen={setOpenLogin}
        setAuthUser={props.setAuthUser}
      />
    </div>
  );
}

export default Navigation;
