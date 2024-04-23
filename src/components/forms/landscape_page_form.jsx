import {useState} from 'react';
import {Button, TextField, Divider, Toolbar, Tooltip, IconButton, Typography} from '@mui/material';
import { Save } from "@mui/icons-material";
import {Controller} from "react-hook-form";
import { landscape } from '../../constantes';
import AsynchronousSelect from '../asynchrone_select';

function LandscapePageForm(props) {
    const {formRef, handleSubmit, register, errors, control, setValue, isPool} = props;
    const [isLoading, setIsLoading] = useState(true);

    const handelSave = ()=>{
      if(isPool){
        setValue('name',"pool");
      }
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
            {(isPool ? "Pool" : "Landscape") +" page content"}
          </Typography>
          
          <Tooltip title={`Save`}>
            <IconButton onClick={handelSave}>
              <Save className='text-secondary' />
            </IconButton>
          </Tooltip>
      </Toolbar>
  
      <form ref={formRef} onSubmit={handleSubmit}>
        { !isPool && <>
        <div className='flex flex-col my-10'>
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>Page</Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>
        <div className='flex flex-col justify-items-center w-full'>
          <div className='flex flex-col justify-items-center mx-auto w-[50%]'>
            <Controller
            {...register('name')}
            control={control}
            render={({
            field: { value, onChange, onBlur, ref },
            }) => {
            
            return (
              <AsynchronousSelect
               value = {value}
               autoProps = {{
                variant:"outlined", size:"small", margin:"normal", fullWidth: true,
                loading: isLoading,
                options: landscape,
                isOptionEqualToValue: (option, value) => option.label === value.label,
                getOptionLabel: (option) => option.label,
                onChange:( _event, item ) => {
                  onChange(item);
                },
              }}  

               fieldProps = {{
                label: "Pages",
                error: errors.name ? true : false,
                helperText: errors.name?.message,
                onBlur: onBlur,
                inputRef: ref,
               }} 

              />
            );
            }}
          />
          </div>
        </div></>
        }
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
            Services
          </Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>

        <div className='flex flex-col'>
          {Array(4).fill().map((_,i) =>{
            let ind = i + 1;
            return (
              <div key={"ser" + i} className='flex flex-col justify-center items-center '>
                <TextField label={`Service 0${ind}`} size="small" variant="outlined" sx={{margin: "20px 0", width: "50vw"}}
                {...register("service_" + ind)} error={errors["service_" + ind] ? true : false} helperText={errors["service_" + ind]?.message}/>
                <Divider variant="middle" sx={{width: "40vw", marginTop: "20px"}}/>
              </div>
            );
          })}
        </div>

      </form>
    </div>
    );
}

export default LandscapePageForm;