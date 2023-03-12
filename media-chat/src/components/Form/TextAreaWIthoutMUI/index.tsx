import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

type iTextAreaProps = {
  label: string;
  errorMessage?: FieldError;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  id: string;
};

export function TextAreaWithoutMUI({
  label,
  errorMessage,
  register,
  placeholder,
  id,
  ...rest
}: iTextAreaProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} placeholder={placeholder} {...register} {...rest} />
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </div>
  );
}
