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
    <label className="relative grid grid-cols-[100px,_1fr] items-center max-[450px]:grid-cols-[92px,_1fr]">
      <span className="text-xl font-semibold max-[450px]:text-lg">{label}</span>
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
