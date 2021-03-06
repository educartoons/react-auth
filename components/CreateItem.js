import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";
import Router from "next/router";

const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreateItem extends Component {
  state = {
    title: "",
    description: "",
    image: "",
    largeImage: "",
    price: ""
  };
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({
      [name]: val
    });
  };
  uploadFile = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "graphql-course");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dowafljsv/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
    console.log(file.secure_url, file.eager[0].secure_url);
  };
  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
        {(createItem, { loading, error }) => (
          <Form
            onSubmit={async e => {
              e.preventDefault();
              const res = await createItem();
              console.log(res);
              Router.push({
                pathname: "/item",
                query: {
                  id: res.data.createItem.id
                }
              });
            }}
          >
            <Error error={error} />
            <fieldset disabled={loading} aria-busy={loading}>
              <label htmlFor="file">
                Upload
                <input
                  id="file"
                  name="file"
                  type="file"
                  placeholder="Upload image"
                  // required
                  onChange={this.uploadFile}
                />
                {this.state.image && (
                  <img width="320" src={this.state.image} alt="Image Preview" />
                )}
              </label>

              <label htmlFor="title">
                Title
                <input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="Title"
                  required
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="price">
                Price
                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Price"
                  required
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </label>

              <label htmlFor="description">
                Description
                <textarea
                  id="description"
                  name="description"
                  placeholder="Enter a description"
                  required
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    );
  }
}

export default CreateItem;

export { CREATE_ITEM_MUTATION };
