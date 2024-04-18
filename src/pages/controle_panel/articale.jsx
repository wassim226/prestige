import {useRef, useState, useEffect} from "react";
import { DataGridView } from "../../components";
import { BlogArticaleController } from "../../controllers";
import { Skeleton } from "@mui/material";

function ControleArticale(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const abortController = useRef(null);

  useEffect(() => {
    const controller = new BlogArticaleController(abortController, setError); //setIsLoading
    
    const get_data = async ()=>{
      setIsLoading(()=>true);
      let tempArticales = await controller.getBlogArticales();
      setData(()=> tempArticales);
      setIsLoading(()=>false);
    }
    get_data();
  }, []);
  
  return <div>
    {
      isLoading 
      ? <div className='flex flex-col  mt-20 mx-5'>
      <Skeleton variant="rectangular" height={60} className='mb-5'/>
      <Skeleton variant="rectangular" height={"60vh"}/>
    </div>
      : <DataGridView title={"Articales"} type={"articale"} data={data} />
    }
  </div>;
}

export default ControleArticale;
