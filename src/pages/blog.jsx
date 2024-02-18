import {useState} from 'react';
import { Pool3 } from '../assets';
import { Typography, ImageList ,ImageListItem} from '@mui/material';
import { ArticlePreview } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { default_description } from '../constantes';

function Blog() {
  return (
    <div className={`flex flex-col justify-start w-[100vw]`}>
      <div className={`flex w-[100vw] h-[90vh] background-landscape blog_background`}>
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

      <section className={`flex flex-col justify-center items-center w-[100vw] my-20`}>
        <div className='flex flex-row justify-center items-center w-[80%] mt-40'>
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
          {
            Array.from(Array(5)).map((val, ind)=>
              <SwiperSlide>
                <ArticlePreview id={ind} className='swiper-slide' key={"prevs_" + ind} img={Pool3} title={"Lorem ipsum dolor sit amet"} description={default_description}/>
              </SwiperSlide>
            )
          }

        </Swiper>
      </div>
    </section>

    </div>
  )
}

export default Blog