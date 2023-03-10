import { TextFieldProps } from "@mui/material"
import { useState } from "react"
import { FieldError } from "react-hook-form"
import { UseFormRegisterReturn } from "react-hook-form"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { CustomTextField } from "../Input/style"
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
        <CustomTextField size="small"
          label={label}
          type={viewPassword ? "text" : "password"}
          placeholder={placeholder}
          sx={{ input: { color: "white" }, "label": {color: "white"} }}
          {...register}
          {...rest}
        />
        <button type="button" onClick={() => setViewPassword(!viewPassword)}>
         { viewPassword ? <AiOutlineEye color="white" size='20'/> : <AiOutlineEyeInvisible color="white" size='20'/>}
        </button>                                                                                   
      </div>

      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </InputPasswordStyle>
  )
}
