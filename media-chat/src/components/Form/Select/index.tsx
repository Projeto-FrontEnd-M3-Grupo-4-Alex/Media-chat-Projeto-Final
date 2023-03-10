import { MenuItem, TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

type iSelectProps = {
  label: string;
  errorMessage?: FieldError;
  register: UseFormRegisterReturn<string>;
} & TextFieldProps;

const currencies = [
  {
    value: "",
    label: "Selecionar Categoria",
  },
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
    <div>
      <TextField label={label} {...register} {...rest} select>
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </div>
  );
}
