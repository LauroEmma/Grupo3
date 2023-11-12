import styled from "styled-components";
import { Table } from "antd";
export const Linha = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: end;
  align-items: center;
`;
export const LinhaTabela = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: auto;
  justify-content: center;
  align-items: center;
`;
export const DivBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #3d8ebc;
  border: none;
`;
export const BotaoSaida = styled.button`
  width: 202px;
  height: 32px;
  flex-shrink: 0;
  background-color: white;

  border-radius: 20px;
  color: black;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 700px) {
    height: 25px;
    width: 202px;
    font-size: 6px;
  }
  &:hover {
    background-color: #4650a7;
    color: white;
  }
`;
export const Tabela1 = styled(Table)`
  margin-top: 20px;
  width: 80%;

  border: 10px;
  color: #1d4aa3;
  .ant-table-thead .ant-table-cell {
    color: #faefef;
    background-color: #72c7f6;
    height: 95px;
    font-size: 19px;
    @media (max-width: 1300px) {
      font-size: 18px;
    }
    @media (max-width: 1154px) {
      font-size: 16px;
    }
    @media (max-width: 1040px) {
      font-size: 14px;
    }
    @media (max-width: 805px) {
      width: 90%;
      font-size: 13px;
    }
  }
  .ant-table-tbody {
    color: #1d4aa3;
    background-color: #f4fbff;
  }
  .ant-table-row {
    height: 95px;
    font-size: 20px;
    @media (max-width: 1300px) {
      font-size: 18px;
    }
    @media (max-width: 1154px) {
      font-size: 16px;
    }
    @media (max-width: 1040px) {
      font-size: 14px;
    }
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
  @media (max-width: 600px) {
    width: 224px;
  }
  @media (max-width: 350px) {
    width: 180px;
  }
`;
export const BotaoPlantao = styled.button`
  width: 202px;
  height: 32px;
  flex-shrink: 0;
  background-color: #4650a7;
  margin-right: 3rem;
  margin-top: 1rem;
  border-radius: 20px;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 600px) {
    height: 25px;
    width: 170px;
    font-size: 15px;
  }
`;

// export const Informaçoesextras = styled.textarea`
//   color: #000;
//   width: 324px;
//   height: 131.615px;
//   border-radius: 10px;
//   border: 0.5px solid #000;
//   background: #67b9e7;
//   flex-shrink: 0;
//   font-family: Inter;
//   font-size: 15px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   resize: none;
//   text-align: top;
//   @media (max-width: 600px) {
//     width: 224px;
//   }
//   @media (max-width: 350px) {
//     width: 180px;
//   }
// `;

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
export const Form = styled.form``;
export const Label = styled.label``;
