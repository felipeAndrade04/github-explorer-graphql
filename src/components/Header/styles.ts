import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 16px 0;

  position: fixed;

  background: var(--background);
  border-bottom: 1px solid var(--border);

  > div {
    max-width: 1228px;
    margin: 0 auto;
    padding: 0 24px;

    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  height: 50px;
  min-width: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--shape);
  border: 1px solid var(--border);
  border-radius: 10px;

  svg {
    stroke: var(--text);
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    height: 50px;
    width: 300px;
    padding: 10px;

    background: var(--shape);
    border: 1px solid var(--border);
    border-radius: 10px;
    color: var(--text);
    font-size: 1.125rem;
  }

  button {
    height: 50px;
    min-width: 50px;
    background: var(--green);

    border: none;
    border-radius: 10px;

    svg {
      stroke: var(--text);
    }

    :hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 576px) {
    input {
      width: 100%;
    }
  }
`;
