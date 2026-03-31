import { useState, useEffect } from "react";
import { MyPagination, SpaPresentation, ArticaleHead } from "../components";
import { ImageList, ImageListItem } from "@mui/material";
import { handelResize, spaData } from "../constantes";

function Spa() {
  const [cols, setCols] = useState(4);
  const handle = () => {
    handelResize(setCols);
  };
  useEffect(() => {
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return (
    <div className="flex flex-col justify-start items-center w-[100vw]">
      <ArticaleHead
        background_class={spaData.artSequences[0].imgPresentation}
        title={spaData.artSequences[0].title.toUpperCase()}
        description={spaData.artSequences[0].extPresentation}
        backImagePos={"md:top-[-50vh]"}
        // flip={true}
      />
      <ImageList
        // variant="woven"
        gap={8}
        cols={cols}
        className="relative w-[80%] mt-10 mb-20 min-h-[500px]"
      >
        {spaData.products.map((val, index) => (
          <ImageListItem
            key={"prod_" + index}
            className="flex justify-center items-center overflow-y-clip"
          >
            <SpaPresentation spa={val} key={"spa_wdt_" + index} />
          </ImageListItem>
        ))}
      </ImageList>
      <MyPagination path={"spa"} pagesCount={1} />
    </div>
  );
}

export default Spa;
