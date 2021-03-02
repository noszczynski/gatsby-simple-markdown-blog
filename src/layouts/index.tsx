import * as React from "react";
import styled from "styled-components";
import { Navigation } from "../components";
import GlobalStyles from "../theme/globalStyles";

const StyledWrapper = styled.div``;

export default ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyles />
      <Navigation />
      {children}
    </StyledWrapper>
  );
};
