import React, { Component } from 'react'
import Header from '../components/Header'
import Meta from './Meta';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
};

const StyledPage = styled.div`
  background: white;
  color: ${props=>props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props=>props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  html{
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after{
    box-sizing: border-box;
  }
  body{
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
    line-height: 2;
  }
  a{
    color: ${theme.black};
    text-decoration: none;
  }
`

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Inner>{this.props.children}</Inner>
          <GlobalStyle/>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

