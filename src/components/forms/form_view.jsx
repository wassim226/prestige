import {useState, useRef, useEffect} from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { Skeleton } from '@mui/material';
import { getParsedData } from '../../constantes';

function FormView(props) {
  const {controller, prev} = props;
  const [data, setData] = useState("new");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(prev != "new"){
      const getData = async ()=>{
        console.log(prev);
        let prev_data = await controller.getElement(prev);
        prev_data = getParsedData(prev_data, typeof controller);
        setData(()=> prev_data);
        setIsLoading(()=>false);
      }
      getData();
    }else{
      setIsLoading(()=>false);
    }
  }, []);
  

  return (
    <div>
      { isLoading 
      ? <div className='flex flex-col  mt-20 mx-5'>
          <Skeleton variant="rectangular" height={60} className='mb-5'/>
          <Skeleton variant="rectangular" height={"60vh"}/>
        </div>
      :
        <FormViewer 
            {...props}
            data={data}
        />
      }
    </div>
  )
}

function FormViewer(props){
  const {controller, request_method, View, data} = props;
  const formRef = useRef(null);
  const {register, control, setValue, handleSubmit, reset, formState: {errors}} = useForm({defaultValues:data, resolver:zodResolver(data == "new" ? controller.schema : controller.updateSchema)});
  
  const [error, setError] = useState(false);

  const handelRequest = async (values)=>{
    console.log(values)
    let result = await request_method(values); 
  };

  return (
    <div>
        <View 
            formRef={formRef}
            setValue={setValue}
            control={control}
            prev={data}
            register={register} handleSubmit={handleSubmit(handelRequest)} reset={reset} 
            errors={errors}
        />
    </div>
  )
}

export default FormView;