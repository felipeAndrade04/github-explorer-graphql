import React from 'react';
import RepositoryCard from '../RepositoryCard';

import * as S from './styles';

interface Repository {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  };
}

interface RepositoryCardsGridProps {
  repositories: Repository[];
}

function RepositoryCardsGrid({ repositories }: RepositoryCardsGridProps) {
  console.log(repositories);
  return (
    <S.Container>
      {repositories.map((repository: Repository, index: number) => (
        <RepositoryCard repositoryData={repository} key={index} />
      ))}
    </S.Container>
  );
}

export default RepositoryCardsGrid;
