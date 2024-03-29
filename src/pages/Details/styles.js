import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100vh;

display: grid;
grid-template-rows: 10.5rem auto;
grid-template-areas: 
"header"
"content";

> main {
  grid-area: content;
  overflow-y: auto;
  padding: 6.4rem 0;
}

@media (max-width: 768px) {
  > header {
    padding: 0 2rem;
  }

  > main {
    padding: 3.2rem 0;

    h1 {
      font-size: 2.4rem;
      padding-top: 3.2rem;
    }
  }

  .details {
    padding: 0 2rem;
  }
}
`;

export const Links = styled.ul`
list-style: none;

> li {
  margin-top: 1.2rem;

  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
}
`;

export const Content = styled.div`
max-width: 55rem;
margin: 0 auto;

display: flex;
flex-direction: column;

> button:first-child {
  align-self: end;
  &:focus {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
}

> h1 {
  font-size: 3.6rem;
  font-weight: 500;
  padding-top: 6.4rem;
}

> p {
  font-size: 1.6rem;
  margin-top: 1.6rem;
  text-align: justify;
}
`;