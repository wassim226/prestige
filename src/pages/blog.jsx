import { Pool3 } from '../assets';
import { ArticlePreview, ArticaleHead } from '../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { default_description } from '../constantes';

import 'swiper/css';


function Blog() {
  return (
    <div className={`flex flex-col justify-start w-[100vw]`}>
      <ArticaleHead 
        background_class={"background-landscape blog_background"} 
        title={"SÉCURISATION LA QUALITÉ DES EAUX"} 
        description={default_description}
      />

      <section className={`flex flex-col justify-center items-center w-[100vw] my-20`}>
        <div className='flex flex-row justify-center items-center w-[80%] mt-40'>
          <Swiper spaceBetween={50} slidesPerView={3} >
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