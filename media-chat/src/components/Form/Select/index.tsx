import { MenuItem, TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";
import { CustomTextFieldSelect, StyleSelect } from "./style";


type iSelectProps = {
  label: string;
  errorMessage?: FieldError;
  register: UseFormRegisterReturn<string>;
} & TextFieldProps;

const currencies = [
  {
    value: "filme",
    label: "Filme",
  },
  {
    value: "série",
    label: "Série",
  },
  {
    value: "anime",
    label: "Anime",
  },
];

export function Select({
  label,
  errorMessage,
  register,
  ...rest
}: iSelectProps) {
  return (
    <StyleSelect>
      {errorMessage ? <p>{errorMessage.message}</p> : null}
      <CustomTextFieldSelect
        label={label}
        {...register}
        {...rest}
        id={register.name}
        defaultValue=""
        select
        sx={{width: '100%', input: { color: "white" }, label: { color: "white" } }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomTextFieldSelect>
    </StyleSelect>
  );
}
