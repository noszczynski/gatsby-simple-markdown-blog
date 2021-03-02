import * as React from "react";
import { ContentLayout, Tile } from "../components";
import { graphql, Link } from "gatsby";
import styled from "styled-components";

//Tip: using "excerpt(pruneLength: 50)" next to frontmatter{} it will give you truncated text
export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          title
          slug
          author
          cover {
            childImageSharp {
              fluid(maxWidth: 640, maxHeight: 640, quality: 90) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;

const StyledWrapper = styled.section`
  h1 {
    font-size: 52px;
    line-height: 100%;
    padding: 0;
    margin: 0;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 160%;
    letter-spacing: -0.03em;
    color: #000;
    max-width: 320px;
  }
`;

const StyledContent = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
`;

const StyledArticleLink = styled(Link)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
`;

const StyledArticleHeader = styled.div`
  position: absolute;
  left: 0;
  bottom: 32px;
  background-color: #000;
  color: #fff;
  padding: 10px 25px;

  h3 {
    font-size: 19px;
    margin: 0;
  }

  p {
    margin: 6px 0 0;
    font-size: 12px;
    letter-spacing: -0.03em;
  }
`;

export default ({ data }) => (
  <ContentLayout>
    <StyledWrapper>
      <h1>Articles</h1>
      <p>
        While artists work from real to the abstract, architects must work from the abstract to the
        real.
      </p>
    </StyledWrapper>
    <StyledContent>
      {console.log(data.allMdx.nodes)}
      {data.allMdx.nodes.map(({ frontmatter: { cover, slug, title, author } }) => (
        <Tile background={cover && cover.childImageSharp.fluid} key={slug}>
          <StyledArticleLink to={`/articles/${slug}`}>
            <StyledArticleHeader>
              <h3>{title}</h3>
              <p>{author}</p>
            </StyledArticleHeader>
          </StyledArticleLink>
        </Tile>
      ))}
    </StyledContent>
  </ContentLayout>
);
