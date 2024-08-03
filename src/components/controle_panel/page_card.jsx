import { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function PageCard(props) {
  const { page } = props;
  return (
    <Link to={`detail/${page}`}>
      <div className="flex flex-col justify-center items-center h-[40vh] line-clamp-4 text-ellipsis">
        <Typography variant="h3">{page}</Typography>
      </div>
    </Link>
  );
}

export default PageCard;
