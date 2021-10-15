import React from 'react';
import { FiBook } from 'react-icons/fi';
import { useQuery } from '@apollo/client';

import { GET_PROFILE } from '../../graphql';

import Header from '../../components/Header';
// import HomeNoContent from '../../components/HomeNoContent';
import ProfileCard from '../../components/ProfileCard';
import RepositoryCardsGrid from '../../components/RepositoryCardsGrid';

import * as S from './styles';

function Home() {
  const { data, loading } = useQuery(GET_PROFILE, {
    variables: { login: 'felipeAndrade04' },
  });

  if (loading) {
    return (
      <div>
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <S.Container>
      <Header />
      <S.Content>
        <ProfileCard profileData={data.user} />
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
