import React from 'react';
import { Typography } from '@mui/material';
import {Presentation} from '../components';

function Articale(props) {
  const {background_class, title, description, sections}  = props;
  return (
    <div className={`flex flex-col justify-start w-[100vw]`}>
        <div className={`flex w-[100vw] h-[90vh] ${background_class}`}>
            <div className='w-full h-full bg-gradient-to-r from-secondary from-5% via-[#151f33a1] via-45% to-transparent'>
                <div className={`flex flex-col justify-start items-center w-[50vw] mt-10`}>
                    <Typography gutterBottom variant='h2' sx={{fontWeight: 550}} className='text-white w-[50%]'>
                        { title }
                    </Typography>
                    <Typography gutterBottom className='text-white w-[80%]'>
                        { description }
                    </Typography>
                </div>
            </div>
        </div>
        {
            sections.map((section, index)=><Presentation 
                key={"sec_" + index}
                image={section.image} 
                title={section.title} 
                services={section.services}
                description={section.description}
           />)
        }
    </div>
  )
}

export default Articale