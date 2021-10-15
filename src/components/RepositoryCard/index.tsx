import React from 'react';
import { FiStar } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';

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

interface RepositoryCardProps {
  repositoryData: Repository;
}

function RepositoryCard({ repositoryData }: RepositoryCardProps) {
  return (
    <S.Container>
      <S.Header>
        <a href={repositoryData.url} target="_blank" rel="noreferrer">
          {repositoryData.name}
        </a>
        <span>{repositoryData.description}</span>
      </S.Header>
      <S.Footer color={repositoryData.primaryLanguage?.color}>
        <div>
          <div />
          <span>{repositoryData.primaryLanguage?.name}</span>
        </div>
        <div>
          <div>
            <FiStar size={14} />
            <span>{repositoryData.stargazerCount}</span>
          </div>
          <div>
            <BiGitRepoForked size={14} />
            <span>{repositoryData.forkCount}</span>
          </div>
        </div>
      </S.Footer>
    </S.Container>
  );
}

export default RepositoryCard;
