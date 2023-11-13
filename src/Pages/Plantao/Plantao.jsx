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
import Modal from "../../Components/Modal/Modal";
import { useState } from "react";
import useAuthStore from "../../stores/auth";
import api from "../../services/api";

function Plantao() {
  const [cargo, setCargo] = useState("");
  const [hospital, setHospital] = useState("");
  const usuario = useAuthStore((state) => state.usuario);
  const idUsuario = useAuthStore((state) => state.usuario?._id);
  const [tableData, setTableData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const setUsuario = useAuthStore((state) => state.setUsuario);
  const [nome, setNome] = useState(usuario?.nome);
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
    try {
      const destroy = api.delete(`/plantao/${usuario.id}`);
    } catch (error) {
      console.error(error);
      alert("Erro ao deletar esse plantao");
    }
  };

  const fetchPlantaoData = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/plantao");
      setTableData(response.data);
    } catch (error) {
      console.error(error);
      alert("Erro ao obter dados do plantão");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/plantao", {
        id_usuario: usuario.id,
        hospital,
        cargo,
      });
      setTableData([...tableData, res.data]);
      setUsuario(res.data);
    } catch (erro) {
      console.error(erro);
      alert(erro.response.data.message);
    }
  };

  return (
    <DivBackground>
      <Linha>
        <BotaoPlantao onClick={() => setOpenModal(true)}>
          Iniciar Plantão
        </BotaoPlantao>
      </Linha>
      <Form onSubmit={handleSubmit}>
        <Modal
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
          confirm={handleSubmit}
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
          scroll={{ x: 150, y: 525 }}
        />
      </LinhaTabela>
    </DivBackground>
  );
}

export default Plantao;
