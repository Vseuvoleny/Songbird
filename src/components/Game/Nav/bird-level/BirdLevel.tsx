import React from "react";
import "./styles.scss";

type BirdsLevel = {
  title: any;
  addActive: string;
};
const BirdLevel = ({ title, addActive }: BirdsLevel) => (
  <li className={`item ${addActive}`}>{title}</li>
);
export default BirdLevel;
