import { Modalbackground, ModalInterior, BotaoConfirma } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({
  isOpen,
  setModalOpen,
  children,
  onConfirm,
  onSubmit,
}) {
  if (isOpen) {
    return (
      <Modalbackground>
        <ModalInterior>
          <AiOutlineClose onClick={setModalOpen}> </AiOutlineClose>

          {children}
          <BotaoConfirma
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              onConfirm();
              setModalOpen();
              onSubmit(e);
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
