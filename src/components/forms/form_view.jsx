import {useState, useRef} from 'react';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

function FormView(props) {
  const {controller, request_method, View, prev} = props;
  const formRef = useRef(null);
  const {register, control, setValue, handleSubmit, reset, formState: {errors}} = useForm({defaultValues: prev, resolver:zodResolver(controller.schema)});
  
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
            prev={prev}
            register={register} handleSubmit={handleSubmit(handelRequest)} reset={reset} 
            errors={errors}
        />
    </div>
  )
}

export default FormView