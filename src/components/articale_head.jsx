import { Typography } from "@mui/material";
import MyImage from "./my_image";

function ArticaleHead(props) {
  const { background_class, title, description, flip } = props;

  return (
    <div
      className={`flex flex-col justify-start items-center md:flex-none w-full md:w-[100vw] xs:landscape:h-[250vh] md:landscape:h-[90vh] portrait:h-[90vh]`}
    >
      <div className={`flex relative md:absolute md:z-0`}>
        <div className="flex relative top-0 min-h-40 md:h-[50vh]">
          <MyImage
            id={background_class}
            className={`w-full h-auto md:h-[79.5%]`}
          />
        </div>
      </div>
      <div
        className={`md:z-10 w-full h-full bg-gradient-to-r ${
          flip ? "scale-x-[-1]" : ""
        } from-secondary from-5% via-dimSecondary via-45% to-transparent`}
      >
        <div
          className={`flex flex-col justify-start items-center w-full md:w-[50vw] mt-10`}
        >
          <Typography
            gutterBottom
            variant="h2"
            sx={{ fontWeight: 550 }}
            className="text-white w-[50%] text-center"
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
