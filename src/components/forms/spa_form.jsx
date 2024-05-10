import {useRef, useState} from "react";
import {Button, TextField, Divider, Toolbar, Tooltip, IconButton, Typography} from '@mui/material';
import { Save } from "@mui/icons-material";
import UploadImage from "../controle_panel/upload_image";

function SpaForm(props) {
  const {formRef, handleSubmit, register, errors, setValue, prev} = props;

  const handelSave = ()=>{
    formRef.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  } 

  return (
    <div className=" w-full h-[85vh] ">
        <Toolbar
      className="flex flex-row justify-between"
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
      }}
    >
        <Typography
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {prev == "new" ? "Create Spa" : "Edit Spa"}
        </Typography>
        
        <Tooltip title={`Save`}>
          <IconButton onClick={handelSave}>
            <Save className='text-secondary' />
          </IconButton>
        </Tooltip>
    </Toolbar>
        <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex flex-row w-full h-[35%] justify-evenly mt-10">
        <div className="flex flex-col justify-evenly">
          <TextField label="Title" size="small" variant="outlined" sx={{margin: "20px 0"}}
          {...register('title')} error={errors.title ? true : false} helperText={errors.title?.message}/>

          <TextField label="Price" size="small" variant="outlined" type={"number"}
          {...register('price')} error={errors.price ? true : false} helperText={errors.price?.message}/>
        </div>
        <div className="flex flex-col justify-center">
        <UploadImage setValue={setValue} dataKey={"presentationImg"} register={register} prev={prev}/>
          {errors.presentationImg && 
            <div className="flex flex-col text-red-600 justify-center items-center my-4">
              {
                errors.presentationImg?.message
              }
            </div>
          }
        </div>
      </div>
      <div className="flex flex-row justify-center items-center">
        <TextField label="Details" size="small" variant="outlined" multiline rows={6} sx={{width: "52.5vw", marginTop: "20px"}}
          {...register('description')} error={errors.description ? true : false} helperText={errors.description?.message}/>
      </div>
    </form>
    </div>
  )
}

export default SpaForm