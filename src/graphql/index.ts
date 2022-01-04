import { gql } from '@apollo/client';

export const GET_PROFILE = gql`
  query getProfile($login: String!) {
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
  query getRepositories($login: String!) {
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
