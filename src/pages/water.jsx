import { Skeleton, Typography } from "@mui/material";
import { PureWater1, PureWater } from "../assets";
import { default_description } from "../constantes";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MySlider, ArticaleHead, MyImage } from "../components";

import "swiper/css";
import "swiper/css/navigation";
import { PageController } from "../controllers";
import { useEffect, useRef, useState } from "react";

function Water() {
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const controller = new PageController(abortController, setServerError);

  const getApiData = async (name) => {
    const res = await controller.getElement(name);
    if (res) {
      console.log(res);
      setData(() => res);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getApiData("water");
  }, []);

  return (
    <div className={`flex flex-col justify-start w-[100vw]`}>
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
            background_class={data.presentationImg} //{"background-landscape water_background"}
            title={data.title.toUpperCase()} //{"SÉCURISATION LA QUALITÉ DES EAUX"}
            description={data.extPresentation} //{default_description}
          />

          <section className={`flex flex-col justify-center w-[100vw] my-32`}>
            <div
              className={`flex flex-row${
                Math.random() >= 0.5 ? "-reverse" : ""
              } w-full items-center`}
            >
              <div className={`w-[40%] mx-auto`}>
                <MyImage id={data.bodyImg} className="rounded-md" />
              </div>
              <div
                className={`flex flex-col justify-start items-center w-[50vw]`}
              >
                <Typography
                  gutterBottom
                  variant="h4"
                  sx={{ fontWeight: 400 }}
                  className="text-primary w-[50%]"
                >
                  {data.bodyTitle}
                  {/* Quelles solutions proposons-nous pour le traitement de votre eau de piscine ? */}
                </Typography>
                <Typography gutterBottom className="text-white w-[80%]">
                  {data.bodyPresentation}
                </Typography>
              </div>
            </div>
          </section>
          <section className={`flex flex-col justify-center w-[100vw] `}>
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontWeight: 400 }}
              className="text-primary w-full text-center"
            >
              NOS OFFRES
            </Typography>
            <div className="grid gap-8 grid-cols-1 ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 grid-flow-row w-full mx-10 my-20">
              {
                // flex flex-row justify-center items-center w-full
                Array.from(Array(5)).map((val, ind) => (
                  <div
                    key={"offers_" + ind}
                    className={`flex flex-col justify-center items-center w-[50vw] ss:w-[15vw] hover:scale-110 duration-500 ${
                      ind % 2 == 0 ? "md:mt-24" : ""
                    } rounded-xl md:rounded-full border-2 border-primary bg-darkSecondary`}
                  >
                    <Typography
                      sx={{ marginTop: "12px" }}
                      variant="h3"
                      className="text-center text-primary"
                    >
                      {++ind}
                    </Typography>
                    <Typography
                      sx={{ margin: "20px", marginBottom: "30px" }}
                      className="text-white text-center"
                    >
                      {data["offerDesc_" + ind]}
                    </Typography>
                  </div>
                ))
              }
            </div>
          </section>
          <section
            className={`flex flex-col justify-center items-center w-[100vw] my-14`}
          >
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontWeight: 400 }}
              className="text-primary w-full text-center"
            >
              Nos interventions
            </Typography>
            <div className="flex flex-row justify-center items-center w-[80%] mt-5">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={50}
                slidesPerView={3}
              >
                {Array.from(Array(5)).map((val, ind) => (
                  <SwiperSlide>
                    <MySlider
                      className="swiper-slide"
                      key={"prevs_" + ind}
                      prev_img={PureWater}
                      new_img={PureWater1}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Water;
