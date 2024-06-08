import { useState, useRef, useEffect } from "react";
import { Articale } from "../components";
import { Skeleton } from "@mui/material";
import { PageController } from "../controllers";
import { default_description } from "../constantes";

function Pool() {
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
          background_class={6}
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

export default Pool;
