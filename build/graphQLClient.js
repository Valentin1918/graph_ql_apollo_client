import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import { Disclosure, configureStore, reducers, middlewares } from '../src';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  connectToDevTools: true,
});

// window.__APOLLO_CLIENT__.cache.data.data

const store = configureStore(reducers, middlewares);

const app = document.getElementById('app');
app.className = 'main-content flex-grid flex-grid--height-auto';



render(
  <ApolloProvider client={client} store={store}>
    <Provider store={store}>
      <Disclosure />
    </Provider>
  </ApolloProvider>,
  app
);
