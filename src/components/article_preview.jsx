import { useState } from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import MyImage from "./my_image";

function ArticlePreview(props) {
  const { img, title, description, id, mode } = props;
  const [hovered, setHovered] = useState(false);
  return (
    <Link to={`${mode == "edit" ? "detail/" : "../articale/"}${id}`}>
      <div
        className="flex flex-row relative rounded cursor-pointer"
        onMouseOut={() => {
          setHovered((prev) => false);
        }}
        onMouseOver={() => {
          setHovered((prev) => true);
        }}
      >
        <div className={`w-full rounded`}>
          <MyImage id={img} />
        </div>
        <div
          className={`absolute w-full h-full bg-dimSecondary flex flex-col justify-around items-center duration-500 ${
            hovered ? "scale-1" : "scale-0"
          }`}
        >
          <Typography variant="h6" className="text-white">
            {title}
          </Typography>
          <Typography
            variant="body1"
            sx={{ margin: "0 15px" }}
            className="text-white line-clamp-6"
          >
            {description}
          </Typography>
        </div>
      </div>
    </Link>
  );
}

export default ArticlePreview;
