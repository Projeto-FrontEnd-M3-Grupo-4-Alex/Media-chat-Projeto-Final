import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

type iInputProps = {
  label: string;
  errorMessage?: FieldError;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  id: string;
};

export function InputWithoutMUI({
  label,
  errorMessage,
  register,
  placeholder,
  id,
}: iInputProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" placeholder={placeholder} {...register} id={id} />
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </div>
  );
}
