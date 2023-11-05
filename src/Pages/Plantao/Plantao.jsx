import {
  DivBackground,
  Tabela1,
  BotaoPlantao,
  Inputmodal,
  Informaçoesextras,
  Cobretabela,
} from "./Styles";
import Modal from "../../components/Modal";
import { useState } from "react";

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
  },
  {
    title: "Hospital",
    dataIndex: "Hospital",
    key: "Hospital",
  },

  {
    title: "Cargo",
    dataIndex: "Cargo",
    key: "Cargo",
  },
  {
    title: "Chegada",
    dataIndex: "Chegada",
    key: "Chegada",
  },
  {
    title: "Tempo decorrido",
    dataIndex: "Tempo_Decorrido",
    key: "Tempo decorrido",
  },
];

function Plantao() {
  const [openModal, setOpenModal] = useState(false);
  const handleConfirm = () => {
    alert("Confirmado");
  };
  return (
    <DivBackground>
      <BotaoPlantao onClick={() => setOpenModal(true)}>
        Iniciar Plantão
      </BotaoPlantao>
      <Modal
        isOpen={openModal}
        setModalOpen={() => setOpenModal(!openModal)}
        onConfirm={handleConfirm}
      >
        <p> Confimação De Plantão</p>
        <p> Em qual hospital você atuará</p>
        <Inputmodal></Inputmodal>
        <p>Qual seu cargo nesse hospital</p>
        <Inputmodal></Inputmodal>
        <p>informaçoes adicionais?</p>
        <Informaçoesextras></Informaçoesextras>
      </Modal>
      <Cobretabela> ola</Cobretabela>
      <Tabela1
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        scroll={{ x: true, y: 525 }}
      />
    </DivBackground>
  );
}

export default Plantao;
