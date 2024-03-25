"use client";
import { useState } from "react";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { CldUploadButton } from "next-cloudinary";
import { Button } from "@/components/ui/button";

interface SettingsFormProps {
  currentUser: User;
}

const SettingsForm = ({ currentUser }: SettingsFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
    },
  });

  const image = watch("image");

  const handleUpload = (result: any) => {
    setValue("image", result?.info?.secure_url, {
      shouldValidate: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post("/api/settings", data);
      router.refresh();
      toast.success("Success");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form className="p-10" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-700">
            Profile
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Edit your information
          </p>

          <div className="mt-10 flex flex-col gap-y-8">
            <label className="flex gap-y-2 flex-col">
              Name
              <Input
                id="name"
                {...register("name", { required: true })}
                disabled={isLoading}
              ></Input>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Photo
                </label>
                <div className="mt-2 flex items-center gap-x-10">
                  <Image
                    width={48}
                    height={48}
                    className="rounded-full"
                    src={currentUser.image || "/images/placeholder.jpg"}
                    alt="Avatar"
                  />
                  <CldUploadButton
                    options={{ maxFiles: 1 }}
                    onSuccess={handleUpload}
                    uploadPreset="wbk6i1ez"
                  >
                    Change
                  </CldUploadButton>
                </div>
              </div>
            </label>
          </div>
        </div>

        <Button disabled={isLoading} type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;
