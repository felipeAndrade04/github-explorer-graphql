import { render } from '@testing-library/react';

import Loading from '../../../components/Loading';

describe('Loading', () => {
  it('should render Loading when show property is true', () => {
    const { getByTestId } = render(<Loading show />);

    const overlay = getByTestId('overlay');

    expect(overlay).toHaveStyle('display: flex');
  });

  it('should not render Loading when show property is true', () => {
    const { getByTestId } = render(<Loading show={false} />);

    const overlay = getByTestId('overlay');

    expect(overlay).toHaveStyle('display: none');
  });
});
