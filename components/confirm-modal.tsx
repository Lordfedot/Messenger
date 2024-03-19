"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";
import { FiAlertTriangle } from "react-icons/fi";

import useConversation from "@/hooks/useConversation";
import Modal from "./modal";
import { DialogHeader } from "./ui/dialog";
import { Button } from "./ui/button";

interface ConfrimModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

const ConfirmModal = ({ onClose, isOpen }: ConfrimModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { conversationId } = useConversation();

  const onDelete = useCallback(async () => {
    try {
      setIsLoading(true);
      const result = await axios.delete(`/api/conversations/${conversationId}`);
      onClose();
      router.push("/conversations");
      router.refresh();
      toast.success('Conversation deleted')
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }, [conversationId, onClose, router]);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
          <FiAlertTriangle className="h-6 w-6 text-red-600 " />
        </div>

        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <DialogHeader className="text-base font-semibold leading-6 text-gray-900">
            Delete conversation
          </DialogHeader>

          <div className="mt-2">
            <p className="text-sm text-gray-500">
              Are you sure you want to delete this conversation?
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 gap-x-4 sm:mt-4 flex flex-row-reverse justify-center sm:justify-normal">
        <Button onClick={onDelete} disabled={isLoading} variant="destructive">
          Delete
        </Button>
        <Button onClick={onClose} disabled={isLoading} variant="outline">
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
