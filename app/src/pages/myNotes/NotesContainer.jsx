import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListItem } from "@material-ui/core";
import DisplayNote from "./DisplayNote";
import data from "./data";
import styles from "./styles.module.css";

/**
 * NotesContainer component
 * @constructor
 */

const NotesContainer = () => {
  const [active, setActive] = useState(false);

  const Notes = ({ name }) => (
    <ListItem button selected={active === name}>
      <div className={styles.row} onClick={() => setActive(name)}>
        <div className={[styles.item, styles.title].join(" ")}>
          {name.title}
        </div>
        <div className={[styles.item, styles.description].join(" ")}>
          {`${name.description.substring(0, 20)}...`}
        </div>
        <div className={[styles.item, styles.date].join(" ")}>{name.date}</div>
      </div>
    </ListItem>
  );

  return (
    <>
      {data.map((item, key) => (
        <Notes name={item} key={key} />
      ))}
      <DisplayNote selected={active} valueOf={1} />
    </>
  );
};

NotesContainer.propTypes = {
  name: PropTypes.string,
};

export default NotesContainer;
