import styled from "styled-components";
import { Table } from "antd";

export const DivBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3d8ebc;
  border: none;
`;
export const BotaoPlantao = styled.button`
  width: 202px;
  height: 32px;
  flex-shrink: 0;
  background-color: #4650a7;
  margin-top: 22px;
  margin-left: 1122px;
  border-radius: 20px;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Tabela1 = styled(Table)`
  margin-top: 20px;
  width: 1200px;
  margin-left: 200px;
  position: absolute;
  border: 10px;
  color: #1d4aa3;

  .ant-table-thead .ant-table-cell {
    color: #faefef;
    background-color: #72c7f6;
    height: 95px;
    font-size: 20px;
  }
  .ant-table-tbody {
    color: #1d4aa3;
    background-color: #f4fbff;
  }
  .ant-table-row {
    height: 95px;
    font-size: 20px;
  }
`;
export const Inputmodal = styled.input`
  color: #000;
  width: 324px;
  height: 15px;
  border-radius: 10px;
  border: 0.5px solid #000;
  background: #67b9e7;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Informaçoesextras = styled.textarea`
  color: #000;
  width: 324px;
  height: 131.615px;
  border-radius: 10px;
  border: 0.5px solid #000;
  background: #67b9e7;
  flex-shrink: 0;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  resize: none;
  text-align: top;
`;

export const BotaoConfirma = styled.button`
  width: 202px;
  height: 20px;
  margin-top: 20px;
  border-radius: 20px;

  color: #fdfdfd;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: #67b9e7;
`;
export const Cobretabela = styled.div`
  background-color: #f4fbff;
  margin-left: 200px;
  margin-top: 20px;
  position: fixed;
  width: 1200px;
  height: 1000px;
  border-radius: 10px;
`;
