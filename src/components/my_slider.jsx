import { Typography } from "@mui/material";
import { useState } from "react";

function MySlider(props) {
  const { prev_img, new_img } = props;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-row rounded"
      onMouseOut={() => {
        setHovered((prev) => false);
      }}
      onMouseOver={() => {
        setHovered((prev) => true);
      }}
    >
      <div className="relative w-[50%] rounded-l">
        <img src={prev_img} className="w-full h-full rounded-l" />
        <div className="flex flex-col justify-center absolute z-20 top-[0] w-full h-full opacity-0 hover:opacity-100 duration-500 bg-dimSecondary">
          <Typography variant="body2" className="text-white text-center">
            Previous
          </Typography>
        </div>
      </div>
      <div className="relative w-[50%] rounded-r">
        <img src={new_img} className="w-full h-full rounded-r" />
        <div className="flex flex-col justify-center absolute z-20 top-[0] w-full h-full opacity-0 hover:opacity-100 duration-500 bg-dimSecondary">
          <Typography variant="body2" className="text-white text-center">
            New
          </Typography>
        </div>
      </div>

      {/* <div
        className={`absolute w-full h-full bg-dimSecondary flex flex-row justify-around items-center duration-500 ${
          hovered ? "scale-1" : "scale-0"
        }`}
      >
        
      </div> */}
    </div>
  );
}

export default MySlider;
