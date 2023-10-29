import React from "react";
import { Modalbackground, ModalInterior } from "./styles";
import { AiOutlineClose } from "react-icons/Ai";

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <Modalbackground>
        <ModalInterior>
          <AiOutlineClose onClick={setModalOpen}> </AiOutlineClose>

          {children}
        </ModalInterior>
      </Modalbackground>
    );
  }
  return null;
}
