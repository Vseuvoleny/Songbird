import React from "react";
import { BirdsLevel } from "./types";
import "./styles.scss";

const BirdLevel = ({ title, addActive }: BirdsLevel) => (
  <li className={`item ${addActive}`}>{title}</li>
);
export default BirdLevel;
