import React, { Fragment, Component } from "react";
import axios from "axios";

import Logo from "../Components/Logo/Logo";
import Filter from "../Components/Filter/Filter";
import Games from "../Components/Games/Games";
import Spinner from "../Components/UI/Spinner";

class GfnGamesBuilder extends Component {
  state = {
    filter: "",
    games: [],
    loaded: false,
    error: false,
  };

  componentDidMount() {
    this.setGamesHandler();
  }

  setGamesHandler = async () => {
    try {
      const url =
        "https://static.nvidiagrid.net/supported-public-game-list/gfnpc.json?JSON";
      const games = await axios.get(url);
      this.setState({
        games: games.data,
        loaded: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  filterGameHandler = (e) => {
    const keyPressed = e.target.value.toLowerCase();

    this.setState({
      filter: keyPressed,
    });
  };

  render() {
    
    let games = <Games games={this.state.games} filter={this.state.filter} />;

    if (!this.state.loaded) {
      games = <Spinner />;
    }

    return (
      <Fragment>
        <Logo />
        <Filter search={this.filterGameHandler} />
        {games}
      </Fragment>
    );
  }
}

export default GfnGamesBuilder;
