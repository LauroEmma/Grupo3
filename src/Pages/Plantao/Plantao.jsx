import {
  DivBackground,
  Tabela1,
  BotaoPlantao,
  Inputmodal,
  Linha,
  LinhaTabela,
  BotaoSaida,
  Form,
  Label,
} from "./Styles";
import Modal from "../../components/Modal";
import { useEffect, useState } from "react";
import useAuthStore from "../../stores/auth";
import api from "../../services/api";
import moment from "moment";

function Plantao() {
  const [cargo, setCargo] = useState("");
  const [hospital, setHospital] = useState("");
  const idUsuario = useAuthStore((state) => state.usuario?._id);
  const [plantoes, setPlantoes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [dadosTabela, setDadosTabela] = useState([]);
  const [ativaPlantao, setAtivaPlantao] = useState(false);
  const [atividades, setAtividades] = useState([]);
  const [ativaHome, setAtivaHome] = useState(false);

  const verificarAtividade = async () => {
    const res = await api.get("/atividade");
    setAtividades(res.data);
    const temAtividade = atividades.find(
      (atividade) => atividade?.id_usuario?._id === idUsuario
    );
    setAtivaHome(!!temAtividade);
  };
  useEffect(() => {
    verificarAtividade();
  }, [atividades]);
  const handleSubmit = async () => {
    try {
      if (ativaHome) {
        alert("Você tem uma sessão ativa!");
        return;
      }
      const res = await api.post("/plantao", {
        id_usuario: idUsuario,
        hospital: hospital,
        cargo: cargo,
      });

      getPlantoes();
      setHospital("");
      setCargo("");
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  const getPlantoes = async () => {
    try {
      const res = await api.get("/plantao");
      setPlantoes(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
  useEffect(() => {
    getPlantoes();
  }, []);

  const verificarPlantoes = () => {
    const temPlantao = plantoes.find(
      (plantao) => plantao.id_usuario?._id === idUsuario
    );
    setAtivaPlantao(!!temPlantao);
    mapearPlantoes();
  };
  useEffect(() => {
    verificarPlantoes();
  }, [plantoes]);

  function mapearPlantoes() {
    const resultadoMapeamento = plantoes.map((plantao) => {
      const chegada = moment(plantao.createdAt);
      const agora = moment();
      const calc = agora.diff(chegada, "minutes");
      const horas = Math.floor(calc / 60);
      const minutos = calc % 60;

      return {
        nome: plantao.id_usuario?.nome,
        hospital: plantao.hospital,
        cargo: plantao.cargo,
        chegada: chegada.format("DD/MM H:mm"),
        tempo_decorrido: `${horas}:${minutos}`,
        key: plantao._id,
      };
    });

    setDadosTabela(resultadoMapeamento);
  }

  const deletePlantao = async () => {
    try {
      const res = await api.delete(`/plantao/${idUsuario}`);
      getPlantoes();
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };
  const columns = [
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
      <Linha>
        {!ativaPlantao ? (
          <BotaoPlantao onClick={() => setOpenModal(true)}>
            Iniciar Plantao
          </BotaoPlantao>
        ) : (
          <BotaoPlantao onClick={deletePlantao}>Deslogar </BotaoPlantao>
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
          columns={columns}
          pagination={false}
          scroll={{ x: 150, y: 525 }}
        />
      </LinhaTabela>
    </DivBackground>
  );
}

export default Plantao;
