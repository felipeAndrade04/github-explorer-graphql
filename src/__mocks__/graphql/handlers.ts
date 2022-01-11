import { graphql } from 'msw';

import { repository1Mock, repository2Mock } from '../repositoryDataBuilder';
import { profileDataBuilder } from '../profileDataBuilder';

interface GetProfileQuery {
  user: {
    avatarUrl: string;
    bio: string;
    name: string;
    login: string;
    followers: {
      totalCount: number;
    };
    following: {
      totalCount: number;
    };
    starredRepositories: {
      totalCount: number;
    };
  };
}

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
