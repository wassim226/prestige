import { useEffect, useState } from "react";
import BaseController from "../controllers/base_controller";
import { Skeleton } from "@mui/material";
import { standard } from "../constantes/data";

function MyImage(props) {
  const { id } = props;
  const [loading, setLoading] = useState(true);
  const [blob, setBlob] = useState(id);

  return (
    <div className="flex flex-col justify-center">
      <div>
        {blob ? (
          <img src={blob} className={props.className} />
        ) : (
          <img
            src={standard}
            width="1024"
            height="1024"
            className={props.className}
          />
        )}
      </div>
    </div>
  );
}

export default MyImage;
