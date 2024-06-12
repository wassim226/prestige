import { useState } from "react";
import { Link } from "react-router-dom";
import { Skeleton, Typography } from "@mui/material";
import { addedValues, default_description } from "../constantes/data";
import { Valeur, TitlebarImageList, MyImage } from "../components";
import { Logo, image9 } from "../assets";
import { hoverImageParent, hoverdImage } from "../constantes/style";

function Home() {
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
        <div className={`flex flex-col justify-start w-[100vw]`}>
          <div className="flex flex-col-reverse md:flex-row justify-end md:justify-between items-center w-[100vw] xs:landscape:h-[250vh] md:landscape:h-[90vh] portrait:h-[90vh] overflow-y-clip">
            <div
              className={`flex flex-col justify-start items-center my-40 md:w-[50vw] md:mt-0`}
            >
              <Typography
                gutterBottom
                variant="h2"
                className="text-white w-[80%]"
              >
                PRESTIGE
              </Typography>
              <Typography gutterBottom className="text-white w-[80%]">
                {default_description}
              </Typography>
              <Link to="/contact">
                <button className="border-2 rounded mt-8 border-primary bg-transparent text-primary py-4 px-6 hover:bg-primary hover:text-secondary">
                  Devis gratuit
                </button>
              </Link>
            </div>
            <div
              className={`w-full h-auto min-h-40 md:w-[35vw] md:h-[38.33333vw] md:mr-32 md:mt-24 ${hoverImageParent}`}
            >
              <MyImage
                id={image9}
                loading="lazy"
                className={`${hoverdImage}`}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[100vw] my-20">
            <div className="flex flex-row justify-center items-center w-full">
              <Typography
                gutterBottom
                variant="h3"
                sx={{ fontWeight: 400 }}
                className="text-white text-center"
              >
                NOS VALEUR AJOUTER
              </Typography>
            </div>
            <div className="grid grid-rows-4 sm:grid-rows-1 grid-flow-col w-full my-20">
              {addedValues.map((v, i) => {
                let ind = i + 1;
                return (
                  <Valeur key={"val_" + ind} title={v.title} body={v.body} />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-start items-center slider-container">
            <div className="flex flex-row justify-center items-center w-full">
              <Typography
                gutterBottom
                variant="h3"
                sx={{ fontWeight: 400 }}
                className="text-white text-center"
              >
                Les avis de nos clients
              </Typography>
            </div>
            <TitlebarImageList />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
