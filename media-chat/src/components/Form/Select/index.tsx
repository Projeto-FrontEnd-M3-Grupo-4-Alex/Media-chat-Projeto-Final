import { MenuItem, TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

type iSelectProps = {
  label: string;
  errorMessage?: FieldError;
  register: UseFormRegisterReturn<string>;
} & TextFieldProps;

export function Select({
  label,
  errorMessage,
  register,
  ...rest
}: iSelectProps) {
  return (
    <div>
      <TextField label={label} {...register} {...rest} select>
        <MenuItem value={"filme"}>Filme</MenuItem>
        <MenuItem value={"séries"}>Séries</MenuItem>
        <MenuItem value={"anime"}>Anime</MenuItem>
      </TextField>
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </div>
  );
}
