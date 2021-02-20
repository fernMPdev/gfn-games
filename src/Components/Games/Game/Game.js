import React from "react";

import classes from "./Game.module.css";
import StoreLogo from "./StoreLogo/StoreLogo";

const game = (props) => (
    
  <article className={classes.Game}>
    <StoreLogo store = {props.store} />
    <div className={classes.Title}>{props.title}</div>
  </article>
);

export default game;
