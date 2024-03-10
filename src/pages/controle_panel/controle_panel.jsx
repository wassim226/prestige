import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { ControleNavigation, MyAppBar } from '../../components';

function ControlePanel(props) {
  return (
    <div className={`flex flex-row justify-start items-start`}>
        <div id='menu' className={`flex flex-col justify-start items-center
         bg-secondary w-[18vw] h-[100vh]`}>
            <div>
                <img src=''/>
            </div>
            <ControleNavigation/>
        </div>
        <div className={`flex flex-col justify-start h-[100vh]
          w-[82vw]`}>
            <div id='header'>
              <MyAppBar setloged={props.setloged}/>
            </div>
            <div className='w-full  overflow-y-auto overflow-x-clip'>
              <div id="body"><Outlet/></div>
            </div>
            {/* <div id="footer"></div> */}
        </div>
        
    </div>
  )
}

export default ControlePanel