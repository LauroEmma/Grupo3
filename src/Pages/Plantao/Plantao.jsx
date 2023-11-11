import {
  DivBackground,
  Tabela1,
  BotaoPlantao,
  Inputmodal,
  Informaçoesextras,
  Linha,
  LinhaTabela,
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

function Plantao() {
  const [openModal, setOpenModal] = useState(false);
  const handleConfirm = () => {
    alert("Confirmado");
  };
  return (
    <DivBackground>
      <Linha>
        <BotaoPlantao onClick={() => setOpenModal(true)}>
          Iniciar Plantão
        </BotaoPlantao>
      </Linha>
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

export default Plantao;
