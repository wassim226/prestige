import { useState, useEffect, useRef } from "react";
import { MyPagination, SpaPresentation, ArticaleHead } from "../components";
import { ImageList, ImageListItem, Skeleton } from "@mui/material";
import { default_description, spas } from "../constantes/data";
import { defaultImage, handelResize } from "../constantes";

function Spa() {
  const [loading, setLoading] = useState(false);
  const [spaData, setSpasData] = useState(spas);
  const [cols, setCols] = useState(4);

  useEffect(() => {
    const handle = () => {
      handelResize(setCols);
    };
    window.addEventListener("resize", handle);

    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <div className="flex flex-col justify-start items-center w-[100vw]">
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
        <>
          <ArticaleHead
            background_class={defaultImage}
            backImagePos={"md:top-[-30vh]"}
            title={"SPAS GAMME PRESTIGE"}
            description={default_description}
          />
          <ImageList
            gap={8}
            cols={cols}
            className="relative w-[80%] mt-10 mb-20 min-h-[500px]"
          >
            {spaData.map((val, index) => (
              <ImageListItem
                key={"prod_" + index}
                className="flex justify-center items-center"
              >
                <SpaPresentation spa={val} key={"spa_wdt_" + index} />
              </ImageListItem>
            ))}
          </ImageList>
          <MyPagination path={"spa"} pagesCount={1} />
        </>
      )}
    </div>
  );
}

export default Spa;
