import React from "react";
import { ArticaleHead, Presentation } from "../components";

function Articale(props) {
  const { data } = props;
  return (
    <>
      {data && (
        <div className={`flex flex-col justify-start w-[100vw]`}>
          <ArticaleHead
            background_class={data.artSequences[0].imgPresentation}
            title={data.artSequences[0].title}
            description={data.artSequences[0].extPresentation}
            backImagePos={"top-[-60vh]"}
          />
          <div>
            <Presentation
              image={data.artSequences[1].imgPresentation}
              title={data.artSequences[1].title}
              services={data.sequences}
              description={data.artSequences[1].extPresentation}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Articale;
