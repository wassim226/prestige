import { useState } from "react";
import { Articale } from "../components";
import { useParams } from "react-router-dom";
import {
  default_description,
  landscape,
  landscapeData,
} from "../constantes/data";
import { Skeleton } from "@mui/material";

function Landscape(props) {
  const { name } = useParams();
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
          background_class={landscapeData[name].background}
          backImagePos={landscapeData[name].backImagePos}
          title={landscapeData[name].title}
          description={landscapeData[name].description}
          sections={landscapeData[name].sections}
        />
      )}
    </div>
  );
}

export default Landscape;
