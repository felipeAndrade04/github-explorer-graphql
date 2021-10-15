import React from 'react';
import { FiStar, FiUsers } from 'react-icons/fi';

import * as S from './styles';

interface User {
  avatarUrl: string;
  bio: string;
  name: string;
  login: string;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  starredRepositories: {
    totalCount: number;
  };
}
interface ProfileCardProps {
  profileData: User;
}

function ProfileCard({ profileData }: ProfileCardProps) {
  return (
    <S.Container>
      <div>
        <img src={profileData?.avatarUrl} alt="Foto do perfil" />

        <S.InfoWrapper>
          <div>
            <strong>{profileData?.name}</strong>
            <p>{profileData?.login}</p>
          </div>
          <p>{profileData?.bio}</p>
        </S.InfoWrapper>
      </div>

      <S.InfoNumbersWrapper>
        <div>
          <FiUsers size={20} />
          <p>
            <strong>{profileData?.followers?.totalCount}</strong> Seguidores
          </p>
        </div>
        <div>
          <FiUsers size={20} />
          <p>
            <strong>{profileData?.following?.totalCount}</strong> Seguindo
          </p>
        </div>
        <div>
          <FiStar size={20} />
          <p>
            <strong>{profileData?.starredRepositories?.totalCount}</strong>{' '}
            Estrelas
          </p>
        </div>
      </S.InfoNumbersWrapper>
    </S.Container>
  );
}

export default ProfileCard;
