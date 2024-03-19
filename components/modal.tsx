"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  return <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
        {children}
    </DialogContent>
  </Dialog>;
};

export default Modal;
