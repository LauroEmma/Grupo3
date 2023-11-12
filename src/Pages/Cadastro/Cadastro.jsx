import { DivGap, DivGap1, DivGap2, InputC, Input1, Botao, DivFrame, Fonte1, Fonte2, Fonte3, Divimg, Divall, Simbolo, Doctorimg} from "./Styles";
import ImagemMedico from "../../Assets/Cadastroimg.png"; 
import Cruz from "../../Assets/Cruz.png";
import { useNavigate } from "react-router-dom";

function Cadastro(){

    const navigate = useNavigate();
    return(
        <Divall>
            <DivFrame>
                <DivGap>
                    <DivGap1>
                        <Simbolo src= {Cruz}/>
                        <Fonte2> Primeira vez aqui?</Fonte2>
                    </DivGap1>
                    <Fonte3> Faça já seu cadastro e descubra novas formas de manejar seu <span> tempo de trabalho </span> </Fonte3>
                    <Input1  placeholder="Nome"></Input1>
                    <Input1  placeholder="Cargo"></Input1>
                    <Input1 type="email" placeholder="E-mail"></Input1>
                    <Input1 type="password" placeholder="Senha"></Input1>
                    <Input1 type="password" placeholder="Confirmar senha"></Input1>
                        <DivGap2>
                            <Fonte1> Já possui login? </Fonte1>  
                        </DivGap2>
                    <DivGap2>
                        <Botao> Cadastrar </Botao>
                        <Botao onClick={() => navigate("/login")}> Logue aqui!!!</Botao>
                    </DivGap2>  
                </DivGap>   
                <Divimg> <Doctorimg src={ ImagemMedico } alt="Imagem Médico" /> </Divimg>    
            </DivFrame>
        </Divall>
    )

}

export default Cadastro