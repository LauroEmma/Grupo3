import React from "react";
import { Modalbackground, ModalInterior, BotaoConfirma } from "./styles";
import { AiOutlineClose } from "react-icons/Ai";

export default function Modal({ isOpen, setModalOpen, children, onConfirm }) {
  if (isOpen) {
    return (
      <Modalbackground>
        <ModalInterior>
          <AiOutlineClose onClick={setModalOpen}> </AiOutlineClose>

          {children}
          <BotaoConfirma
            onClick={() => {
              onConfirm();
              setModalOpen();
            }}
          >
            Confirmar
          </BotaoConfirma>
        </ModalInterior>
      </Modalbackground>
    );
  }
  return null;
}
