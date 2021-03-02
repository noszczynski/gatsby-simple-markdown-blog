import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-family: "Montserrat", Arial, sans-serif;
  position: absolute;
  top: 20px;
  left: 30px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledLogo = styled.span`
  font-weight: 700;
  font-size: 20px;
  margin-right: 10px;
`;

const StyledNavigationList = styled.ul`
  list-style: none;
  display: flex;
`;

const StyledListItem = styled.li`
  display: flex;
  font-weight: 600;
  font-size: 15px;
  margin-left: 32px;
`;

export default () => (
  <StyledNavigation>
    <StyledLogo>
      <Link to="/">TEMPLATE</Link>
    </StyledLogo>
    <StyledNavigationList>
      <StyledListItem>
        <Link to="/articles">articles</Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/about">about</Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/gallery">gallery</Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/contact">contact</Link>
      </StyledListItem>
      <StyledListItem>
        <Link to="/about-mdx">about-mdx</Link>
      </StyledListItem>
    </StyledNavigationList>
  </StyledNavigation>
);
