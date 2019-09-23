import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from './Meta';
import styled from 'styled-components'

const MyButton = styled.button`
  background: red;
  font-size: ${props=>props.huge ? '200px' : '50px'};
`;

export default class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <MyButton huge>Click me 💩</MyButton>
        {this.props.children}
      </div>
    )
  }
}

