import {useRef, useState, useEffect} from "react";
import { BlogArticaleController } from "../../controllers";
import {Button, TextField, Divider, Toolbar, Tooltip, IconButton, Typography, Skeleton} from '@mui/material';
import { Save } from "@mui/icons-material";
import { FormView, UploadImage } from "../../components";
import { useParams } from "react-router-dom";



const ArticaleDetail = (props)=>{
  const {id} = useParams();
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const controller = new BlogArticaleController(abortController, setServerError);

  return (
    <div>
      <FormView 
        controller={controller}
        request_method={id == "new" ? controller.createBlogArticale : controller.updateBlogArticale}
        View={ArticaleForm}
        prev={id != "new" ? id : undefined}
      />
    </div>
  );
}



function ArticaleForm(props) {
  const {formRef, handleSubmit, register, errors, setValue, prev} = props;
  const ifram = useRef(null);
  const getDataFromEditor = ()=>{
    ifram.current.contentWindow.postMessage("get", "*");
  }
  const setEditorData = ()=>{
    let data = {content:JSON.parse(prev.contentNavigation.content1)};
    ifram.current.contentWindow.postMessage(JSON.stringify(data), "*");
  }
  
  useEffect(() => {
    if(prev && ifram.current){
      ifram.current.addEventListener("load", function() {
        setEditorData();
      });
    }
  }, []);
  
  window.onmessage = function(e) {
    if(e.data == "updated"){
    }else{
      setValue('content', e.data, { shouldValidate: true });
      setValue('id', prev);
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      )
      console.log(errors)
    }
  };
  
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
          {"Create blog articale"}
        </Typography>
        
        <Tooltip title={`Add ${"articale"}`}>
          <IconButton onClick={getDataFromEditor}>
            <Save className='text-secondary' />
          </IconButton>
        </Tooltip>
    </Toolbar>

    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="flex flex-row w-full h-[35%] justify-evenly mt-10">
        <div className="flex flex-col justify-evenly">
          <TextField label="Title" size="small" variant="outlined" sx={{margin: "20px 0"}}
          {...register('title')} error={errors.title ? true : false} helperText={errors.title?.message}/>

          <TextField label="Presentation text" size="small" variant="outlined" multiline rows={3}
          {...register('extPresentation')} error={errors.extPresentation ? true : false} helperText={errors.extPresentation?.message}/>
          
          <input type="text" readOnly className="hidden" {...register('content')}/>
        </div>
        <UploadImage setValue={setValue} dataKey={"presentationImg"} register={register} prev={prev}/>
      </div>
      { (errors.content || errors.presentationImg) && 
        <div className="flex flex-col text-red-600 justify-center items-center my-4">
          {
            errors.content?.message ?? errors.presentationImg?.message
          }
        </div>
      }
    </form>
    <Divider variant="middle" sx={{width: "50vw", marginLeft: "18vw", marginTop: "30px", marginBottom: "10px"}}/>
    <iframe ref={ifram} className='relative w-full h-full' src={`../../../build/index.html`}></iframe>
  </div>
);
}

export default ArticaleDetail;
