import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  CarouselStyled,
  DivBackground,
  Tabela1,
  BotaoPlantao,
  Inputmodal,
  BotaoSaida,
  Linha,
  LinhaTabela,
  Form,
  Label,
} from "./Styles";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import useAuthStore from "../../stores/auth";
import api from "../../services/api";
import moment from "moment/moment";

function Home() {
  const [cargo, setCargo] = useState("");
  const [ativa, setAtiva] = useState(false);
  const [hospital, setHospital] = useState("");
  const [atividades, setAtividades] = useState([]);
  const idUsuario = useAuthStore((state) => state?.usuario?._id);
  const [openModal, setOpenModal] = useState(false);
  const [dadosTabela, setDadosTabela] = useState([]);
  const [plantoes, setPlantoes] = useState([]);
  const [ativaPlantao, setAtivaPlantao] = useState(false);

  const verificarPlantao = async () => {
    const res = await api.get("/plantao");
    setPlantoes(res.data);
    const temPlantao = plantoes.find(
      (atividade) => atividade?.id_usuario?._id === idUsuario
    );
    setAtivaPlantao(!!temPlantao);
  };
  useEffect(() => {
    verificarPlantao();
  }, [plantoes]);

  const handleSubmit = async () => {
    try {
      if (ativaPlantao) {
        alert("Você tem um plantão ativo!");
        return;
      }
      const res = await api.post("/atividade", {
        id_usuario: idUsuario,
        hospital: hospital,
        cargo: cargo,
      });

      getAtividades();
      setHospital("");
      setCargo("");
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
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

  const verificarAtividade = () => {
    const temAtividade = atividades.find(
      (atividade) => atividade?.id_usuario?._id === idUsuario
    );
    setAtiva(!!temAtividade);
    mapearAtividade();
  };
  useEffect(() => {
    verificarAtividade();
  }, [atividades]);

  function mapearAtividade() {
    const resultadoMapeamento = atividades.map((atividade) => {
      const chegada = moment(atividade.createdAt);
      const agora = moment();
      const calc = agora.diff(chegada, "minutes");
      const horas = Math.floor(calc / 60);
      const minutos = calc % 60;

      return {
        nome: atividade?.id_usuario?.nome,
        hospital: atividade?.hospital,
        cargo: atividade?.cargo,
        chegada: chegada.format("DD/MM H:mm"),
        tempo_decorrido: `${horas}:${minutos}`,
        key: atividade?._id,
      };
    });

    setDadosTabela(resultadoMapeamento);
  }

  const deleteAtividade = async () => {
    try {
      const res = await api.delete(`/atividade/${idUsuario}`);
      getAtividades();
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
  const images = [
    {
      author: "Lauro Emmanuel",
      download_url: "https://i.ibb.co/68TsM9C/1.jpg",
    },
    {
      author: "Lauro Emmanuel",
      download_url: "https://i.ibb.co/ykPy62L/2.jpg",
    },
    {
      author: "Lauro Emmanuel",
      download_url: " https://i.ibb.co/d4TGfDK/4.jpg",
    },
    {
      author: "Lauro Emmanuel",
      download_url: "https://i.ibb.co/QcBZVNs/3.png",
    },
  ];
  const atividadeColumns = [
    {
      title: "Médicos em plantão",
      dataIndex: "nome",
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
      dataIndex: "tempo_decorrido",
      key: "Tempo decorrido",
      width: 100,
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
        {!ativa ? (
          <BotaoPlantao onClick={() => setOpenModal(true)}>
            Iniciar Sessão
          </BotaoPlantao>
        ) : (
          <BotaoPlantao onClick={deleteAtividade}>Deslogar </BotaoPlantao>
        )}
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
          dataSource={dadosTabela}
          columns={atividadeColumns}
          pagination={false}
          scroll={{ x: 150, y: 230 }}
        />
      </LinhaTabela>
    </DivBackground>
  );
}

export default Home;
