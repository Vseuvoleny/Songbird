import React from "react";
import classes from "./Nav.module.css";
import Item from "./NavItems/NavItems";
import birds from "../../../Data/birdsData";

function renderNav(props) {
  return (
    <div className={classes.container}>
      {birds.map((_bird, idx) => {
        return (
          <Item
            title={(() => {
              switch (idx) {
                case 0:
                  return "Разминка";
                case 1:
                  return "Воробьиные птицы";
                case 2:
                  return "Певчие птицы";
                case 3:
                  return "Лесные птицы";
                case 4:
                  return "Хищные птицы";
                case 5:
                  return "Морские птицы";
                default:
                  return "В разработке";
              }
            }).call(idx)}
            key={idx}
            state={props.state === idx ? props.state + 1 : null}
            className={classes.active}
          />
        );
      })}
    </div>
  );
}

const Nav = props => {
  return renderNav(props);
};

export default Nav;
