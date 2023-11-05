import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #13244d;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 0px 20px;

  > svg {
    margin: 0px 20px;
  }

  &:hover {
    background-color: #457baa;
  }
`;
