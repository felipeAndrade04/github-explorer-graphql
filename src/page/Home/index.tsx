import React from 'react';
import { FiBook } from 'react-icons/fi';

import Header from '../../components/Header';
// import HomeNoContent from '../../components/HomeNoContent';
import ProfileCard from '../../components/ProfileCard';
import RepositoryCardsGrid from '../../components/RepositoryCardsGrid';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <Header />
      <S.Content>
        <ProfileCard />
        <S.Title>
          <FiBook size={18} />
          <p>Repositórios</p>
          <div>
            <span>9</span>
          </div>
        </S.Title>
        <RepositoryCardsGrid />
      </S.Content>
    </S.Container>
  );
}

export default Home;
