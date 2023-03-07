import { TextField } from "@mui/material";
import { TextFieldProps } from "@mui/material";
import { useState } from "react";
import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";
import { GrView } from "react-icons/gr";

type iInputProps = {
  label: string;
  errorMessage?: FieldError;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
} & TextFieldProps;

export function InputPassword({
  label,
  errorMessage,
  register,
  placeholder,
  ...rest
}: iInputProps) {
  const [viewPassword, setViewPassword] = useState(false);

  function changeView() {
    viewPassword ? setViewPassword(false) : setViewPassword(true);
  }

  return (
    <div>
      <div>
        <TextField
          label={label}
          InputProps={{
            type: viewPassword ? "text" : "password",
          }}
          placeholder={placeholder}
          {...register}
          {...rest}
          multiline
          maxRows={4}
        />
        <button type="button" onClick={changeView}>
          <GrView />
        </button>
      </div>

      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </div>
  );
}
