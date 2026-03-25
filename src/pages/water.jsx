import { Typography } from "@mui/material";
import { PureWater1, PureWater } from "../assets";
import { MySlider, ArticaleHead, MyImage } from "../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hoverImageParent, hoverdImage } from "../constantes/style";
import { waterData } from "../constantes";

function Water() {
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
        <ArticaleHead
          background_class={waterData.artSequences[0].imgPresentation}
          title={waterData.artSequences[0].title.toUpperCase()}
          description={waterData.artSequences[0].extPresentation}
        />

        <section className={`flex flex-col justify-center w-[100vw] my-32`}>
          <div
            className={`flex flex-row${
              Math.random() >= 0.5 ? "-reverse" : ""
            } w-full items-center`}
          >
            <div className={`w-[40%] mx-auto ${hoverImageParent}`}>
              <MyImage
                id={waterData.artSequences[1].imgPresentation}
                className={`rounded-md ${hoverdImage}`}
              />
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
                {waterData.artSequences[1].title}
              </Typography>
              <Typography gutterBottom className="text-white w-[80%]">
                {waterData.artSequences[1].extPresentation.split("(*)")
                  .length <= 1 ? (
                  waterData.artSequences[1].extPresentation
                ) : (
                  <ul className={" list-disc"}>
                    {waterData.artSequences[1].extPresentation
                      .split("(*)")
                      .map((val) => (
                        <li className="my-5">{val}</li>
                      ))}
                  </ul>
                )}
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
            {waterData.sequences.map((val, ind) => (
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
                  {val.description}
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
                  prev_img={PureWater}
                  new_img={PureWater1}
                />
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
}

export default Water;
