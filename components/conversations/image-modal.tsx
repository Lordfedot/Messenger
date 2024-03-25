"use client";

import Image from "next/image";

import Modal from "../modal";

interface ImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

const ImageModal = ({ isOpen, onClose, src }: ImageModalProps) => {
  if (!src) {
    return null;
  }

  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <div className="w-80 h-80">
        <Image className="object-cover" alt="Image" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
