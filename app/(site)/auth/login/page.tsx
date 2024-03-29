
import LoginForm from "@/components/auth/loginForm";
import { Social } from "@/components/auth/social";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <LoginForm />

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <Social />

          <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
            <p>New to Messenger?</p>
            <Link href="/auth/register" className="underline cursor-pointer">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
