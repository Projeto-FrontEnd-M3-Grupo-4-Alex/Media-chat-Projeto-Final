import { TextField } from "@mui/material"
import { TextFieldProps } from "@mui/material"
import { useState } from "react"
import { FieldError } from "react-hook-form"
import { UseFormRegisterReturn } from "react-hook-form"
import { GrView } from "react-icons/gr"
import { InputPasswordStyle } from "./style"

type iInputProps = {
  label: string
  errorMessage?: FieldError
  register: UseFormRegisterReturn<string>
  placeholder: string
} & TextFieldProps

export function InputPassword({
  label,
  errorMessage,
  register,
  placeholder,
  ...rest
}: iInputProps) {
  const [viewPassword, setViewPassword] = useState(false)

  return (
    <InputPasswordStyle>
      <div className="inputContainer">
        <TextField
          label={label}
          type={viewPassword ? "text" : "password"}
          placeholder={placeholder}
          {...register}
          {...rest}
        />
        <button type="button" onClick={() => setViewPassword(!viewPassword)}>
          <GrView />
        </button>
      </div>

      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </InputPasswordStyle>
  )
}
