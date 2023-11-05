import { DivBackground } from "./Styles";
import { BotaoPlantao } from "./Styles";
import { Body } from "./Styles";
import { Retangulodeinformaços } from "./Styles";
import { Header } from "./Styles";
import { DivHeader } from "./Styles";
import Vetor from "./Vetor.png"

function Plantao() {

    return(
        <Body>
            <DivBackground> 
                <BotaoPlantao>
                    Iniciar Plantao
                </BotaoPlantao>

                <Retangulodeinformaços>
                    <Header>
                    <DivHeader>Medicos Em Plantao<img src={Vetor} alt="Descrição da imagem" /></DivHeader>
                        <DivHeader>Hospital<img src={Vetor} alt="Descrição da imagem" /></DivHeader>
                        <DivHeader>Barra Pesquisa<img src={Vetor} alt="Descrição da imagem" /></DivHeader>
                        <DivHeader>Cargo<img src={Vetor} alt="Descrição da imagem" /></DivHeader>
                        <DivHeader>Chegada<img src={Vetor} alt="Descrição da imagem" /></DivHeader>
                        <DivHeader>Tempo decorrido<img src={Vetor} alt="Descrição da imagem" /></DivHeader>
                    </Header>
                </Retangulodeinformaços>
            </DivBackground>
        </Body>
  
    )

}

export default Plantao;