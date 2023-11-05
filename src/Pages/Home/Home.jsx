import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselStyled } from "./Styles";
import { BotaoPlantao } from "./Styles";
import { Body } from "./Styles";
import { Retangulodeinformaços } from "./Styles";
import { DivHeader } from "./Styles";
import { Texto } from "./Styles";
import { MedicosAtivos } from "./Styles";
import { NovoMedico } from "./Styles";
import Vetor from "./Vetor.png";

function Home() {
  const images = [
    {
      author: "Lauro Emmanuel",
      download_url: "https://i.ibb.co/LC1BtBM/canal-de-reclamacoes.jpg",
    },
    {
      author: "Lauro Emmanuel",
      download_url: "https://i.ibb.co/qM035Cn/canal-de-ouvidoria.jpg",
    },
    {
      author: "Lauro Emmanuel",
      download_url: "https://i.ibb.co/8r5sCDY/compartilhe.jpg",
    },
    {
      author: "Lauro Emmanuel",
      download_url: "https://i.ibb.co/H4fwRDP/eventos-mes.jpg",
    },
  ];
  return (
    <div>
      <Body>
        <div>
          <CarouselStyled showThumbs={false} infiniteLoop={true}>
            {images.map((image) => (
              <img src={image.download_url} alt={image.author} />
            ))}
          </CarouselStyled>
        </div>
        <BotaoPlantao>Iniciar Plantao</BotaoPlantao>
        <Retangulodeinformaços>
          <DivHeader>
            <Texto>Médicos Ativos</Texto>
            <Texto>Hospital</Texto>
            <Texto>Cargo</Texto>
            <Texto>Chegada</Texto>
            <Texto>Tempo</Texto>
          </DivHeader>
          <MedicosAtivos>
            <NovoMedico> Nome do médico</NovoMedico>
            <NovoMedico>Nome do hospital</NovoMedico>
            <NovoMedico>Cargo </NovoMedico>
            <NovoMedico>Horario de chegada </NovoMedico>
            <NovoMedico>Tempo de trabalho</NovoMedico>
          </MedicosAtivos>
        </Retangulodeinformaços>
      </Body>
    </div>
  );
}

export default Home;
