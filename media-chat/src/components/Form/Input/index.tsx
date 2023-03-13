import { TextFieldProps } from "@mui/material";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";
import { CustomTextField, InputStyle } from "./style";

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
    <InputStyle>
      <CustomTextField
        size="small"
        label={label}
        id={register.name}
        type={type}
        
        sx={{ input: { color: "white" }, label: { color: "white" }  }}
        {...register}
        {...rest}
      />
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </InputStyle>
  );
}
