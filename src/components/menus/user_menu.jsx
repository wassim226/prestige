import { Typography, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserController } from "../../controllers";

function UserMenu(props) {
  const { anchorElUser, handleCloseUserMenu, setAuthUser, authUser } = props;
  const navigate = useNavigate();
  const settings = ["Controler", "Logout"];
  const logout = () => {
    UserController.logout();
    setAuthUser(() => null);
  };

  const goToControler = () => {
    navigate("/controle");
  };
  // const handleEvents = (index) => {
  //   switch (index) {
  //     case 3:
  //       logout();
  //       break;
  //     case 2:
  //       goToDashboard();
  //       break;
  //   }
  //   handleCloseUserMenu();
  // };

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
      {settings.map((setting, ind) => {
        if (setting == "Controler") {
          if (authUser.role == "admin") {
            return (
              <MenuItem
                key={setting}
                onClick={() => {
                  goToControler();
                  handleCloseUserMenu();
                }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            );
          }
        } else {
          return (
            <MenuItem
              key={setting}
              onClick={() => {
                logout();
                handleCloseUserMenu();
              }}
            >
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          );
        }
      })}
    </Menu>
  );
}

export default UserMenu;
