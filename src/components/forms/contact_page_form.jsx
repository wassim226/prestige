import React from 'react';
import {Button, TextField, Divider, Toolbar, Tooltip, IconButton, Typography} from '@mui/material';
import { Save } from "@mui/icons-material";
import UploadImage from '../controle_panel/upload_image';

function ContactPageForm(props) {
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
            {"Contact page content"}
          </Typography>
          
          <Tooltip title={`Save`}>
            <IconButton onClick={handelSave}>
              <Save className='text-secondary' />
            </IconButton>
          </Tooltip>
      </Toolbar>
  
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='flex flex-col my-10'>
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>Contact infos</Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>
        <div className="flex flex-row w-full h-[35%] justify-evenly mt-10">
          <div className="flex flex-col justify-evenly">
            <TextField label="Email" size="small" variant="outlined" sx={{margin: "20px 0"}}
            {...register('email')} error={errors.email ? true : false} helperText={errors.email?.message}/>
  
            <TextField label="Password" size="small" variant="outlined" type='password'
            {...register('password')} error={errors.password ? true : false} helperText={errors.password?.message}/>

            <TextField label="Phone" size="small" variant="outlined" sx={{margin: "20px 0"}}
            {...register('phone')} error={errors.phone ? true : false} helperText={errors.phone?.message}/>
  
            <TextField label="Adress" size="small" variant="outlined" multiline rows={3}
            {...register('adress')} error={errors.adress ? true : false} helperText={errors.adress?.message}/>
          </div>
          {/* 
          <div className="flex flex-col justify-center">
          <UploadImage setValue={setValue} dataKey={"presentationImg"} register={register} prev={prev}/>
            { errors.presentationImg && 
              <div className="flex flex-col text-red-600 justify-center items-center my-4">
                {
                    errors.presentationImg?.message
                }
              </div>
            }
          </div> */}
        </div>
      </form>
    </div>
    );
}

export default ContactPageForm