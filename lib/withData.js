import withApollo from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import {endpoint} from '../config';

function createClient(){
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: operation => {
      operation.setContext({
        fetOptions: {
          credentials: 'include'
        },
      });
    }
  });
}

export default withApollo(createClient);