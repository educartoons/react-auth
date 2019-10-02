import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Title from '../components/styles/Title';
import ItemStyles from '../components/styles/ItemStyles';
import PriceTag from '../components/styles/PriceTag';
import Link from 'next/link';

class Item extends Component {
  static propTypes ={
    item: PropTypes.object.isRequired
  }
  render() {
    const {item} = this.props;
    return (
      <ItemStyles>
        <Title>
          <Link href={{
            pathname: '/item',
            query: {
              id: item.id
            }
          }}>
            <a>{item.title}</a>
          </Link>
        </Title>
        <PriceTag>{item.price}</PriceTag>
      </ItemStyles>
    )
  }
}

export default Item;
