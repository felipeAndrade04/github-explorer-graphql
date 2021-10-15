import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query GET_PROFILE($login: String!) {
    user(login: $login) {
      name
      bio
      avatarUrl
      login
      followers {
        totalCount
      }
      following {
        totalCount
      }
      starredRepositories {
        totalCount
      }
    }
  }
`;
