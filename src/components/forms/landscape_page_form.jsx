import {useState } from 'react';
import {Button, TextField, Divider, Toolbar, Tooltip, IconButton, Typography, Skeleton} from '@mui/material';
import { Save } from "@mui/icons-material";
import {Controller} from "react-hook-form";
import { landscape } from '../../constantes';
import AsynchronousSelect from '../asynchrone_select';

function LandscapePageForm(props) {
    const {formRef, handleSubmit, register, errors, control, setValue, isPool, controller} = props;

    const [isLoading, setIsLoading] = useState(true);

    const getData = async (name)=>{
      let prev_data = await controller.getElement(name);
      if(prev_data){
        console.log(prev_data);
        Object.keys(prev_data).map((key)=>{
          setValue(key, prev_data[key]);
        });
      }
      setIsLoading(()=>false);
    }

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
                  setIsLoading(()=>true);
                  if(item){
                    getData(item.name);
                  }
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
        {
          isLoading 
          ? <div className='flex flex-col  mt-20 mx-5'>
              <Skeleton variant="rectangular" height={60} className='mb-5'/>
              <Skeleton variant="rectangular" height={"60vh"}/>
            </div>
          :
        <div>
        <div className='flex flex-col my-10'>
          <Typography variant="body2" gutterBottom color={"GrayText"} sx={{width: "60vw", marginLeft: "10vw"}}>Head</Typography>
          <Divider variant="middle" sx={{width: "60vw", marginLeft: "10vw"}}/>
        </div>
        <div className="flex flex-row w-full h-[35%] justify-evenly mt-10">
          <div className="flex flex-col justify-evenly">
            <TextField label="Title" size="small" variant="outlined" sx={{margin: "20px 0"}}
            {...register('title')} error={errors.title ? true : false} helperText={errors.title?.message}
            InputLabelProps={{
              shrink: true
            }}
            />
  
            <TextField label="Presentation text" size="small" variant="outlined" multiline rows={3}
            InputLabelProps={{
              shrink: true
            }}
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
            InputLabelProps={{
              shrink: true
            }}
            {...register('bodyTitle')} error={errors.bodyTitle ? true : false} helperText={errors.bodyTitle?.message}/>
  
            <TextField label="Presentation text" size="small" variant="outlined" multiline rows={3}
            InputLabelProps={{
              shrink: true
            }}
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
                InputLabelProps={{
                  shrink: true
                }}
                {...register("service_" + ind)} error={errors["service_" + ind] ? true : false} helperText={errors["service_" + ind]?.message}/>
                <Divider variant="middle" sx={{width: "40vw", marginTop: "20px"}}/>
              </div>
            );
          })}
        </div>
        </div>
      }
      </form>
    </div>
    );
}

export default LandscapePageForm;