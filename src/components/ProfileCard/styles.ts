import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  gap: 20px;

  background: var(--shape);
  border: 1px solid var(--border);
  border-radius: 10px;

  > div {
    :first-child {
      display: flex;
      align-items: center;
    }
  }

  img {
    height: 120px;
    width: 120px;
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    img {
      height: 80px;
      width: 80px;
    }
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
    padding: 12px;

    > div {
      width: 100%;
      align-items: flex-start;
    }
  }
`;

export const InfoWrapper = styled.div`
  height: 80px;
  padding-right: 20px;
  border-right: 1px solid var(--border);
  margin-left: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {
    strong {
      font-size: 2rem;
      line-height: 2rem;
    }

    p {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

  > p {
    font-size: 0.875rem;
    font-weight: 400;
  }

  @media screen and (max-width: 576px) {
    margin-left: 10px;
    padding: 0.25rem 0;

    > div {
      strong {
        font-size: 1.5rem;
        line-height: 1.5rem;
      }

      p {
        font-size: 1.125rem;
      }
    }

    > p {
      font-size: 0.75rem;
    }

    width: 100%;
    border-right: none;
  }
`;

export const InfoNumbersWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    svg {
      stroke: var(--text);
    }

    p {
      font-size: 0.875rem;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    padding-top: 10px;
    border-top: 1px solid var(--border);

    > div {
      align-items: flex-end;
      gap: 4px;
    }

    svg {
      height: 16px;
    }
  }
`;
