import { ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import Cookies from 'js-cookie';

const token = Cookies.get('accesstoken');

const httpLink = createHttpLink({
  uri: 'http://ec2-52-59-235-173.eu-central-1.compute.amazonaws.com:3000/graphql',
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://ec2-52-59-235-173.eu-central-1.compute.amazonaws.com:3000/graphql',
  options: {
    reconnect: true,
  },
  connectionParams: {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  }
}));

const authLink = setContext((_, { headers }) => {

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpAuthLink = authLink.concat(httpLink);

const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
    },
    wsLink,
    httpAuthLink
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    addTypename: false,
  }),
});

export default client;