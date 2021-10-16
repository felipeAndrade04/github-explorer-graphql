import React, { useState } from 'react';
import { FiBook } from 'react-icons/fi';
import { useQuery } from '@apollo/client';

import { GET_PROFILE, GET_REPOSITORIES } from '../../graphql';

import Header from '../../components/Header';
import HomeNoContent from '../../components/HomeNoContent';
import ProfileCard from '../../components/ProfileCard';
import RepositoryCardsGrid from '../../components/RepositoryCardsGrid';
import Loading from '../../components/Loading';

import * as S from './styles';

function Home() {
  const [user, setUser] = useState('');

  function handleSearchUser(login: string) {
    setUser(login);
  }

  const { data: dataProfile, loading: loadingṔrofile } = useQuery(GET_PROFILE, {
    variables: { login: user },
  });
  const { data: dataRepositories, loading: loadingRepositories } = useQuery(
    GET_REPOSITORIES,
    {
      variables: { login: user },
    },
  );

  // TODO ADD REACT-TOASTIFY

  if (
    user === '' &&
    !dataProfile?.data?.user &&
    !dataRepositories?.data?.repositoryOwner
  ) {
    return (
      <S.Container>
        <Header handleSearchUser={handleSearchUser} />
        <S.Content>
          <HomeNoContent />
        </S.Content>
        <Loading show={loadingRepositories || loadingṔrofile} />
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Loading show={loadingRepositories || loadingṔrofile} />
      <Header handleSearchUser={handleSearchUser} />
      <S.Content>
        {dataProfile?.user &&
          dataRepositories?.repositoryOwner?.repositories?.nodes && (
            <>
              <ProfileCard profileData={dataProfile?.user} />
              <S.Title>
                <FiBook size={18} />
                <p>Repositórios</p>
                <div>
                  <span>
                    {
                      dataRepositories?.repositoryOwner?.repositories?.nodes
                        .length
                    }
                  </span>
                </div>
              </S.Title>
              <RepositoryCardsGrid
                repositories={
                  dataRepositories?.repositoryOwner?.repositories?.nodes
                }
              />
            </>
          )}
      </S.Content>
    </S.Container>
  );
}

export default Home;
