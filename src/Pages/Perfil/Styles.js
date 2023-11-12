import styled from "styled-components";

export const DivGeral = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DivBase = styled.div`
  width: 48%;
  height: 49%;
  margin-bottom: 15%;
  background-color: #021c35;
  display: flex;
  border-radius: 80px;

  @media (max-width: 900px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0%;
    margin-top: 12%;
    width: 100%;
    height: 100%;
  }
`;

export const DivDaImagem = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;

  @media (max-width: 900px) {
    width: 0%;
  }
`;

export const ImgHipocrates = styled.img`
  height: 100%;
  border-radius: 80px;
`;

export const DivDireita = styled.div`
  display: flex;
  flex-direction: column;
  width: 42%;
  border-radius: 80px;
  background-color: #021c35;
  align-items: center;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const DivUsuario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 15%;
  margin-right: 12%;
  margin-top: 19%;
  background-color: #006fa2;
  border-radius: 60px;

  @media (max-width: 900px) {
    height: 10%;
    border-radius: 0;
    align-items: center;
    border-bottom: solid;
    border-color: #006fa2;
    margin-right: 0%;
    text-align: left;
    margin-top: 0;
  }

  @media (max-width: 750px) {
    height: 9%;
  }

  @media (max-width: 500px) {
    height: 7%;
  }

  @media (max-width: 350px) {
    height: 6%;
  }
`;

export const DivNome = styled.div`
  flex-shrink: 0;
  color: #ffffff;
  font-size: 175%;
  font-style: normal;
  font-weight: 550;
  padding-top: 5%;
  text-align: center;
  padding-bottom: 2%;
  width: 100%;

  @media (max-width: 1300px) {
    font-size: 140%;
    padding-left: 0;
    padding: 2%;
    margin-right: 10%;
  }
  @media (max-width: 1100px) {
    font-size: 120%;
  }

  @media (max-width: 900px) {
    font-size: 150%;
    padding-top: 5%;
  }
`;

export const DivCargo = styled.div`
  flex-shrink: 0;
  color: #ffffff;
  font-size: 110%;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  padding-top: 4%;
  padding-left: 8%;
  padding-bottom: 1%;

  @media (max-width: 1300px) {
    font-size: 100%;
    margin-right: 0;
  }
  @media (max-width: 1100px) {
    font-size: 90%;
  }

  @media (max-width: 900px) {
    font-size: 100%;
  }
  @media (max-width: 400px) {
    padding-left: 12%;
  }
`;

export const DivEmail = styled.div`
  flex-shrink: 0;
  color: #ffffff;
  font-size: 110%;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  padding-top: 4%;
  padding-left: 8%;
  padding-bottom: 1%;

  @media (max-width: 1300px) {
    font-size: 100%;
    margin-right: 0;
    padding-top: 1%;
  }
  @media (max-width: 1100px) {
    font-size: 90%;
  }

  @media (max-width: 900px) {
    font-size: 100%;
  }
  @media (max-width: 400px) {
    padding-left: 12%;
  }
`;

export const DivInfAdic = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 20%;
  margin-right: 12%;
  margin-top: 4%;
  background-color: #006fa2;
  border-radius: 60px;

  @media (max-width: 900px) {
    border-radius: 0;
    margin-right: 0;
    height: 13%;
  }
`;

export const DivInfo = styled.div`
  flex-shrink: 0;
  color: #ffffff;
  font-size: 110%;
  font-style: normal;
  font-weight: 400;
  text-align: left;
  padding-top: 4%;
  padding-left: 8%;
  padding-bottom: 1%;

  @media (max-width: 1300px) {
    font-size: 100%;
    margin-right: 0;
  }
  @media (max-width: 1100px) {
    font-size: 90%;
  }

  @media (max-width: 900px) {
    font-size: 100%;
  }
  @media (max-width: 400px) {
    padding-left: 12%;
  }
`;

export const DivInfoTexto = styled.div`
  flex-shrink: 0;
  font-weight: 400;
  color: #ffffff;
  font-size: 100%;
  font-style: normal;
  text-align: left;
  padding-left: 8%;
  padding-bottom: 3%;

  @media (max-width: 1300px) {
    font-size: 100%;
  }
  @media (max-width: 1100px) {
    font-size: 90%;
  }

  @media (max-width: 900px) {
    font-size: 80%;
  }
  @media (max-width: 400px) {
    padding-left: 12%;
  }
`;

export const DivBotao = styled.div`
  display: flex;
  flex-direction: row;
  width: 40%;
  height: 10%;
  margin-right: 60%;
  margin-top: 4%;

  @media (max-width: 900px) {
    margin-left: 12%;
  }
`;

export const BotaoSair = styled.button`
  margin-top: 4%;
  margin-right: 12%;
  width: 100%;
  height: 120%;
  border-radius: 80px;
  font-size: 22px;
  background-color: #006fa2;
  color: white;
  flex-shrink: 0;
  border-style: none;
  font-size: 100%;

  @media (max-width: 1300px) {
    font-size: 80%;
    height: 80%;
  }
  @media (max-width: 1100px) {
    font-size: 70%;
  }

  @media (max-width: 900px) {
    font-size: 80%;
  }

  &:hover {
    cursor: pointer;
    background-color: transparent;
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
  font-weight: 400;
  line-height: normal;
`;
