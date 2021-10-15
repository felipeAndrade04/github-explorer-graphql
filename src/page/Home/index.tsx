import React from 'react';
import { FiBook } from 'react-icons/fi';
import { useQuery } from '@apollo/client';

import { GET_PROFILE, GET_REPOSITORIES } from '../../graphql';

import Header from '../../components/Header';
// import HomeNoContent from '../../components/HomeNoContent';
import ProfileCard from '../../components/ProfileCard';
import RepositoryCardsGrid from '../../components/RepositoryCardsGrid';

import * as S from './styles';

function Home() {
  const { data: dataProfile, loading: loadingṔrofile } = useQuery(GET_PROFILE, {
    variables: { login: 'felipeAndrade04' },
  });
  const { data: dataRepositories, loading: loadingRepositories } = useQuery(
    GET_REPOSITORIES,
    {
      variables: { login: 'felipeAndrade04' },
    },
  );

  if (loadingṔrofile || loadingRepositories) {
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
        <ProfileCard profileData={dataProfile.user} />
        <S.Title>
          <FiBook size={18} />
          <p>Repositórios</p>
          <div>
            <span>
              {dataRepositories.repositoryOwner.repositories.nodes.length}
            </span>
          </div>
        </S.Title>
        <RepositoryCardsGrid
          repositories={dataRepositories.repositoryOwner.repositories.nodes}
        />
      </S.Content>
    </S.Container>
  );
}

export default Home;
