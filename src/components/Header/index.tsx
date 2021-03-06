import React, { FormEvent } from 'react';
import { FiGithub, FiSearch } from 'react-icons/fi';

import * as S from './styles';

interface HeaderProps {
  handleSearchUser: (login: string) => void;
}

function Header({ handleSearchUser }: HeaderProps) {
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const payload = event.currentTarget
      .elements as typeof event.currentTarget.elements & {
      search: { value: string };
    };

    handleSearchUser(payload.search.value);
    payload.search.value = '';
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
