import App, {Container} from 'next/app';

class MyApp extends App{
  render(){
    const {Component} = this.props;
    return(
      <Container>
        <p>Hey We are a page</p>
        <Component />
      </Container>
    )
  }
}

export default MyApp;