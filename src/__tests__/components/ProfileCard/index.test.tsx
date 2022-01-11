import { render } from '@testing-library/react';

import { profileDataBuilder } from '../../../__mocks__/profileDataBuilder';

import ProfileCard from '../../../components/ProfileCard';

describe('ProfileCard', () => {
  it('should render correctly', () => {
    const profileData = profileDataBuilder;

    const { container, getByAltText, getByText } = render(
      <ProfileCard profileData={profileData} />,
    );

    const image = getByAltText(/Foto do perfil/i);
    const userName = getByText(/John Doe/i);
    const login = getByText(/johnDoe/i);

    expect(container).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });
});
