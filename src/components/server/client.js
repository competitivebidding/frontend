import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://ra-backend-w.fly.dev/graphql'
  // uri: 'https://ra-backend-x.fly.dev/graphql' // OLD SERVICE URL
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('accesstoken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


export default client;