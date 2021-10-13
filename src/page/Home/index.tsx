import React from 'react';

import Header from '../../components/Header';
// import HomeNoContent from '../../components/HomeNoContent';
import ProfileCard from '../../components/ProfileCard';
import RepositoryCard from '../../components/RepositoryCard';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <Header />
      <div style={{ padding: '24px' }}>
        <RepositoryCard />
      </div>
    </S.Container>
  );
}

export default Home;
