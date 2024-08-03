import { Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import MyImage from "./my_image";

function SpaPresentation(props) {
  const { presentationImg, title, description, price, mode, id } = props.spa;
  const [position, setPosition] = useState([0, 0]);
  const [isHovred, setIsHovred] = useState(false);
  const [show_detail, setShow_detail] = useState(false);
  const [in_2nd_half, setIn2ndHalf] = useState(false);
  const navigate = useNavigate();
  const img = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const handel_move_on_image = (evt) => {
      setImgSrc(() => img.current.firstChild.firstChild.firstChild.src);

      if (
        img.current.getBoundingClientRect().x >=
        window.screen.availWidth / 2
      ) {
        setIn2ndHalf((prev) => true);
      }

      if (img.current.offsetWidth > 0 && img.current.offsetHeight > 0)
        setPosition((prev) => [
          evt.offsetX * (-350 / img.current.offsetWidth),
          evt.offsetY * (-350 / img.current.offsetHeight),
        ]);
    };
    img.current.addEventListener("mousemove", handel_move_on_image);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center max-w-[200px]">
      <div className={`relative flex flex-col justify-center items-center `}>
        <div
          ref={img}
          onClick={() => {
            mode != "edit"
              ? setShow_detail((prev) => !prev)
              : navigate(`detail/${id}`);
          }}
          onMouseOut={() => {
            setIsHovred((prev) => false);
          }}
          onMouseOver={() => {
            setIsHovred((prev) => true);
          }}
          className="w-[200px] h-[auto] cursor-pointer"
        >
          <MyImage
            id={presentationImg}
            className="w-full h-full relative rounded-md"
          />
        </div>

        {mode != "edit" && imgSrc != null && (
          <div
            className={`${isHovred ? "block" : "hidden"} min-h-[350px]`}
            style={{
              marginBottom: "50px",
              zIndex: 2,
              position: "absolute",
              top: "0px",
              left: in_2nd_half ? "-360px" : "210px",
              width: "350px",
              height: "350px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "700px 700px",
              backgroundImage: `url('${imgSrc}')`,
              backgroundPosition: position[0] + "px " + position[1] + "px",
            }}
          >
            <div
              className={`absolute ${
                show_detail ? "flex" : "hidden"
              } flex-col w-full h-full justify-center items-start bg-dimSecondary`}
            >
              <div
                className={`text-primary text-center w-full mx-auto my-8 text-xl`}
              >
                {title}
              </div>
              <div className={`text-white ml-5`}>
                {description.split("\n").map((detail, ind) => (
                  <Typography key={"spa_dtl_" + ind}>{detail}</Typography>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Typography
        sx={{ marginTop: "12px", marginBottom: "12px" }}
        className="text-white w-full text-center mx-auto max-w-[200px]"
      >
        {price} €
      </Typography>
    </div>
  );
}

export default SpaPresentation;
