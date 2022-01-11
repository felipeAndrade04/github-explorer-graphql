import { render } from '@testing-library/react';

import RepositoryCard from '../../../components/RepositoryCard';
import {
  repository2Mock,
  repositoryDataBuilder,
} from '../../../__mocks__/repositoryDataBuilder';

import { Repository } from '../../../common/types';

function setup(props?: Repository) {
  const defaultRepository = repositoryDataBuilder();
  const repository = props || defaultRepository;

  const renderResult = render(<RepositoryCard repositoryData={repository} />);

  return {
    ...renderResult,
  };
}

describe('RepositoryCard', () => {
  it('should render correctly', () => {
    const { container, getByText } = setup();

    const name = getByText(/repository1/i);
    const description = getByText(/repoDescription/i);

    expect(container).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('should render correct language color', () => {
    const { getByTestId } = setup(repository2Mock);

    const repositoryLanguageColor = getByTestId('repositoryLanguageColor');

    expect(repositoryLanguageColor).toHaveStyle({ background: '#2b7489' });
  });
});
