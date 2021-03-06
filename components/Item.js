import React, { Component } from "react";
import PropTypes from "prop-types";
import Title from "../components/styles/Title";
import ItemStyles from "../components/styles/ItemStyles";
import PriceTag from "../components/styles/PriceTag";
import Link from "next/link";
import formatMoney from "../lib/formatMoney";
import DeleteItem from "./DeleteItem";

class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired
  };
  render() {
    const { item } = this.props;
    return (
      <ItemStyles>
        {item.image && <img src={item.image} alt={item.title} />}
        <Title>
          <Link
            href={{
              pathname: "/item",
              query: {
                id: item.id
              }
            }}
          >
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{formatMoney(item.price)}</PriceTag>
        <p>{item.description}</p>
        <div className="buttonList">
          <Link
            href={{
              pathname: "update",
              query: {
                id: item.id
              }
            }}
          >
            <a>Edit ✏️</a>
          </Link>
          <button>Add To Cart</button>
          <DeleteItem id={item.id}>Delete item</DeleteItem>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
