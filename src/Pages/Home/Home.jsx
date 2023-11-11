import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselStyled,
  DivBackground,
  Tabela1,
  BotaoPlantao,
  Inputmodal,
  Informaçoesextras,
  Linha,
  LinhaTabela,
} from "./Styles";
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";

function Home() {
  const [openModal, setOpenModal] = useState(false);
  const handleConfirm = () => {
    alert("Confirmado");
  };
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
    <DivBackground>
      <CarouselStyled showThumbs={false} infiniteLoop={true}>
        {images.map((image) => (
          <img src={image.download_url} alt={image.author} />
        ))}
      </CarouselStyled>
      <Linha>
        <BotaoPlantao onClick={() => setOpenModal(true)}>
          Iniciar Sessão
        </BotaoPlantao>
      </Linha>
      <Modal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        onConfirm={handleConfirm}
      >
        <p> Confimação De Sessão</p>
        <p> Em qual hospital você atuará</p>
        <Inputmodal></Inputmodal>
        <p>Qual seu cargo nesse hospital</p>
        <Inputmodal></Inputmodal>
        <p>Informaçoes adicionais?</p>
        <Informaçoesextras></Informaçoesextras>
      </Modal>

      <LinhaTabela>
        <Tabela1
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ x: 200, y: 525 }}
        />
      </LinhaTabela>
    </DivBackground>
  );
}
const dataSource = [
  {
    key: "1",
    name: "Mike",
    Hospital: "Senhora aparecida",
    Cargo: "ortopedista",
    Chegada: "20h",
    Tempo_Decorrido: "10m",
  },
];
const columns = [
  {
    title: "Médicos em atividade",
    dataIndex: "name",
    key: "Médicos em atividade",
    width: 100,
  },
  {
    title: "Hospital",
    dataIndex: "Hospital",
    key: "Hospital",
    width: 100,
  },

  {
    title: "Cargo",
    dataIndex: "Cargo",
    key: "Cargo",
    width: 100,
  },
  {
    title: "Chegada",
    dataIndex: "Chegada",
    key: "Chegada",
    width: 100,
  },
  {
    title: "Tempo decorrido",
    dataIndex: "Tempo_Decorrido",
    key: "Tempo decorrido",
    width: 100,
  },
];

export default Home;
