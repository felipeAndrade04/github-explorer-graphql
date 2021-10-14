import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: process.env.REACT_APP_GITHUB_API_URL,
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
