"use client";

import PacmanLoader from "react-spinners/PacmanLoader";
import { Dialog, DialogOverlay } from "./ui/dialog";

const LoadingModal = () => {
  return (
    <Dialog open>
      <DialogOverlay className="flex items-center justify-center z-50 fixed inset-0 bg-gray-100 bg-opacity-50 transition-opacity">
        <PacmanLoader size={50} color="#0EA5E9" />
      </DialogOverlay>
    </Dialog>
  );
};

export default LoadingModal;
