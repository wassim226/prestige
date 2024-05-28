import { Paper, Typography, TextField, Skeleton } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { LocationOn, Phone } from "@mui/icons-material";
import { ContactController } from "../controllers";

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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

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
  }, []);

  return (
    <div className={`w-[100vw] h-[90vh] bg-cover background-image-contact`}>
      <div className="absolute w-full h-[90vh] bg-dimSecondary flex flex-col justify-center items-center">
        <ThemeProvider theme={theme}>
          <Paper className="py-20 pl-20 pr-52">
            <Typography
              gutterBottom
              variant="h4"
              sx={{ fontWeight: 550 }}
              className="text-primary"
            >
              CONTACTER NOUS
            </Typography>
            <form className="flex flex-col justify-start items-left">
              <div className="flex flex-row justify-between my-5">
                <TextField
                  label="Nom"
                  variant="outlined"
                  size="small"
                  sx={{ marginRight: "20px" }}
                />
                <TextField label="Prénom" variant="outlined" size="small" />
              </div>
              <TextField
                label="Email"
                variant="outlined"
                size="small"
                sx={{ marginBottom: "20px" }}
              />
              <TextField
                label="Message"
                multiline
                rows={2}
                variant="outlined"
                size="small"
              />
            </form>
            <Paper className="absolute w-[20vw] h-[40vh] top-20 right-48 flex flex-col justify-center items-start">
              <div className="flex flex-col justify-start items-start w-full mx-2 mb-5">
                <div className="flex flex-row justify-start items-center w-full h-10">
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
              </div>
              <div className="flex flex-col justify-start items-start w-full mx-2">
                <div className="flex flex-row justify-start items-center w-full h-10">
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
            </Paper>
          </Paper>
          <button className="border-2 rounded mt-8 border-primary bg-transparent text-primary py-2 px-8 mr-32 hover:bg-primary hover:text-secondary">
            SEND
          </button>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Contact;
