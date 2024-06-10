import { Skeleton, Typography } from "@mui/material";
import { PureWater1, PureWater, Clean, Clean1, greenPool1 } from "../assets";
import { MySlider, ArticaleHead, MyImage } from "../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PageController } from "../controllers";
import { useEffect, useRef, useState } from "react";
import { default_description } from "../constantes/data";
import { hoverImageParent, hoverdImage } from "../constantes/style";

function Water() {
  const [loading, setLoading] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
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
              background_class={Clean1}
              title={"SÉCURISATION LA QUALITÉ DES EAUX"}
              description={default_description}
            />

            <section className={`flex flex-col justify-center w-[100vw] my-32`}>
              <div
                className={`flex flex-row${
                  Math.random() >= 0.5 ? "-reverse" : ""
                } w-full items-center`}
              >
                <div className={`w-[40%] mx-auto ${hoverImageParent}`}>
                  <MyImage id={Clean} className={`rounded-md ${hoverdImage}`} />
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
                    Quelles solutions proposons-nous pour le traitement de votre
                    eau de piscine ?
                  </Typography>
                  <Typography gutterBottom className="text-white w-[80%]">
                    {default_description}
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
              <div className="grid gap-8 md:gap-0 grid-cols-1 ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 grid-flow-row w-full mx-10 my-20">
                {Array.from(Array(5)).map((val, ind) => (
                  <div
                    key={"offers_" + ind}
                    className={`flex flex-col justify-center items-center w-[50vw] ss:w-[15vw] hover:scale-110 duration-500 rounded-xl border-2 border-primary bg-darkSecondary`}
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
                      {/* {data["offerDesc_" + ind]} */}
                      {default_description}
                    </Typography>
                  </div>
                ))}
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

              <div className="w-[80%] mt-5">
                <Slider {...settings}>
                  {Array.from(Array(3)).map((val, ind) => (
                    <MySlider
                      key={"prevs_" + ind}
                      prev_img={greenPool1}
                      new_img={PureWater1}
                    />
                  ))}
                </Slider>
              </div>
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default Water;
