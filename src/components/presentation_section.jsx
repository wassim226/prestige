import React from "react";
import { MyImage, ServiceIcon } from "../components";
import { Typography } from "@mui/material";
import { hoverImageParent, hoverdImage } from "../constantes/style";

function Presentation(props) {
  const { image, title, description, services } = props;
  return (
    <section className={`flex flex-col justify-center w-[100vw] my-32`}>
      <div className={`flex flex-col md:flex-row w-full items-center gap-3`}>
        <div className={`w-[90%] md:w-[40%] mx-auto ${hoverImageParent}`}>
          <img src={image} className={`rounded-md ${hoverdImage}`} />
        </div>
        <div className={`flex flex-col justify-start items-center md:w-[50vw]`}>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: 400 }}
            className="text-primary md:w-[50%] text-center"
          >
            {title}
          </Typography>
          <p
            gutterBottom
            className="text-white w-[80%] text-[20px] text-center"
          >
            {description.split("(*)").length <= 1 ? (
              description
            ) : (
              <ul className={" list-disc"}>
                {description.split("(*)").map((val) => (
                  <li className="my-5">{val}</li>
                ))}
              </ul>
            )}
          </p>
        </div>
      </div>
      <div
        className={`grid grid-rows-4 sm:grid-rows-1 grid-flow-col w-full my-20`}
      >
        {services.map((val, ind) => (
          <ServiceIcon key={"ser_" + ind} title={val.description} />
        ))}
      </div>
    </section>
  );
}

export default Presentation;
