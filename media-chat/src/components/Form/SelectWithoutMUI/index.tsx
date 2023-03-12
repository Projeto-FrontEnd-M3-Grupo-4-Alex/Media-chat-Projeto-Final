import { FieldError } from "react-hook-form";
import { UseFormRegisterReturn } from "react-hook-form";

type iSelectProps = {
  label: string;
  errorMessage?: FieldError;
  register: UseFormRegisterReturn<string>;
  id: string;
};

export function SelectWithoutMUI({
  label,
  errorMessage,
  register,
  id,
}: iSelectProps) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select {...register} id={id}>
        <option value={"filme"}>Filme</option>
        <option value={"séries"}>Séries</option>
        <option value={"anime"}>Anime</option>
      </select>
      {errorMessage ? <p>{errorMessage.message}</p> : null}
    </div>
  );
}
