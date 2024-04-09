import {useRef, useState} from "react";
import { BlogArticaleController } from "../../controllers";
import {Button, TextField, Divider, Toolbar, Tooltip, IconButton, Typography} from '@mui/material';
import { Save, SaveAltOutlined } from "@mui/icons-material";

function ArticaleDetail() {
  const ifram = useRef(null);
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);

  const getDataFromEditor = ()=>{
    ifram.current.contentWindow.postMessage("get", "*");
  }

  const handelSave = async (values)=>{
    console.log(values);
    // const controller = new BlogArticaleController(abortController, setServerError);
    // let result = await controller.createBlogArticale(values); //props.prev ? await updateEducation(values, props.prev.id) : 
  };

  window.onmessage = function(e) {
    handelSave(e.data);
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
          {"Create blog artical"}
        </Typography>
        
        <Tooltip title={`Add ${"artical"}`}>
          <IconButton onClick={getDataFromEditor}>
            <Save className='text-secondary' />
          </IconButton>
        </Tooltip>
    </Toolbar>
    <div className="flex flex-row w-full h-[35%] justify-evenly mt-10">
      <div className="flex flex-col justify-evenly">
        <TextField label="Title" size="small" variant="outlined" />
        <TextField label="Presentation text" size="small" variant="outlined" multiline maxRows={3} />
      </div>
      <div className="flex flex-col justify-center">
        <Button variant="contained" component="label" sx={{height: "50%", margin: "auto"}}>
          Upload Image
          <input type="file" hidden/>
        </Button>
      </div>
    </div>
    <Divider variant="middle" sx={{width: "50vw", marginLeft: "18vw"}}/>
    <iframe ref={ifram} className='relative w-full h-full' src={`../../../build/index.html`}></iframe>
  </div>
  );
}

export default ArticaleDetail;
