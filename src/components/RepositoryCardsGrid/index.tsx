import React from 'react';
import RepositoryCard from '../RepositoryCard';

import * as S from './styles';

function RepositoryCardsGrid() {
  return (
    <S.Container>
      <RepositoryCard />
      <RepositoryCard />
      <RepositoryCard />
      <RepositoryCard />
      <RepositoryCard />
      <RepositoryCard />
      <RepositoryCard />
    </S.Container>
  );
}

export default RepositoryCardsGrid;
