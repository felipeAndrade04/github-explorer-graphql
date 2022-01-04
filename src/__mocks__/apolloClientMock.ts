import { GET_PROFILE, GET_REPOSITORIES } from '../graphql';

import { profileDataBuilder } from './profileDataBuilder';
import { repository1Mock, repository2Mock } from './repositoryDataBuilder';

export const getProfileMock = {
  request: {
    query: GET_PROFILE,
    variables: {
      login: 'johnDoe',
    },
  },
  result: {
    data: {
      user: profileDataBuilder(),
    },
  },
};

export const getRepositoriesMock = {
  request: {
    query: GET_REPOSITORIES,
    variables: {
      login: 'johnDoe',
    },
  },
  result: {
    data: {
      repositoryOwner: {
        repositories: {
          nodes: [repository1Mock, repository2Mock],
        },
      },
    },
  },
};
