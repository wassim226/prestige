import { Diamond } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import {useState} from 'react'

function Valeur(props) {
    const [hovred, setHovred] = useState(false);
  return (
    <div onMouseEnter={()=>setHovred((prev)=>true)} onMouseLeave={()=>setHovred((prev)=>false)} className={`flex flex-col justify-start items-center`}>
        <div className='flex justify-center items-center mb-5 w-24 h-24 border-2 border-primary rounded-full text-primary bg-darkSecondary'>
            <Diamond sx={{fontSize:'36px'}} />
        </div>
        <div className={`${hovred ? 'scale-y-1' : 'scale-y-0' } duration-500 flex flex-col justify-start items-center max-w-[20vw]`}>
            <Typography gutterBottom className='text-primary' variant='h6' sx={{fontWeight : 500}}>{props.title}</Typography>
            <Typography className='text-white text-center'>{props.body}</Typography>
        </div>        
    </div>
  )
}

export default Valeur