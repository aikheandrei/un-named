import { FieldError, UseFormRegister } from "react-hook-form";

type ValidFieldNames = "email" | "password" | "confirmPassword";

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

interface FormFieldProps {
  type: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData>;
  error: FieldError | undefined;
}

const FormField: React.FC<FormFieldProps> = ({
  type,
  name,
  register,
  error,
}) => (
  <>
    <input
      className="border-slate-600 border-2"
      type={type}
      {...register(name)}
    />
    {error && <span>{error.message}</span>}
  </>
);

export default FormField;
