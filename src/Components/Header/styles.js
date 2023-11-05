import styled from "styled-components";

export const Container = styled.div`
  height: 70px;
  display: flex;
  background-color: #1e3876;
  box-shadow: 0px 0px 15px 3px;

  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 22px;
    margin-left: 42px;
    cursor: pointer;
  }
`;
