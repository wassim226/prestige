import { Typography } from "@mui/material";
import { MySlider, ArticaleHead, MyImage } from "../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { hoverImageParent, hoverdImage } from "../constantes/style";
import { interventions, waterData } from "../constantes";

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
            className={`flex flex-col md:flex-row w-full items-center gap-3`}
          >
            <div className={`w-[90%] md:w-[40%] mx-auto ${hoverImageParent}`}>
              <MyImage
                id={waterData.artSequences[1].imgPresentation}
                className={`rounded-md ${hoverdImage}`}
              />
            </div>
            <div
              className={`flex flex-col justify-start items-center md:w-[50vw]`}
            >
              <Typography
                gutterBottom
                variant="h4"
                sx={{ fontWeight: 400 }}
                className="text-primary w-[80%] text-center md:w-[50%]"
              >
                {waterData.artSequences[1].title}
              </Typography>
              <p
                gutterBottom
                className="text-white w-[80%] text-[20px] text-center"
              >
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
              </p>
            </div>
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
              {interventions.map((val, ind) => (
                <MySlider
                  key={"prevs_" + ind}
                  prev_img={val.dirty}
                  new_img={val.clean}
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
