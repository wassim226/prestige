import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import { notifications } from "../constantes";
import { NotificationMenu, SearchInput, SettingsMenu } from "../components";
import { MapOutlined, NotificationsOutlined } from "@mui/icons-material";
// import { useTranslation } from 'react-i18next';

function MyAppBar(props) {
  // const [_, i18n] = useTranslation("global");
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorNotification, setAnchorNotification] = useState(null);
  const settings = ["site", "logout"];

  return (
    <AppBar position="static">
      <Container className={`w-full bg-white `}>
        <Toolbar disableGutters className={`flex flex-row justify-end`}>
          {/* <SearchInput/> */}
          {/* <Tooltip title={_("appbar.network")}>
            <Link to="/network">
              <IconButton>
                <MapOutlined className='text-primary'/>
              </IconButton>          
            </Link> 
          </Tooltip> */}
          {/* <Box className='px-2.5'>
            <Tooltip title={"notifications"}>
              <IconButton onClick={((event)=>{
                setAnchorNotification(event.currentTarget);
              })}>
                <Badge badgeContent={4} color="primary">
                  <NotificationsOutlined className='text-secondary'/>
                </Badge>
              </IconButton>
            </Tooltip>
            <NotificationMenu anchorNotification={anchorNotification} 
              notifications={notifications}
              handleCloseNotificationMenu={()=>{
                setAnchorNotification(()=>null);
              }}
            />
          </Box> */}
          {/* <Box className='px-2.5'> 
            <Tooltip title={_("appbar.messages")}>
              <IconButton>
                <Badge badgeContent={2} color="primary">
                  <MailOutlineRounded className='text-primary'/>
                </Badge>
              </IconButton>
            </Tooltip>          
          </Box> */}

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
