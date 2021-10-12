import React from 'react';

import Header from '../../components/Header';
import HomeNoContent from '../../components/HomeNoContent';

import * as S from './styles';

function Home() {
  return (
    <S.Container>
      <Header />
      <HomeNoContent />
    </S.Container>
  );
}

export default Home;
