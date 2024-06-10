import { useState } from "react";
import { Skeleton } from "@mui/material";

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
          <img src={id} className={props.className} />
        </div>
      )}
    </div>
  );
}

export default MyImage;
