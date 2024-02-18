import React from 'react';
import { MyPagination, SpaPresentation } from '../components';
import { Typography, ImageList, ImageListItem } from '@mui/material';
import { Pool3, Pool4 } from '../assets';

const spas = [
  {
    image: Pool3,
    title: "SPA MALAGA 3 PLACES",
    price: 6500,
    details: [
      "Dimensions : 2100 x 1700 x 900mm",
      "51 Jets thérapie",
      "Système électronique BALBOA",
      "Pompes LX Whirlpool 2 x 1500w",
      "Acrylique Aristech",
      "Luminothérapie",
      "Système audio Bluetooth",
      "Triple isolation",
      "Design unique, finitions alu leds",
    ]
  },
  {
    image: Pool4,
    title: "SPA NEVADA 2 PLACES",
    price: 8000,
    details: [
      "Dimensions : 2100 x 1700 x 900mm",
      "51 Jets thérapie",
      "Système électronique BALBOA",
      "Pompes LX Whirlpool 2 x 1500w",
      "Acrylique Aristech",
      "Luminothérapie",
      "Système audio Bluetooth",
      "Triple isolation",
      "Design unique, finitions alu leds",
    ]
  }

];
const all_spas = [];
for(let i = 0; i<45; i++){
  all_spas.push(spas[Math.random() >= 0.5 ? 1 : 0]);
}

function Spa() {
  
  return (
    <div className='flex flex-col justify-start items-center w-[100vw]'>
      <div className={`flex w-[100vw] h-[90vh] background-landscape spa_background`}>
        <div className='w-full h-full bg-gradient-to-r scale-x-[-1] from-secondary from-5% via-[#151f33a1] via-45% to-transparent'>
          <div className={`flex flex-col justify-start items-center w-[50vw] mt-10`}>
            <Typography gutterBottom variant='h2' sx={{fontWeight: 550}} className='text-white w-[50%]'>
              { "SPAS GAMME PRESTIGE" }
            </Typography>
            <Typography gutterBottom className='text-white w-[80%]'>
              {/* { description } */}
            </Typography>
          </div>
        </div>
      </div>
      <ImageList variant="woven" gap={8} cols={4} className='relative w-[80%] mt-10'>
        
      {
        all_spas.map((val, index)=> 
        <ImageListItem key={"prod_" + index} className='flex justify-center items-center'>
          <SpaPresentation spa={val} key={"spa_wdt_" + index}/>
        </ImageListItem>
        )
      }
      </ImageList>
      <MyPagination path={"spa"} />
    </div>
  ); 
}

export default Spa