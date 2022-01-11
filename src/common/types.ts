export interface Repository {
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

export interface User {
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
}
