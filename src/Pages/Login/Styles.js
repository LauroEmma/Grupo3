import styled from "styled-components";

export const Loginimg = styled.img`
  height: 720px;
  border-radius: 80px;
  @media (max-width: 1300px) {
    height: calc(720px / 3 * 2);
    border-radius: calc(80px / 3 * 2);
  }
  @media (max-width: 614px) {
    height: 0px;
    width: 0px;
  }
  @media (max-height: 530px) {
    height: calc(720 / 6 * 2.8px);
    border-radius: calc(80 / 6 * 2.8px);
  }
`;

export const Input1 = styled.input`
  width: 414px;
  height: 61px;
  flex-shrink: 0;
  border-radius: 80px;
  background: #72c7f6;
  border-style: none;
  margin-left: 50px;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 24px;
  margin-bottom: 10px;
  border: 1px solid white;
  @media (max-width: 1300px) {
    width: calc(414px / 3 * 2);
    height: calc(61px / 3 * 2);
    padding-left: calc(24px / 3 * 2);
    margin-left: calc(50px / 3 * 2);
    font-size: calc(24px / 3 * 2);
    border-radius: calc(80px / 3 * 2);
  }
  @media (max-height: 530px) {
    width: calc(414 / 6 * 2.8px);
    height: calc(61 / 6 * 2.8px);
    padding-left: calc(24 / 6 * 2.8px);
    margin-left: calc(50 / 6 * 2.8px);
    font-size: calc(24 / 6 * 2.8px);
    border-radius: calc(80 / 6 * 2.8px);
  }
`;

export const Fonte1 = styled.div`
  width: 400px;
  height: 30px;
  flex-shrink: 0;
  color: white;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  span {
    color: #6eb7fa;
  }
  @media (max-width: 1300px) {
    width: calc(400px / 3 * 2);
    height: calc(30px / 3 * 2);
    font-size: calc(32px / 3 * 2);
  }
  @media (max-height: 530px) {
    width: calc(400 / 6 * 2.8px);
    height: calc(30 / 6 * 2.8px);
    font-size: calc(32 / 6 * 2.8px);
  }
`;

export const Fonte2 = styled.div`
  color: white;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 40px;
  @media (max-width: 1300px) {
    margin-left: calc(40px / 3 * 2);
    font-size: calc(22px / 3 * 2);
  }
  @media (max-height: 530px) {
    margin-left: calc(40 / 6 * 2.8px);
    font-size: calc(22 / 6 * 2.8px);
  }
`;
export const Fonte3 = styled.div`
  flex-shrink: 0;
  color: #fdfdfd;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 166px;
  margin-right: 166px;
  @media (max-width: 1300px) {
    margin-left: calc(166px / 3 * 2);
    margin-right: calc(166px / 3 * 2);
    font-size: calc(24px / 3 * 2);
  }
  @media (max-height: 530px) {
    margin-left: calc(166 / 6 * 2.8px);
    margin-right: calc(166 / 6 * 2.8px);
    font-size: calc(24 / 6 * 2.8px);
  }
`;
export const DivGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 362px;
  @media (max-width: 1300px) {
    gap: calc(30px / 3 * 2);
    width: calc(362px / 3 * 2);
  }
  @media (max-height: 530px) {
    gap: calc(30 / 6 * 2.8px);
    width: calc(362 / 6 * 2.8px);
  }
`;
export const DivGap2 = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1300px) {
    gap: calc(20px / 3 * 2);
    margin-top: calc(30px / 3 * 2);
  }
  @media (max-height: 530px) {
    gap: calc(20 / 6 * 2.8px);
    margin-top: calc(30 / 6 * 2.8px);
  }
`;
export const DivGap3 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-top: 70px;
  @media (max-width: 1300px) {
    gap: calc(20px / 3 * 2);
    padding-top: calc(70px / 3 * 2);
  }
  @media (max-height: 530px) {
    gap: calc(20 / 6 * 2.8px);
    padding-top: calc(70 / 6 * 2.8px);
  }
`;
export const DivGap4 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1300px) {
    gap: calc(30px / 3 * 2);
  }
  @media (max-height: 530px) {
    gap: calc(30 / 6 * 2.8px);
  }
`;
export const DivGap5 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 1300px) {
    gap: calc(30px / 3 * 2);
  }
  @media (max-height: 530px) {
    gap: calc(30 / 6 * 2.8px);
  }
`;
export const DivFrame = styled.div`
  width: 894px;
  height: 720px;
  border-radius: 80px;
  background: #13244d;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  @media (max-width: 1300px) {
    width: calc(894px / 3 * 2);
    height: calc(720px / 3 * 2);
    border-radius: calc(80px / 3 * 2);
  }
  @media (max-width: 613px) {
    width: 350px;
    border-radius: calc(80px / 3 * 2);
  }
  @media (max-height: 530px) {
    width: calc(894 / 6 * 2.8px);
    height: calc(720 / 6 * 2.8px);
    border-radius: calc(80 / 6 * 2.8px);
  }
`;
export const Divall = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #72c7f9;
  @media (max-width: 614.6px) {
    background-color: #13244d;
  }
  @media (max-height: 530px) {
    background-color: #72c7f9;
  }
`;
export const Botao1 = styled.button`
  padding-top: 50px;
  width: 436px;
  height: 56px;
  flex-shrink: 0;
  border-radius: 80px;
  background: #72c7f6;
  border-style: none;
  @media (max-width: 1300px) {
    padding-top: calc(50px / 3 * 2);
    width: calc(436px / 3 * 2);
    height: calc(56px / 3 * 2);
    border-radius: calc(80px / 3 * 2);
  }
  @media (max-height: 530px) {
    padding-top: calc(50 / 6 * 2.8px);
    width: calc(436 / 6 * 2.8px);
    height: calc(56 / 6 * 2.8px);
    border-radius: calc(80 / 6 * 2.8px);
  }
`;
export const Botao2 = styled.button`
  border-radius: 80px;
  background: transparent;
  width: 146px;
  height: 55px;
  flex-shrink: 0;
  border: 2px solid white;
  margin-left: 340px;
  font-size: 24px;
  font-style: normal;
  line-height: normal;
  @media (max-width: 1300px) {
    border-radius: calc(80px / 3 * 2);
    width: calc(146px / 3 * 2);
    height: calc(55px / 3 * 2);
    border: calc(2px / 3 * 2) solid white;
    margin-left: calc(340px / 3 * 2);
    font-size: calc(24px / 3 * 2);
  }
  @media (max-height: 530px) {
    border-radius: calc(80 / 6 * 2.8px);
    width: calc(146 / 6 * 2.8px);
    height: calc(55 / 6 * 2.8px);
    border: calc(2 / 6 * 2.8px) solid white;
    margin-left: calc(340 / 6 * 2.8px);
    font-size: calc(24 / 6 * 2.8px);
  }
  &:hover {
    color: black;
    background-color: #72c7f6;
    cursor: pointer;
  }
`;
export const Botao3 = styled.button`
  width: 200px;
  height: 51px;
  flex-shrink: 0;
  border-radius: 80px;
  background: transparent;
  border: 2px solid white;
  margin-left: 166px;
  margin-right: 166px;
  font-size: 22px;
  font-style: normal;
  @media (max-width: 1300px) {
    width: calc(200px / 3 * 2);
    height: calc(51px / 3 * 2);
    border-radius: calc(80px / 3 * 2);
    border: calc(2px / 3 * 2) solid white;
    margin-left: calc(166px / 3 * 2);
    margin-right: calc(166px / 3 * 2);
    font-size: calc(22px / 3 * 2);
  }
  @media (max-height: 530px) {
    width: calc(200 / 6 * 2.8px);
    height: calc(51 / 6 * 2.8px);
    border-radius: calc(80 / 6 * 2.8px);
    border: calc(2 / 6 * 2.8px) solid white;
    margin-left: calc(166 / 6 * 2.8px);
    margin-right: calc(166 / 6 * 2.8px);
    font-size: calc(21 / 6 * 2.8px);
  }
  &:hover {
    color: black;
    background-color: #72c7f6;
    cursor: pointer;
  }
`;
export const Simbolo = styled.img`
  padding-left: 40px;
  height: 40px;
  width: 40px;
  @media (max-width: 1300px) {
    padding-left: calc(40px / 3 * 2);
    height: calc(40px / 3 * 2);
    width: calc(40px / 3 * 2);
  }
  @media (max-height: 530px) {
    padding-left: calc(40 / 6 * 2.8px);
    height: calc(40 / 6 * 2.8px);
    width: calc(40 / 6 * 2.8px);
  }
`;
export const Label = styled.label``;
export const Form = styled.form``;
