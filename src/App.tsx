import React from 'react';
import { ApolloProvider } from '@apollo/client';

import client from './config/client-graphql';

import Home from './page/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
