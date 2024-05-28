import { useState, useEffect, useRef } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(false);
  const showButton = useRef(null);

  useEffect(() => {
    const handleClickShowPassword = () => {
      setShowPassword((show) => !show);
    };
    showButton.current.addEventListener("click", handleClickShowPassword);

    return () => {
      if (showButton.current != null)
        showButton.current.removeEventListener(
          "click",
          handleClickShowPassword
        );
    };
  }, []);

  return (
    <FormControl variant="outlined" margin="normal" sx={props.sx}>
      <InputLabel size="small" error={props.error} htmlFor={props.id}>
        {props.label ?? "Password"}
      </InputLabel>
      <OutlinedInput
        fullWidth
        className={props.className}
        error={props.error}
        size="small"
        id={props.id}
        variant="outlined"
        label={props.label ?? "Password"}
        type={showPassword ? "text" : "password"}
        {...props.register}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              ref={showButton}
              aria-label="toggle password visibility"
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      {props.helperText != null ? (
        <FormHelperText error={props.error} id="my-helper-text">
          {props.helperText}
        </FormHelperText>
      ) : null}
    </FormControl>
  );
}

export default PasswordInput;
