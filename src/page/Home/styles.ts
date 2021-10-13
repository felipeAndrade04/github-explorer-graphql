import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 1228px;
  margin: 2rem auto;
  padding: 0 24px;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    stroke: var(--text);
  }

  p {
    font-size: 1.125rem;
    font-weight: 400;
  }

  div {
    width: 20px;
    height: 20px;
    border-radius: 50%;

    background: var(--border);

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 0.875rem;
    }
  }
`;
