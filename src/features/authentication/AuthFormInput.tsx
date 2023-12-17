import { FieldErrors, UseFormRegister } from "react-hook-form";

import { IAuthFormData } from "./types/IAuthFormData";
import { FieldFormValue } from "../../enums/enums";

import { validationRules } from "../../data/validationRules";

import ValidationError from "../../ui/ValidationError";

interface IAuthFormInputProps {
  register: UseFormRegister<IAuthFormData>;
  errors: FieldErrors<IAuthFormData>;
  label: string;
  formValue: FieldFormValue;
}

const AuthFormInput: React.FC<IAuthFormInputProps> = ({
  register,
  errors,
  label,
  formValue,
}) => {
  return (
    <label className="relative grid grid-cols-[120px,_1fr] items-center">
      <span className="text-xl font-semibold">{label}</span>
      <input
        className="w-[100%] rounded-md bg-hover-color p-2"
        type={formValue === "password" ? "password" : "text"}
        {...register(`${formValue}`, validationRules[`${formValue}`])}
      />
      {errors[`${formValue}`] && (
        <ValidationError>{errors[`${formValue}`]!.message!}</ValidationError>
      )}
    </label>
  );
};

export default AuthFormInput;
