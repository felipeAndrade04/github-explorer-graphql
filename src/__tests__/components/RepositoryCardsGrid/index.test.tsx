import { render } from '@testing-library/react';

import RepositoryCardsGrid from '../../../components/RepositoryCardsGrid';
import {
  repository2Mock,
  repositoryDataBuilder,
} from '../../../__mocks__/repositoryDataBuilder';

interface Repository {
  name: string;
  description: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: {
    name: string;
    color: string;
  };
}

function setup(reposioties?: Repository[]) {
  const renderResults = render(
    <RepositoryCardsGrid repositories={reposioties || []} />,
  );

  return {
    ...renderResults,
  };
}

describe('RepositoryCardsGrid', () => {
  it('should render with default props', () => {
    const { container, getByText } = setup();

    const emptyResults = getByText('Nenhum resultado encontrado =(');

    expect(container).toBeInTheDocument();
    expect(emptyResults).toBeInTheDocument();
  });

  it('should render repositories', () => {
    const repository1Mock = repositoryDataBuilder();

    const repositories = [repository1Mock, repository2Mock];

    const { getByText } = setup(repositories);

    repositories.forEach(repository => {
      expect(getByText(repository.name)).toBeInTheDocument();
      expect(getByText(repository.description)).toBeInTheDocument();
    });
  });
});
