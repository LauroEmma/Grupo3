import styled from "styled-components";

export const Container = styled.div`
  background-color: #13244d;
  position: fixed;
  height: 100%;
  top: 0px;
  left: 0px;
  width: 257px;
  border-radius: 0px, 40px, 40px, 0px;
  left: ${(props) => (props.sidebar ? 0 : "-100%")};
  animation: showSiderbar 0.4s;

  > svg {
    position: fixed;
    color: white;
    height: 22px;
    margin-top: 42px;
    margin-left: 32px;
    cursor: pointer;
  }

  @keyframes showSiderbar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 257px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;
`;
