import React from "react";
import { MyImage, ServiceIcon } from "../components";
import { Typography } from "@mui/material";
import { hoverImageParent, hoverdImage } from "../constantes/style";

function Presentation(props) {
  const { image, title, description, services } = props;
  return (
    <section className={`flex flex-col justify-center w-[100vw] my-32`}>
      <div
        className={`flex flex-row${
          Math.random() >= 0.5 ? "-reverse" : ""
        } w-full items-center`}
      >
        <div className={`w-[40%] mx-auto ${hoverImageParent}`}>
          <MyImage id={image} className={`rounded-md ${hoverdImage}`} />
        </div>
        <div className={`flex flex-col justify-start items-center w-[50vw]`}>
          <Typography
            gutterBottom
            variant="h4"
            sx={{ fontWeight: 400 }}
            className="text-primary w-[50%] text-center"
          >
            {title}
          </Typography>
          <Typography gutterBottom className="text-white w-[80%]">
            {description.split("(*)").length <= 1 ? (
              description
            ) : (
              <ul className={" list-disc"}>
                {description.split("(*)").map((val) => (
                  <li className="my-5">{val}</li>
                ))}
              </ul>
            )}
          </Typography>
        </div>
      </div>
      <div
        className={`grid grid-rows-4 sm:grid-rows-1 grid-flow-col w-full my-20`}
      >
        {services.map((val, ind) => (
          <ServiceIcon key={"ser_" + ind} title={val} />
        ))}
      </div>
    </section>
  );
}

export default Presentation;
