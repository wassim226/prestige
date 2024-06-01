import { Diamond } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";

function ServiceIcon(props) {
  return (
    <div className={`flex flex-col justify-start items-center`}>
      <div className="flex justify-center items-center mb-5 w-24 h-24 border-2 border-primary rounded-full text-primary bg-darkSecondary">
        <Diamond sx={{ fontSize: "36px" }} />
      </div>
      <div className={`flex flex-col justify-start items-center max-w-[20vw]`}>
        <Typography
          gutterBottom
          className="text-white text-center"
          variant="h6"
          sx={{ fontWeight: 300 }}
        >
          {props.title}
        </Typography>
      </div>
    </div>
  );
}

export default ServiceIcon;
