import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { Valeur, TitlebarImageList, MyImage } from "../components";
import { HomePresentation, Logo } from "../assets";
import { hoverImageParent, hoverdImage } from "../constantes/style";
import { addedValues, default_description } from "../constantes";

function Home() {
  const [data, setData] = useState(null);

  return (
    <div>
      <div className={`flex flex-col justify-start w-[100vw]`}>
        <div className="flex flex-col-reverse md:flex-row justify-end md:justify-between items-center w-[100vw] xs:landscape:h-[250vh] md:landscape:h-[90vh] portrait:h-[90vh] overflow-y-clip">
          <div
            className={`flex flex-col justify-start items-center mt-14 md:w-[50vw] md:mt-0`}
          >
            <img
              src={Logo}
              className="hidden md:flex rounded w-[40%] h-[20%]"
            />
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
            className={`w-full h-auto min-h-40 md:w-[35vw] md:h-[38.33333vw] md:mr-10 ${hoverImageParent}`}
          >
            <img src={HomePresentation} className={`${hoverdImage}`} />
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
            {addedValues.map((v, i) => (
              <Valeur key={"val_" + i} title={v.title} body={v.body} />
            ))}
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
    </div>
  );
}

export default Home;
