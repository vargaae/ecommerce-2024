//TODO: CleanUp
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FeaturedContainer = styled.div`
  padding: calc(4vw + 1rem);

  @media screen and (min-width: 1600px) {
    padding: 150px;
  }
`;
export const FeaturedTitle = styled.h2`
  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;

  /* font-size: 60px; */
  font-size: calc(3vw + 0.7rem);

  letter-spacing: -1px;
  text-align: start;
  text-decoration: none;
  text-transform: uppercase;

  /* padding-bottom: 60px; */
  padding-bottom: calc(2vw + 2rem);

  font-style-bold: normal;
  font-style-bold-italic: italic;
  font-style-italic: italic;

  line-height: 1.2em;
  paragraph-spacing: 40px;
  @media (max-width: 1199px) and (min-width: 0px) {
    /* font-size: 34px; */
    /* font-size: calc(4vw + 1rem); */
    font-weight: 500;
    line-height: 1.2em;
    paragraph-spacing: 40px;
  }
`;

export const BreadcrumbLink = styled(Link)`
  /* font-size: 2rem;
  &:hover {
    color: darkblue;
    text-decoration: underline;
  } */
`;
