import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { SettingsMenu } from "../components";

function MyAppBar(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["site", "logout"];

  return (
    <AppBar position="static">
      <Container className={`w-full bg-white `}>
        <Toolbar disableGutters className={`flex flex-row justify-end`}>
          <Box sx={{ flexGrow: 0 }} className="pl-2.5">
            <Tooltip title={"open_settings"}>
              <IconButton
                onClick={(event) => {
                  setAnchorElUser(event.currentTarget);
                }}
                sx={{ p: 0 }}
              >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <SettingsMenu
              setAuthUser={props.setAuthUser}
              anchorElUser={anchorElUser}
              handleCloseUserMenu={() => {
                setAnchorElUser(null);
              }}
              settings={settings}
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MyAppBar;
