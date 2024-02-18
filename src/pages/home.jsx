import React from 'react'
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { addedValues } from '../constantes';
import { Valeur, TitlebarImageList } from '../components';

function Home() {

  return (
    <div className='flex flex-col justify-start items-center'>
        <a name="introduction">
            <div className='flex flex-row justify-between items-center w-[100vw] h-[90vh] overflow-y-clip'>
                <div className={`flex flex-col justify-start items-center w-[50vw] `}>
                      <Typography gutterBottom variant='h2' sx={{fontWeight: 550}} className='text-white w-[50%]'>PRESTIGE PISCINE & PAYSAGE</Typography>
                      <Typography gutterBottom className='text-white w-[80%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Typography>
                      <Link to="/contact"><button className='border-2 rounded mt-8 border-primary bg-transparent text-primary py-4 px-6 hover:bg-primary hover:text-secondary'>Devis gratuit</button></Link>
                </div>
                <div className={`w-[50vw] h-[38.33333vw] bg-cover bg-center background-image mx-10`}></div>
            </div>
        </a>
        <a name="added-values">
          <div className='flex flex-col justify-center items-center w-[100vw] my-20 mx-10'>
            <Typography gutterBottom variant='h3' sx={{fontWeight: 400}} className='text-white'>NOS VALEUR AJOUTER</Typography>
            <div className='flex flex-row justify-between items-center my-20 w-[80%]'>
              {addedValues.map((value, ind)=><Valeur key={"val_" + ind} title={value.title} body={value.body}/>)}
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
    </div>
  )
}

export default Home