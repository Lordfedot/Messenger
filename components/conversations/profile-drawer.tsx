"use client";

import { Drawer, DrawerClose, DrawerContent } from "@/components/ui/drawer";
import { MdClose } from "react-icons/md";
import { Conversation, User } from "@prisma/client";
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import useOtherUser from "@/hooks/useOtherUser";
import { format } from "date-fns";
import { BsTrash } from "react-icons/bs";
import Avatar from "../avatar";
import Modal from "../modal";
import ConfirmModal from "../confirm-modal";

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  data: Conversation & {
    users: User[];
  };
}

const ProfileDrawer = ({ data, isOpen, onClose }: ProfileDrawerProps) => {
  const otherUser = useOtherUser(data);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const joinedDate = useMemo(() => {
    return format(new Date(otherUser.createdAt), "PP");
  }, [otherUser.createdAt]);

  const title = useMemo(() => {
    return data.name || otherUser.name;
  }, [data.name, otherUser.name]);

  const statusText = useMemo(() => {
    if (data.isGroup) {
      return `${data.users.length} members`;
    }
    return "Active";
  }, [data.isGroup, data.users.length]);
  return (
    <>
      <ConfirmModal isOpen={confirmOpen} onClose={() => setConfirmOpen(false)}/>
       
      <Drawer open={isOpen} direction="right" onOpenChange={onClose}>
        <DrawerContent className="h-full lg:w-2/5 md:w-3/5 sm:w-4/5 ml-auto rounded-none">
          <div className="flex h-full  flex-col bg-white py-6 shadow-xl">
            <div className="px-4 sm:px-6">
              <div className="flex items-start justify-end">
                <div className="ml-3 flex h-7 items-center">
                  <DrawerClose>
                    <button
                      type="button"
                      className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      <span className="sr-only">Close panel</span>
                      <MdClose size={24} aria-hidden="true" />
                    </button>
                  </DrawerClose>
                </div>
              </div>
            </div>

            <div className="relative mt-6 flex-1 px-4 sm:px-6">
              <div className="flex flex-col items-center">
                <Avatar user={otherUser} />
                <p className="font-medium">{title}</p>
                <p className="text-sm text-gray-500">{statusText}</p>
                <div className="flex gap-10 my-8">
                  <div
                    onClick={() => setConfirmOpen(true)}
                    className="flex flex-col gap-3 items-center cursor-pointer hover:opacity-75"
                  >
                    <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center">
                      <BsTrash size={20} />
                    </div>
                    <div className="text-sm font-light text-neutral-600">
                      Delete
                    </div>
                  </div>
                </div>

                <div className="w-full pb-5 pt-5 sm:px-0 sm:pt-0">
                  <dl className="space-y-8 px-4 sm:space-y-6 sm:px-6">
                    {data.isGroup && (
                      <div>
                        <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">
                          Emails
                        </dt>
                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
                          {data.users.map((user) => user.email).join(", ")}
                        </dd>
                      </div>
                    )}
                    {!data.isGroup && (
                      <div>
                        <dt className="sm:flex-shrink-0 text-sm font-medium  text-gray-500  sm:w-40 ">
                          Email
                        </dt>
                        <dd className="sm:col-span-2  mt-1  text-sm  text-gray-900 ">
                          {otherUser.email}
                        </dd>
                      </div>
                    )}
                    {!data.isGroup && (
                      <>
                        <hr />
                        <div>
                          <dt className=" sm:flex-shrink-0sm:w-40  text-gray-500  font-medium text-sm ">
                            Joined
                          </dt>
                          <dd className="mt-1  text-sm text-gray-900  sm:col-span-2">
                            <time dateTime={joinedDate}>{joinedDate}</time>
                          </dd>
                        </div>
                      </>
                    )}
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileDrawer;
