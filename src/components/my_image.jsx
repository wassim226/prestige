import { useState } from "react";
import { Skeleton } from "@mui/material";
import { standard } from "../constantes/data";

function MyImage(props) {
  const { id } = props;
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex flex-col justify-center">
      {loading ? (
        <Skeleton
          variant="rectangular"
          height={"50vh"}
          sx={{ backgroundColor: "#4FD38A" }}
        />
      ) : (
        <div>
          {id ? (
            <img src={id} className={props.className} />
          ) : (
            <img
              src={standard}
              width="1024"
              height="1024"
              className={props.className}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default MyImage;
