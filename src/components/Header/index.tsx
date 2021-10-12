import React from 'react';
import { FiGithub, FiSearch } from 'react-icons/fi';

import * as S from './styles';

function Header() {
  return (
    <S.Container>
      <div>
        <S.Logo>
          <FiGithub size={29} />
        </S.Logo>

        <S.Form>
          <input name="search" placeholder="Pesquise o usuário" />
          <button type="submit">
            <FiSearch size={24} />
          </button>
        </S.Form>
      </div>
    </S.Container>
  );
}

export default Header;
