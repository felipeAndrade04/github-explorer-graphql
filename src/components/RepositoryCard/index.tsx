import React from 'react';
import { FiStar } from 'react-icons/fi';
import { BiGitRepoForked } from 'react-icons/bi';

import * as S from './styles';

function RepositoryCard() {
  return (
    <S.Container>
      <S.Header>
        <a
          href="https://github.com/felipeAndrade04/Ignite"
          target="_blank"
          rel="noreferrer"
        >
          Ignite
        </a>
        <span>
          Aplicações desenvolvidas nas aulas e dasafios do Ignite da Rocketseat
        </span>
      </S.Header>
      <S.Footer>
        <span>TypeScript</span>
        <div>
          <div>
            <FiStar size={14} />
            <span>0000</span>
          </div>
          <div>
            <BiGitRepoForked size={14} />
            <span>0000</span>
          </div>
        </div>
      </S.Footer>
    </S.Container>
  );
}

export default RepositoryCard;
