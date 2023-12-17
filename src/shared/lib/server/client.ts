import { ApolloClient, createHttpLink, InMemoryCache, split } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import { WebSocketLink } from '@apollo/client/link/ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';
import Cookies from 'js-cookie';

const token = Cookies.get('accesstoken');

const httpLink = createHttpLink({
  uri: 'https://competitivebiddingapi.onrender.com/graphql',
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'wss://competitivebiddingapi.onrender.com/graphql',
  connectionParams: () => ({
    Authorization: `Bearer ${token}`, // Use token for authorization
  }),
}));


const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('accesstoken');
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
  cache: new InMemoryCache(),

});

export default client;
