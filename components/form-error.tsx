import { BsExclamationTriangle } from "react-icons/bs";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) return null;

  return (
    <div className="bg-destructive/15 flex items-center justify-center text-destructive roundec-md p-3 text-sm gap-x-3">
      <BsExclamationTriangle className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormError;
