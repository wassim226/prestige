import React from "react";
import { PureWater1, PureWater } from "../assets";
import { Typography } from "@mui/material";
import { default_description } from "../constantes/data";

function BlogArticale(props) {
  const { title, img, text } = props;
  return (
    <div className="flex flex-col justify-start items-center">
      <div className="flex flex-row justify-center items-center w-[65vw] h-[80vh] my-5">
        <img className="w-full h-full" src={PureWater1} />
      </div>
      <section className="flex flex-col justify-start items-center mx-32">
        <Typography
          gutterBottom
          variant="h3"
          sx={{ fontWeight: 550 }}
          className="text-primary "
        >
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          gutterBottom
          sx={{ marginBottom: "35px" }}
          className="text-white"
        >
          {default_description}
          {default_description}
          {default_description}
          {default_description}
          {default_description}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          className="text-primary text-left w-full"
        >
          Un sous titre
        </Typography>
        <div className="flex flex-row justify-start items-center w-full mt-5">
          <Typography gutterBottom className="text-white w-[50%]">
            {default_description}
            {default_description}
            {default_description}
          </Typography>
          <div className="rounded h-[40%] w-[50%]">
            <img className="w-full h-full rounded" src={PureWater} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogArticale;
