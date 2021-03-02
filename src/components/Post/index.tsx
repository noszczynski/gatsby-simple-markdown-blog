import * as React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { ContentLayout } from "../index";

const StyledWrapper = styled.div`
  background-color: #000;
`;

const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default () => {
  const data = useStaticQuery(query);

  return (
    <ContentLayout>
      <StyledWrapper>{data.site.siteMetadata.title}</StyledWrapper>
    </ContentLayout>
  );
};
