import * as React from "react";
import { Button } from "../components";
import styled from "styled-components";
import { graphql } from "gatsby";
import Image from "gatsby-image";

const StyledWrapper = styled.header`
  display: grid;
  grid-template-columns: 60% 40%;
  min-height: 100vh;
  width: 100vw;
`;

const StyledContent = styled.section`
  width: 100%;
  height: 100%;
  padding: 85px 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;

  h1 {
    font-size: 102px;
    text-align: right;
    margin-bottom: 18px;
    line-height: 100%;
  }

  p {
    display: flex;
    text-align: right;
    max-width: 400px;
    font-size: 18px;
    line-height: 160%;
  }
`;

const StyledCover = styled.div`
  width: 100%;
  height: 100%;

  div {
    height: 100%;
    width: 100%;
  }

  img {
    height: 100%;
    width: 100%;
  }
`;

export default ({ data }) => (
  <StyledWrapper>
    <StyledContent>
      {console.log(data)}
      <h1>Your new space</h1>
      <p>
        While artists work from real to the abstract, architects must work from the abstract to the
        real.
      </p>
      <Button>Estimate project</Button>
    </StyledContent>
    <StyledCover>
      <Image fluid={data.file.childImageSharp.fluid} />
    </StyledCover>
  </StyledWrapper>
);

//Tip: you can also use ...GatsbyImageSharpFluid_tracedSVG for pretty nice effect
export const query = graphql`
  {
    file(name: { eq: "clothes" }) {
      childImageSharp {
        fluid(maxWidth: 768, maxHeight: 1080, quality: 90) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`;
