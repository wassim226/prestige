import { useState, useRef, useEffect } from "react";
import { Articale } from "../components";
import { useParams } from "react-router-dom";
import { default_description, landscape } from "../constantes";
import { PageController } from "../controllers";
import { Skeleton } from "@mui/material";

function Landscape(props) {
  const { ind } = useParams();

  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const controller = new PageController(abortController, setServerError);

  const getApiData = async (name) => {
    const res = await controller.getElement(name);
    if (res) {
      console.log(res);
      setData(() => res);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getApiData(landscape[ind].name);
  }, []);

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
        <Articale
          background_class={data.presentationImg} //`background-landscape conception${ind}`
          title={data.title.toUpperCase()}
          description={data.extPresentation}
          sections={[
            {
              image: data.bodyImg,
              title: data.bodyTitle.toUpperCase(),
              description: data.bodyPresentation,
              services: [
                data.service_1,
                data.service_2,
                data.service_3,
                data.service_4,
              ],
            },
          ]}
        />
      )}
    </div>
  );
}

export default Landscape;
