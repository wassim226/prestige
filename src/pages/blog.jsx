import { ArticlePreview, ArticaleHead } from "../components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BlogArticaleController, PageController } from "../controllers";
import { useState, useRef, useEffect } from "react";
import { Skeleton } from "@mui/material";

function Blog() {
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [articalesData, setArticalesData] = useState(null);
  const controller = new PageController(abortController, setServerError);
  const articale_controller = new BlogArticaleController(
    abortController,
    setServerError
  );

  const getApiData = async (name) => {
    const res = await controller.getElement(name);
    const articales = await articale_controller.getBlogArticales();
    if (res) {
      console.log(res);
      setData(() => res);
    }

    if (articales) {
      console.log(articales);
      setArticalesData(() => articales);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getApiData("blog");
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
            background_class={data.presentationImg} //{"background-landscape blog_background"}
            title={data.title.toUpperCase()} //{"SÉCURISATION LA QUALITÉ DES EAUX"}
            description={data.extPresentation}
          />

          <section
            className={`flex flex-col justify-center items-center w-[100vw] my-20`}
          >
            <div className="flex flex-row justify-center items-center w-[80%] mt-40">
              <Swiper
                spaceBetween={50}
                slidesPerView={
                  articalesData.length < 3 ? articalesData.length : 3
                }
              >
                {articalesData.map((val, ind) => (
                  <SwiperSlide key={"prevs_" + ind}>
                    <ArticlePreview
                      id={val.id}
                      className="swiper-slide"
                      img={val.presentationImg}
                      title={val.title}
                      description={val.extPresentation}
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

export default Blog;
