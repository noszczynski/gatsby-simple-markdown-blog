import * as React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 11px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  line-height: 100%;
  font-size: 13px;
`;

export default ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
