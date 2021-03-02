import * as React from "react";
import styled from "styled-components";
import Image from "gatsby-image";

//Tip: you can also use background: ex.: background: #fff top / cover no-repeat url("${({ background }) => background || ""}");
const StyledArticleTile = styled.article`
  width: 100%;
  max-width: 100%;
  position: relative;
  transition: transform 0.5s ease;
  aspect-ratio: 5 / 3;

  :hover {
    transform: scale(0.98);
  }
`;

const StyledTileImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: -1;
  object-fit: cover;
  object-position: top;
`;

export default ({ background, children }) => {
  return (
    <StyledArticleTile background={background}>
      {children}
      <StyledTileImage fluid={background} />
    </StyledArticleTile>
  );
};
