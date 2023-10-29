functionmodal = ({ onClose }) => {
  return (
    <ModalWrapper>
      <ModalContent>
        <button onClick={onClose}></button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
