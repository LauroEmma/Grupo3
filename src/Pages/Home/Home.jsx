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
import Modal from "../../Components/Modal/Modal";
import { useEffect, useState } from "react";
import useAuthStore from "../../stores/auth";
import api from "../../services/api";

function Home() {
  // Dados
  const [cargo, setCargo] = useState("");
  const [hospital, setHospital] = useState("");
  const idUsuario = useAuthStore((state) => state?.usuario?._id);
  // Usuario

  const [atividades, setAtividades] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const getAtividades = async () => {
    try {
      const res = await api.get("/atividade");
      setAtividades(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
  useEffect(() => {
    getAtividades();
  }, []);

  const handleSubmit = async () => {
    try {
      await api.post("/atividade", {
        id_usuario: idUsuario,
        cargo: cargo,
        hospital: hospital,
      });
      getAtividades();
      setHospital("");
      setCargo("");
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
  const handleDelete = async () => {
    try {
      await api.delete(`/atividade/${idUsuario}`);
      getAtividades();
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
  console.log("atividades", atividades);
  const columns = [
    {
      title: "Médicos em plantão",
      dataIndex: "name",
      key: "Médicos em plantão",
      width: 100,
    },
    {
      title: "Hospital",
      dataIndex: "hospital",
      key: "Hospital",
      width: 100,
    },

    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "Cargo",
      width: 100,
    },
    {
      title: "Chegada",
      dataIndex: "chegada",
      key: "Chegada",
      width: 100,
    },
    {
      title: "Tempo decorrido",
      dataIndex: "tempo_Decorrido",
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
  return (
    <DivBackground>
      <CarouselStyled showThumbs={false} infiniteLoop={true}>
        {images.map((image) => (
          <img src={image.download_url} alt={image.author} />
        ))}
      </CarouselStyled>
      <Linha>
        <BotaoPlantao onClick={handleDelete}>Encerrar Sessão</BotaoPlantao>
        <BotaoPlantao onClick={() => setOpenModal(true)}>
          Iniciar Sessão
        </BotaoPlantao>
      </Linha>

      <Modal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
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

      <LinhaTabela>
        <Tabela1
          columns={columns}
          pagination={false}
          scroll={{ x: 150, y: 265 }}
        />
      </LinhaTabela>
    </DivBackground>
  );
}

const handleDisconnect = (key) => {
  alert(`desconectou a linha tal = ${key}`);
};

export default Home;
