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

export const GET_REPOSITORIES = gql`
  query GET_REPOSITORIES($login: String!) {
    repositoryOwner(login: $login) {
      repositories(first: 100) {
        nodes {
          name
          description
          url
          stargazerCount
          forkCount
          primaryLanguage {
            name
            color
          }
        }
      }
    }
  }
`;
