import {
  DivGap,
  DivGap1,
  DivGap2,
  InputC,
  Input1,
  Botao,
  DivFrame,
  Fonte1,
  Fonte2,
  Fonte3,
  Divimg,
  Divall,
  Simbolo,
  Doctorimg,
  Form,
  Label,
  DivCheckbox,
  InputCheckbox,
  Fonte4,
} from "./Styles";
import ImagemMedico from "../../Assets/Cadastroimg.png";
import Cruz from "../../Assets/Cruz.png";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../stores/auth";
import { useState } from "react";
import api from "../../services/api";

function Cadastro() {
  const Navigate = useNavigate();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [cargo, setCargo] = useState();
  const [nome, setNome] = useState();
  const [confirmarSenha, setConfirmarSenha] = useState();
  const [usuario, setUsuario] = useState({ plantao: false });
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem!");
      return;
    }
    try {
      const res = await api.post("/usuario", {
        email,
        senha,
        cargo,
        nome,
        plantao: usuario.plantao,
      });

      Navigate("/login");
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
  const func_plantao = () => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      plantao: !prevUsuario.plantao,
    }));
  };

  return (
    <Divall>
      <DivFrame>
        <DivGap>
          <DivGap1>
            <Simbolo src={Cruz} />
            <Fonte2> Primeira vez aqui?</Fonte2>
          </DivGap1>
          <Fonte3>
            {" "}
            Faça já seu cadastro e descubra novas formas de manejar seu{" "}
            <span> tempo de trabalho </span>{" "}
          </Fonte3>
          <Form onSubmit={handleSubmit}>
            <Label htmlFor="email"></Label>
            <Input1
              type="email"
              placeholder="E-mail"
              id="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            ></Input1>

            <Label htmlFor="senha"></Label>
            <Input1
              type="password"
              placeholder="Senha"
              id="senha"
              name="senha"
              required
              onChange={(e) => setSenha(e.target.value)}
            ></Input1>

            <Label htmlFor="senha"></Label>
            <Input1
              type="password"
              placeholder="Confirmar senha"
              onChange={(e) => setConfirmarSenha(e.target.value)}
            ></Input1>

            <Label htmlFor="cargo"></Label>
            <Input1
              type="text"
              placeholder="cargo"
              id="cargo"
              name="cargo"
              required
              onChange={(e) => setCargo(e.target.value)}
            ></Input1>

            <Label htmlFor="nome"></Label>
            <Input1
              type="text"
              placeholder="Nome"
              id="nome"
              name="nome"
              required
              onChange={(e) => setNome(e.target.value)}
            ></Input1>
            <DivCheckbox>
              <Fonte4> Médico de Plantão </Fonte4>
              <InputCheckbox
                type="checkbox"
                onChange={func_plantao}
                id="myCheckbox"
              ></InputCheckbox>
            </DivCheckbox>
            <DivGap2>
              <Fonte1> Já possui login? </Fonte1>
            </DivGap2>
            <DivGap2>
              <Botao type="submit"> Cadastrar </Botao>
              <Botao onClick={() => Navigate("/login")}> Logue aqui!!!</Botao>
            </DivGap2>
          </Form>
        </DivGap>
        <Divimg>
          {" "}
          <Doctorimg src={ImagemMedico} alt="Imagem Médico" />{" "}
        </Divimg>
      </DivFrame>
    </Divall>
  );
}

export default Cadastro;
