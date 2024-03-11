import Link from "next/link";
import { BsExclamationCircleFill } from "react-icons/bs";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <div className="flex items-center pt-5 justify-center gap-x-4">
        <BsExclamationCircleFill className="text-destructive h-8 w-8" />
        <p className="text-center text-4xl text-rose-600">
          Oops! Something went wrong...
        </p>
      </div>
      <Link className="underline " href='/auth/login'>Back to Messenger</Link>
    </div>
  );
};

export default ErrorPage;
