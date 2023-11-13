import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselStyled,
  DivBackground,
  Tabela1,
  BotaoPlantao,
  Inputmodal,
  BotaoSaida,
  //  Informaçoesextras,
  Linha,
  LinhaTabela,
  Form,
  Label,
} from "./Styles";
import Modal from "../../components/Modal";
import { useState } from "react";
import useAuthStore from "../../stores/auth";
import api from "../../services/api";

function Home() {
  const [cargo, setCargo] = useState("");
  const [hospital, setHospital] = useState("");
  const usuario = useAuthStore((state) => state.usuario);
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleConfirm = () => {
    alert("Confirmado");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/atividade", {
        id_usuario: usuario.id,
        hospital,
        cargo,
      });

      const newSessao = {
        key: res.data.id, // Use a chave única do plantão (pode ser o ID retornado pela API)
        name: usuario.nome,
        Hospital: hospital,
        Cargo: cargo,
        Chegada: "20h",
        Tempo_Decorrido: "10m",
      };

      setTableData([...tableData, newSessao]);
      setHospital(""); // Limpar o estado após adicionar à tabela
      setCargo(""); // Limpar o estado após adicionar à tabela
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
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
      <Form onSubmit={handleSubmit}>
        <Modal
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
          onConfirm={handleConfirm}
          onSubmit={handleSubmit}
        >
          <p> Confirmação De Plantão</p>
          <p> Em qual hospital você atuará?</p>
          <Label htmlFor="hospital"> </Label>
          <Inputmodal
            type="text"
            id="hospital"
            name="hospital"
            required
            value={hospital}
            onChange={(e) => setHospital(e.target.value)}
          />
          <p>Qual seu cargo nesse hospital?</p>
          <Label htmlFor="cargo"> </Label>
          <Inputmodal
            type="text"
            id="cargo"
            name="cargo"
            required
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </Modal>
      </Form>

      <LinhaTabela>
        <Tabela1
          dataSource={tableData}
          columns={columns}
          pagination={false}
          scroll={{ x: 150, y: 265 }}
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
    title: "Médicos em plantão",
    dataIndex: "name",
    key: "Médicos em plantão",
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
  {
    title: "Desconectar",
    key: "Action",
    render: (text, record) => (
      <BotaoSaida onClick={() => handleDisconnect(record.key)}>
        Deslogar
      </BotaoSaida>
    ),
    width: 70,
  },
];
const handleDisconnect = (key) => {
  alert(`desconectou a linha tal = ${key}`);
};

export default Home;
