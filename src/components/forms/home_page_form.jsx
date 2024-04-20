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
            {/* <TextField label="Title" size="small" variant="outlined" sx={{margin: "20px 0"}}
            {...register('title')} error={errors.title ? true : false} helperText={errors.title?.message}/> */}
  
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

        {/* <div className='flex flex-col my-10'>
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>Body</Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>

        <div className="flex flex-row w-full h-[35%] justify-evenly mt-10">
          <div className="flex flex-col justify-evenly">
            <TextField label="Title" size="small" variant="outlined" sx={{margin: "20px 0"}}
            {...register('title')} error={errors.title ? true : false} helperText={errors.title?.message}/>
  
            <TextField label="Presentation text" size="small" variant="outlined" multiline rows={3} maxRows={5}
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
        </div> */}

        <div className='flex flex-col my-10'>
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>
            Added values
          </Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>

        <div className='flex flex-col'>
          <div className='flex flex-col justify-center items-center '>
            <TextField label="Value 01" size="small" variant="outlined" sx={{margin: "20px 0", width: "50vw"}} 
            {...register('value_1')} error={errors.value_1 ? true : false} helperText={errors.value_1?.message}/>
            <TextField label="Description" size="small" variant="outlined" sx={{width: "50vw"}} multiline rows={3}
            {...register('desc_1')} error={errors.desc_1 ? true : false} helperText={errors.desc_1?.message}/>
            <Divider variant="middle" sx={{width: "40vw", marginTop: "20px"}}/>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <TextField label="Value 02" size="small" variant="outlined" sx={{margin: "20px 0", width: "50vw"}}
            {...register('value_2')} error={errors.value_2 ? true : false} helperText={errors.value_2?.message}/>
            <TextField label="Description" size="small" variant="outlined" sx={{width: "50vw"}} multiline rows={3}
            {...register('desc_2')} error={errors.desc_2 ? true : false} helperText={errors.desc_2?.message}/>
            <Divider variant="middle" sx={{width: "40vw", marginTop: "20px"}}/>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <TextField label="Value 03" size="small" variant="outlined" sx={{margin: "20px 0", width: "50vw"}}
            {...register('value_3')} error={errors.value_3 ? true : false} helperText={errors.value_3?.message}/>
            <TextField label="Description" size="small" variant="outlined" sx={{width: "50vw"}} multiline rows={3}
            {...register('desc_3')} error={errors.desc_3 ? true : false} helperText={errors.desc_3?.message}/>
            <Divider variant="middle" sx={{width: "40vw", marginTop: "20px"}}/>
          </div>
          <div className='flex flex-col justify-center items-center '>
            <TextField label="Value 04" size="small" variant="outlined" sx={{margin: "20px 0", width: "50vw"}}
            {...register('value_4')} error={errors.value_4 ? true : false} helperText={errors.value_4?.message}/>
            <TextField label="Description" size="small" variant="outlined" sx={{width: "50vw"}} multiline rows={3}
            {...register('desc_4')} error={errors.desc_4 ? true : false} helperText={errors.desc_4?.message}/>
            <Divider variant="middle" sx={{width: "40vw", marginTop: "20px"}}/>
          </div>
        </div>

      </form>
    </div>
    );
}

export default HomePageForm