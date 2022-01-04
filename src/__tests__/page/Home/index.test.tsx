import { render, waitFor } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

import {
  getProfileMock,
  getRepositoriesMock,
} from '../../../__mocks__/apolloClientMock';

import Home from '../../../page/Home';

type Mocks = readonly MockedResponse<Record<string, any>>[];

// jest.useFakeTimers;

function setup(mocks?: Mocks) {
  jest.clearAllMocks();

  const renderResults = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Home />
    </MockedProvider>,
  );

  return {
    input: renderResults.getByPlaceholderText(/Pesquise o usuário/i),
    buttonSubmit: renderResults.getByRole('button'),
    ...renderResults,
  };
}

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
});
