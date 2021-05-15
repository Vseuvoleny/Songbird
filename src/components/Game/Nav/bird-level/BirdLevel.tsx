import React from "react";
import "./styles.scss";

const BirdLevel = ({ title, addActive }) => (
  <li className={`item ${addActive}`}>{title}</li>
);
export default BirdLevel;
