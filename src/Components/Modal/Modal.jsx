import { Modalbackground, ModalInterior, BotaoConfirma } from "./styles";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ isOpen, setModalOpen, children, onSubmit }) {
  if (isOpen) {
    const handleConfirm = () => {
      onSubmit();
      setTimeout(() => {
        setModalOpen();
      }, 10);
    };
    return (
      <Modalbackground>
        <ModalInterior>
          <AiOutlineClose onClick={setModalOpen}> </AiOutlineClose>

          {children}
          <BotaoConfirma onClick={handleConfirm}>Confirmar</BotaoConfirma>
        </ModalInterior>
      </Modalbackground>
    );
  }
  return null;
}
