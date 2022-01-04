import React from 'react';

import * as S from './styles';

interface LoadingProps {
  show: boolean;
}

function Loading({ show }: LoadingProps) {
  return (
    <S.Overlay show={show} data-testid="overlay">
      <S.Loading>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </S.Loading>
    </S.Overlay>
  );
}

export default Loading;
