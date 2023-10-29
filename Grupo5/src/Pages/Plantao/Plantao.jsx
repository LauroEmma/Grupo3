import {
  DivBackground,
  Tabela1,
  BotaoPlantao,
  Inputmodal,
  Informaçoesextras,
  BotaoConfirma,
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
  {
    key: "2",
    name: "John",
    age: 42,
    address: "10 Downing Street",
  },
  {
    key: "3",
    name: "jose",
    age: 52,
    address: "rua casilda",
  },
  {
    key: "3",
    name: "jose",
    age: 52,
    address: "rua casilda",
  },
  {
    key: "1",
    name: "Mike",
    Hospital: "Senhora aparecida",
    Cargo: "ortopedista",
    Chegada: "20h",
    Tempo_Decorrido: "10m",
  },
  {
    key: "1",
    name: "Mike",
    Hospital: "Senhora aparecida",
    Cargo: "ortopedista",
    Chegada: "20h",
    Tempo_Decorrido: "10m",
  },
  {
    key: "1",
    name: "Mike",
    Hospital: "Senhora aparecida",
    Cargo: "ortopedista",
    Chegada: "20h",
    Tempo_Decorrido: "10m",
  },
  {
    key: "1",
    name: "Mike",
    Hospital: "Senhora aparecida",
    Cargo: "ortopedista",
    Chegada: "20h",
    Tempo_Decorrido: "10m",
  },
  {
    key: "1",
    name: "Mike",
    Hospital: "Senhora aparecida",
    Cargo: "ortopedista",
    Chegada: "20h",
    Tempo_Decorrido: "10m",
  },
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
  return (
    <DivBackground>
      <BotaoPlantao onClick={() => setOpenModal(true)}>
        Iniciar Plantão
      </BotaoPlantao>
      <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
        <p> Confimação De Plantão</p>
        <p> Em qual hospital você atuará</p>
        <Inputmodal></Inputmodal>
        <p>Qual seu cargo nesse hospital</p>
        <Inputmodal></Inputmodal>
        <p>informaçoes adicionais?</p>
        <Informaçoesextras></Informaçoesextras>
        <BotaoConfirma>confirmar</BotaoConfirma>
      </Modal>
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
