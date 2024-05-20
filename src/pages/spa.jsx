import {useState, useEffect, useRef} from 'react';
import { MyPagination, SpaPresentation, ArticaleHead } from '../components';
import { ImageList, ImageListItem, Skeleton } from '@mui/material';
import { Pool3, Pool4 } from '../assets';
import { default_description } from '../constantes';
import { PageController, SpaController } from '../controllers';

// const spas = [
//   {
//     image: Pool3,
//     title: "SPA MALAGA 3 PLACES",
//     price: 6500,
//     details: [
//       "Dimensions : 2100 x 1700 x 900mm",
//       "51 Jets thérapie",
//       "Système électronique BALBOA",
//       "Pompes LX Whirlpool 2 x 1500w",
//       "Acrylique Aristech",
//       "Luminothérapie",
//       "Système audio Bluetooth",
//       "Triple isolation",
//       "Design unique, finitions alu leds",
//     ]
//   },
//   {
//     image: Pool4,
//     title: "SPA NEVADA 2 PLACES",
//     price: 8000,
//     details: [
//       "Dimensions : 2100 x 1700 x 900mm",
//       "51 Jets thérapie",
//       "Système électronique BALBOA",
//       "Pompes LX Whirlpool 2 x 1500w",
//       "Acrylique Aristech",
//       "Luminothérapie",
//       "Système audio Bluetooth",
//       "Triple isolation",
//       "Design unique, finitions alu leds",
//     ]
//   }

// ];
// const all_spas = [];
// for(let i = 0; i<45; i++){
//   all_spas.push(spas[Math.random() >= 0.5 ? 1 : 0]);
// }

function Spa() {
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [spaData, setSpasData] = useState(null);
  const controller = new PageController(abortController, setServerError);
  const spaController = new SpaController(abortController, setServerError);

  const getApiData = async (name)=>{
    const res = await controller.getElement(name);
    const spas = await spaController.getSpas();

    if(res){
      console.log(res)
      setData(()=> res);
    }
    if(spas){
      console.log(spas)
      setSpasData(()=>spas);
    }
    setLoading(()=>false);
  };  

  useEffect(() => {
    getApiData("spa");
  }, []);

  return (
    <div className='flex flex-col justify-start items-center w-[100vw]'>
      {
        loading 
        ? <div className='flex flex-col my-20 mx-5 w-[80vw]'>
            <Skeleton variant="rectangular" height={60} className='mb-5' sx={{backgroundColor: "#4FD38A"}}/>
            <Skeleton variant="rectangular" height={"60vh"} sx={{backgroundColor: "#4FD38A"}}/>
          </div>
        :
        <>
      <ArticaleHead 
        background_class={data.presentationImg} //{"background-landscape spa_background"} 
        title={data.title.toUpperCase()} //{"SPAS GAMME PRESTIGE"} 
        description={data.extPresentation} //{default_description}
        // flip={true}
      />
      <ImageList variant="woven" gap={8} cols={4} className='relative w-[80%] mt-10'>
        {
          spaData.map((val, index)=> 
          <ImageListItem key={"prod_" + index} className='flex justify-center items-center'>
            <SpaPresentation spa={val} key={"spa_wdt_" + index}/>
          </ImageListItem>
          )
        }
      </ImageList>
      <MyPagination path={"spa"} />
      </>
      }
    </div>
  ); 
}

export default Spa