import React from "react";
import Items from "../components/Items";

// Index Page

class Home extends React.Component {
  render() {
    return (
      <div>
        <Items page={parseFloat(this.props.query.page) || 1} />
      </div>
    );
  }
}

export default Home;
