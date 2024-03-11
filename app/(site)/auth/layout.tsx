import Image from "next/image";

import BackButton from "@/components/back-button";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex min-h-full flex-col justify-center py-8 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          className="mx-auto w-auto"
          alt="Logo"
          width={48}
          height={48}
          src="/images/logo.png"
        />
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tighter text-gray-900">
          Sign in to your account
        </h2>
        <BackButton />
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
