import * as React from "react";
import styled from "styled-components";

const StyledLayout = styled.div`
  padding: 105px 85px;
`;

export default ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};
