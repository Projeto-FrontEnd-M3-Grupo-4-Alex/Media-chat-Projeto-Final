import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";
import { InputStyle } from "./style";

type IInputProps = {
  label: string;
  errorMessage?: FieldError;
  type: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
} & TextFieldProps;

export function Input({
  label,
  type,
  errorMessage,
  register,
  placeholder,
  ...rest
}: IInputProps) {
  return (
    <InputStyle>
      <TextField
        label={label}
        type={type}
        placeholder={placeholder}
        {...register}
        {...rest}
      />
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </InputStyle>
  );
}
