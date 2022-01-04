interface Repository {
  name?: string;
  description?: string;
  url?: string;
  stargazerCount?: number;
  forkCount?: number;
  primaryLanguage?: {
    name: string;
    color: string;
  };
}

export function repositoryDataBuilder(props?: Repository) {
  return {
    name: 'repository1',
    description: 'repoDescription1',
    url: 'http://github.com/repository',
    stargazerCount: 0,
    forkCount: 0,
    primaryLanguage: {
      name: 'javascript',
      color: '#F1E05A',
    },
    ...props,
  };
}

export const repository1Mock = repositoryDataBuilder();

export const repository2Mock = repositoryDataBuilder({
  name: 'repository2',
  description: 'repoDescription2',
  primaryLanguage: { name: 'typescript', color: '#2b7489' },
});
