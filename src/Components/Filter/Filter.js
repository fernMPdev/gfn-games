import React from "react";

import classes from "./Filter.module.css";

const filter = (props) => (
  <div className={classes.Filter}>
    <input type="text" placeholder={"Search your game..."}  onKeyUp = {props.search} />
  </div>
);

export default filter;
