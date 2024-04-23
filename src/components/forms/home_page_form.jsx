import React from 'react';
import {Button, TextField, Divider, Toolbar, Tooltip, IconButton, Typography} from '@mui/material';
import { Save } from "@mui/icons-material";

function HomePageForm(props) {
    const {formRef, handleSubmit, register, errors, setValue} = props;

    const handelSave = ()=>{
      setValue('name', "home");
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
            {"Home page content"}
          </Typography>
          
          <Tooltip title={`Save`}>
            <IconButton onClick={handelSave}>
              <Save className='text-secondary' />
            </IconButton>
          </Tooltip>
      </Toolbar>
  
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className='flex flex-col my-10'>
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>Head</Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>
        <div className="flex flex-row w-full h-[35%] justify-evenly mt-10">
          <div className="flex flex-col justify-evenly">
            <TextField label="Presentation text" size="small" variant="outlined" multiline rows={3}
            {...register('extPresentation')} error={errors.extPresentation ? true : false} helperText={errors.extPresentation?.message}/>
          </div>
          <div className="flex flex-col justify-center">
            <Button variant="contained" component="label" sx={{height: "50%", margin: "auto"}} onChange={(e)=>{
              setValue("presentationImg", e.target.files[0])}} >
              Upload Image
              <input type="file" {...register('presentationImg')} className="hidden"/>
            </Button>
            { errors.presentationImg && 
              <div className="flex flex-col text-red-600 justify-center items-center my-4">
                {
                    errors.presentationImg?.message
                }
              </div>
            }
          </div>
        </div>

        <div className='flex flex-col my-10'>
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>
            Added values
          </Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>

        <div className='flex flex-col'>
        {Array(4).fill().map((_,i) =>{
            let ind = i + 1;
            return (
              <div key={"val" + i} className='flex flex-col justify-center items-center '>
                <TextField label={`Value 0${ind}`} size="small" variant="outlined" sx={{margin: "20px 0", width: "50vw"}} 
                {...register("value_" + ind)} error={errors["value_" + ind] ? true : false} helperText={errors["value_" + ind]?.message}/>
                <TextField label="Description" size="small" variant="outlined" sx={{width: "50vw"}} multiline rows={3}
                {...register("desc_" + ind)} error={errors["desc_" + ind] ? true : false} helperText={errors["desc_" + ind]?.message}/>
                <Divider variant="middle" sx={{width: "40vw", marginTop: "20px"}}/>
              </div>
            );
          })}
        </div>
      </form>
    </div>
    );
}

export default HomePageForm