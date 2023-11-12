import {
  Divall,
  DivFrame,
  DivGap,
  DivGap2,
  DivGap3,
  DivGap4,
  DivGap5,
  Input1,
  Botao1,
  Botao2,
  Botao3,
  Fonte1,
  Fonte2,
  Fonte3,
  Simbolo,
  Loginimg,
  Form,
  Label,
} from "./Styles";
import ImagemLogin from "../../Assets/Loginimg.png";
import Cruz from "../../Assets/Cruz.png";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useState } from "react";
import useAuthStore from "../../stores/auth";

function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const token = useAuthStore((state) => state.token);
  const usuario = useAuthStore((state) => state.usuario);
  const setToken = useAuthStore((state) => state.setToken);
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", { email, senha });
      const { token } = res.data;

      setToken(token);
      Navigate("/");
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  const navigate = useNavigate();
  return (
    <Divall align="center">
      <DivFrame>
        <DivGap>
          <Loginimg src={ImagemLogin} alt="Fundo Azul" />
        </DivGap>
        <DivGap2>
          <DivGap3>
            <Simbolo src={Cruz} />
            <Fonte1>
              {" "}
              Nós somos <span> NomeEmpresa </span>{" "}
            </Fonte1>
          </DivGap3>
          <DivGap4>
            <Fonte2> Bem vindo de volta! Faça o seu login aqui </Fonte2>
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="email"> </Label>
              <Input1
                type="email"
                id="email"
                placeholder="E-mail"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></Input1>
              <Label htmlFor="senha"> </Label>

              <Input1
                type="password"
                name="senha"
                id="senha"
                placeholder="Senha"
                required
                onChange={(e) => setSenha(e.target.value)}
              ></Input1>
              <Botao2 type="submit"> Logar </Botao2>
            </Form>
            <DivGap5>
              <Fonte3> Não tem login? </Fonte3>
              <Botao3 onClick={() => navigate("/Cadastro")}>
                {" "}
                Cadastre-se aqui{" "}
              </Botao3>
            </DivGap5>
          </DivGap4>
        </DivGap2>
      </DivFrame>
    </Divall>
  );
}

export default Login;
