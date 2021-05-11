import React, { useState } from "react";
import PropTypes from "prop-types";
import { IconButton, ListItem } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import styles from "./styles.module.css";

/**
 * Notes component
 *
 * @param { Object } name
 * @param { boolean } active
 * @param { function } setActive
 * @param { Array } notes
 * @param { function } setNewNotes
 *
 * @constructor
 */
const Notes = ({ name, active, setActive, notes, setNewNotes }) => {
  const [edit, setEdit] = useState(null);
  const [isEditText, setIsEditText] = useState(" ");

  //Press edit icon for change note
  function editNote(name) {
    const updatedNotes = [...notes].map((item) => {
      if (item.id === name.id) {
        name.description = isEditText;
      }
      return item;
    });
    setNewNotes(updatedNotes);
    setEdit(null);
    setIsEditText("");
  }

  return (
    <ListItem button selected={active === name}>
      <div className={styles.row} onClick={() => setActive(name)}>
        <div className={[styles.item, styles.title].join(" ")}>
          {name.title}
        </div>
        {edit === name ? (
          <div className={[styles.item, styles.description].join(" ")}>
            <input
              className={styles.input}
              type="text"
              value={isEditText}
              onChange={(e) => setIsEditText(e.target.value)}
            />
          </div>
        ) : (
          <div className={[styles.item, styles.description].join(" ")}>
            {`${name.description.substring(0, 20)}...`}
          </div>
        )}
        <div className={[styles.item, styles.date].join(" ")}>{name.date}</div>
      </div>
      {edit === name ? (
        <IconButton
          size="small"
          variant="contained"
          color="primary"
          className={styles.button}
          onClick={() => editNote(name)}
        >
          <SaveIcon />
        </IconButton>
      ) : (
        <IconButton
          size="small"
          variant="contained"
          color="secondary"
          className={styles.button}
          onClick={() => setEdit(name)}
          onFocus={() => isEditText}
        >
          <EditIcon />
        </IconButton>
      )}
    </ListItem>
  );
};

Notes.propTypes = {
  name: PropTypes.any,
  notes: PropTypes.any,
  setNewNotes: PropTypes.func,
  setActive: PropTypes.func,
  active: PropTypes.bool,
};

export default Notes;
