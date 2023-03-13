import { TextField } from "@mui/material"
import { TextFieldProps } from "@mui/material"
import { FieldError } from "react-hook-form"
import { UseFormRegisterReturn } from "react-hook-form"
import { CustomTextArea, TextAreaStyle } from "./style"

type iTextAreaProps = {
  label: string
  errorMessage?: FieldError
  register: UseFormRegisterReturn<string>
  placeholder: string
} & TextFieldProps

export function TextArea({
  label,
  errorMessage,
  register,
  placeholder,
  ...rest
}: iTextAreaProps) {
  return (
    <TextAreaStyle>
      <CustomTextArea
        label={label}
        id={register.name}
        {...register}
        {...rest}
        maxRows={4}
        sx={{
          input: { color: "white", height: "60px" },
          label: { color: "white" },
        }}
      />
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </TextAreaStyle>
  )
}
