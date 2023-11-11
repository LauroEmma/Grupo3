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
} from "./Styles";
import ImagemHipocrates from "../../Assets/ImgHipocrates.jpg";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const navigate = useNavigate();
  return (
    <DivGeral>
      <DivBase>
        <DivDaImagem>
          <ImgHipocrates src={ImagemHipocrates} alt="simbolo da medicina" />
        </DivDaImagem>
        <DivDireita>
          <DivUsuario>
            <DivNome>Joaozinho</DivNome>
            <DivCargo>Anestesista geral</DivCargo>
            <DivEmail>joaozinho@cpejr.com.br</DivEmail>
          </DivUsuario>
          <DivInfAdic>
            <DivInfo>Informações adicionais:</DivInfo>
            <DivInfoTexto>Eu gosto de carne</DivInfoTexto>
          </DivInfAdic>
          <BotaoSair onClick={() => navigate("/")}>Sair</BotaoSair>
        </DivDireita>
      </DivBase>
    </DivGeral>
  );
}

export default Perfil;
