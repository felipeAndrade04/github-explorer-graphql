import React from 'react';
import { FiStar, FiUsers } from 'react-icons/fi';

import * as S from './styles';

function ProfileCard() {
  return (
    <S.Container>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/42103489?v=4"
          alt="Foto do perfil"
        />

        <S.InfoWrapper>
          <strong>Felipe Andrade</strong>
          <p>felipeAndrade04</p>
          <span>flpandrade2011@gmail.com</span>
        </S.InfoWrapper>
      </div>

      <S.InfoNumbersWrapper>
        <div>
          <FiUsers size={20} />
          <p>
            <strong>8</strong> Seguidores
          </p>
        </div>
        <div>
          <FiUsers size={20} />
          <p>
            <strong>17</strong> Seguindo
          </p>
        </div>
        <div>
          <FiStar size={20} />
          <p>
            <strong>16</strong> Estrelas
          </p>
        </div>
      </S.InfoNumbersWrapper>
    </S.Container>
  );
}

export default ProfileCard;
