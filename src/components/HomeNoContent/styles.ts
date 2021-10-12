import styled from 'styled-components';

import GithubImg from '../../assets/github.svg';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  height: 100%;
  margin: 0 auto;
  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    height: 60%;
    width: 100%;

    background: url(${GithubImg}) no-repeat;

    > span {
      font-size: 3.25rem;
      font-weight: 400;
      display: block;

      margin-top: 130px;
      margin-left: 330px;

      > strong {
        color: var(--green);
      }
    }
  }

  @media screen and (max-width: 992px) {
    > div {
      background-position: center top;

      > span {
        font-size: 2.5rem;
        text-align: center;
        margin: 0;
        margin-top: 340px;
      }
    }
  }

  @media screen and (max-width: 576px) {
    > div {
      background-size: 300px;

      > span {
        font-size: 1.5rem;
        margin-top: 220px;
      }
    }
  }
`;
