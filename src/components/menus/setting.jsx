import {Typography, Menu, MenuItem} from '@mui/material';
import { useNavigate } from "react-router-dom";

function SettingsMenu(props) {
    const {anchorElUser, handleCloseUserMenu, settings} = props;
    const navigate = useNavigate();
    const logout = ()=>{
      props.setloged((prev)=>false);
    }
    const goToDashboard = ()=>{
      navigate("/");
    }
    const handleEvents = (index)=>{
      
      switch(index){
        case 3:
          logout();
        break;
        case 2:
          goToDashboard();
        break;
      }
      handleCloseUserMenu();
    };
    
  return (
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting, ind) => (
                <MenuItem key={setting} onClick={()=>{handleEvents(ind);}}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
  )
}

export default SettingsMenu;