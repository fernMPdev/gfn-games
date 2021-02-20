import React, { Component } from "react";

import Layout from "./Components/Layout/Layout";
import GfnGamesBuilder from "./Container/GfnGamesBuilder";

class App extends Component {
  render() {
    return (
      <Layout>
        <GfnGamesBuilder />
      </Layout>
    );
  }
}

export default App;
