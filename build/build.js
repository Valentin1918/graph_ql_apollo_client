import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

import { Disclosure, configureStore, reducers, middlewares } from '../src';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/__PROJECT_ID__'}),
});


const store = configureStore(reducers, middlewares);

const app = document.getElementById('app');
app.className = 'main-content flex-grid flex-grid--height-auto';



ReactDOM.render(
  <Provider store={store}>
    <Disclosure />
  </Provider>,
  app
);
