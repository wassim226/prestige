import { useState, useRef, useEffect } from "react";
import { Articale } from "../components";
import { Skeleton } from "@mui/material";
import { PageController } from "../controllers";

function Pool() {
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
    getApiData("pool");
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
          background_class={data.presentationImg}
          title={data.title.toUpperCase()} //{"Bienvenue dans le magazine de la piscine"}
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
              // image: Pool3,
              // title : "Bienvenue dans le magazine de la piscine",
              // description: default_description,
              // services: ["Forme libre", "Couloir de nage", "Plage immergée", "Filtration écologique"]
            },
          ]}
        />
      )}
    </div>
  );
}

export default Pool;
