import React from "react";
import classes from "./PrimaryColor.module.css";
const PrimaryColor = (props) => {
  return <span className={classes.primaryColor}>{props.children}</span>;
};

export default PrimaryColor;
