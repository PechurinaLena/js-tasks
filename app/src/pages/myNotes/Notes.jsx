import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import styles from "./styles.module.css";

/**
 * Notes component
 *
 * @param {number} id
 * @param {string} title
 * @param {string} description
 * @param {string} date
 * @param {function} onChange
 * @constructor
 *
 */

const Notes = ({ title, description, date, id, onChange }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = (item) => {
    item.preventDefault(isActive);
    setIsActive(!isActive);
    onChange(item);
    item = id;
    console.log("КЛИКНУЛИ по", item);
  };

  return (
    <ListItem button onClick={handleClick} selected={isActive}>
      <div className={styles.row} id={id}>
        <div className={[styles.item, styles.title].join(" ")}>{title}</div>
        <div className={[styles.item, styles.description].join(" ")}>
          {`${description.substring(0, 20)}...`}
        </div>
        <div className={[styles.item, styles.date].join(" ")}>{date}</div>
      </div>
    </ListItem>
  );
};

Notes.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
  onChange: PropTypes.any,
};

export default Notes;
