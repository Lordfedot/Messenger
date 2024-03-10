import { BsCheckCircle } from "react-icons/bs";

interface FormErrorProps {
  message?: string;
}

const FormSuccess = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/15 flex items-center justify-center text-emerald-500 roundec-md p-3 text-sm gap-x-3">
      <BsCheckCircle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;
