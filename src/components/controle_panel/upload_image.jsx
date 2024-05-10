import { Button } from '@mui/material'
import { useEffect, useState } from 'react'
import BaseController from '../../controllers/base_controller';

function UploadImage(props) {
  const {dataKey, setValue, register, prev} = props;
  const [source, setSource] = useState(prev[dataKey]);
  const [blob, setBlob] = useState(null);
  
  const reader  = new FileReader();
  reader.onload = (e)=>{
    setBlob(()=>e.target.result);
  };

  const getFileApi = async(id)=>{
    const file = await BaseController.getFile(id);
    reader.readAsDataURL(file);
  };


  useEffect(() => {
    if(source){
      switch(source.constructor.name){
        case "File":
          reader.readAsDataURL(source);
          break;
        case "Number":
          getFileApi(source);
          break;
      }
    }
  }, [source]);
  

  return (
    <div className="flex flex-col justify-center">
      {
        <div className='w-[20vw] my-10'>
          <img src={blob} alt={dataKey}/>
        </div>
      }
      <Button variant="contained" component="label" sx={{height: "50%", margin: "auto"}} onChange={(e)=>{
        const file = e.target.files[0];
        setValue(dataKey, file);
        setSource(()=>file);
      }} >
        Upload Image
        <input type="file" {...register(dataKey)} className="hidden"/>
      </Button>
    </div>
  )
}

export default UploadImage