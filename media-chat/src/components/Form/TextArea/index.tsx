import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

type iTextAreaProps = {
  label: string;
  errorMessage?: FieldError;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
} & TextFieldProps;

export function TextArea({
  label,
  errorMessage,
  register,
  placeholder,
  ...rest
}: iTextAreaProps) {
  return (
    <div>
      <TextField
        label={label}
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
