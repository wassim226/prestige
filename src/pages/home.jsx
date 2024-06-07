import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Skeleton, Typography } from "@mui/material";
import { addedValues } from "../constantes";
import { Valeur, TitlebarImageList, MyImage } from "../components";
import { Logo } from "../assets";
import { PageController } from "../controllers";

function Home() {
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const controller = new PageController(abortController, setServerError);

  const getApiData = async (name) => {
    const res = await controller.getElement(name);
    if (res) {
      setData(() => res);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getApiData("home");
  }, []);

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
              className={`flex flex-col justify-start items-center mt-14 md:w-[50vw] md:mt-0`}
            >
              <img
                src={Logo}
                className="hidden md:flex rounded w-[40%] h-[20%]"
              />
              <Typography gutterBottom className="text-white w-[80%]">
                {data.extPresentation}
              </Typography>
              <Link to="/contact">
                <button className="border-2 rounded mt-8 border-primary bg-transparent text-primary py-4 px-6 hover:bg-primary hover:text-secondary">
                  Devis gratuit
                </button>
              </Link>
            </div>
            <div
              className={`w-full h-auto min-h-40 md:w-[35vw] md:h-[38.33333vw] md:mr-10`}
            >
              <MyImage id={data.presentationImg} />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-[100vw] my-20 mx-10">
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
            <div className="grid grid-rows-4 sm:grid-rows-1 grid-flow-col w-full mx-10 my-20">
              {/* flex flex-row justify-between items-center my-20 w-[80%] */}
              {Array(4)
                .fill()
                .map((v, i) => {
                  let ind = i + 1;
                  return (
                    <Valeur
                      key={"val_" + ind}
                      title={data["value_" + ind]}
                      body={data["desc_" + ind]}
                    />
                  );
                })}
            </div>
          </div>
          {/* <a name="devise"><div className='flex flex-row justify-start items-cente'></div></a> */}

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
