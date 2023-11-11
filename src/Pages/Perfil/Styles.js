import styled from "styled-components";

export const DivGeral = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #00ebff;
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
`;

export const DivDaImagem = styled.div`
  display: flex;
  flex-direction: column;
  width: 58%;
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
`;

export const DivUsuario = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 36%;
  margin-right: 12%;
  margin-top: 19%;
  background-color: #006fa2;
  border-radius: 60px;
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
`;

export const DivCargo = styled.div`
  flex-shrink: 0;
  color: #ffffff;
  font-size: 110%;
  font-style: normal;
  font-weight: 200;
  padding-top: 3%;
  padding-left: 7%;
  text-align: left;
  padding-bottom: 3%;
`;

export const DivEmail = styled.div`
  flex-shrink: 0;
  color: #ffffff;
  font-size: 110%;
  font-style: normal;
  font-weight: 200;
  text-align: left;
  padding-left: 7%;
  padding-bottom: 3%;
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
`;

export const DivInfo = styled.div`
  flex-shrink: 0;
  color: #ffffff;
  font-size: 110%;
  font-style: normal;
  font-weight: 600;
  text-align: left;
  padding-top: 4%;
  padding-left: 8%;
  padding-bottom: 1%;
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
`;

export const DivBotao = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 10%;
  margin-right: 12%;
  margin-top: 4%;
  background-color: #006fa2;
  border-radius: 60px;
`;

export const BotaoSair = styled.button`
  margin-top: 4%;
  margin-right: 10%;
  width: 30%;
  height: 10%;
  border-radius: 80px;
  font-size: 22px;
  background-color: #006fa2;
  color: white;
  flex-shrink: 0;
  border-style: none;

  &:hover {
    cursor: pointer;
    background-color: transparent;
  }
`;
