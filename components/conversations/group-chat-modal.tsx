"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Modal from "../modal";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  users: User[];
}

const GroupChatModal = ({ isOpen, onClose, users }: GroupChatModalProps) => {
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
      name: "",
      members: "",
    },
  });
  const members = watch("members") as string;

  const onSelectChange = (value: string) => {
    const currentMembers = members || "";

    if (currentMembers.includes(value)) {
      return;
    }

    const newValue = currentMembers ? currentMembers + ", " + value : value;

    setValue("members", newValue, { shouldValidate: true });
  };
  const onSubmit: SubmitHandler<FieldValues> = async ({ name, members }) => {
    try {
      setIsLoading(true);

      await axios.post("/api/conversations", {
        name,
        members: members.split(", "),
        isGroup: true,
      });

      toast.success("New chat created")
      router.refresh();
      onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const selectedUsersName = users
    .filter((user) => members.includes(user.id))
    .map((user) => user.name)
    .join(", ");

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-10">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create a group chat
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Create a chat with more than 2 people
            </p>
            <div className="mt-10 flex flex-col gap-y-8">
              <label>
                Name of chat
                <Input
                  id="name"
                  {...register("name", { required: true })}
                  disabled={isLoading}
                />
              </label>

              <Select
                defaultValue={members}
                onValueChange={(value) => onSelectChange(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select members">
                    {selectedUsersName}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {users.map((user: User) => (
                    <SelectItem value={user.id!} key={user.id}>
                      {user.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button variant="ghost" disabled={isLoading} onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-sky-600 hover:bg-sky-700"
            type="submit"
            disabled={isLoading}
          >
            Create
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GroupChatModal;
