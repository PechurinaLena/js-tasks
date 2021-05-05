import React from "react";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import styles from "./styles.module.css";

/**
 * Notes component
 *
 * @param {string} title
 * @param {string} description
 * @param {string} date
 * @constructor
 *
 */

const Notes = ({ title, description, date }) => {
  return (
    <ListItem button>
      <div className={styles.row}>
        <div className={[styles.item, styles.title].join(" ")}>{title}</div>
        <div className={[styles.item, styles.description].join(" ")}>
          {description}
        </div>
        <div className={[styles.item, styles.date].join(" ")}>{date}</div>
      </div>
    </ListItem>
  );
};

Notes.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  date: PropTypes.string,
};

export default Notes;
