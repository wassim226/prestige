import React from 'react'
import {ServiceIcon} from "../components";
import {Typography } from '@mui/material';

function Presentation(props) {
    const {image, title, description, services} = props
  return (
    <section className={`flex flex-col justify-center w-[100vw] my-32`}>
            <div className={`flex flex-row${ Math.random() >= 0.5 ? "-reverse" : ""} w-full items-center`}>
                <div className={`w-[40%] mx-auto`}>
                    <img src={image} className='rounded-md'/>
                </div>
                <div className={`flex flex-col justify-start items-center w-[50vw]`}>
                    <Typography gutterBottom variant='h4' sx={{fontWeight: 400}} className='text-primary w-[50%]'>
                        {
                            title
                        }
                    </Typography>
                    <Typography gutterBottom className='text-white w-[80%]'>
                    {description}
                    </Typography>
                </div>
            </div>
            <div className={`flex flex-row justify-between items-center mx-auto my-20 w-[70%]`}>
                {
                    services.map((val, ind)=> <ServiceIcon key={"ser_" + ind} title={val} />)
                }
            </div>
    </section>
  )
}

export default Presentation