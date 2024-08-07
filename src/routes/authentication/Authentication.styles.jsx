import styled from "styled-components";

export const AuthenticationContainer = styled.div`
  /* Authentication page: 
mobile-first: On screens that are 600px wide or more, there is one column in a row */
  margin: 1.6rem;
  justify-content: space-between;

  hr {
    margin: 3em;
  }

  /*  On screens that are 769px wide or more, there is one column in a row,
On screens that are 769px wide or more, make the columns in the middle */
  @media screen and (min-width: 769px) {
    display: flex;
    width: 769px;
    margin: 20px auto;
  }

  /*  On screens that are 900px wide or more, go from one column to two columns, 
so make the columns stack on top of each other instead of next to each other */
  @media screen and (min-width: 900px) {
    display: flex;
    width: 900px;
    margin: 3rem auto;
  }
`;
