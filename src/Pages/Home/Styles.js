import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";

export const CarouselStyled = styled(Carousel)`
  width: 600px;
  height: 200px;
  margin: auto;
  margin-top: 0px;
`;
export const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f6f7fc;
  margin: 0;
  padding: 0;
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
export const Retangulodeinformaços = styled.div`
  width: 1000px;
  height: 95px;
  background-color: #72c7f6;
  margin: auto;
  margin-top: 150px;
`;

export const DivHeader = styled.div`
  width: 195px;
  height: 95px;
  flex-shrink: 0;
  background-color: #72c7f6;
  color: #faefef;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  margin: auto;
  position: relative;
`;

export const Texto = styled.p`
  position: absolute;
  margin: 0;
`;

export const MedicosAtivos = styled.div`
  width: 1000px;
  height: 95px;
  flex-shrink: 0;
  background-color: #1b5ea5;
  color: #faefef;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  margin: auto;
  position: relative;
`;

export const NovoMedico = styled.p`
  position: absolute;
  margin: 0;
`;
