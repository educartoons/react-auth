import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { ALL_ITEMS_QUERY } from "./Items";

const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {
  handleDeleteItem = (e, deleteItemMutation) => {
    e.preventDefault();
    if (confirm("Are you sure?")) {
      deleteItemMutation().catch(err => {
        alert(err.message);
      });
    }
  };
  update = (cache, payload) => {
    const data = cache.readQuery({ query: ALL_ITEMS_QUERY });
    const items = data.items.filter(
      item => item.id !== payload.data.deleteItem.id
    );
    cache.writeQuery({
      query: ALL_ITEMS_QUERY,
      data: {
        items: items
      }
    });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_ITEM_MUTATION}
        variables={{
          id: this.props.id
        }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <button onClick={e => this.handleDeleteItem(e, deleteItem)}>
            {this.props.children}
          </button>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
