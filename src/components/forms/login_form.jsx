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
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { PasswordInput } from "../";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SignupForm from "./signup_form";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function LoginForm(props) {
  const { open, setOpen } = props;
  const [openSignup, setOpenSignup] = useState(false);
  const [WIDTH, setWidth] = useState(window.innerWidth);

  // Loading agents list
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  //post team form
  const formRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({ resolver: zodResolver() });

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const handelSignup = () => {
    handleClose();
    setOpenSignup(() => true);
  };

  useEffect(() => {
    const resize = () => {
      setWidth(() => window.innerWidth);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
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
        <form ref={formRef}>
          <DialogContent
            className="flex flex-col justify-center items-center"
            dividers
            sx={{ width: WIDTH >= 1060 ? "30vw" : "80vw", height: "50vh" }}
          >
            <div className={`flex flex-col justify-center items-center w-full`}>
              <TextField
                type="email"
                variant="outlined"
                label={"Adresse e-mail"}
                size="small"
                sx={{ width: WIDTH >= 1060 ? "50%" : "100%" }}
                margin="normal"
                {...register("email")}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
              />

              <PasswordInput
                sx={{ width: WIDTH >= 1060 ? "50%" : "100%" }}
                register={register("password")}
                error={errors.password ? true : false}
                helperText={errors.password?.message}
              />
              {error && (
                <Typography className="text-red-600 pt-2">
                  {"E-mail ou mot de passe incorrect"}
                </Typography>
              )}
              <Divider className="w-[50%] my-1" sx={{ margin: "40px 0px" }} />
              <Box>
                <Typography
                  variant="body2"
                  className=" cursor-pointer"
                  onClick={() => handelSignup()}
                >
                  You do not have account?
                </Typography>
              </Box>
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
              >
                Login
              </button>
            </div>
          </DialogActions>
        </form>
      </BootstrapDialog>
      <SignupForm
        open={openSignup}
        setOpen={setOpenSignup}
        setAuthUser={props.setAuthUser}
      />
    </>
  );
}

export default LoginForm;
