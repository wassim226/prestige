import {useState} from 'react';
import { Typography } from '@mui/material';
import {PureWater1, PureWater} from "../assets";
import {default_description} from "../constantes";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import {MySlider} from "../components"

import 'swiper/css';
import 'swiper/css/navigation';

function Water() {
  
  return (
    <div className={`flex flex-col justify-start w-[100vw]`}>
      <div className={`flex w-[100vw] h-[90vh] background-landscape water_background`}>
        <div className='w-full h-full bg-gradient-to-r from-secondary from-5% via-[#151f33a1] via-45% to-transparent'>
          <div className={`flex flex-col justify-start items-center w-[50vw] mt-10`}>
            <Typography gutterBottom variant='h2' sx={{fontWeight: 550}} className='text-white w-[50%]'>
              SÉCURISATION LA QUALITÉ DES EAUX
            </Typography>
            <Typography gutterBottom className='text-white w-[80%]'>
              Un diagnostic renforcé, réalisé chez vous des solutions de contrôle récurrentes, Un mode d’emploi simplifié, Un budget maîtrisé.
            </Typography>
          </div>
        </div>
      </div>
      <section className={`flex flex-col justify-center w-[100vw] my-32`}>
            <div className={`flex flex-row${ Math.random() >= 0.5 ? "-reverse" : ""} w-full items-center`}>
                <div className={`w-[40%] mx-auto`}>
                    <img src={PureWater1} className='rounded-md'/>
                </div>
                <div className={`flex flex-col justify-start items-center w-[50vw]`}>
                  <Typography gutterBottom variant='h4' sx={{fontWeight: 400}} className='text-primary w-[50%]'>
                    Quelles solutions proposons-nous pour le traitement de votre eau de piscine ?
                  </Typography>
                  <Typography gutterBottom className='text-white w-[80%]'>
                    {default_description}
                  </Typography>
                </div>
            </div>
    </section>
    <section className={`flex flex-col justify-center w-[100vw] `}>
      <Typography  gutterBottom variant='h4' sx={{fontWeight: 400}} className='text-primary w-full text-center' >NOS OFFRES</Typography>
      <div className='flex flex-row justify-center items-center w-full'>
        {
          Array.from(Array(5)).map((val, ind)=>
              <div key={"offers_" + ind} className={`flex flex-col justify-center items-center w-[15vw] mx-2 hover:scale-110 duration-500 ${ind % 2 == 0 ? 'mt-44' : ''} rounded-full border-2 border-primary bg-darkSecondary`}>
              <Typography  sx={{marginTop: "12px"}}variant='h3' className='text-center text-primary'>{++ind}</Typography>
              <Typography sx={{margin: "20px", marginBottom: "30px"}} className='text-white text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</Typography>
              </div>
          )
        }
      </div>
    </section>
    <section className={`flex flex-col justify-center items-center w-[100vw] my-14`}>
      <Typography  gutterBottom variant='h4' sx={{fontWeight: 400}} className='text-primary w-full text-center' >Nos interventions</Typography>
      <div className='flex flex-row justify-center items-center w-[80%] mt-5'>
        <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
          {
            Array.from(Array(5)).map((val, ind)=>
              <SwiperSlide>
                <MySlider className='swiper-slide' key={"prevs_" + ind} prev_img={PureWater} new_img={PureWater1}/>
              </SwiperSlide>
            )
          }

        </Swiper>
      </div>
    </section>
    </div>
  )
}

export default Water