import { Typography } from '@mui/material';
import {useState} from 'react'

function MySlider(props) {
  const {prev_img, new_img} = props;
  const [hovered, setHovered] = useState(false);
  return (
    
        <div className='flex flex-row rounded' onMouseOut={()=>{setHovered((prev)=>false)}} onMouseOver={()=>{setHovered((prev)=>true)}}>
            <img src={prev_img} className='w-[50%] rounded-l '/>
            <img src={new_img} className='w-[50%] rounded-r'/>
            <div className={`absolute w-full h-full bg-dimSecondary flex flex-row justify-around items-center duration-500 ${hovered ? "scale-1" : "scale-0"}`}>
                <Typography variant='body2' className='text-white'>previous</Typography>
                <Typography variant='body2' className='text-white'>new</Typography>
            </div>
        </div>
  )
}

export default MySlider