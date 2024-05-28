import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import {
  Dialog,
  TextField,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Divider,
  ToggleButton,
  Switch,
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
  const { open, setOpen, setAuthUser, inCpanel } = props;

  // Loading agents list
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [serverError, setServerError] = useState({ code: null, message: null });
  const abortController = useRef(null);
  const [isAdmin, setIsAdmin] = useState(false);

  //post team form
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
    console.log(values);
    setIsLoading(() => true);
    const controller = new UserController(abortController, setServerError);
    console.log(values);
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
          sx={{ width: "35vw", height: "55vh" }}
        >
          <div className={`flex flex-col justify-center items-center w-full`}>
            <div className="flex flex-row ">
              <TextField
                {...register("firstName")}
                type="text"
                variant="outlined"
                fullWidth
                label={"First Name"}
                size="small"
                margin="normal"
                sx={{ marginRight: 1 }}
                error={errors.firstName ? true : false}
                helperText={errors.firstName?.message}
              />
              <TextField
                {...register("lastName")}
                sx={{ marginLeft: 1 }}
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
            {inCpanel && (
              <div className="flex flex-row justify-start items-center w-full">
                <Typography className=" pt-2">{"Admin"}</Typography>
                <Switch
                  label={"Admin"}
                  checked={isAdmin}
                  onChange={() => setIsAdmin((prev) => !prev)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
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
