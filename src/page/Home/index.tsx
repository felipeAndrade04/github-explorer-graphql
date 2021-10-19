import React, { useState } from 'react';
import { FiBook } from 'react-icons/fi';
import { useQuery } from '@apollo/client';
import { toast } from 'react-toastify';

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

  const {
    loading: loadingṔrofile,
    error,
    data: dataProfile,
  } = useQuery(GET_PROFILE, {
    variables: { login: user },
  });
  const { loading: loadingRepositories, data: dataRepositories } = useQuery(
    GET_REPOSITORIES,
    {
      variables: { login: user },
    },
  );

  if (error && user !== '') {
    toast.error('Usuário Inválido!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
      toastId: 'id-toast',
    });

    return (
      <S.Container>
        <Header handleSearchUser={handleSearchUser} />
        {loadingRepositories || loadingṔrofile ? (
          <Loading show={loadingRepositories || loadingṔrofile} />
        ) : (
          <S.Content>
            <HomeNoContent />
          </S.Content>
        )}
      </S.Container>
    );
  }

  if (
    user === '' &&
    !dataProfile?.data?.user &&
    !dataRepositories?.data?.repositoryOwner
  ) {
    return (
      <S.Container>
        <Header handleSearchUser={handleSearchUser} />
        {loadingRepositories || loadingṔrofile ? (
          <Loading show={loadingRepositories || loadingṔrofile} />
        ) : (
          <S.Content>
            <HomeNoContent />
          </S.Content>
        )}
      </S.Container>
    );
  }

  return (
    <S.Container>
      <Header handleSearchUser={handleSearchUser} />
      {loadingRepositories || loadingṔrofile ? (
        <Loading show={loadingRepositories || loadingṔrofile} />
      ) : (
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
      )}
    </S.Container>
  );
}

export default Home;
