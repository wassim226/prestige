import { Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserController } from "../../controllers";

function SettingsMenu(props) {
  const { anchorElUser, handleCloseUserMenu, settings } = props;
  const navigate = useNavigate();
  const logout = () => {
    UserController.logout();
    props.setAuthUser(() => null);
    navigate("/");
  };
  const goToDashboard = () => {
    navigate("/");
  };
  const handleEvents = (index) => {
    switch (index) {
      case 1:
        logout();
        break;
      case 0:
        goToDashboard();
        break;
    }
    handleCloseUserMenu();
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={anchorElUser}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    >
      {settings.map((setting, ind) => (
        <MenuItem
          key={setting}
          onClick={() => {
            handleEvents(ind);
          }}
        >
          <Typography textAlign="center">{setting}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default SettingsMenu;
