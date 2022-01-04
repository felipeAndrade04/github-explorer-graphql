import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from '../../../components/Header';

function setup() {
  const handleSearchUser = jest.fn();

  const renderResult = render(<Header handleSearchUser={handleSearchUser} />);

  return {
    handleSearchUser,
    input: renderResult.getByPlaceholderText(/Pesquise o usuário/i),
    buttonSubmit: renderResult.getByRole('button'),
    ...renderResult,
  };
}

describe('Header', () => {
  it('should render correctly', () => {
    const { container, input, buttonSubmit } = setup();

    expect(container).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(buttonSubmit).toBeInTheDocument();
  });

  it('should call handleSearchUser', () => {
    const userName = 'userTest';

    const { input, buttonSubmit, handleSearchUser } = setup();

    userEvent.type(input, userName);
    fireEvent.click(buttonSubmit);

    expect(handleSearchUser).toHaveBeenCalledWith(userName);
  });
});
