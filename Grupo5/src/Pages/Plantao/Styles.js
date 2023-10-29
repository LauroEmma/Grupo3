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
    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 6px;
    }
  }
`;
export const Modalfundo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;
