import * as React from "react";
import Modal from "@mui/material/Modal";

export default function BasicModal({
  show,
  setShow,
  children,
}: {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}) {
  const handleClose = () => setShow(false);

  return (
    <div>
      <Modal
        open={show}
        onClose={handleClose}
        className=" flex items-center justify-center h-screen w-full"
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <> {children} </>
      </Modal>
    </div>
  );
}
