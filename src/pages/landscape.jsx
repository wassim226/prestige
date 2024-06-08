import { useState } from "react";
import { Articale } from "../components";
import { useParams } from "react-router-dom";
import { default_description, landscape } from "../constantes";
import { Skeleton } from "@mui/material";

function Landscape(props) {
  const { ind } = useParams();
  const [loading, setLoading] = useState(false);

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
          background_class={6} //`background-landscape conception${ind}`
          title={"Bienvenue dans le magazine de la piscine"}
          description={default_description}
          sections={[
            {
              image: 3,
              title: "Bienvenue dans le magazine de la piscine",
              description: default_description,
              services: [
                "Forme libre",
                "Couloir de nage",
                "Plage immergée",
                "Filtration écologique",
              ],
            },
          ]}
        />
      )}
    </div>
  );
}

export default Landscape;
