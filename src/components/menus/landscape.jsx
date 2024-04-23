import { Menu, MenuItem } from '@mui/material'
import { Link } from 'react-router-dom';

function LandscapeMenu(props) {
    const {landscape, handleCloseLandscapeMenu, anchorLandscape} = props;
  return (
    <Menu
        anchorEl={anchorLandscape}
        open={Boolean(anchorLandscape)}
        onClose={handleCloseLandscapeMenu}
        className='max-h-[75%] sub-menu'
    >
        {landscape.map((team, ind) => (
            <MenuItem key={team.name} onClick={handleCloseLandscapeMenu} className=' hover:text-primary' >
              <Link to={"landscape/" + ind}><div className='text-dimWhite hover:text-primary'>{team.label}</div></Link>
            </MenuItem>
        ))}
    </Menu>
  )
}

export default LandscapeMenu