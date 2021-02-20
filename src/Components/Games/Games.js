import React, { Fragment } from "react";

import classes from "./Games.module.css";
import Game from "./Game/Game";

const games = (props) => {
  let game = props.games
    .filter((p) => {
      const keyPressed = props.filter;
      const title = p.title.toLowerCase();
      return title.startsWith(keyPressed);
    })
    .map((game) => (
      <Game title={game.title} store={game.store} key={game.id} />
    ));

  return (
    <Fragment>
      {game.length === 0 ? (
        <h3
          style={{
            width: "100%",
            textAlign: "center",
            color: "#fff",
            fontSize: "32px",
            textTransform: "uppercase",
          }}
        >
          Not found :({" "}
        </h3>
      ) : (
        <main className={classes.ContainerGames}> {game}</main>
      )}
    </Fragment>
  );
};

export default games;
