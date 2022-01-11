import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ApolloProvider } from '@apollo/client';
import { toast } from 'react-toastify';

import client from '../../../config/client-graphql';
import {
  repository1Mock,
  repository2Mock,
} from '../../../__mocks__/repositoryDataBuilder';
import { profileDataBuilder } from '../../../__mocks__/profileDataBuilder';

import Home from '../../../page/Home';

function setup() {
  jest.clearAllMocks();

  const renderResults = render(
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>,
  );

  return {
    input: renderResults.getByPlaceholderText(/Pesquise o usuário/i),
    buttonSubmit: renderResults.getByRole('button'),
    ...renderResults,
  };
}

jest.mock('react-toastify');

describe('Home', () => {
  it('should render HomeNoContent when not entering user', async () => {
    const { container, input, buttonSubmit, getByText } = setup();

    await waitFor(() => {
      expect(getByText(/Busque usuários/i)).toBeInTheDocument();
    });

    expect(container).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
  });

  it('should render loading', async () => {
    const { getByTestId } = setup();

    const overlay = getByTestId('overlay');

    await waitFor(() => {
      expect(overlay).toBeInTheDocument();
      expect(overlay).toHaveStyle('display: flex');
    });
  });

  it('should render profileData', async () => {
    const login = 'johnDoe';

    const { input, buttonSubmit, getByText, getByAltText } = setup();

    userEvent.type(input, login);
    fireEvent.click(buttonSubmit);

    await waitFor(() => {
      expect(getByText(login)).toBeInTheDocument();
      expect(getByText(profileDataBuilder.name)).toBeInTheDocument();
      expect(getByAltText(/Foto do perfil/i)).toBeInTheDocument();
    });
  });

  it('should render repositories', async () => {
    const repositoriesMocks = [repository1Mock, repository2Mock];

    const { input, buttonSubmit, getByText } = setup();

    userEvent.type(input, 'johnDoe');
    fireEvent.click(buttonSubmit);

    await waitFor(() => {
      repositoriesMocks.forEach(repository => {
        expect(getByText(repository.name)).toBeInTheDocument();
        expect(getByText(repository.description)).toBeInTheDocument();
      });
    });
  });

  it('should show error message when invalid user', async () => {
    const { input, buttonSubmit, getByText } = setup();

    userEvent.type(input, 'invalidUser');
    fireEvent.click(buttonSubmit);

    await waitFor(() => {
      expect(toast).toHaveBeenCalledWith('Usuário Inválido!', {
        type: 'error',
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

      expect(getByText(/Busque usuários/i)).toBeInTheDocument();
    });
  });
});
