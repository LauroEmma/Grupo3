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
  Label,
  Form,
} from "./Styles";
import ImagemHipocrates from "../../Assets/ImgHipocrates.jpg";
import { useNavigate } from "react-router-dom";
import Modal from "../../Components/ModalMaior/Modal";
import { useState } from "react";
import useAuthStore from "../../stores/auth";
import api from "../../services/api";

function Perfil() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const usuario = useAuthStore((state) => state.usuario);
  const idUsuario = useAuthStore((state) => state.usuario?._id);
  const setUsuario = useAuthStore((state) => state.setUsuario);
  const [email, setEmail] = useState(usuario?.email);
  const [info_adicionais, setInfo_adicionais] = useState(
    usuario?.info_adicionais
  );
  const [cargo, setCargo] = useState(usuario.cargo);
  const [nome, setNome] = useState(usuario?.nome);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/usuario/${idUsuario}`, {
        email,
        cargo,
        nome,
        info_adicionais,
      });
      setUsuario(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const res = await api.put(`/usuario/${usuario.id}`, {
        email,
        cargo,
        nome,
        info_adicionais,
      });
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
  return (
    <DivGeral>
      <DivBase>
        <DivDaImagem>
          <ImgHipocrates src={ImagemHipocrates} alt="simbolo da medicina" />
        </DivDaImagem>
        <DivDireita>
          <DivUsuario>
            <DivNome>{usuario.nome}</DivNome>
          </DivUsuario>
          <DivInfAdic>
            <DivCargo>{usuario.cargo}</DivCargo>
            <DivEmail>{usuario.email}</DivEmail>
          </DivInfAdic>
          <DivInfAdic>
            <DivInfo>Informações adicionais:</DivInfo>
            <DivInfoTexto>{usuario.info_adicionais}</DivInfoTexto>
          </DivInfAdic>
          <DivBotao>
            <BotaoSair onClick={clearAuth}>Sair</BotaoSair>
            <BotaoSair onClick={() => setOpenModal(true)}>
              Alterar Dados
            </BotaoSair>
            <Form onSubmit={handleUpdate}>
              <Modal
                isOpen={openModal}
                setModalOpen={() => setOpenModal(!openModal)}
                confirm={handleUpdate}
              >
                <p> Insira os dados que quer alterar</p>
                <p>Novo nome</p>
                <Label htmlFor="nome"> </Label>
                <Inputmodal
                  type="text"
                  id="nome"
                  name="nome"
                  onChange={(e) => setNome(e.target.value)}
                  placeholder={usuario.nome}
                  value={nome}
                ></Inputmodal>
                <p>Novo cargo</p>
                <Label htmlFor="cargo"> </Label>
                <Inputmodal
                  type="text"
                  id="cargo"
                  name="cargo"
                  onChange={(e) => setCargo(e.target.value)}
                  placeholder={usuario.cargo}
                  value={cargo}
                ></Inputmodal>
                <p>Novo email</p>
                <Label htmlFor="email"> </Label>
                <Inputmodal
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={usuario.email}
                  value={email}
                ></Inputmodal>
                <p>Informações adicionais</p>
                <Label htmlFor="info_adicionais"> </Label>
                <Inputmodal
                  type="text"
                  id="info"
                  name="info_adicionais"
                  onChange={(e) => setInfo_adicionais(e.target.value)}
                  placeholder={usuario.info_adicionais}
                  value={info_adicionais}
                ></Inputmodal>
              </Modal>
            </Form>
          </DivBotao>
        </DivDireita>
      </DivBase>
    </DivGeral>
  );
}

export default Perfil;
