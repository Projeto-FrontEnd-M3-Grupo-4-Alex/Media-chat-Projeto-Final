import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

type iInputProps = {
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
}: iInputProps) {
  return (
    <div>
      <TextField
        label={label}
        type={type}
        placeholder={placeholder}
        {...register}
        {...rest}
        multiline
        maxRows={4}
      />
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </div>
  );
}
