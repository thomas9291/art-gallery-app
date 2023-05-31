import React from "react";

import classes from "./Footer.module.css";

export default function Footer({ children }) {
  return <div className={classes.footerContainer}>{children}</div>;
}
