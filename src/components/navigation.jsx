import {useState} from 'react'
import {Link } from "react-router-dom";
import { LandscapeMenu} from '../components';
import { navList, landscape } from '../constantes';

function Navigation() {
  const [anchorLandscape, setAnchorElLandscape] = useState(null);
  
  return (
    <div className='flex flex-row justify-between items-start w-[40vw] mx-10 text-dimWhite'>
        {navList.map((val, ind)=><Link key={"nav_" + ind} to={ind == 0 ? "/" : ind != 1 ? val.toLowerCase() : ""}>
          {ind == 1 ?<div key={"title_" + ind} onMouseEnter={(event)=>{setAnchorElLandscape(event.currentTarget)}} className='hover:text-primary'>{val}</div> : <div key={"title_" + ind} className='hover:text-primary'>{val}</div>}
        </Link>)}
        <LandscapeMenu anchorLandscape={anchorLandscape} handleCloseLandscapeMenu={() => {setAnchorElLandscape(null);}} landscape={landscape} />
    </div>
  )
}

export default Navigation;
