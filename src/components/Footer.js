import styled from "styled-components";

const SFooter = styled.footer`
  height: 370px;
  background-color: #2d2926;
  padding: 150px 200px;
  color: lightgray;
  display: felx;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return <SFooter>&copy; JHClone {new Date().getFullYear()}</SFooter>;
};
