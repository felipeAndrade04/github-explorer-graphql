import { render } from '@testing-library/react';

import HomeNoContent from '../../../components/HomeNoContent';

describe('HomeNoContent', () => {
  it('should render correctly', () => {
    const { getByText } = render(<HomeNoContent />);

    const textHomeNoContent = getByText(/Busque usuários/i);

    expect(textHomeNoContent).toBeInTheDocument();
  });
});
