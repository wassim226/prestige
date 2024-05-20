import {useState, useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { Skeleton, Typography } from '@mui/material';
import { addedValues } from '../constantes';
import { Valeur, TitlebarImageList, MyImage } from '../components';
import { Logo } from '../assets';
import {PageController} from '../controllers';

function Home() {
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const controller = new PageController(abortController, setServerError);

  const getApiData = async (name)=>{
    const res = await controller.getElement(name);
    if(res){
      console.log(res)
      setData(()=> res);
    }
    setLoading(()=>false);
  };

  useEffect(() => {
    getApiData("home");
  }, []);
  

  return (
    <div className='flex flex-col justify-start items-center h-[90vh]'>
      { loading 
        ? <div className='flex flex-col my-20 mx-5 w-[80vw]'>
            <Skeleton variant="rectangular" height={60} className='mb-5' sx={{backgroundColor: "#4FD38A"}}/>
            <Skeleton variant="rectangular" height={"60vh"} sx={{backgroundColor: "#4FD38A"}}/>
          </div>
        :<>
        <a name="introduction">
            <div className='flex flex-row justify-between items-center w-[100vw] h-[90vh] overflow-y-clip'>
                <div className={`flex flex-col justify-start items-center w-[50vw] `}>
                      <img src={Logo} className=' rounded w-[40%] h-[20%]'/>
                      {/* <div className={`w-[50vw] h-[38.33333vw] bg-cover bg-center background-image mx-10`}></div> */}
                      {/* <Typography gutterBottom variant='h2' sx={{fontWeight: 550}} className='text-white w-[50%]'>PRESTIGE PISCINE & PAYSAGE</Typography> */}
                      <Typography gutterBottom className='text-white w-[80%]'>
                        {data.extPresentation}
                        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. */}
                      </Typography>
                      <Link to="/contact"><button className='border-2 rounded mt-8 border-primary bg-transparent text-primary py-4 px-6 hover:bg-primary hover:text-secondary'>Devis gratuit</button></Link>
                </div>
                <div className={`w-[35vw] h-[38.33333vw] mr-10`}>
                  <MyImage id={data.presentationImg}/>
                </div>
            </div>
        </a>
        <a name="added-values">
          <div className='flex flex-col justify-center items-center w-[100vw] my-20 mx-10'>
            <Typography gutterBottom variant='h3' sx={{fontWeight: 400}} className='text-white'>NOS VALEUR AJOUTER</Typography>
            <div className='flex flex-row justify-between items-center my-20 w-[80%]'>
              {Array(4).fill().map((v, i)=>{
                let ind = i + 1;
                return (<Valeur key={"val_" + ind} title={data["value_" + ind]} body={data["desc_" + ind]}/>);
              })
              }
            </div>
          </div>
        </a>
        {/* <a name="devise"><div className='flex flex-row justify-start items-cente'></div></a> */}
        <a name="reviews">
          <div className='flex flex-col justify-start items-center slider-container'>
              <Typography gutterBottom variant='h3' sx={{fontWeight: 400}} className='text-white'>Les avis de nos clients</Typography>
              <TitlebarImageList/>
          </div>
        </a>
    </>
    }
    </div>
  )
}

export default Home