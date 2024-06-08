import { useState, useEffect, useRef } from "react";
import { MyPagination, SpaPresentation, ArticaleHead } from "../components";
import { ImageList, ImageListItem, Skeleton } from "@mui/material";
import { PageController, SpaController } from "../controllers";
import { default_description, handelResize } from "../constantes";

// const spas = [
//   {
//     image: Pool3,
//     title: "SPA MALAGA 3 PLACES",
//     price: 6500,
//     details: [
//       "Dimensions : 2100 x 1700 x 900mm",
//       "51 Jets thérapie",
//       "Système électronique BALBOA",
//       "Pompes LX Whirlpool 2 x 1500w",
//       "Acrylique Aristech",
//       "Luminothérapie",
//       "Système audio Bluetooth",
//       "Triple isolation",
//       "Design unique, finitions alu leds",
//     ]
//   },
//   {
//     image: Pool4,
//     title: "SPA NEVADA 2 PLACES",
//     price: 8000,
//     details: [
//       "Dimensions : 2100 x 1700 x 900mm",
//       "51 Jets thérapie",
//       "Système électronique BALBOA",
//       "Pompes LX Whirlpool 2 x 1500w",
//       "Acrylique Aristech",
//       "Luminothérapie",
//       "Système audio Bluetooth",
//       "Triple isolation",
//       "Design unique, finitions alu leds",
//     ]
//   }
// ];

function Spa() {
  const [loading, setLoading] = useState(false);
  const [spaData, setSpasData] = useState([]);
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
            background_class={2} //{"background-landscape spa_background"}
            title={"SPAS GAMME PRESTIGE"}
            description={default_description}
            // flip={true}
          />
          <ImageList
            variant="woven"
            gap={8}
            cols={cols}
            className="relative w-[80%] mt-10 mb-20 min-h-[400px]"
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
