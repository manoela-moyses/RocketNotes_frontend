import styled from 'styled-components';
import backgroundImg from '../../assets/background.png';

export const Container = styled.div`
height: 100vh;

display: flex;
align-items: stretch;

@media (max-width: 1200px) {
  .bg {
    display: none;
  }

  .signUpForm {
    flex: 1;
    max-width: 76.8rem;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .signUpForm {
    max-width: 30rem;
    padding: 0;

    >h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.2rem;
    }
  }
}
`;

export const Form = styled.form`
padding: 0 13.6rem;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

text-align: center;

> h1 {
  font-size: 4.8rem;
  color: ${({ theme }) => theme.COLORS.ORANGE};
}

> h2 {
  font-size: 2.4rem;
  margin: 4.8rem 0;
}

> p {
  font-size: 1.4rem;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
}

> a {
  margin-top: 12.4rem;
}
`;

export const Background = styled.div`
flex: 1;
background: linear-gradient(rgba(35,33,41, 0.8)0%, rgba(35,33,41, 0.8)100%), url(${backgroundImg}) no-repeat center center;
background-size: cover;
`;