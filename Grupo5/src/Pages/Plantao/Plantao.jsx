import { DivBackground } from "./Styles";
import { BotaoPlantao } from "./Styles";
import { Body } from "./Styles";
import { Retangulodeinformaços } from "./Styles";
import { Header } from "./Styles";
import { DivHeader } from "./Styles";


function Plantao() {

    return(
        <Body>
            <DivBackground> 
                <BotaoPlantao>
                    Iniciar Plantao
                </BotaoPlantao>

                <Retangulodeinformaços>
                    <Header>
                    <DivHeader>Medicos Em Plantao</DivHeader>
                        <DivHeader>Hospital</DivHeader>
                        <DivHeader>Barra Pesquisa</DivHeader>
                        <DivHeader>Cargo</DivHeader>
                        <DivHeader>Chegada</DivHeader>
                        <DivHeader>Tempo decorrido</DivHeader>

                    </Header>
                </Retangulodeinformaços>
            </DivBackground>
        </Body>
  
    )

}

export default Plantao;