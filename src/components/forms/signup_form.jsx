import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  TextField,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Divider,
  ToggleButton,
  Switch,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PasswordInput } from "..";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserController } from "../../controllers";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function SignupForm(props) {
  const { open, setOpen, setOpenSignin, setAuthUser, inCpanel } = props;
  const [WIDTH, setWidth] = useState(window.innerWidth);
  const [isLandscape, setIsLandscape] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState({ code: null, message: null });
  const abortController = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(UserController.signupSchema) });

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const handelSignup = async (values) => {
    setIsLoading(() => true);
    const controller = new UserController(abortController, setServerError);
    let result = await controller.signup(values);
    setIsLoading(() => false);

    if (result) {
      setError(() => false);
      if (setAuthUser) setAuthUser(() => result);
      handleClose();
    } else {
      setError(() => true);
    }
  };

  const handelSignin = () => {
    handleClose();
    setOpenSignin(() => true);
  };

  useEffect(() => {
    const resize = () => {
      setWidth(() => window.innerWidth);
    };
    const orientationHandler = () => {
      setIsLandscape(
        () => screen.orientation.type.match(/\w+/)[0] === "landscape"
      );
    };
    window.addEventListener("resize", resize);
    screen.orientation.addEventListener("change", orientationHandler);
    return () => {
      window.removeEventListener("resize", resize);
      screen.orientation.removeEventListener("change", orientationHandler);
    };
  }, []);

  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <form ref={formRef} onSubmit={handleSubmit(handelSignup)}>
        <DialogContent
          className="flex flex-col justify-center items-center"
          dividers
          sx={{
            width: WIDTH >= 1060 ? "35vw" : "100%",
            height: WIDTH >= 1060 ? "55vh" : isLandscape ? "100vh" : "60vh",
          }}
        >
          <div
            className={`flex flex-col justify-center items-center w-full md:mt-20`}
          >
            <div className="flex flex-row justify-center items-center w-full md:w-auto">
              <TextField
                {...register("firstName")}
                type="text"
                variant="outlined"
                fullWidth
                label={"First Name"}
                size="small"
                margin="normal"
                sx={{ marginRight: 1, width: WIDTH < 1060 ? "100%" : "auto" }}
                error={errors.firstName ? true : false}
                helperText={errors.firstName?.message}
              />
              <TextField
                {...register("lastName")}
                sx={{ marginLeft: 1, width: WIDTH < 1060 ? "100%" : "auto" }}
                type="text"
                fullWidth
                variant="outlined"
                label={"Last Name"}
                size="small"
                margin="normal"
                error={errors.lastName ? true : false}
                helperText={errors.lastName?.message}
              />
            </div>
            <TextField
              {...register("email")}
              type="email"
              variant="outlined"
              fullWidth
              label={"Email"}
              size="small"
              margin="normal"
              error={errors.email ? true : false}
              helperText={errors.email?.message}
            />
            <PasswordInput
              sx={{ width: "100%" }}
              className={``}
              id={"password"}
              register={register("password")}
              error={errors.password ? true : false}
              helperText={errors.password?.message}
            />
            <PasswordInput
              sx={{ width: "100%" }}
              label={"Confirm password"}
              id={"confirm"}
              className={``}
              register={register("confirmPassword")}
              error={errors.confirmPassword || errors.confirm ? true : false}
              helperText={
                errors.confirm?.message ?? errors.confirmPassword?.message
              }
            />
            {inCpanel ? (
              <div className="flex flex-row justify-start items-center w-full">
                <Typography className=" pt-2">{"Admin"}</Typography>
                <Switch
                  label={"Admin"}
                  checked={isAdmin}
                  onChange={() => setIsAdmin((prev) => !prev)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            ) : (
              <>
                <Divider className="w-[50%] my-1" sx={{ margin: "40px 0px" }} />
                <Box>
                  <Typography
                    variant="body2"
                    className=" cursor-pointer"
                    onClick={() => handelSignin()}
                  >
                    Already have an account? Sign in
                  </Typography>
                </Box>
              </>
            )}
            {error && (
              <>
                <Divider className="w-[50%] my-1" sx={{ margin: "40px 0px" }} />
                <Typography className="text-red-600 pt-2">
                  {"E-mail ou mot de passe incorrect"}
                </Typography>
              </>
            )}
          </div>
        </DialogContent>
        <DialogActions
          className={`flex flex-row justify-center items-center my-5`}
        >
          <div className="flex flex-row w-full justify-center items-center">
            <button
              size="small"
              type="submit"
              disabled={isLoading}
              className={`bg-primary text-white px-20 py-2 rounded-sm`}
              onMouseDown={() => {
                setValue("role", inCpanel && isAdmin ? "admin" : "customer");
              }}
            >
              Signup
            </button>
          </div>
        </DialogActions>
      </form>
    </BootstrapDialog>
  );
}

export default SignupForm;
