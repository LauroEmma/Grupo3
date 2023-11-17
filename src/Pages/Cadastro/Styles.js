import styled from "styled-components";

export const Doctorimg = styled.img`
  height: calc(960 * 0.75px);
  border-radius: calc(110 * 0.75px);
  @media (max-width: 1300px) {
    height: calc(960 / 3 * 2px);
    border-radius: 72.33px;
  }
  @media (max-width: 433px) {
    height: 0px;
    width: 0px;
  }
  @media (max-height: 530px) {
    height: calc(960 / 6 * 2.3px);
    border-radius: calc(36.165 * 1.15px);
  }
`;

export const Simbolo = styled.img`
  width: calc(40 * 0.75px);
  height: calc(40 * 0.75px);
  padding-left: calc(60 * 0.75px);
  @media (max-width: 1300px) {
    width: 26.6px;
    height: 26.6px;
    padding-left: 40px;
  }
  @media (max-height: 530px) {
    width: calc(13.3 * 1.15px);
    height: calc(13.3 * 1.15px);
    padding-left: calc(20 * 1.15px);
  }
`;

export const DivGap1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: calc(15 * 0.75px);
  width: calc(1000 * 0.75px);
  height: calc(50 * 0.75px);
  @media (max-width: 1300px) {
    gap: 10px;
    height: 33.3px;
    width: 666.6px;
  }
  @media (max-height: 530px) {
    gap: calc(5 * 1.15px);
    height: calc(16.65 * 1.15px);
    width: calc(333.3 * 1.15px);
  }
`;
export const Divimg = styled.div`
  width: calc(440 * 0.75px);
  @media (max-width: 1300px) {
    width: 293.333px;
  }
  @media (max-width: 614.6px) {
    height: 0px;
    width: 0px;
  }
  @media (max-height: 530px) {
    width: calc(146.666 * 1.15px);
  }
`;

export const InputC = styled.input`
  width: calc(170 * 0.75px);
  height: calc(57 * 0.75px);
  flex-shrink: 0;
  border-radius: calc(80 * 0.75px);
  background: #72c7f6;
  border-style: none;
  padding-left: calc(30 * 0.75px);
  font-size: calc(22 * 0.75px);
  @media (max-width: 1300px) {
    width: 113.33px;
    height: 38px;
    border-radius: 53.3px;
    padding-left: 20px;
    font-size: 14.6px;
  }
  @media (max-height: 530px) {
    width: calc(56.65 * 1.15px);
    height: calc(19 * 1.15px);
    border-radius: calc(26.65 * 1.15px);
    padding-left: calc(10 * 1.15px);
    font-size: calc(7.3 * 1.15px);
  }
`;
export const Input1 = styled.input`
  width: calc(401 * 0.75px);
  height: calc(57 * 0.75px);
  flex-shrink: 0;
  border-radius: calc(80 * 0.75px);
  background: #72c7f6;
  border-style: none;
  padding-left: calc(30 * 0.75px);
  font-size: calc(22 * 0.75px);
  margin-bottom: 10px;
  border: 1px solid white;
  @media (max-width: 1300px) {
    width: 267.3px;
    height: 38px;
    border-radius: 53.3px;
    padding-left: 20px;
    font-size: 14.6px;
  }
  @media (max-height: 530px) {
    width: calc(134.65 * 1.15px);
    height: calc(19 * 1.15px);
    border-radius: calc(26.65 * 1.15px);
    padding-left: calc(10 * 1.15px);
    font-size: calc(7.3 * 1.15px);
  }
`;

export const Fonte1 = styled.div`
  color: #fff;
  font-size: calc(29 * 0.75px);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-top: calc(10 * 0.75px);
  padding-bottom: calc(13 * 0.75px);
  width: calc(400 * 0.75px);
  height: calc(10 * 0.75px);
  flex-shrink: 0;
  padding-left: calc(100 * 0.75px);
  @media (max-width: 1300px) {
    font-size: 19.3px;
    padding-top: 6.6px;
    width: 266.6px;
    height: 6.6px;
    padding-left: 66px;
  }
  @media (max-height: 530px) {
    font-size: calc(9.65 * 1.15px);
    padding-top: calc(3.3 * 1.15px);
    width: calc(133.3 * 1.15px);
    height: calc(3.3 * 1.15px);
    padding-left: calc(33.3 * 1.15px);
  }
`;

export const Fonte2 = styled.div`
  padding-left: calc(0 * 0.75px);
  width: calc(400 * 0.75px);
  height: calc(20 * 0.75px);
  color: #fdfdfd;
  font-size: calc(34 * 0.75px);
  font-style: normal;
  font-weight: 400;
  display: flex;
  @media (max-width: 1300px) {
    width: 266.6px;
    height: 13.6px;
    font-size: 22.6px;
    padding-left: 0px;
  }
  @media (max-height: 530px) {
    width: calc(133.3 * 1.15px);
    height: calc(7.8 * 1.15px);
    font-size: calc(11.3 * 1.15px);
  }
`;
export const Fonte3 = styled.div`
  width: calc(500 * 0.75px);
  height: calc(55 * 0.75px);
  flex-shrink: 0;
  color: #fdfdfd;
  font-size: calc(21 * 0.75px);
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  span {
    font-weight: 700;
  }
  @media (max-width: 1300px) {
    width: 333.33px;
    height: 36.6px;
    font-size: 14px;
  }
  @media (max-height: 530px) {
    width: calc(166.665 * 1.15px);
    height: calc(18.3 * 1.15px);
    font-size: calc(7 * 1.15px);
  }
`;

export const DivGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: calc(30 * 0.75px);
  padding: calc(75 * 0.75px);
  padding-top: calc(50 * 0.75px);
  width: calc(441 * 0.75px);
  @media (max-width: 1300px) {
    gap: 20px;
    padding: 50px;
    padding-top: 33.3px;
    width: 294px;
  }
  @media (max-height: 530px) {
    gap: calc(10 * 1.15px);
    padding: calc(25 * 1.15px);
    padding-top: calc(16.65 * 1.15px);
    width: calc(147 * 1.15px);
  }
`;

export const DivGap2 = styled.div`
  display: flex;
  flex-direction: row;
  gap: calc(25 * 0.75px);
  @media (max-width: 1300px) {
    gap: 16.6px;
  }
  @media (max-height: 530px) {
    gap: calc(8.3 * 1.15px);
  }
`;

export const DivFrame = styled.div`
  width: calc(1031 * 0.75px);
  height: calc(960 * 0.75px);
  flex-shrink: 0;
  border-radius: calc(110 * 0.75px);
  background: #13244d;
  display: flex;
  flex-direction: row;
  @media (max-width: 1300px) {
    width: calc(1031 / 3 * 2px);
    height: calc(960 / 3 * 2px);
    border-radius: 74px;
  }
  @media (max-width: 614.6px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media (max-height: 530px) {
    width: calc(1031 / 6 * 2.3px);
    height: calc(960 / 6 * 2.3px);
    border-radius: calc(36.65 * 1.15px);
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

export const Botao = styled.button`
  margin-top: calc(16 * 0.75px);
  width: calc(215 * 0.75px);
  height: calc(100 * 0.75px);
  flex-shrink: 0;
  border-radius: calc(80 * 0.75px);
  background: transparent;
  font-size: calc(23 * 0.75px);
  color: white;
  border: calc(2 * 0.75px) solid white;
  &:hover {
    cursor: pointer;
    color: black;
    background-color: #72c7f6;
  }
  @media (max-width: 1300px) {
    margin-top: 10.6px;
    width: 143.33px;
    height: 66.6px;
    border-radius: 53.3px;
    font-size: 15.3px;
  }
  @media (max-height: 530px) {
    margin-top: calc(5.3 * 1.15px);
    width: calc(71.665 * 1.15px);
    height: calc(33.3 * 1.15px);
    border-radius: calc(26.65 * 1.15px);
    font-size: calc(7.65 * 1.15px);
  }
`;
export const DivCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  @media (max-width: 1300px) {
    gap: 13.222px;
  }
  @media (max-height: 530px) {
    gap: 9.2554px;
  }
`;
export const Fonte4 = styled.div`
  color: #fff;
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  width: calc(196 * 0.75px);
  height: calc(27 * 0.75px);
  flex-shrink: 0;
  padding-left: calc(12 * 0.75px);
  font-size: calc(22 * 0.75px);
  @media (max-width: 1300px) {
    width: 130.666px;
    height: 18px;
    font-size: 14.666px;
  }
  @media (max-height: 530px) {
    width: 91.1566px;
    height: 12.6px;
    font-size: 10.266px;
  }
`;
export const InputCheckbox = styled.input`
  height: calc(26 * 0.75px);
  width: calc(26 * 0.75px);
  @media (max-width: 1300px) {
    width: 17.3333px;
    height: 17.3333px;
  }
  @media (max-height: 530px) {
    width: 12.133px;
    height: 12.133px;
  }
`;

export const Label = styled.label``;
export const Form = styled.form``;
