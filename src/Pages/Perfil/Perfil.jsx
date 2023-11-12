import {
  DivGeral,
  DivBase,
  DivDaImagem,
  ImgHipocrates,
  DivDireita,
  DivUsuario,
  DivNome,
  DivCargo,
  DivEmail,
  DivInfAdic,
  DivInfo,
  DivInfoTexto,
  BotaoSair,
  Inputmodal,
  DivBotao,
} from "./Styles";
import ImagemHipocrates from "../../Assets/ImgHipocrates.jpg";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/ModalMaior/Modal";
import { useState } from "react";

function Perfil() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const handleConfirm = () => {
    alert("Confirmado");
  };
  return (
    <DivGeral>
      <DivBase>
        <DivDaImagem>
          <ImgHipocrates src={ImagemHipocrates} alt="simbolo da medicina" />
        </DivDaImagem>
        <DivDireita>
          <DivUsuario>
            <DivNome>Joaozinho</DivNome>
          </DivUsuario>
          <DivInfAdic>
            <DivCargo>Anestesista geral</DivCargo>
            <DivEmail>joaozinho@cpejr.com.br</DivEmail>
          </DivInfAdic>
          <DivInfAdic>
            <DivInfo>Informações adicionais:</DivInfo>
            <DivInfoTexto>Eu gosto de carne</DivInfoTexto>
          </DivInfAdic>
          <DivBotao>
            <BotaoSair onClick={() => navigate("/")}>Sair</BotaoSair>
            <BotaoSair onClick={() => setOpenModal(true)}>
              Alterar Dados
            </BotaoSair>
            <Modal
              isOpen={openModal}
              setModalOpen={() => setOpenModal(!openModal)}
              onConfirm={handleConfirm}
            >
              <p> Insira os dados que quer alterar</p>
              <p>Novo nome</p>
              <Inputmodal></Inputmodal>
              <p>Novo cargo</p>
              <Inputmodal></Inputmodal>
              <p>Novo email</p>
              <Inputmodal></Inputmodal>
              <p>Informações adicionais</p>
              <Inputmodal></Inputmodal>
            </Modal>
          </DivBotao>
        </DivDireita>
      </DivBase>
    </DivGeral>
  );
}

export default Perfil;
