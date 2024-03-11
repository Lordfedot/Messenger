import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-full flex justify-between">
      <div className="py-10 px-4 mt-auto mb-auto">
        <h1 className="text-6xl font-extrabold text-center text-transparent bg-gradient-to-r from-blue-700 via-purple-700 to-pink-400 bg-clip-text">
          Feel free to chat anytime, anywhere
        </h1>
        <div className="flex gap-x-10 mt-12">
          <Button
            className="w-full m-0 p-0"
            type="button"
            size="lg"
            variant="secondary"
          >
            <Link
              className="flex items-center justify-center w-full h-full"
              href="/auth/login"
            >
              Login
            </Link>
          </Button>
          <Button
            className="w-full m-0 p-0"
            type="button"
            size="lg"
            variant="secondary"
          >
            <Link
              className="flex items-center justify-center w-full h-full"
              href="/auth/register"
            >
              Register
            </Link>
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-center min-w-[50%]">
        <Image
          className="w-full h-full"
          alt="Home"
          width={400}
          height={400}
          src="/images/home.png"
        />
      </div>
    </div>
  );
};

export default Home;
