import React from 'react';
import {Button, TextField, Divider, Toolbar, Tooltip, IconButton, Typography} from '@mui/material';
import { Save } from "@mui/icons-material";

function WaterPageForm(props) {
    const {formRef, handleSubmit, register, errors, setValue} = props;
    const handelSave = ()=>{
      setValue('name',"water");
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
            {"Water page content"}
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
            <TextField label="Title" size="small" variant="outlined" sx={{margin: "20px 0"}}
            {...register('title')} error={errors.title ? true : false} helperText={errors.title?.message}/>
  
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
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>Body</Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>

        <div className="flex flex-row w-full h-[35%] justify-evenly mt-10">
          <div className="flex flex-col justify-evenly">
            <TextField label="Title" size="small" variant="outlined" sx={{margin: "20px 0"}}
            {...register('bodyTitle')} error={errors.bodyTitle ? true : false} helperText={errors.bodyTitle?.message}/>
  
            <TextField label="Presentation text" size="small" variant="outlined" multiline rows={3}
            {...register('bodyPresentation')} error={errors.bodyPresentation ? true : false} helperText={errors.bodyPresentation?.message}/>
          </div>
          <div className="flex flex-col justify-center">
            <Button variant="contained" component="label" sx={{height: "50%", margin: "auto"}} onChange={(e)=>{
              setValue("bodyImg", e.target.files[0])}} >
              Upload Image
              <input type="file" {...register('bodyImg')} className="hidden"/>
            </Button>
            { errors.bodyImg && 
              <div className="flex flex-col text-red-600 justify-center items-center my-4">
                {
                    errors.bodyImg?.message
                }
              </div>
            }
          </div>
        </div>

        <div className='flex flex-col my-10'>
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>
            Our Offers
          </Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>

        <div className='flex flex-col'>
          {Array(5).fill().map((_,i) =>{
            let ind = i + 1;
            return (
              <div key={"off" + i} className='flex flex-col justify-center items-center '>
                <TextField label={`Value 0${ind}`} size="small" variant="outlined" sx={{margin: "20px 0", width: "50vw"}}
                {...register("offer_" + ind)} error={errors["offer_" + ind] ? true : false} helperText={errors["offer_" + ind]?.message}/>
                <TextField label="Description" size="small" variant="outlined" sx={{width: "50vw"}} multiline rows={3}
                {...register("offerDesc_" + ind)} error={errors["offerDesc_" + ind] ? true : false} helperText={errors["offerDesc_" + ind]?.message}/>
                <Divider variant="middle" sx={{width: "40vw", marginTop: "20px"}}/>
              </div>
            );
          })}
        </div>

      </form>
    </div>
    );
}

export default WaterPageForm