import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

function LandscapeMenu(props) {
  const { landscape, handleCloseLandscapeMenu, anchorLandscape } = props;
  return (
    <Menu
      anchorEl={anchorLandscape}
      open={Boolean(anchorLandscape)}
      onClose={handleCloseLandscapeMenu}
      className="max-h-[75%] sub-menu"
    >
      {landscape.map((elem, ind) => (
        <MenuItem
          key={elem.name}
          onClick={handleCloseLandscapeMenu}
          className=" hover:text-primary"
        >
          <Link to={"landscape/" + elem.name}>
            <div className="text-dimWhite hover:text-primary">{elem.label}</div>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default LandscapeMenu;
