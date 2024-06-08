import { ArticlePreview, ArticaleHead } from "../components";
import { useState } from "react";
import { Skeleton } from "@mui/material";

function Blog() {
  const [loading, setLoading] = useState(false);
  const [articalesData, setArticalesData] = useState([]);

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
            background_class={5} //{data.presentationImg} {"background-landscape blog_background"}
            title={"SÉCURISATION LA QUALITÉ DES EAUX"}
            description={"SÉCURISATION LA QUALITÉ DES EAUX"}
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
