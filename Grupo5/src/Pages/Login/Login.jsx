import { Divall, DivFrame, DivGap, DivGap2, DivGap3, DivGap4, DivGap5, Input1, Botao1, Botao2, Botao3, Fonte1, Fonte2, Fonte3, Simbolo, Loginimg } from "./Styles";
import ImagemLogin from "../../Assets/Loginimg.png"; 
import Cruz from "../../Assets/Cruz.png"
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    return(
        <Divall align="center">
            <DivFrame>
                <DivGap>
                    <Loginimg src={ ImagemLogin } alt="Fundo Azul" />
                </DivGap>
                <DivGap2>
                    <DivGap3>
                        <Simbolo src= {Cruz}/>
                        <Fonte1> Nós somos <span> NomeEmpresa </span> </Fonte1>
                    </DivGap3>
                        <DivGap4>
                            <Fonte2> Bem vindo de volta! Faça o seu loguin aqui </Fonte2>
                            <Input1 type="email" placeholder="E-mail"></Input1>  
                            <Input1 type="password" placeholder="Senha"></Input1>
                            <Botao2> Logar </Botao2>
                            <DivGap5>
                                <Fonte3> Não tem login? </Fonte3>
                                <Botao3 onClick={() => navigate("/Cadastro")}> Cadastre-se aqui </Botao3>
                            </DivGap5>
                        </DivGap4>
                </DivGap2>
            </DivFrame>
        </Divall>
    )

}

export default Login;