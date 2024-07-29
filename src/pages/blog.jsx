import { ArticlePreview, ArticaleHead } from "../components";
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
      setData(() => res);
    }

    if (articales) {
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
            background_class={data.artSequences[0].presentationImg} //{"background-landscape blog_background"}
            title={data.artSequences[0].title.toUpperCase()} //{"SÉCURISATION LA QUALITÉ DES EAUX"}
            description={data.artSequences[0].extPresentation}
          />

          <section
            className={`grid gap-8 md:gap-0 grid-cols-1 ${
              articalesData.length <= 1
                ? ""
                : "ss:grid-cols-3 sm:grid-cols-4 md:grid-cols-5"
            } grid-flow-row w-[90%] mx-10 my-20`}
          >
            {articalesData.map((val, ind) => (
              <ArticlePreview
                key={"articals_" + ind}
                id={val.id}
                img={val.presentationImg}
                title={val.title}
                description={val.extPresentation}
              />
            ))}
          </section>
        </>
      )}
    </div>
  );
}

export default Blog;
