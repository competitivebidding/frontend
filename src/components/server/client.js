import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie';

const httpLink = createHttpLink({
  uri: 'http://ec2-52-59-235-173.eu-central-1.compute.amazonaws.com:3000/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('accesstoken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    addTypename: false, // remove __typename in schema
  }),
})

export default client
