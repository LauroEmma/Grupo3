import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { Table } from "antd";
export const Linha = styled.div`
  width: 90%;
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
export const CarouselStyled = styled(Carousel)`
  width: 600px;
  height: 200px;
  margin: auto;
  margin-top: 0px;
`;

export const DivBackground = styled.div`
  width: 100%;
  height: 105vh;
  background-color: #3d8ebc;
  border: none;
`;
export const BotaoPlantao = styled.button`
  width: 202px;
  height: 32px;
  margin-top: 150px;

  background-color: #4650a7;
  border-radius: 20px;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 600px) {
    height: 25px;
    width: 150px;
    font-size: 15px;
  }
  @media (max-width: 450px) {
    margin-top: 50px;
  }
`;
export const Tabela1 = styled(Table)`
  width: 80%;

  border: 10px;
  color: #1d4aa3;
  .ant-table-thead .ant-table-cell {
    color: #faefef;
    background-color: #72c7f6;
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
