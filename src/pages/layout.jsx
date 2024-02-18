import React from 'react';
import { Outlet } from "react-router-dom";
import { Navigation } from '../components';
import AdbIcon from '@mui/icons-material/Adb';


function Layout() {
  return (
    <div className={`flex flex-col justify-start items-center`}>
        <div id='header' className={`flex flex-row justify-between items-center w-full h-[10vh] text-dimWhite bg-darkSecondary`}>
            <AdbIcon className='ml-[5vw]'></AdbIcon>
            <Navigation/>
        </div>
        <div className='w-full overflow-y-auto overflow-x-clip bg-secondary'>
            <div id="body"><Outlet/></div>
        </div>
        {/* <div id="footer"></div> */}
    </div>
  )
}

export default Layout