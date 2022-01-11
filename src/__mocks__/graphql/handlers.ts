import { graphql } from 'msw';

import { repository1Mock, repository2Mock } from '../repositoryDataBuilder';
import { profileDataBuilder } from '../profileDataBuilder';

import { Repository, User } from '../../common/types';

interface GetProfileQuery {
  user: User;
}

interface GetRepositoriesQuery {
  repositoryOwner: {
    repositories: {
      nodes: Repository[];
    };
  };
}

interface QueryVariables {
  login: string;
}

export const handlers = [
  graphql.query<GetProfileQuery, QueryVariables>(
    'getProfile',
    (req, res, ctx) => {
      const { login } = req.variables;

      if (login !== profileDataBuilder.login) {
        return res(
          ctx.errors([
            {
              message: 'User not found',
            },
          ]),
        );
      }

      return res(
        ctx.data({
          user: profileDataBuilder,
        }),
      );
    },
  ),
  graphql.query<GetRepositoriesQuery, QueryVariables>(
    'getRepositories',
    (req, res, ctx) => {
      const { login } = req.variables;

      if (login !== profileDataBuilder.login) {
        return res(
          ctx.errors([
            {
              message: 'User not found',
            },
          ]),
        );
      }

      return res(
        ctx.data({
          repositoryOwner: {
            repositories: {
              nodes: [repository1Mock, repository2Mock],
            },
          },
        }),
      );
    },
  ),
];
