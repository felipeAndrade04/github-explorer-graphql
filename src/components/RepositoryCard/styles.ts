import styled from 'styled-components';

interface FooterProps {
  color: string;
}

export const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-height: 122px;
  padding: 12px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;

  background: var(--shape);
  border: 1px solid var(--border);
  border-radius: 10px;
`;

export const Header = styled.div`
  a {
    font-size: 1.125rem;
    font-weight: 700;
    color: var(--text);
    text-decoration: none;
    display: block;

    :hover {
      text-decoration: underline;
    }
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
  }
`;

export const Footer = styled.div<FooterProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.75rem;
    font-weight: 400;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    :first-child {
      display: flex;
      align-items: flex-start;
      gap: 8px;

      div {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: ${({ color }) => color};
      }
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        stroke: var(--text);
      }
    }
  }
`;
