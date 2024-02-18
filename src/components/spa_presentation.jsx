import { Typography } from '@mui/material';
import {useEffect, useRef, useState} from 'react';

function SpaPresentation(props) {
    const {image, title, details, price} = props.spa;
    const [position, setPosition] = useState([0,0]);
    const [isHovred, setIsHovred] = useState(false);
    const [show_detail, setShow_detail] = useState(false);
    const [in_2nd_half, setIn2ndHalf] = useState(false);
    const img = useRef(null);
    useEffect(() => {
      
      const handel_move_on_image = ((evt)=>{
        // console.log(window.screen.availWidth, "\n", img.current.getBoundingClientRect().x);
        if(img.current.getBoundingClientRect().x >= window.screen.availWidth/2){
          setIn2ndHalf((prev)=>true);
        }

        if(img.current.offsetWidth > 0 && img.current.offsetHeight > 0)
          setPosition((prev)=>
        [
          evt.offsetX * (-350 / img.current.offsetWidth),
          evt.offsetY * (-350 / img.current.offsetHeight)
        ]);
      });

    
      img.current.addEventListener("mousemove", handel_move_on_image);

      return () => {
      }
    }, []);
    
  return (
    <div className='flex flex-col justify-center items-center max-w-[200px]'>
        <div  className={`relative flex flex-col justify-center items-center `} >
            
            <div ref={img} onClick={()=>{setShow_detail((prev)=> !prev)}} onMouseOut={()=>{setIsHovred((prev)=> false)}} onMouseOver={()=>{setIsHovred((prev)=> true)}} className='w-[200px] h-[auto] cursor-pointer'>
              <img className='w-full h-full relative rounded-md' src={image}/>
            </div>
            
            <div className={`${isHovred ? 'block' : 'hidden'}`} style={{
                marginBottom: "50px",
                zIndex:2,
                position: "absolute",
                top:"0px",
                left: in_2nd_half ? "-360px" : "210px",
                width:"350px",
                height:"350px",
             backgroundRepeat: "no-repeat",
             backgroundSize: "700px 700px",
             backgroundImage:`url('${image}')`,
             backgroundPosition: (position[0]) + "px " + (position[1]) + "px",
            }}>
              <div className={`absolute ${show_detail ? 'flex' : 'hidden'} flex-col w-full h-full justify-center items-start bg-[#151f33a1]`}>
                <div className={`text-primary text-center w-full mx-auto my-8 text-xl`}>{title}</div>
                <div className={`text-white ml-5`}>
                  {
                    details.map((detail, ind)=><Typography key={"spa_dtl_" + ind}>{detail}</Typography>)
                  }
                </div>
              </div>
            </div>
        </div>
        <Typography sx={{marginTop: "12px", marginBottom: "12px"}} className='text-white w-full text-center mx-auto max-w-[200px]'>{price} €</Typography>
    </div>
  )
}

export default SpaPresentation