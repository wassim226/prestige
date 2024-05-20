import { Typography } from '@mui/material';
import MyImage from './my_image';

function ArticaleHead(props) {
    const {
        background_class, 
        title, 
        description,
        flip,
    } = props;

  return (
    <div className={`flex w-[100vw] h-[90vh]`}>
        <div className={`absolute z-0`}>
            <div className='flex relative top-0 h-[50vh]' >
                <MyImage id={background_class} className={`w-full h-[79.5%]`}/>
            </div>
            
        </div>
        <div className={`z-10 w-full h-full bg-gradient-to-r ${flip ? "scale-x-[-1]" : ""} from-secondary from-5% via-dimSecondary via-45% to-transparent`}>
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
  )
}

export default ArticaleHead