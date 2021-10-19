import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { ToastContainer } from 'react-toastify';

import client from './config/client-graphql';

import Home from './page/Home';
import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
      <ToastContainer />
      <GlobalStyle />
    </ApolloProvider>
  );
}

export default App;
