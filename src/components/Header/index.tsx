import React, { FormEvent } from 'react';
import { FiGithub, FiSearch } from 'react-icons/fi';

import * as S from './styles';

interface HeaderProps {
  handleSearchUser: (login: string) => void;
}

function Header({ handleSearchUser }: HeaderProps) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    handleSearchUser(event.currentTarget.search.value);
    event.currentTarget.search.value = '';
  }

  return (
    <S.Container>
      <div>
        <S.Logo>
          <FiGithub size={29} />
        </S.Logo>

        <S.Form onSubmit={handleSubmit}>
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
