import { Star } from "@mui/icons-material";
import { Typography } from "@mui/material";
import React from "react";
import { reviewWidget } from "../constantes/style";

function Review(props) {
  const { item } = props;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} className="text-primary" />);
  }
  return (
    <div className="group relative flex justify-center items-center w-full">
      <div className={reviewWidget}>
        <img
          className="rounded-full w-24 h-24"
          src={`${item.img}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        />
      </div>
      <div className=" bg-darkSecondary w-full  rounded bottom-0 mb-1 p-8 flex flex-col justify-start items-left">
        <Typography
          sx={{ marginLeft: "0.5rem" }}
          variant="h6"
          className=" truncate text-white"
        >
          User Name
        </Typography>

        <Typography
          sx={{ marginLeft: "0.5rem" }}
          className="w-[80%] line-clamp-3 text-white"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut.
        </Typography>
        <div className="flex fle-row justify-between w-[60%] mt-5 mx-2">
          {stars}
        </div>
      </div>
    </div>
  );
}

export default Review;
