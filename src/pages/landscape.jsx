import { useState, useRef, useEffect } from "react";
import { Articale } from "../components";
import { useParams } from "react-router-dom";
import { PageController } from "../controllers";
import { Skeleton } from "@mui/material";

function Landscape() {
  const { name } = useParams();

  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const controller = new PageController(abortController, setServerError);

  const getApiData = async (name) => {
    const res = await controller.getElement(name);
    if (res) {
      setData(() => res);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getApiData(name);
  }, [name]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col my-20 mx-5 w-[80vw]">
          <Skeleton
            variant="rectangular"
            height={60}
            className="mb-5"
            sx={{ backgroundColor: "#4FD38A" }}
          />
          <Skeleton
            variant="rectangular"
            height={"60vh"}
            sx={{ backgroundColor: "#4FD38A" }}
          />
        </div>
      ) : (
        <Articale data={data} />
      )}
    </div>
  );
}

export default Landscape;
