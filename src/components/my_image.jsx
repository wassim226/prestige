import { useEffect, useState } from 'react'
import BaseController from '../controllers/base_controller';
import { Skeleton } from '@mui/material';

function MyImage(props) {
  const {id} = props;
  const [loading, setLoading] = useState(true);
  const [blob, setBlob] = useState(null);
  
  const reader  = new FileReader();
  reader.onload = (e)=>{
    setBlob(()=>e.target.result);
  };

  const getFileApi = async(id)=>{
    const file = await BaseController.getFile(id);
    if(file){
      reader.readAsDataURL(file);
    }
    setLoading(()=>false);
  };


  useEffect(() => {
    getFileApi(id);
  }, []);
  

  return (
    <div className="flex flex-col justify-center">
      {
        loading
        ? <Skeleton variant="rectangular" height={"50vh"} sx={{backgroundColor: "#4FD38A"}}/>
        :
        <div>
          <img src={blob} className={props.className}/>
        </div>
      }
    </div>
  )
}

export default MyImage