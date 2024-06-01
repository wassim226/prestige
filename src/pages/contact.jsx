import {
  Paper,
  Typography,
  TextField,
  Skeleton,
  Backdrop,
  CircularProgress,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { LocationOn, Phone } from "@mui/icons-material";
import { ContactController, MessageController } from "../controllers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4FD38A",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderWidth: 1,
            borderColor: "#4FD38A",
          },
        },
      },
    },
  },
});

function Contact() {
  const [serverError, setServerError] = useState(null);
  const abortController = useRef(null);
  const controller = new ContactController(abortController, setServerError);
  const message_controller = new MessageController(
    abortController,
    setServerError
  );
  const [loading, setLoading] = useState(true);
  const [loadingPost, setLoadingPost] = useState(false);
  const [data, setData] = useState(null);
  const [WIDTH, setWidth] = useState(window.innerWidth);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(message_controller.schema),
  });

  const getApiData = async () => {
    const res = await controller.getElement("0");
    if (res) {
      console.log(res);
      setData(() => res);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    getApiData();
    const resize = () => {
      setWidth(() => window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handelMessage = async (values) => {
    setLoadingPost(() => true);
    if (values) {
      let res = await message_controller.postMessage(values);
      if (res) {
        reset();
      }
    }
    setLoadingPost(() => false);
  };

  return (
    <div className={`w-[100vw] h-[90vh] bg-cover background-image-contact`}>
      {loadingPost && (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={loadingPost}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <div className="absolute w-full h-[90vh] bg-dimSecondary flex flex-col justify-center items-center">
        <ThemeProvider theme={theme}>
          <form onSubmit={handleSubmit(handelMessage)}>
            <Paper className="p-5 m-10 md:m-0 md:py-20 md:pl-20 md:pr-52">
              <Typography
                gutterBottom
                variant="h4"
                sx={{ fontWeight: 550 }}
                className="text-primary text-center"
              >
                CONTACTER NOUS
              </Typography>
              <div className="flex md:hidden flex-col justify-center items-center w-full h-auto py-5">
                <div className="flex flex-row justify-start items-center w-full h-10 pl-4">
                  <div className="flex justify-center items-center w-10 h-10 mr-3 border-primary rounded-full text-primary bg-darkSecondary">
                    <Phone sx={{ fontSize: "24px" }} />
                  </div>
                  <Typography
                    className="w-[60%] "
                    sx={{ marginRight: "10px", marginTop: "10px" }}
                  >
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className="mb-5"
                        sx={{ backgroundColor: "#4FD38A" }}
                      />
                    ) : (
                      data.phone
                    )}
                  </Typography>
                </div>
                <div className="flex flex-row justify-start items-center w-full h-10 mt-5 pl-4">
                  <div className="flex justify-center items-center w-10 h-10 mr-3 border-primary rounded-full text-primary bg-darkSecondary">
                    <LocationOn sx={{ fontSize: "24px" }} />
                  </div>
                  <Typography
                    className="w-[60%] "
                    sx={{ marginRight: "10px", marginTop: "10px" }}
                  >
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className="mb-5"
                        sx={{ backgroundColor: "#4FD38A" }}
                      />
                    ) : (
                      data.adress
                    )}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-col justify-start items-left">
                <div className="flex flex-col w-full md:flex-row justify-center items-center md:justify-between md:my-5">
                  <TextField
                    label="Nom"
                    variant="outlined"
                    size="small"
                    sx={{
                      marginRight: WIDTH >= 1060 ? "20px" : "0px",
                      marginBottom: WIDTH >= 1060 ? "0px" : "20px",
                    }}
                    className="w-full md:w-auto"
                    {...register("senderStName")}
                    error={errors.senderStName ? true : false}
                    helperText={errors.senderStName?.message}
                  />
                  <TextField
                    label="Prénom"
                    variant="outlined"
                    size="small"
                    {...register("senderLstName")}
                    sx={{
                      marginBottom: WIDTH >= 1060 ? "0px" : "20px",
                    }}
                    className="w-full md:w-auto"
                    error={errors.senderLstName ? true : false}
                    helperText={errors.senderLstName?.message}
                  />
                </div>
                <TextField
                  label="Email"
                  variant="outlined"
                  size="small"
                  sx={{ marginBottom: "20px" }}
                  {...register("sender")}
                  error={errors.sender ? true : false}
                  helperText={errors.sender?.message}
                />
                <TextField
                  label="Message"
                  multiline
                  rows={2}
                  variant="outlined"
                  size="small"
                  {...register("message1")}
                  error={errors.message1 ? true : false}
                  helperText={errors.message1?.message}
                />
              </div>
              <Paper className="absolute w-[20vw] h-[40vh] top-20 right-48 hidden md:flex flex-col justify-center items-start">
                <div className="flex flex-row justify-start items-center w-full h-10 mt-10 pl-4">
                  <div className="flex justify-center items-center w-10 h-10 mr-3 border-primary rounded-full text-primary bg-darkSecondary">
                    <Phone sx={{ fontSize: "24px" }} />
                  </div>
                  <Typography
                    className="w-[60%] "
                    sx={{ marginRight: "10px", marginTop: "10px" }}
                  >
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className="mb-5"
                        sx={{ backgroundColor: "#4FD38A" }}
                      />
                    ) : (
                      data.phone
                    )}
                  </Typography>
                </div>
                <div className="flex flex-row justify-start items-center w-full h-10 mt-10 pl-4">
                  <div className="flex justify-center items-center w-10 h-10 mr-3 border-primary rounded-full text-primary bg-darkSecondary">
                    <LocationOn sx={{ fontSize: "24px" }} />
                  </div>
                  <Typography
                    className="w-[60%] "
                    sx={{ marginRight: "10px", marginTop: "10px" }}
                  >
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        height={20}
                        className="mb-5"
                        sx={{ backgroundColor: "#4FD38A" }}
                      />
                    ) : (
                      data.adress
                    )}
                  </Typography>
                </div>
              </Paper>
            </Paper>
            <div className="flex flex-row justify-center w-full items-center">
              <button
                type="submit"
                className="border-2 rounded mt-8 border-primary bg-transparent text-primary py-2 px-8 md:mr-32 hover:bg-primary hover:text-secondary"
              >
                SEND
              </button>
            </div>
          </form>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Contact;
