import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CarouselStyled } from "./Styles";
import { DivBackground } from "./Styles";
import { BotaoPlantao } from "./Styles";
import { Body } from "./Styles";
import { Retangulodeinformaços } from "./Styles";
import { Header } from "./Styles";
import { DivHeader } from "./Styles";
import Vetor from "./Vetor.png";

//import { Carousel } from "react-responsive-carousel";

function Home() {
  const images = [
    {
      author: "Alejandro Escamilla",
      download_url:
        "data:image/jpeg;base64,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",
    },
    {
      id: "1",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/LNRyGwIJr5c",
      download_url: "https://picsum.photos/id/1/5000/3333",
    },
    {
      id: "2",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/N7XodRrbzS0",
      download_url: "https://picsum.photos/id/2/5000/3333",
    },
    {
      id: "3",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/Dl6jeyfihLk",
      download_url: "https://picsum.photos/id/3/5000/3333",
    },
    {
      id: "4",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/y83Je1OC6Wc",
      download_url: "https://picsum.photos/id/4/5000/3333",
    },
    {
      id: "5",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3334,
      url: "https://unsplash.com/photos/LF8gK8-HGSg",
      download_url: "https://picsum.photos/id/5/5000/3334",
    },
    {
      id: "6",
      author: "Alejandro Escamilla",
      width: 5000,
      height: 3333,
      url: "https://unsplash.com/photos/tAKXap853rY",
      download_url: "https://picsum.photos/id/6/5000/3333",
    },
  ];
  return (
    <div>
      <Body>
        <CarouselStyled showThumbs={false}>
          {images.map((image) => (
            <img src={image.download_url} alt={image.author} />
          ))}
        </CarouselStyled>
        <DivBackground>
          <BotaoPlantao>Iniciar Plantao</BotaoPlantao>

          <Retangulodeinformaços>
            <Header>
              <DivHeader>
                Medicos Em Plantao
                <img src={Vetor} alt="Descrição da imagem" />
              </DivHeader>
              <DivHeader>
                Hospital
                <img src={Vetor} alt="Descrição da imagem" />
              </DivHeader>
              <DivHeader>
                Barra Pesquisa
                <img src={Vetor} alt="Descrição da imagem" />
              </DivHeader>
              <DivHeader>
                Cargo
                <img src={Vetor} alt="Descrição da imagem" />
              </DivHeader>
              <DivHeader>
                Chegada
                <img src={Vetor} alt="Descrição da imagem" />
              </DivHeader>
              <DivHeader>
                Tempo decorrido
                <img src={Vetor} alt="Descrição da imagem" />
              </DivHeader>
            </Header>
          </Retangulodeinformaços>
        </DivBackground>
      </Body>
    </div>
  );
}

export default Home;
