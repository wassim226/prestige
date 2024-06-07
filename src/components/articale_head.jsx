import { Typography } from "@mui/material";
import MyImage from "./my_image";

function ArticaleHead(props) {
  const { background_class, title, description, flip } = props;

  return (
    <div
      className={`flex flex-col relative justify-start items-center md:flex-none w-full md:w-[100vw] landscape:h-[250vh] md:landscape:h-[90vh]`}
    >
      <div
        className={`w-[98.8%] md:h-[90vh] md:absolute md:z-0 md:overflow-hidden`}
      >
        <MyImage id={background_class} className={`w-full h-auto`} />
      </div>
      <div
        className={`md:z-10 w-full h-full md:max-h-[90vh] bg-gradient-to-r ${
          flip ? "scale-x-[-1]" : ""
        } from-secondary from-5% via-dimSecondary via-45% to-transparent`}
      >
        <div
          className={`flex flex-col justify-start items-center w-full md:w-[70vw] mt-10`}
        >
          <Typography
            gutterBottom
            variant="h2"
            sx={{ fontWeight: 550 }}
            className="text-white w-[90%] md:w-[50%] text-center"
          >
            {title}
          </Typography>
          <Typography gutterBottom className="text-white w-[80%]">
            {description}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default ArticaleHead;
