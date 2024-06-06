import { useState, useEffect, useRef } from "react";
import { DataGridView } from "../../components";
import { SpaController } from "../../controllers";
import { Skeleton } from "@mui/material";

function ControleSpa() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const abortController = useRef(null);

  useEffect(() => {
    const controller = new SpaController(abortController, setError); //setIsLoading

    const get_data = async () => {
      setIsLoading(() => true);
      let tempSpas = await controller.getSpas();
      setData(() => tempSpas);
      setIsLoading(() => false);
    };
    get_data();
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="flex flex-col  mt-20 mx-5">
          <Skeleton variant="rectangular" height={60} className="mb-5" />
          <Skeleton variant="rectangular" height={"60vh"} />
        </div>
      ) : (
        <DataGridView title={"Spas"} type={"spa"} data={data} />
      )}
    </div>
  );
}

export default ControleSpa;
