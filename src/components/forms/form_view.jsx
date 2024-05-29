import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Backdrop, CircularProgress, Skeleton } from "@mui/material";

function FormView(props) {
  const { controller } = props;
  const prev =
    props.prev == "Landscape" ? "conception" : props.prev.toLowerCase();
  const [data, setData] = useState("new");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (prev != "new") {
      const getData = async () => {
        console.log(prev);
        let prev_data = await controller.getElement(prev);
        setData(() => prev_data);
        setIsLoading(() => false);
      };
      getData();
    } else {
      setIsLoading(() => false);
    }
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col  mt-20 mx-5">
          <Skeleton variant="rectangular" height={60} className="mb-5" />
          <Skeleton variant="rectangular" height={"60vh"} />
        </div>
      ) : (
        <FormViewer {...props} data={data} />
      )}
    </div>
  );
}

function FormViewer(props) {
  const { controller, request_method, View, data } = props;
  const formRef = useRef(null);
  console.log(data);
  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: data,
    resolver: zodResolver(
      data == "new" ? controller.schema : controller.updateSchema
    ),
  });

  const [error, setError] = useState(false);

  const [loading, setLoading] = useState(false);

  const handelRequest = async (values) => {
    console.log(values);
    setLoading(() => true);
    let result = await request_method(values);
    setLoading(() => false);
  };

  return (
    <div>
      {loading && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loading}
          // onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <View
        formRef={formRef}
        setValue={setValue}
        controller={controller}
        control={control}
        prev={data}
        register={register}
        handleSubmit={handleSubmit(handelRequest)}
        reset={reset}
        errors={errors}
        watch={watch}
      />
    </div>
  );
}

export default FormView;
