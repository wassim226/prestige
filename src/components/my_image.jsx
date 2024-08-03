import { useEffect, useState } from "react";
import BaseController from "../controllers/base_controller";
import { Skeleton } from "@mui/material";
import { standard } from "../constantes/data";

function MyImage(props) {
  const { id } = props;
  const [loading, setLoading] = useState(true);
  const [blob, setBlob] = useState(null);

  const reader = new FileReader();
  reader.onload = (e) => {
    setBlob(() => e.target.result);
  };

  const getFileApi = async (id) => {
    console.log("this is id used : " + id);
    const file = await BaseController.getFile(id);
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setBlob(() => null);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getFileApi(id);
  }, []);

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
      )}
    </div>
  );
}

export default MyImage;
