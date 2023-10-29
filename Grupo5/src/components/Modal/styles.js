import React from "react";
import styled from "styled-components";

export const Modalbackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalInterior = styled.div`
  justify-content: space-between 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 392px;
  height: 478px;
  background-color: #3d8ebc;
  border-radius: 30px;
  color: #fff;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  > svg {
    cursor: pointer;
    position: fixed;
    margin-left: 170px;
    margin-top: 5px;
  }
`;
