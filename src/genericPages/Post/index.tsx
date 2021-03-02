import * as React from "react";
import styled from "styled-components";
import { ContentLayout } from "../../components";
import Image from "gatsby-image";
import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

export const query = graphql`
  query querySingleArticle($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        slug
        author
        cover {
          childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 800, quality: 90) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    }
  }
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 85px;
`;

const StyledCover = styled.header`
  width: 100vw;
  height: 400px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  div {
    width: 100%;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

const StyledContent = styled.section`
  width: 100%;
  max-width: 900px;
  padding: 35px 25px;
  margin: 0 auto 0;
  position: absolute;
  top: 325px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  box-shadow: 0 24px 34px -12px rgb(0 0 0 / 20%);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 105%;
  }

  p {
    line-height: 160%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  width: 100%;
  justify-content: flex-end;
  margin-top: 35px;
  padding: 0;
`;

export default ({ data }) => {
  console.log(data.mdx);
  const {
    mdx: { body, frontmatter },
  } = data;

  return (
    <ContentLayout>
      <StyledWrapper>
        <StyledCover>
          <Image fluid={frontmatter.cover.childImageSharp.fluid} />
        </StyledCover>
        <StyledContent>
          <h1>Title</h1>
          <p>author</p>
          <MDXRenderer>{body}</MDXRenderer>
          <StyledLink to="/articles">back to articles</StyledLink>
        </StyledContent>
      </StyledWrapper>
    </ContentLayout>
  );
};
