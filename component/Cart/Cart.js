import React from "react";

import classes from "./cart.module.css";

export default function Cart({ children }) {
  return <div className={classes.container}>{children}</div>;
}
