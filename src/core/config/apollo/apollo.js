import { ApolloClient } from '@apollo/client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { getItem } from '../../../utils/helpers/LocalStorage';
import { JWT_TOKEN_KEY } from '../../constants';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_PROD_SERVER,
});

const authLink = setContext((_, { headers }) => {
  const token = getItem(JWT_TOKEN_KEY);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
