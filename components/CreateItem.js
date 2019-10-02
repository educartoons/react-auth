import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import formatMoney from '../lib/formatMoney';
import Error from './ErrorMessage';

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!,
    $description: String!,
    $price: Int!,
    $image: String,
    $largeimage: String
  ) {
    createItem (
      title: $title,
      description: $description,
      price: $price,
      image: $image,
      largeImage: $largeimage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: '',
    description: '',
    image: '',
    largeImage: '',
    price: ''
  }
  handleChange = (e) => {
    const {name, type, value} = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({
      [name]: val
    })
  }
  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {
          (createItem, {loading, error})=> (
            <Form onSubmit={async (e)=>{
              e.preventDefault();
              const res = await createItem();
              console.log(res);
            }}>
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="title">
                  Title
                  <input id="title" name="title" type="text" placeholder="Title" required value={this.state.title} onChange={this.handleChange}/>
                </label>
                
                <label htmlFor="price">
                  Price
                  <input id="price" name="price" type="number" placeholder="Price" required value={this.state.price} onChange={this.handleChange}/>
                </label>
                
                <label htmlFor="description">
                  Description 
                  <textarea id="description" name="description" placeholder="Enter a description" required value={this.state.description} onChange={this.handleChange}/>
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </Form>
          )
        }
      </Mutation>
      
    )
  }
}

export default  CreateItem;
