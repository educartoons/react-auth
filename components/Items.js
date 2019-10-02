import React, { Component } from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id 
      title 
      price 
      description 
      image 
      largeImage
    }
  }
`;

class Items extends Component {
  render() {
    return (
      <div>
        <p>Items!</p>
        <Query query={ALL_ITEMS_QUERY}>
          {
            ({data, error, loading}) => {
              if(loading) return <p>Loading...</p>
              if(error) return <p>Something went wrong</p>
              console.log(data);
              return <p>Hey I'am a child of query</p>;
            }
          }
        </Query>
      </div>
    )
  }
}

export default Items;
