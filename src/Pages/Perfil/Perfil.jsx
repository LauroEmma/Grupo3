import { Divall, Div1, Div2, Div3, Div4, Div5, Div6, Div7, Div8, Div9, Div10, Div11, Div12, Div13, TimerDiv, Fonte1, Fonte2, Fonte3, Fonte4, Fonte5, Fonte6, Fonte7, Fonte8, Botao1, Botao2, BotaoTimer, ImgMedica, ImgRelogio, ImgAcerto, Retangulo } from "./Styles";
import ImagemMedica from "../../Assets/ImgMedica.png"; 
import ImagemAcerto from "../../Assets/ImgAcerto.png"; 
import ImagemRelogio from "../../Assets/ImgRelogio.png"; 

function Perfil() {

    return(
        <Divall>
            <Div1>
                <Div2>
                    <ImgMedica src= {ImagemMedica}/>
                </Div2>
                <Div3>
                    <Div4> 
                        <Fonte1> Nome: Ricardo  </Fonte1>
                        <Fonte2> Tipo de médico </Fonte2>
                        <Fonte3> E-mail </Fonte3>
                    </Div4>
                    <Div5>
                        <ImgRelogio src= {ImagemRelogio}/>
                    </Div5>
                    <Div6> 
                        <Fonte4> Total de Horas </Fonte4>
                        <TimerDiv>
                            <BotaoTimer>
                                XX:YY
                            </BotaoTimer>
                        </TimerDiv>
                        <Botao1>
                            Sair
                        </Botao1>
                    </Div6>
                </Div3>
            </Div1>
            <Div7>
                <Div8>
                    <Div9>
                        <Div10>
                            <Fonte5> Graduações e diplomas: </Fonte5>
                            <ImgAcerto src= {ImagemAcerto}/>
                        </Div10>    
                        <Fonte6> Texto placeholder </Fonte6> 
                        <Botao2> Agenda </Botao2>
                    </Div9>
                </Div8>
                <Div11>
                    <Div12> 
                        <Fonte7> Informações Adicionais </Fonte7>
                    </Div12>
                    <Div13>
                        <Retangulo>
                            <Fonte8> Placeholder </Fonte8>
                        </Retangulo>
                    </Div13>
                </Div11>
            </Div7>
        </Divall>   
    )

}

export default Perfil;